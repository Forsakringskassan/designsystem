import "html-validate/jest";
import { HtmlValidate } from "html-validate";
import plugin from "../index";

const htmlvalidate = new HtmlValidate({
    plugins: [plugin],
    rules: { "fkui/class-deprecated": "error" },
});

it("should not report warning on missing class", async () => {
    expect.assertions(1);
    const markup = /* HTML */ ` <div></div> `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
});

it("should not report warning on empty class", async () => {
    expect.assertions(1);
    const markup = /* HTML */ ` <div class></div> `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
});

it("should not report warning on `v-bind:class`", async () => {
    expect.assertions(1);
    const markup = /* HTML */ `
        <div :class></div>
        <div v-bind:class></div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
});

describe("`.button--text`", () => {
    it("should report warning when `.button--text` is used instead of `.button--discrete`", async () => {
        expect.assertions(2);
        const markup = /* HTML */ `
            <button type="button" class="button button--text"></button>
        `;
        const report = await htmlvalidate.validateString(markup);
        expect(report).toBeInvalid();
        expect(report).toMatchInlineCodeframe(`
            "error: \`.button--text\` class is deprecated (fkui/class-deprecated) at inline:2:49:
              1 |
            > 2 |             <button type="button" class="button button--text"></button>
                |                                                 ^^^^^^^^^^^^
              3 |
            Selector: button"
        `);
    });

    it("should not report warning when `.button--discrete` is used instead of `.button--text`", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <button type="button" class="button button--discrete"></button>
        `;
        const report = await htmlvalidate.validateString(markup);
        expect(report).toBeValid();
    });
});

describe("`.navbar`", () => {
    it("should report warning when `.navbar` is used", async () => {
        expect.assertions(2);
        const markup = /* HTML */ ` <div class="custom-navbar navbar"></div> `;
        const report = await htmlvalidate.validateString(markup);
        expect(report).toBeInvalid();
        expect(report).toMatchInlineCodeframe(`
            "error: \`.navbar\` class is deprecated (fkui/class-deprecated) at inline:1:28:
            > 1 |  <div class="custom-navbar navbar"></div>
                |                            ^^^^^^
            Selector: div"
        `);
    });

    it("should not report warning when `navbar` is used with `v-bind:class`", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <div :class="navbar"></div>
            <div v-bind:class="navbar"></div>
        `;
        const report = await htmlvalidate.validateString(markup);
        expect(report).toBeValid();
    });
});
