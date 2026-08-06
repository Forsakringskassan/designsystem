import { describe, expect, it } from "vitest";
import "html-validate/vitest";

describe("html-validate", () => {
    it("should allow flow content", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard header-tag="h1">
                <div></div>
            </f-wizard>
        `;
        await expect(markup).toBeValid();
    });

    it("should require header-tag attribute", async () => {
        expect.assertions(1);
        const markup = /* HTML */ ` <f-wizard></f-wizard> `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: <f-wizard> is missing required "header-tag" attribute (element-required-attributes)
          > 1 |  <f-wizard></f-wizard>
              |   ^^^^^^^^
          Selector: f-wizard"
        `);
    });

    it("should allow h{1..6} header-tag attribute", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard header-tag="h1"></f-wizard>
            <f-wizard header-tag="h2"></f-wizard>
            <f-wizard header-tag="h3"></f-wizard>
            <f-wizard header-tag="h4"></f-wizard>
            <f-wizard header-tag="h5"></f-wizard>
            <f-wizard header-tag="h6"></f-wizard>
        `;
        await expect(markup).toBeValid();
    });

    it("should not allow invalid header-tag attribute", async () => {
        expect.assertions(1);
        const markup = /* HTML */ ` <f-wizard header-tag="foobar"></f-wizard> `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: Attribute "header-tag" has invalid value "foobar" (attribute-allowed-values)
          > 1 |  <f-wizard header-tag="foobar"></f-wizard>
              |                        ^^^^^^
          Selector: f-wizard"
        `);
    });
});
