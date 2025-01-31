import "html-validate/jest";
import { HtmlValidate } from "html-validate";
import plugin from "../index";

const htmlvalidate = new HtmlValidate({
    plugins: [plugin],
    rules: { "fkui/no-template-modal": "error" },
});

it("should report when `f-modal` is not root element", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div>
            <f-modal></f-modal>
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: f-modal must be root element (fkui/no-template-modal) at inline:3:14:
          1 |
          2 |         <div>
        > 3 |             <f-modal></f-modal>
            |              ^^^^^^^
          4 |         </div>
          5 |
        Selector: -"
    `);
});

it("should report when `f-confirm-modal` is not root element", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div>
            <f-confirm-modal></f-confirm-modal>
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: f-confirm-modal must be root element (fkui/no-template-modal) at inline:3:14:
          1 |
          2 |         <div>
        > 3 |             <f-confirm-modal></f-confirm-modal>
            |              ^^^^^^^^^^^^^^^
          4 |         </div>
          5 |
        Selector: -"
    `);
});

it("should report when `f-form-modal` is not root element", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div>
            <f-form-modal></f-form-modal>
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: f-form-modal must be root element (fkui/no-template-modal) at inline:3:14:
          1 |
          2 |         <div>
        > 3 |             <f-form-modal></f-form-modal>
            |              ^^^^^^^^^^^^
          4 |         </div>
          5 |
        Selector: -"
    `);
});

it("should not report when `f-modal` is root element", async () => {
    expect.assertions(2);
    const markup = /* HTML */ ` <f-modal></f-modal> `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});

it("should not report when `f-confirm-modal` is root element", async () => {
    expect.assertions(2);
    const markup = /* HTML */ ` <f-confirm-modal></f-confirm-modal> `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});

it("should not report when `f-form-modal` is root element", async () => {
    expect.assertions(2);
    const markup = /* HTML */ ` <f-form-modal></f-form-modal> `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});
