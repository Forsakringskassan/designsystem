/* axelinter:disable:prefer-native-element */
import { type DefineComponent, defineComponent } from "vue";
import { FInteractiveTablePageObject } from "../../cypress";
import { FTableColumn } from "../FTableColumn";
import FInteractiveTable from "./FInteractiveTable.vue";

const table = new FInteractiveTablePageObject('[data-test="table-example"]');

const rows = [
    { name: "Foo", amount: "7" },
    { name: "Bar", amount: "1" },
    { name: "Baz", amount: "49" },
];

const defaultTemplateContent = /* HTML */ `
    <template #caption> Test caption </template>
    <template #default="{ row }">
        <f-table-column title="Name" type="text" expand>
            {{ row.name }}
        </f-table-column>
        <f-table-column title="Amount" type="numeric" shrink>
            {{ row.amount }}
        </f-table-column>
    </template>
`;

const defaultTemplate = /* HTML */ `
    <f-interactive-table :rows v-test="'table-example'">
        ${defaultTemplateContent}
    </f-interactive-table>
`;

function createComponent(template: string = defaultTemplate): DefineComponent {
    return defineComponent({
        template,
        components: {
            FInteractiveTable,
            FTableColumn,
        },
        data() {
            return {
                rows,
            };
        },
    });
}

it("should move focus to next row (circular) with arrow-down-key", () => {
    cy.mount(createComponent());
    table.row(0).focus();
    table.row(0).should("have.focus");
    table.row(0).type("{downArrow}");

    table.row(1).should("have.focus");
    table.row(1).type("{downArrow}");

    table.row(2).should("have.focus");
    table.row(2).type("{downArrow}");

    table.row(0).should("have.focus");
});

it("should move focus to previous row (circular) with arrow-up-key", () => {
    cy.mount(createComponent());
    table.row(2).focus();
    table.row(2).should("have.focus");
    table.row(2).type("{upArrow}");

    table.row(1).should("have.focus");
    table.row(1).type("{upArrow}");

    table.row(0).should("have.focus");
    table.row(0).type("{upArrow}");

    table.row(2).should("have.focus");
});

describe("when selectable", () => {
    const selectableTemplate = /* HTML */ `
        <f-interactive-table
            v-model="selectedRows"
            :rows
            selectable
            v-test="'table-example'"
        >
            ${defaultTemplateContent}
            <template #checkbox-description> Välj denna rad </template>
        </f-interactive-table>
    `;
    const selectedRows = [rows[0], rows[2]];

    it("should pre-select checkboxes", () => {
        const TestComponent = defineComponent({
            template: selectableTemplate,
            components: {
                FInteractiveTable,
                FTableColumn,
            },
            data() {
                return {
                    selectedRows,
                    rows,
                };
            },
        });
        cy.mount(TestComponent);

        table.columnItem(1).checkbox().isSelected().should("be.true");
        table.columnItem(2).checkbox().isSelected().should("be.false");
        table.columnItem(3).checkbox().isSelected().should("be.true");
    });

    it("should update checkboxes on `v-model` change", () => {
        const template = /* HTML */ `
            <div>
                <button
                    type="button"
                    id="remove-all"
                    @click="selectedRows = []"
                >
                    Remove all
                </button>
                <button
                    type="button"
                    id="select-all"
                    @click="selectedRows = rows"
                >
                    Select all
                </button>
                <button
                    type="button"
                    id="add-one"
                    @click="selectedRows.push(rows[1])"
                >
                    Add one
                </button>
                ${selectableTemplate}
            </div>
        `;
        const TestComponent = defineComponent({
            template,
            components: {
                FInteractiveTable,
                FTableColumn,
            },
            data() {
                return {
                    selectedRows,
                    rows,
                };
            },
        });
        cy.mount(TestComponent);

        table.columnItem(1).checkbox().isSelected().should("be.true");
        table.columnItem(2).checkbox().isSelected().should("be.false");
        table.columnItem(3).checkbox().isSelected().should("be.true");

        cy.get("#remove-all").click();
        table.columnItem(1).checkbox().isSelected().should("be.false");
        table.columnItem(2).checkbox().isSelected().should("be.false");
        table.columnItem(3).checkbox().isSelected().should("be.false");

        cy.get("#add-one").click();
        table.columnItem(1).checkbox().isSelected().should("be.false");
        table.columnItem(2).checkbox().isSelected().should("be.true");
        table.columnItem(3).checkbox().isSelected().should("be.false");

        cy.get("#select-all").click();
        table.columnItem(1).checkbox().isSelected().should("be.true");
        table.columnItem(2).checkbox().isSelected().should("be.true");
        table.columnItem(3).checkbox().isSelected().should("be.true");
    });
});

describe("when `rows` is empty", () => {
    it("should have an empty row", () => {
        const template = /* HTML */ `
            <f-interactive-table :rows="[]" v-test="'table-example'">
                ${defaultTemplateContent}
            </f-interactive-table>
        `;
        const TestComponent = defineComponent({
            template,
            components: {
                FInteractiveTable,
                FTableColumn,
            },
        });
        cy.mount(TestComponent);

        // Should only have one `<tr>` with one `<td>` spanning all columns when empty.
        table.row(0).should("contain.text", "Tabellen är tom");
        table.row(1).should("not.exist");
        table.cell({ row: 1, col: 1 }).should("exist");
        table.cell({ row: 1, col: 2 }).should("not.exist");
    });

    it("cell of empty row should span all columns when default", () => {
        const template = /* HTML */ `
            <f-interactive-table :rows="[]" v-test="'table-example'">
                ${defaultTemplateContent}
            </f-interactive-table>
        `;
        const TestComponent = defineComponent({
            template,
            components: {
                FInteractiveTable,
                FTableColumn,
            },
        });
        cy.mount(TestComponent);

        table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "2");
    });

    it("cell of empty row should span all columns when selectable", () => {
        const template = /* HTML */ `
            <f-interactive-table :rows="[]" selectable v-test="'table-example'">
                ${defaultTemplateContent}
            </f-interactive-table>
        `;
        const TestComponent = defineComponent({
            template,
            components: {
                FInteractiveTable,
                FTableColumn,
            },
        });
        cy.mount(TestComponent);

        table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "3");
    });

    it("cell of empty row should span all columns when expandable", () => {
        const template = /* HTML */ `
            <f-interactive-table
                :rows="[]"
                expandable-attribute="expandable"
                v-test="'table-example'"
            >
                ${defaultTemplateContent}
            </f-interactive-table>
        `;
        const TestComponent = defineComponent({
            template,
            components: {
                FInteractiveTable,
                FTableColumn,
            },
        });
        cy.mount(TestComponent);

        table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "3");
    });

    it("cell of empty row should span all columns when selectable and expandable", () => {
        const template = /* HTML */ `
            <f-interactive-table
                :rows="[]"
                selectable
                expandable-attribute="expandable"
                v-test="'table-example'"
            >
                ${defaultTemplateContent}
            </f-interactive-table>
        `;
        const TestComponent = defineComponent({
            template,
            components: {
                FInteractiveTable,
                FTableColumn,
            },
        });
        cy.mount(TestComponent);

        table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "4");
    });

    it("should be able to show custom text for empty row", () => {
        const template = /* HTML */ `
            <f-interactive-table
                :rows="[]"
                selectable
                expandable-attribute="expandable"
                v-test="'table-example'"
            >
                ${defaultTemplateContent}
                <template #empty> Custom empty </template>
            </f-interactive-table>
        `;
        const TestComponent = defineComponent({
            template,
            components: {
                FInteractiveTable,
                FTableColumn,
            },
        });
        cy.mount(TestComponent);

        table.row(0).should("contain.text", "Custom empty");
    });

    it("should be able to toggle column visibility", () => {
        const template = /* HTML */ `
            <div>
                <button
                    type="button"
                    id="toggle-btn"
                    @click="visible = !visible"
                >
                    Toggle
                </button>

                <f-interactive-table :rows="[]" v-test="'table-example'">
                    <template #caption> Test caption </template>
                    <template #default="{ row }">
                        <f-table-column title="Name" type="text" expand>
                            {{ row.name }}
                        </f-table-column>
                        <f-table-column
                            title="Amount"
                            type="numeric"
                            :visible="visible"
                        >
                            {{ row.amount }}
                        </f-table-column>
                    </template>
                    <template #empty> Custom empty </template>
                </f-interactive-table>
            </div>
        `;
        const TestComponent = defineComponent({
            template,
            components: {
                FInteractiveTable,
                FTableColumn,
            },
            data() {
                return {
                    visible: true,
                };
            },
        });
        cy.mount(TestComponent);

        table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "2");
        table
            .headerRowItem()
            .tableRowHeaderContent()
            .eq(1)
            .should("contain.text", "Amount");

        cy.get("#toggle-btn").click();
        table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "1");
        table.columnItem(2).el().should("not.exist");

        cy.get("#toggle-btn").click();
        table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "2");
        table
            .headerRowItem()
            .tableRowHeaderContent()
            .eq(1)
            .should("contain.text", "Amount");
    });
});

describe("FInteractiveTable pageobject", () => {
    beforeEach(() => {
        cy.mount(createComponent());
    });

    it("should contain caption", () => {
        table.caption().should("contain", "Test caption");
    });

    it("should provide a page object that can access any necessary elements in table headers", () => {
        table.headersRow().should("have.length", 2);

        table
            .headerRowItem()
            .tableRowHeaderContent()
            .eq(0)
            .should("have.trimmedText", "Name");

        table
            .headerRowItem()
            .tableRowHeaderContent()
            .eq(1)
            .should("have.trimmedText", "Amount");
    });

    it("should provide a page object that can access any necessary elements in a table body", () => {
        table.bodyRow().should("have.length", 3);

        table.cell({ row: 1, col: 1 }).should("contain.text", "Foo");
        table.cell({ row: 1, col: 2 }).should("contain.text", "7");
    });
});
