import { defineComponent } from "vue";
import { FInteractiveTable, FTableColumn } from "../components";
import { FInteractiveTablePageObject } from "./FInteractiveTable.pageobject";

interface Row {
    id: string;
    a: string;
    b: string;
    c: string;
    nested: Array<Omit<Row, "nested">>;
}

const rows: Row[] = [
    {
        id: "1",
        a: "A1",
        b: "B1",
        c: "C1",
        nested: [
            { id: "1a", a: "A1a", b: "B1a", c: "C1a" },
            { id: "1b", a: "A1b", b: "B1b", c: "C1b" },
            { id: "1c", a: "A1c", b: "B1c", c: "C1c" },
        ],
    },
    { id: "2", a: "A2", b: "B2", c: "C2", nested: [] },
    { id: "3", a: "A3", b: "B3", c: "C3", nested: [] },
];

const TestComponent = defineComponent({
    components: { FInteractiveTable, FTableColumn },
    props: {
        rows: Array,
        rowHeader: Boolean,
        expandable: Boolean,
        selectable: Boolean,
    },
    template: /* HTML */ `
        <f-interactive-table
            key-attribute="id"
            :rows
            :selectable
            :expandable-attribute="expandable ? 'nested' : undefined"
        >
            <template #checkbox-description> Select row </template>
            <template #default="{ row }">
                <f-table-column :row-header title="A">
                    {{ row.a }}
                </f-table-column>
                <f-table-column title="B"> {{ row.b }} </f-table-column>
                <f-table-column title="C"> {{ row.c }} </f-table-column>
            </template>
        </f-interactive-table>
    `,
});

const table = new FInteractiveTablePageObject(".table");

describe("cell()", () => {
    it("should select the correct cell", () => {
        cy.mount(TestComponent, {
            props: {
                rows,
                rowHeader: false,
                expandable: false,
                selectable: false,
            },
        });
        table.cell({ row: 1, col: 1 }).should("contain.text", "A1");
        table.cell({ row: 1, col: 2 }).should("contain.text", "B1");
        table.cell({ row: 1, col: 3 }).should("contain.text", "C1");
        table.cell({ row: 2, col: 1 }).should("contain.text", "A2");
        table.cell({ row: 2, col: 2 }).should("contain.text", "B2");
        table.cell({ row: 2, col: 3 }).should("contain.text", "C2");
        table.cell({ row: 3, col: 1 }).should("contain.text", "A3");
        table.cell({ row: 3, col: 2 }).should("contain.text", "B3");
        table.cell({ row: 3, col: 3 }).should("contain.text", "C3");
    });

    it("should handle row header columns", () => {
        cy.mount(TestComponent, {
            props: {
                rows,
                rowHeader: true,
                expandable: false,
                selectable: false,
            },
        });
        table.cell({ row: 1, col: 1 }).should("contain.text", "A1");
        table.cell({ row: 1, col: 2 }).should("contain.text", "B1");
        table.cell({ row: 1, col: 3 }).should("contain.text", "C1");
        table.cell({ row: 2, col: 1 }).should("contain.text", "A2");
        table.cell({ row: 2, col: 2 }).should("contain.text", "B2");
        table.cell({ row: 2, col: 3 }).should("contain.text", "C2");
        table.cell({ row: 3, col: 1 }).should("contain.text", "A3");
        table.cell({ row: 3, col: 2 }).should("contain.text", "B3");
        table.cell({ row: 3, col: 3 }).should("contain.text", "C3");
    });

    it("should not include column with selectable checkbox", () => {
        cy.mount(TestComponent, {
            props: {
                rows,
                rowHeader: false,
                expandable: false,
                selectable: true,
            },
        });
        table.cell({ row: 1, col: 1 }).should("contain.text", "A1");
        table.cell({ row: 1, col: 2 }).should("contain.text", "B1");
        table.cell({ row: 1, col: 3 }).should("contain.text", "C1");
        table.cell({ row: 2, col: 1 }).should("contain.text", "A2");
        table.cell({ row: 2, col: 2 }).should("contain.text", "B2");
        table.cell({ row: 2, col: 3 }).should("contain.text", "C2");
        table.cell({ row: 3, col: 1 }).should("contain.text", "A3");
        table.cell({ row: 3, col: 2 }).should("contain.text", "B3");
        table.cell({ row: 3, col: 3 }).should("contain.text", "C3");
    });

    it("should not include column with expandable marker", () => {
        cy.mount(TestComponent, {
            props: {
                rows,
                rowHeader: false,
                expandable: true,
                selectable: false,
            },
        });
        table.cell({ row: 1, col: 1 }).should("contain.text", "A1");
        table.cell({ row: 1, col: 2 }).should("contain.text", "B1");
        table.cell({ row: 1, col: 3 }).should("contain.text", "C1");
        table.cell({ row: 2, col: 1 }).should("contain.text", "A2");
        table.cell({ row: 2, col: 2 }).should("contain.text", "B2");
        table.cell({ row: 2, col: 3 }).should("contain.text", "C2");
        table.cell({ row: 3, col: 1 }).should("contain.text", "A3");
        table.cell({ row: 3, col: 2 }).should("contain.text", "B3");
        table.cell({ row: 3, col: 3 }).should("contain.text", "C3");
    });

    it("should select expandable rows only when parent row is expanded", () => {
        cy.mount(TestComponent, {
            props: {
                rows,
                rowHeader: false,
                expandable: true,
                selectable: false,
            },
        });
        table.row(0).click();
        table.cell({ row: 1, col: 1 }).should("contain.text", "A1");
        table.cell({ row: 1, col: 2 }).should("contain.text", "B1");
        table.cell({ row: 1, col: 3 }).should("contain.text", "C1");

        table.cell({ row: 2, col: 1 }).should("contain.text", "A1a");
        table.cell({ row: 2, col: 2 }).should("contain.text", "B1a");
        table.cell({ row: 2, col: 3 }).should("contain.text", "C1a");
        table.cell({ row: 3, col: 1 }).should("contain.text", "A1b");
        table.cell({ row: 3, col: 2 }).should("contain.text", "B1b");
        table.cell({ row: 3, col: 3 }).should("contain.text", "C1b");
        table.cell({ row: 4, col: 1 }).should("contain.text", "A1c");
        table.cell({ row: 4, col: 2 }).should("contain.text", "B1c");
        table.cell({ row: 4, col: 3 }).should("contain.text", "C1c");

        table.cell({ row: 5, col: 1 }).should("contain.text", "A2");
        table.cell({ row: 5, col: 2 }).should("contain.text", "B2");
        table.cell({ row: 5, col: 3 }).should("contain.text", "C2");
        table.cell({ row: 6, col: 1 }).should("contain.text", "A3");
        table.cell({ row: 6, col: 2 }).should("contain.text", "B3");
        table.cell({ row: 6, col: 3 }).should("contain.text", "C3");
    });
});
