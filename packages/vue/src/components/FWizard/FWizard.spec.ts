import "html-validate/jest";

describe("html-validate", () => {
    it("should allow flow content", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard header-tag="h1">
                <div></div>
            </f-wizard>
        `;
        expect(markup).toHTMLValidate();
    });

    it("should require header-tag attribute", () => {
        expect.assertions(1);
        const markup = /* HTML */ ` <f-wizard></f-wizard> `;
        expect(markup).not.toHTMLValidate({
            ruleId: "element-required-attributes",
            message: '<f-wizard> is missing required "header-tag" attribute',
        });
    });

    it("should allow h{1..6} header-tag attribute", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard header-tag="h1"></f-wizard>
            <f-wizard header-tag="h2"></f-wizard>
            <f-wizard header-tag="h3"></f-wizard>
            <f-wizard header-tag="h4"></f-wizard>
            <f-wizard header-tag="h5"></f-wizard>
            <f-wizard header-tag="h6"></f-wizard>
        `;
        expect(markup).toHTMLValidate();
    });

    it("should not allow invalid header-tag attribute", () => {
        expect.assertions(1);
        const markup = /* HTML */ ` <f-wizard header-tag="foobar"></f-wizard> `;
        expect(markup).not.toHTMLValidate({
            ruleId: "attribute-allowed-values",
            message: 'Attribute "header-tag" has invalid value "foobar"',
        });
    });
});
