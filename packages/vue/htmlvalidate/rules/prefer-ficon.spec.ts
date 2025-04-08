import "html-validate/jest";
import { HtmlValidate } from "html-validate";
import plugin from "../index";

const htmlvalidate = new HtmlValidate({
    plugins: [plugin],
    rules: { "fkui/prefer-ficon": "error" },
});

it("should not report when arbitrary svg is used", async () => {
    expect.assertions(1);
    const markup = /* HTML */ `
        <svg></svg>
        <svg class="foobar"></svg>
        <svg>
            <use href="#foo" />
        </svg>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
});

it("should not report for other elements with icon class", async () => {
    expect.assertions(1);
    const markup = /* HTML */ ` <div class="icon"></div> `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
});

it("should report error for svg with icon", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <svg class="icon">
            <use href="#f-icon-foo" />
        </svg>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: Prefer using <f-icon> instead of directly using <svg> (fkui/prefer-ficon) at inline:2:10:
          1 |
        > 2 |         <svg class="icon">
            |          ^^^
          3 |             <use href="#f-icon-foo" />
          4 |         </svg>
          5 |
        Selector: -"
    `);
});
