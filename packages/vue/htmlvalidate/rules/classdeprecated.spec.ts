import "html-validate/jest";
import { HtmlValidate } from "html-validate";
import plugin from "../index";

const htmlvalidate = new HtmlValidate({
    plugins: [plugin],
    rules: { "fkui/class-deprecated": "error" },
});

it("should report warning when .button--text is used instead of .button--discrete", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div>
            <button type="button" class="button button--text"></button>
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: ['button--text'] is deprecated, please use ['button--discrete'] instead (fkui/class-deprecated) at inline:3:14:
          1 |
          2 |         <div>
        > 3 |             <button type="button" class="button button--text"></button>
            |              ^^^^^^
          4 |         </div>
          5 |
        Selector: div > button"
    `);
});

it("should not report warning when .button--discrete is used instead of .button--text", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div>
            <button type="button" class="button button--discrete"></button>
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});
