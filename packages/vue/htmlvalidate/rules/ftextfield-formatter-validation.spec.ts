import "html-validate/jest";
import { HtmlValidate } from "html-validate";
import plugin from "../index";

const htmlvalidate = new HtmlValidate({
    plugins: [plugin],
    rules: { "fkui/ftextfield-formatter-validation": "error" },
});

it("should be valid when FTextField doesn't use v-validation", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div class="first">
            <f-text-field></f-text-field>
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});

it("should be valid when FTextField uses v-validation.personnummer and :formatter", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div class="first">
            <f-text-field
                id="firstname"
                :formatter="bankformatter"
                v-validation.personnummer=""
            ></f-text-field>
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});

it("should be valid when FTextField uses v-validation.personnummer and :parser", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div class="first">
            <f-text-field
                id="firstname"
                :parser="bankparser"
                v-validation.personnummer=""
            ></f-text-field>
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});

it("should be valid when FTextField uses v-validation.required.personnummer and :parser", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div class="first">
            <f-text-field
                id="firstname"
                :parser="bankparser"
                v-validation.required.personnummer=""
            ></f-text-field>
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});

it("should be valid when FTextField uses v-validation.personnummer.max-length and :parser", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div class="first">
            <f-text-field
                id="firstname"
                :parser="bankparser"
                v-validation.personnummer.max-length=""
            ></f-text-field>
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});

it("should be valid when FTextField uses v-validation.required and no :formatter or :parser", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div class="first">
            <f-text-field
                id="firstname"
                v-validation.required=""
            ></f-text-field>
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});

it("should be invalid when FTextField uses v-validation.personnummer without :formatter or :parser", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div class="first">
            <f-text-field
                id="firstname"
                v-validation.personnummer=""
            ></f-text-field>
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: v-validation.personnummer must be used with :formatter and/or :parser (fkui/ftextfield-formatter-validation) at inline:5:17:
          3 |             <f-text-field
          4 |                 id="firstname"
        > 5 |                 v-validation.personnummer=""
            |                 ^^^^^^^^^^^^^^^^^^^^^^^^^
          6 |             ></f-text-field>
          7 |         </div>
          8 |
        Selector: #firstname"
    `);
});

it("should be invalid when FTextField uses v-validation.required.personnummer without :formatter or :parser", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div class="first">
            <f-text-field
                id="parser-formatter"
                v-model="modelValue"
                v-validation.required.personnummer
            >
                Parsning kombinerat med formatering
            </f-text-field>
        </div>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: v-validation.personnummer must be used with :formatter and/or :parser (fkui/ftextfield-formatter-validation) at inline:6:17:
          4 |                 id="parser-formatter"
          5 |                 v-model="modelValue"
        > 6 |                 v-validation.required.personnummer
            |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
          7 |             >
          8 |                 Parsning kombinerat med formatering
          9 |             </f-text-field>
        Selector: #parser-formatter"
    `);
});

it("should not report error when phoneNumber is used", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <f-text-field v-validation.phoneNumber></f-text-field>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});
