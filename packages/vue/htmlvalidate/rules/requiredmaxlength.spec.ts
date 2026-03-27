import "html-validate/jest";
import { HtmlValidate } from "html-validate";
import plugin from "../index";

const htmlvalidate = new HtmlValidate({
    plugins: [plugin],
    rules: { "fkui/required-max-length": "error" },
});

it("should be valid when v-validation.maxLength is used", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div class="first">
            <f-text-field
                id="firstname"
                v-validation.required.maxLength="{ maxLength:{ length: 100 } }"
                v-model="anmalan.firstname"
            ></f-text-field>
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});

it("should be valid when a formatting validator is used", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <f-text-field
            id="personnummer"
            v-model="anmalan.personnummer"
            type="text"
            v-validation.personnummer
        ></f-text-field>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});

it('should be valid when element input with type="checkbox"', async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div class="checkbox">
            <input type="checkbox" class="checkbox__input" />
            <label class="checkbox__label"> Checkbox-label </label>
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});

it('should be valid when element input with type="radio"', async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div class="radio">
            <input type="radio" class="radio__input" />
            <label class="radio__label"> Radio-label </label>
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});

it("should be valid when maxlength is set", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <input type="text" v-validation.required maxlength="50" />
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});

it('should be valid when type="number"', async () => {
    expect.assertions(2);
    const markup = /* HTML */ ` <input type="number" v-validation.number /> `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});

it("should be valid when element is not input", async () => {
    expect.assertions(2);
    const markup = /* HTML */ ` <div id="foo"></div> `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});

it('should report error when type="text" and v-validation is used without validation-formatters', async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div class="first">
            <span> First name </span>
            <input type="text" id="first-name" v-validation.required />
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: v-validation must have a maxlength-validator (fkui/required-max-length) at inline:4:14:
          2 |         <div class="first">
          3 |             <span> First name </span>
        > 4 |             <input type="text" id="first-name" v-validation.required />
            |              ^^^^^
          5 |         </div>
          6 |
        Selector: #first-name"
    `);
});

it("should report error when type isn`t set and v-validation is used without validation-formatters", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div class="first">
            <f-text-field
                id="firstname"
                v-validation.required
                v-model="anmalan.firstname"
            ></f-text-field>
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: v-validation must have a maxlength-validator (fkui/required-max-length) at inline:3:14:
          1 |
          2 |         <div class="first">
        > 3 |             <f-text-field
            |              ^^^^^^^^^^^^
          4 |                 id="firstname"
          5 |                 v-validation.required
          6 |                 v-model="anmalan.firstname"
        Selector: #firstname"
    `);
});

it('should report error when type="text", maxlength isn`t set and v-validation is not used', async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div class="last">
            <f-text-field
                id="firstname"
                type="text"
                v-model="anmalan.firstname"
            ></f-text-field>
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: v-validation.maxLength must be used (fkui/required-max-length) at inline:3:14:
          1 |
          2 |         <div class="last">
        > 3 |             <f-text-field
            |              ^^^^^^^^^^^^
          4 |                 id="firstname"
          5 |                 type="text"
          6 |                 v-model="anmalan.firstname"
        Selector: #firstname"
    `);
});
