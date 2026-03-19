import "html-validate/jest";
import { HtmlValidate } from "html-validate";
import plugin from "../index";

const htmlvalidate = new HtmlValidate({
    plugins: [plugin],
    rules: { "fkui/button-group": "error" },
});

it('should report error when <button> is missing "button-group__item" if used inside <div class"button-group">', async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div class="button-group">
            <button></button>
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: A button that is a direct child to a button group must have the following classes: ['button-group__item'] (fkui/button-group) at inline:3:14:
          1 |
          2 |         <div class="button-group">
        > 3 |             <button></button>
            |              ^^^^^^
          4 |         </div>
          5 |
        Selector: div > button"
    `);
});

it('should not report error when <button class="button-group__item"> is used inside <div class"button-group">', async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div class="button-group">
            <button class="button-group__item"></button>
        </div>
    `;
    const report = htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});
