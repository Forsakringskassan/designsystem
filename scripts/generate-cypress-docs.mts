/* eslint-disable no-console -- expected to log */

import fs from "node:fs/promises";
import path from "node:path";
import {
    type ApiClass,
    type ApiItem,
    type ApiMethod,
    type ApiProperty,
    ApiConstructor,
    ApiItemKind,
    ApiModel,
    ReleaseTag,
} from "@microsoft/api-extractor-model";
import { type DocNode, DocExcerpt } from "@microsoft/tsdoc";
import dedent from "dedent";
import prettier from "prettier";

interface WalkFnTable {
    [ApiItemKind.Class]: (item: ApiClass) => void | Promise<void>;
}

async function writeFile(filepath: string, content: string): Promise<void> {
    const options = await prettier.resolveConfig(filepath);
    const formatted = await prettier.format(content, { ...options, filepath });
    await fs.writeFile(filepath, formatted, "utf-8");
}

function kebabize(value: string): string {
    return value.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (match, offset) => {
        const dash = offset > 0 ? "-" : "";
        return `${dash}${match.toLowerCase()}`;
    });
}

async function walk(root: ApiItem, fns: Partial<WalkFnTable>): Promise<void> {
    const t = fns as Partial<
        Record<ApiItemKind, (item: ApiItem) => void | Promise<void>>
    >;
    for (const member of root.members) {
        const fn = t[member.kind];
        if (fn) {
            await fn(member);
        }
        walk(member, fns);
    }
}

function renderDocNode(
    docNode: DocNode | undefined,
    depth: number = 0,
): string {
    let result: string = "";
    if (docNode) {
        if (docNode instanceof DocExcerpt) {
            result += docNode.content.toString();
        }
        for (const childNode of docNode.getChildNodes()) {
            result += renderDocNode(childNode, depth + 1);
        }
    }
    if (depth === 0) {
        /* hack to reconstruct a markdown list from the doc comment */
        return result.replace(/^ *-.*$/gm, (line) => {
            return line
                .split("-")
                .map((it) => it.trim())
                .filter(Boolean)
                .map((it) => `- ${it}`)
                .join("\n");
        });
    } else {
        return result;
    }
}

function isConstructor(item: ApiItem): item is ApiConstructor {
    return item.kind === ApiItemKind.Constructor;
}

function isMethod(item: ApiItem): item is ApiMethod {
    return item.kind === ApiItemKind.Method;
}

function isProperty(item: ApiItem): item is ApiProperty {
    return item.kind === ApiItemKind.Property;
}

function renderClass(item: ApiClass): string {
    const ctor = item.members.find(isConstructor);
    const syntax = ctor
        ? ctor
              .getExcerptWithModifiers()
              .replace("constructor", `new ${item.name}`)
              .replace(/:[^,)]+/g, "")
        : `new ${item.name}();`;
    const parameters = ctor
        ? ctor.parameters.map((param) => {
              const name = param.name;
              const excerpt = param.parameterTypeExcerpt.text;
              const optional = param.isOptional ? "{@optional}" : "";
              const summary = param.tsdocParamBlock
                  ? renderDocNode(param.tsdocParamBlock.content)
                  : "&ndash;";
              return [
                  `\`${name}: ${excerpt}\` ${optional}`.trim(),
                  `: ${summary}`.trim(),
              ].join("\n");
          })
        : [];
    const related =
        item.tsdocComment?.seeBlocks.map(
            (it) => `- ${renderDocNode(it.content).trim()}`,
        ) ?? [];
    return dedent`
        ---
        name: ${item.name}
        title: "${item.name}: ${item.name}() constructor"
        short-title: ${item.name}()
        sortorder: 1
        layout: api.class
        ---

        ${renderDocNode(item.tsdocComment.summarySection)}

        ## Syntax

        \`\`\`ts nocompile nolint
        ${syntax}
        \`\`\`

        ${parameters.length > 0 ? "### Parametrar\n" : ""}
        ${parameters.join("\n")}

        ## Exempel

        \`\`\`import static
        ${item.name}.vue
        \`\`\`

        \`\`\`import
        ${item.name}.cy.ts
        \`\`\`

        ${related.length > 0 ? "## Relaterat\n" : ""}
        ${related.join("\n")}
    `;
}

function renderMethod(parent: ApiClass, item: ApiMethod): string {
    const syntax = item
        .getExcerptWithModifiers()
        .replace(/:[^,)]+/g, "")
        .replace(/:[^)]+;$/, "");
    const parameters = item.parameters.map((param) => {
        const name = param.name;
        const excerpt = param.parameterTypeExcerpt.text;
        const optional = param.isOptional ? "{@optional}" : "";
        const summary = param.tsdocParamBlock
            ? renderDocNode(param.tsdocParamBlock.content).trim()
            : "&ndash;";
        return `\`${name}: ${excerpt}\` ${optional}\n: ${summary}`;
    });
    const returnValue = item.returnTypeExcerpt.text;
    const related =
        item.tsdocComment?.seeBlocks.map(
            (it) => `- ${renderDocNode(it.content).trim()}`,
        ) ?? [];
    return dedent`
        ---
        name: ${parent.name}.${item.name}
        title: "${parent.name}: ${item.name}() method"
        short-title: ${item.name}()
        layout: api.method
        ---

        ${renderDocNode(item.tsdocComment?.summarySection)}

        ## Syntax

        \`\`\`ts nocompile nolint
        ${syntax};
        \`\`\`

        ${parameters.length > 0 ? "### Parametrar\n" : ""}
        ${parameters.join("\n")}

        ### Returvärde

        \`${returnValue}\`

        ${renderDocNode(item.tsdocComment?.returnsBlock?.content)}

        ## Exempel

        \`\`\`import static
        ${parent.name}-${item.name}.vue
        \`\`\`

        \`\`\`import
        ${parent.name}-${item.name}.cy.ts
        \`\`\`

        ${related.length > 0 ? "## Relaterat\n" : ""}
        ${related.join("\n")}
    `;
}

function renderProperty(parent: ApiClass, item: ApiProperty): string {
    const syntax = item.getExcerptWithModifiers().replace(/:[^)]+;$/, "");
    return dedent`
        ---
        name: ${parent.name}.${item.name}
        title: "${parent.name}: ${item.name} property"
        short-title: ${item.name}
        layout: api
        ---

        ${renderDocNode(item.tsdocComment?.summarySection)}

        ## Syntax

        \`\`\`ts nocompile nolint
        ${syntax}
        \`\`\`

        ## Exempel

        \`\`\`import static
        ${parent.name}-${item.name}.vue
        \`\`\`

        \`\`\`import
        ${parent.name}-${item.name}.cy.ts
        \`\`\`

        ## Relaterat

    `;
}

function renderCy(
    pageObject: string,
    filePath: string,
    params: string[],
): string {
    return dedent`
        import { ${pageObject} } from "@fkui/vue/cypress";
        import Example from "./${filePath}";

        it("should [...]", () => {
            cy.mount(Example);

            /* --- cut above --- */
            /* eslint-disable-next-line @typescript-eslint/no-unused-vars -- placeholder code */
            const obj = new ${pageObject}(${params.join(", ")});
            /* --- cut below --- */

            throw new Error("Not implemented");
        });
    `;
}

function renderVue(component: string): string {
    const tagName = kebabize(component);
    return dedent`
        <script setup lang="ts">
        import { ${component} } from "@fkui/vue";
        </script>

        <template>
            <!-- cut above -->
            <${tagName}>
                lorem ipsum
            </${tagName}>
            <!-- cut below -->
        </template>
    `;
}

const rootDir = path.join(import.meta.dirname, "..");
const dst = path.join(rootDir, "docs/functions/cypress/pageobjects");
const filePath = path.join(rootDir, "packages/vue/temp/cypress.api.json");

const apiModel = new ApiModel();
const apiPackage = apiModel.loadPackage(filePath);

const excluded = ["Input"];

await walk(apiPackage, {
    async [ApiItemKind.Class](item) {
        if (!item.isExported || item.releaseTag !== ReleaseTag.Public) {
            return;
        }

        if (excluded.includes(item.name)) {
            return;
        }

        console.group("Generating documentation for", item.name);

        const component = item.name.replace(/Page[Oo]bject$/, "");
        const baseDir = path.join(dst, item.name);
        const filePathMd = path.join(baseDir, `${item.name}.md`);
        const filePathCy = path.join(baseDir, `${item.name}.cy.ts`);
        const filePathVue = path.join(baseDir, `${item.name}.vue`);
        const ctor = item.members.find(isConstructor);
        const ctorArgs = ctor
            ? ctor.parameters.map((it) => {
                  if (it.name === "selector") {
                      return JSON.stringify("[data-test=awesome-component]");
                  }
                  return JSON.stringify("");
              })
            : [];

        console.log(ctor?.getExcerptWithModifiers());
        await fs.mkdir(baseDir, { recursive: true });
        await writeFile(filePathMd, renderClass(item));
        await writeFile(
            filePathCy,
            renderCy(item.name, `${item.name}.vue`, ctorArgs),
        );
        await writeFile(filePathVue, renderVue(component));

        for (const member of item.members) {
            if (isMethod(member) && member.releaseTag === ReleaseTag.Public) {
                const fileName = `${item.name}-${member.name}.md`;
                const filePath = path.join(baseDir, fileName);
                const filePathCy = path.join(
                    baseDir,
                    `${item.name}-${member.name}.cy.ts`,
                );
                const filePathVue = path.join(
                    baseDir,
                    `${item.name}-${member.name}.vue`,
                );
                console.log(member.getExcerptWithModifiers());
                await writeFile(filePath, renderMethod(item, member));
                await writeFile(
                    filePathCy,
                    renderCy(
                        item.name,
                        `${item.name}-${member.name}.vue`,
                        ctorArgs,
                    ),
                );
                await writeFile(filePathVue, renderVue(component));
            }
            if (isProperty(member) && member.releaseTag === ReleaseTag.Public) {
                const fileName = `${item.name}-${member.name}.md`;
                const filePath = path.join(baseDir, fileName);
                const filePathCy = path.join(
                    baseDir,
                    `${item.name}-${member.name}.cy.ts`,
                );
                const filePathVue = path.join(
                    baseDir,
                    `${item.name}-${member.name}.vue`,
                );
                console.log(member.getExcerptWithModifiers());
                await writeFile(filePath, renderProperty(item, member));
                await writeFile(
                    filePathCy,
                    renderCy(
                        item.name,
                        `${item.name}-${member.name}.vue`,
                        ctorArgs,
                    ),
                );
                await writeFile(filePathVue, renderVue(component));
            }
        }

        console.groupEnd();
    },
});
