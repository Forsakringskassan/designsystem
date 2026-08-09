import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import {
    type Processor,
    Generator,
    apiExtractorProcessor,
    cookieProcessor,
    extractExamplesProcessor,
    htmlRedirectProcessor,
    manifestProcessor,
    matomoProcessor,
    motdProcessor,
    playgroundProcessor,
    searchProcessor,
    selectableVersionProcessor,
    sourceUrlProcessor,
    topnavProcessor,
    versionProcessor,
} from "@forsakringskassan/docs-generator";
import isCI from "is-ci";
import config from "./docs.config.js";
import pkg from "./package.json" with { type: "json" };
import { fontDir } from "./packages/font-default/metadata.mjs";

const DEFAULT_MATOMO_CONFIG = {
    trackerUrl: "https://webstats.forsakringskassan.se/matomo/",
    hostname: [
        "designsystem.forsakringskassan.se",
        "designsystem.fk.se",
        "ds.fk.se",
        "forsakringskassan.github.io",
    ],
};

const {
    MATOMO_SITE_ID = "19",
    MATOMO_CONFIG = "",
    DOCS_SOURCE_URL_FORMAT = "https://github.com/Forsakringskassan/designsystem/blob/{{ hash }}/{{ path }}",
} = process.env;
const matomoConfig = MATOMO_CONFIG
    ? JSON.parse(MATOMO_CONFIG)
    : DEFAULT_MATOMO_CONFIG;

const isRelease = (() => {
    try {
        const cmd = `git log -n1 --format=format:%s`;
        const message = execSync(cmd, { encoding: "utf8" }).trim();
        return message.startsWith("chore(release):");
    } catch (err) {
        console.error(err);
        return false;
    }
})();

if (isCI) {
    console.group("Configuration");
    console.log("Matomo:", MATOMO_SITE_ID ? "enabled" : "disabled");
    console.log("Source url format:", DOCS_SOURCE_URL_FORMAT);
    console.groupEnd();
    console.log();
}

async function copyDocs(pkg: string, from: string, to: string): Promise<void> {
    const exists = existsSync(from);
    if (!exists) {
        console.log(`${pkg} not built, skipping`);
        return;
    }
    console.log(`Copying ${pkg} to ${to}`);
    await fs.cp(from, to, {
        recursive: true,
    });
}

function themeProcessor(): Processor {
    return {
        after: "generate-docs",
        name: "fkui:theme",
        async handler(context) {
            context.addTemplateBlock("body:end", "teleport-target", {
                filename: "partials/teleport.html",
            });
        },
    };
}

const docs = new Generator(import.meta.url, {
    site: {
        name: "FK Designsystem",
        lang: "sv",
    },
    outputFolder: "./public",
    cacheFolder: "./temp/docs",
    exampleFolders: ["./packages/vue/src", "./docs", "./packages/vue-labs/src"],
    templateFolders: ["./docs-alt/templates", "./docs/templates"],
    markdown: {
        messagebox: {
            title: {
                info: "Information",
                warning: "Tänk på att",
                danger: "Tänk på att",
            },
        },
    },
    vendor: [
        {
            package: "vue",
            alias: "vue/dist/vue.esm-bundler.js",
        },
        {
            package: "@fkui/vue/selectors",
            alias: "./packages/vue/dist/esm/selectors.esm.js",
        },
        "@fkui/logic",
        "@fkui/date",
        "@fkui/vue",
        "@forsakringskassan/docs-live-example",
    ],
    processors: [
        apiExtractorProcessor({
            apiModel: [
                "packages/vue/temp/vue.api.json",
                "packages/vue/temp/vue-labs.api.json",
            ],
        }),
        extractExamplesProcessor({
            outputFolder: "docs/examples/files",
        }),
        playgroundProcessor({
            entries: [
                {
                    id: "vue",
                    variable: "sandboxLink",
                    folder: "docs/playground",
                    urlFormat: "https://play.vuejs.org/#{{ zlibBase64 }}",
                },
            ],
        }),
        searchProcessor(),
        versionProcessor(pkg, "footer:right", {
            scm: isRelease
                ? undefined
                : {
                      commitUrlFormat: "{{ repository }}/commits/{{ hash }}",
                      prUrlFormat: "{{ repository }}/pull/{{ pr }}",
                  },
        }),
        manifestProcessor({
            markdown: "etc/docs-manifest.md",
            verify: isCI,
        }),
        motdProcessor(),
        selectableVersionProcessor(pkg, "footer:right"),
        matomoProcessor({
            enabled: Boolean(MATOMO_SITE_ID),
            siteId: MATOMO_SITE_ID,
            ...matomoConfig,
        }),
        themeProcessor(),
        topnavProcessor("docs/topmenu.json", "Försäkringskassans designsystem"),
        sourceUrlProcessor({
            enabled: Boolean(DOCS_SOURCE_URL_FORMAT),
            urlFormat: DOCS_SOURCE_URL_FORMAT,
        }),
        cookieProcessor(),
        htmlRedirectProcessor(),
    ],
    setupPath: path.resolve("docs/src/setup.ts"),
});

docs.compileScript("main", "./docs/src/main.js", {
    appendTo: "body",
});

docs.compileStyle("docs", "./docs/src/docs-theme.scss", {
    appendTo: "head",
});

docs.compileStyle("docs-fkui", "./docs/src/fkui-theme.scss", {
    appendTo: "head",
});

docs.copyResource("images", "docs/src/assets/images");
docs.copyResource("fonts", fontDir);

try {
    await docs.build(config.sourceFiles);

    const latest = `v${pkg.version}`;
    const versions = JSON.stringify(
        {
            latest,
            versions: [latest],
        },
        null,
        2,
    );
    await fs.mkdir("temp/docs", { recursive: true });
    await fs.writeFile("temp/docs/versions.json", versions, "utf8");

    /* copy docs from each package */
    console.log(); // intentional blank line
    await copyDocs("@fkui/date", "packages/date/typedoc", "public/date");
    await copyDocs("@fkui/logic", "packages/logic/typedoc", "public/logic");
    await copyDocs(
        "@fkui/vue-sandbox",
        "internal/vue-sandbox/dist",
        "public/vue-sandbox",
    );
    await copyDocs(
        "@fkui/example-page-layout",
        "examples/page-layout/dist",
        "public/examples/page-layout",
    );
    await copyDocs(
        "@fkui/example-table",
        "examples/table/dist",
        "public/examples/table",
    );
} catch (err) {
    console.error(err.prettyError ? err.prettyError() : err);
    process.exitCode = 1;
}
