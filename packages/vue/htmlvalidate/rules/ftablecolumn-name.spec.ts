import "html-validate/jest";
import { HtmlValidate } from "html-validate";
import plugin from "../index";

const htmlvalidate = new HtmlValidate({
    plugins: [plugin],
    rules: { "fkui/ftablecolumn-name": "error" },
});

describe("`FTableColumn` with `FSortFilterDataset`", () => {
    it("should report error if `name` is missing", async () => {
        expect.assertions(2);
        const markup = /* HTML */ `
            <f-sort-filter-dataset :data :sortable-attributes>
                <template #default="{ sortFilterResult }">
                    <f-data-table :rows="sortFilterResult">
                        <template #caption> TestTable </template>
                        <template #default="{ row }">
                            <f-table-column title="foo"></f-table-column>
                        </template>
                    </f-data-table>
                </template>
            </f-sort-filter-dataset>
        `;
        const report = await htmlvalidate.validateString(markup);
        expect(report).toBeInvalid();
        expect(report).toMatchInlineCodeframe(`
            "error: <f-table-column> is missing required "name" attribute (fkui/ftablecolumn-name) at inline:7:30:
               5 |                         <template #caption> TestTable </template>
               6 |                         <template #default="{ row }">
            >  7 |                             <f-table-column title="foo"></f-table-column>
                 |                              ^^^^^^^^^^^^^^
               8 |                         </template>
               9 |                     </f-data-table>
              10 |                 </template>
            Selector: f-sort-filter-dataset > template > f-data-table > template:nth-child(2) > f-table-column"
        `);
    });

    it("should not report error if `name` is provided", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-sort-filter-dataset :data :sortable-attributes>
                <template #default="{ sortFilterResult }">
                    <f-data-table :rows="sortFilterResult">
                        <template #caption> TestTable </template>
                        <template #default="{ row }">
                            <f-table-column
                                name="foo"
                                title="foo"
                            ></f-table-column>
                        </template>
                    </f-data-table>
                </template>
            </f-sort-filter-dataset>
        `;
        const report = await htmlvalidate.validateString(markup);
        expect(report).toBeValid();
    });

    it("should report error if `name` is not unique", async () => {
        expect.assertions(2);
        const markup = /* HTML */ `
            <f-sort-filter-dataset :data :sortable-attributes>
                <template #default="{ sortFilterResult }">
                    <f-data-table :rows="sortFilterResult">
                        <template #caption> TestTable </template>
                        <template #default="{ row }">
                            <f-table-column
                                name="foo"
                                title="foo"
                            ></f-table-column>
                            <f-table-column
                                name="bar"
                                title="bar"
                            ></f-table-column>
                            <f-table-column
                                name="foo"
                                title="baz"
                            ></f-table-column>
                        </template>
                    </f-data-table>
                </template>
            </f-sort-filter-dataset>
        `;
        const report = await htmlvalidate.validateString(markup);
        expect(report).toBeInvalid();
        expect(report).toMatchInlineCodeframe(`
            "error: "foo" is not unique (fkui/ftablecolumn-name) at inline:16:39:
              14 |                             ></f-table-column>
              15 |                             <f-table-column
            > 16 |                                 name="foo"
                 |                                       ^^^
              17 |                                 title="baz"
              18 |                             ></f-table-column>
              19 |                         </template>
            Selector: -"
        `);
    });
});

describe("`FTableColumn` without `FSortFilterDataset`", () => {
    it("should not report error if `name` is missing", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-data-table :rows>
                <template #caption> TestTable </template>
                <template #default="{ row }">
                    <f-table-column title="foo"></f-table-column>
                </template>
            </f-data-table>
        `;
        const report = await htmlvalidate.validateString(markup);
        expect(report).toBeValid();
    });
});
