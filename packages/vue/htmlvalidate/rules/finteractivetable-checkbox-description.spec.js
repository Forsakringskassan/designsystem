import "html-validate/jest";
import { HtmlValidate } from "html-validate";
import plugin from "../index";

const htmlvalidate = new HtmlValidate({
    plugins: [plugin],
    rules: { "fkui/finteractivetable-checkbox-description": "error" },
});

it("should not report error when selectable is used with non-empty checkbox description", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <f-interactive-table selectable>
            <template #default="{ row }"></template>
            <template #checkbox-description> Select this row </template>
        </f-interactive-table>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeValid();
    expect(report).toMatchInlineCodeframe(`""`);
});

it("should report error when selectable is used without checkbox description", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <f-interactive-table selectable>
            <template #default="{ row }"></template>
        </f-interactive-table>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: #checkbox-description slot must be implemented when selectable is enabled (fkui/finteractivetable-checkbox-description) at inline:2:30:
          1 |
        > 2 |         <f-interactive-table selectable>
            |                              ^^^^^^^^^^
          3 |             <template #default="{ row }"></template>
          4 |         </f-interactive-table>
          5 |
        Selector: f-interactive-table"
    `);
});

it("should report error when selectable is used with empty checkbox description", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <f-interactive-table selectable>
            <template #default="{ row }"></template>
            <template #checkbox-description></template>
        </f-interactive-table>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: #checkbox-description cannot be empty when selectable is enabled (fkui/finteractivetable-checkbox-description) at inline:4:14:
          2 |         <f-interactive-table selectable>
          3 |             <template #default="{ row }"></template>
        > 4 |             <template #checkbox-description></template>
            |              ^^^^^^^^
          5 |         </f-interactive-table>
          6 |
        Selector: f-interactive-table > template:nth-child(2)"
    `);
});

it("should handle when no slots are implemented", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <f-interactive-table selectable></f-interactive-table>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: #checkbox-description slot must be implemented when selectable is enabled (fkui/finteractivetable-checkbox-description) at inline:2:30:
          1 |
        > 2 |         <f-interactive-table selectable></f-interactive-table>
            |                              ^^^^^^^^^^
          3 |
        Selector: f-interactive-table"
    `);
});

it("should handle when non-slot template element is used", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <f-interactive-table selectable>
            <template v-if="false"></template>
        </f-interactive-table>
    `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: #checkbox-description slot must be implemented when selectable is enabled (fkui/finteractivetable-checkbox-description) at inline:2:30:
          1 |
        > 2 |         <f-interactive-table selectable>
            |                              ^^^^^^^^^^
          3 |             <template v-if="false"></template>
          4 |         </f-interactive-table>
          5 |
        Selector: f-interactive-table"
    `);
});
