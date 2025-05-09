import "html-validate/jest";
import { HtmlValidate } from "html-validate";
import plugin from "../index";

const htmlvalidate = new HtmlValidate({
    plugins: [plugin],
    rules: { "fkui/class-deprecated": "error" },
});

it("should not report error on missing class", async () => {
    expect.assertions(1);
    const markup = /* HTML */ ` <div></div> `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
});

it("should not report error on empty class", async () => {
    expect.assertions(1);
    const markup = /* HTML */ ` <div class></div> `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
});

it("should not report error on `v-bind:class`", async () => {
    expect.assertions(1);
    const markup = /* HTML */ `
        <div :class></div>
        <div :class="navbar"></div>
        <div v-bind:class></div>
        <div v-bind:class="navbar"></div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
});

it("should not report error when non-deprecated class is used", async () => {
    expect.assertions(1);
    const markup = /* HTML */ `
        <button type="button" class="button button--tertiary"></button>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
});

it("should report error when `.button--text` is used", async () => {
    expect.assertions(3);
    const markup = /* HTML */ `
        <button type="button" class="button button--text"></button>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: class "button--text" is deprecated and replaced with "button--tertiary" (fkui/class-deprecated) at inline:2:45:
          1 |
        > 2 |         <button type="button" class="button button--text"></button>
            |                                             ^^^^^^^^^^^^
          3 |
        Selector: button"
    `);
    const error = report.results[0].messages[0];
    const docs = await htmlvalidate.getContextualDocumentation(error);
    expect(docs?.description).toMatchInlineSnapshot(
        `"Class \`button--text\` is deprecated and should be replaced with \`button--tertiary\`"`,
    );
});

it("should report error when `.button--discrete` is used", async () => {
    expect.assertions(3);
    const markup = /* HTML */ `
        <button type="button" class="button button--discrete"></button>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: class "button--discrete" is deprecated and replaced with "button--tertiary" (fkui/class-deprecated) at inline:2:45:
          1 |
        > 2 |         <button type="button" class="button button--discrete"></button>
            |                                             ^^^^^^^^^^^^^^^^
          3 |
        Selector: button"
    `);
    const error = report.results[0].messages[0];
    const docs = await htmlvalidate.getContextualDocumentation(error);
    expect(docs?.description).toMatchInlineSnapshot(
        `"Class \`button--discrete\` is deprecated and should be replaced with \`button--tertiary\`"`,
    );
});

it("should report error when `.navbar` is used", async () => {
    expect.assertions(3);
    const markup = /* HTML */ ` <div class="custom-navbar navbar"></div> `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: class "navbar" is deprecated (fkui/class-deprecated) at inline:1:28:
        > 1 |  <div class="custom-navbar navbar"></div>
            |                            ^^^^^^
        Selector: div"
    `);
    const error = report.results[0].messages[0];
    const docs = await htmlvalidate.getContextualDocumentation(error);
    expect(docs?.description).toMatchInlineSnapshot(`
        "Class \`navbar\` is deprecated.

        It should be replaced with the Vue components \`FPageHeader\` and \`FNavigationMenu\`."
    `);
});
