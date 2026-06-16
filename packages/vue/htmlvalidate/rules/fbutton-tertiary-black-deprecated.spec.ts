import "html-validate/vitest";
import { HtmlValidate } from "html-validate";
import { expect, it } from "vitest";
// eslint-disable-next-line import-x/extensions -- Vite migration
import plugin from "../index.cjs";

const htmlvalidate = new HtmlValidate({
    plugins: [plugin],
    rules: { "fkui/fbutton-tertiary-black-deprecated": "error" },
});

it('should report error when `tertiary-style="black"` is used', async () => {
    expect.assertions(3);
    const markup = /* HTML */ `
        <f-button
            variant="tertiary"
            size="medium"
            tertiary-style="black"
        ></f-button>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: \`tertiary-style\` \`black\` is deprecated and replaced by \`muted\` (fkui/fbutton-tertiary-black-deprecated)
          3 |             variant="tertiary"
          4 |             size="medium"
        > 5 |             tertiary-style="black"
            |                             ^^^^^
          6 |         ></f-button>
          7 |
        Selector: f-button"
    `);
    const error = report.results[0].messages[0];
    const docs = await htmlvalidate.getContextualDocumentation(error);
    expect(docs?.description).toMatchInlineSnapshot(
        `"\`tertiary-style\` \`black\` is deprecated and replaced by \`muted\`"`,
    );
});
