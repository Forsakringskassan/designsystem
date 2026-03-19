/* eslint-disable jest/no-disabled-tests -- not currently in use */
import "html-validate/jest";
import { HtmlValidate } from "html-validate";
import plugin from "../index";

const htmlvalidate = new HtmlValidate({
    plugins: [plugin],
    rules: { "fkui/deprecated-validator": "error" },
});

it.skip("should report when using deprecated validator", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <f-text-field v-validation.dummy></f-text-field>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: validator "dummy" is deprecated (fkui/deprecated-validator) at inline:2:36:
          1 |
        > 2 |         <f-text-field v-validation.dummy></f-text-field>
            |                                    ^^^^^
          3 |
        Selector: f-text-field"
    `);
});

it.skip("should not report when not using deprecated validators", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <f-text-field v-validation.personnummerFormat></f-text-field>
    `;
    const report = htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});

it.skip("should set correct error location", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <f-text-field v-validation.dummy.foo.bar></f-text-field>
        <f-text-field v-validation.foo.dummy.bar></f-text-field>
        <f-text-field v-validation.foo.bar.dummy></f-text-field>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: validator "dummy" is deprecated (fkui/deprecated-validator) at inline:2:36:
          1 |
        > 2 |         <f-text-field v-validation.dummy.foo.bar></f-text-field>
            |                                    ^^^^^
          3 |         <f-text-field v-validation.foo.dummy.bar></f-text-field>
          4 |         <f-text-field v-validation.foo.bar.dummy></f-text-field>
          5 |
        Selector: f-text-field:nth-child(1)
        error: validator "dummy" is deprecated (fkui/deprecated-validator) at inline:3:40:
          1 |
          2 |         <f-text-field v-validation.dummy.foo.bar></f-text-field>
        > 3 |         <f-text-field v-validation.foo.dummy.bar></f-text-field>
            |                                        ^^^^^
          4 |         <f-text-field v-validation.foo.bar.dummy></f-text-field>
          5 |
        Selector: f-text-field:nth-child(2)
        error: validator "dummy" is deprecated (fkui/deprecated-validator) at inline:4:44:
          2 |         <f-text-field v-validation.dummy.foo.bar></f-text-field>
          3 |         <f-text-field v-validation.foo.dummy.bar></f-text-field>
        > 4 |         <f-text-field v-validation.foo.bar.dummy></f-text-field>
            |                                            ^^^^^
          5 |
        Selector: f-text-field:nth-child(3)"
    `);
});

it.skip("should contain contextual documentation", async () => {
    const context = "dummy";
    const docs = await htmlvalidate.getContextualDocumentation({
        ruleId: "fkui/deprecated-validator",
        context,
    });
    expect(docs?.description).toMatchInlineSnapshot(`
        "The \`dummy\` validator is deprecated, replace with one or more of:

          - \`dummyReplacements\`"
    `);
});
