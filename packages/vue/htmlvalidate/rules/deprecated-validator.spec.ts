import "html-validate/jest";
import { HtmlValidate } from "html-validate";
import plugin from "../index";

const htmlvalidate = new HtmlValidate({
    plugins: [plugin],
    rules: { "fkui/deprecated-validator": "error" },
});

it("should report when using deprecated validator", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <f-text-field v-validation.personnummer></f-text-field>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: validator "personnummer" is deprecated (fkui/deprecated-validator) at inline:2:36:
          1 |
        > 2 |         <f-text-field v-validation.personnummer></f-text-field>
            |                                    ^^^^^^^^^^^^
          3 |
        Selector: f-text-field"
    `);
});

it("should not report when not using deprecated validators", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <f-text-field v-validation.personnummerFormat></f-text-field>
    `;
    const report = htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});

it("should set correct error location", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <f-text-field v-validation.personnummer.foo.bar></f-text-field>
        <f-text-field v-validation.foo.personnummer.bar></f-text-field>
        <f-text-field v-validation.foo.bar.personnummer></f-text-field>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: validator "personnummer" is deprecated (fkui/deprecated-validator) at inline:2:36:
          1 |
        > 2 |         <f-text-field v-validation.personnummer.foo.bar></f-text-field>
            |                                    ^^^^^^^^^^^^
          3 |         <f-text-field v-validation.foo.personnummer.bar></f-text-field>
          4 |         <f-text-field v-validation.foo.bar.personnummer></f-text-field>
          5 |
        Selector: f-text-field:nth-child(1)
        error: validator "personnummer" is deprecated (fkui/deprecated-validator) at inline:3:40:
          1 |
          2 |         <f-text-field v-validation.personnummer.foo.bar></f-text-field>
        > 3 |         <f-text-field v-validation.foo.personnummer.bar></f-text-field>
            |                                        ^^^^^^^^^^^^
          4 |         <f-text-field v-validation.foo.bar.personnummer></f-text-field>
          5 |
        Selector: f-text-field:nth-child(2)
        error: validator "personnummer" is deprecated (fkui/deprecated-validator) at inline:4:44:
          2 |         <f-text-field v-validation.personnummer.foo.bar></f-text-field>
          3 |         <f-text-field v-validation.foo.personnummer.bar></f-text-field>
        > 4 |         <f-text-field v-validation.foo.bar.personnummer></f-text-field>
            |                                            ^^^^^^^^^^^^
          5 |
        Selector: f-text-field:nth-child(3)"
    `);
});

it("should contain contextual documentation", async () => {
    const context = "personnummer";
    const docs = await htmlvalidate.getContextualDocumentation({
        ruleId: "fkui/deprecated-validator",
        context,
    });
    expect(docs?.description).toMatchInlineSnapshot(`
        "The \`personnummer\` validator is deprecated, replace with one or more of:

          - \`personnummerLuhn\`
          - \`personnummerFormat\`"
    `);
});
