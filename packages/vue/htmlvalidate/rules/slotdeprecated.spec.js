import "html-validate/jest";
import { HtmlValidate } from "html-validate";
import plugin from "../index";

const htmlvalidate = new HtmlValidate({
    plugins: [plugin],
    rules: { "fkui/slot-deprecated": "error" },
});

it("should not report error when not used", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <f-interactive-table selectable>
            <template #default="{ row }"></template>
            <template #selectable-description> Select this row </template>
        </f-interactive-table>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});

it("should report error when used", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <f-interactive-table selectable>
            <template #default="{ row }"></template>
            <template #checkbox-description> Select this row </template>
        </f-interactive-table>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: slot "#checkbox-description" is deprecated and replaced with "selectable-description" (fkui/slot-deprecated) at inline:4:14:
          2 |         <f-interactive-table selectable>
          3 |             <template #default="{ row }"></template>
        > 4 |             <template #checkbox-description> Select this row </template>
            |              ^^^^^^^^
          5 |         </f-interactive-table>
          6 |
        Selector: f-interactive-table"
        `);
});
