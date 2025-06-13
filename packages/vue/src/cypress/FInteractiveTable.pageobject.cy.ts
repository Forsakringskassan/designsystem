import { defineComponent } from "vue";
import {
    FInteractiveTable,
    FTableColumn,
    FSortFilterDataset,
} from "../components";
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
            <template #caption> Test table </template>
            <template #checkbox-description="{ row }">
                Select row {{ row.a }}
            </template>
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

const table = new FInteractiveTablePageObject();

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

it("`caption()` should get `<caption>` element", () => {
    cy.mount(TestComponent, {
        props: {
            rows,
            rowHeader: false,
            expandable: false,
            selectable: false,
        },
    });

    table.caption().should("contain.text", "Test table");
    table.caption().should("have.prop", "tagName", "CAPTION");
});

describe("`header()`", () => {
    it("should get correct `<th>` element in `<thead>`", () => {
        cy.mount(TestComponent, {
            props: {
                rows,
                rowHeader: false,
                expandable: false,
                selectable: false,
            },
        });

        table.header(1).should("have.trimmedText", "A");
        table.header(2).should("have.trimmedText", "B");
        table.header(3).should("have.trimmedText", "C");
    });

    it("should not include column header for expandable marker", () => {
        cy.mount(TestComponent, {
            props: {
                rows,
                rowHeader: false,
                expandable: true,
                selectable: false,
            },
        });

        table.header(1).should("have.trimmedText", "A");
        table.header(2).should("have.trimmedText", "B");
        table.header(3).should("have.trimmedText", "C");
    });

    it("should not include column header for selectable checkbox", () => {
        cy.mount(TestComponent, {
            props: {
                rows,
                rowHeader: false,
                expandable: false,
                selectable: true,
            },
        });

        table.header(1).should("have.trimmedText", "A");
        table.header(2).should("have.trimmedText", "B");
        table.header(3).should("have.trimmedText", "C");
    });
});

it("`headersRow()` should get all `<th>` elements in `<thead>`", () => {
    cy.mount(TestComponent, {
        props: {
            rows,
            rowHeader: true,
            expandable: true,
            selectable: true,
        },
    });

    // Includes `<th>` for selectable and expandable.
    table.headersRow().should("have.length", 5);
    table.headersRow().eq(0).should("have.prop", "tagName", "TH");
    table.headersRow().eq(0).should("exist");
    table.headersRow().eq(1).should("exist");
    table.headersRow().eq(2).should("have.trimmedText", "A");
    table.headersRow().eq(3).should("have.trimmedText", "B");
    table.headersRow().eq(4).should("have.trimmedText", "C");
});

describe("`bodyRow()`", () => {
    it("should get all `<tr>` elements in `<tbody>`", () => {
        cy.mount(TestComponent, {
            props: {
                rows,
                rowHeader: false,
                expandable: false,
                selectable: false,
            },
        });

        table.bodyRow().should("have.length", 3);
        table.bodyRow().eq(0).find("td").eq(0).should("have.trimmedText", "A1");
        table.bodyRow().eq(1).find("td").eq(0).should("have.trimmedText", "A2");
        table.bodyRow().eq(2).find("td").eq(0).should("have.trimmedText", "A3");
        table.bodyRow().eq(0).should("have.prop", "tagName", "TR");
        table.bodyRow().eq(1).should("have.prop", "tagName", "TR");
        table.bodyRow().eq(2).should("have.prop", "tagName", "TR");
    });

    it("should be able to get collapsed expandable rows", () => {
        cy.mount(TestComponent, {
            props: {
                rows,
                rowHeader: false,
                expandable: true,
                selectable: false,
            },
        });

        table.bodyRow().should("have.length", 6);
        table
            .bodyRow()
            .eq(1)
            .find("td")
            .eq(1)
            .should("have.trimmedText", "A1a");
        table
            .bodyRow()
            .eq(2)
            .find("td")
            .eq(1)
            .should("have.trimmedText", "A1b");
        table
            .bodyRow()
            .eq(3)
            .find("td")
            .eq(1)
            .should("have.trimmedText", "A1c");
    });

    it("should be able to get expanded expandable rows", () => {
        cy.mount(TestComponent, {
            props: {
                rows,
                rowHeader: false,
                expandable: true,
                selectable: false,
            },
        });

        table.row(0).click();
        table.bodyRow().should("have.length", 6);
        table
            .bodyRow()
            .eq(1)
            .find("td")
            .eq(1)
            .should("have.trimmedText", "A1a");
        table
            .bodyRow()
            .eq(2)
            .find("td")
            .eq(1)
            .should("have.trimmedText", "A1b");
        table
            .bodyRow()
            .eq(3)
            .find("td")
            .eq(1)
            .should("have.trimmedText", "A1c");
    });
});

describe("`row()`", () => {
    it("should get correct `<tr>` in `<tbody>`", () => {
        cy.mount(TestComponent, {
            props: {
                rows,
                rowHeader: false,
                expandable: false,
                selectable: false,
            },
        });

        table.row(0).find("td").eq(0).should("have.trimmedText", "A1");
        table.row(1).find("td").eq(0).should("have.trimmedText", "A2");
        table.row(2).find("td").eq(0).should("have.trimmedText", "A3");
        table.row(3).should("not.exist");
        table.row(0).should("have.prop", "tagName", "TR");
        table.row(1).should("have.prop", "tagName", "TR");
        table.row(2).should("have.prop", "tagName", "TR");
    });

    it("should be able to get collapsed expandable rows", () => {
        cy.mount(TestComponent, {
            props: {
                rows,
                rowHeader: false,
                expandable: true,
                selectable: false,
            },
        });

        table.row(1).find("td").eq(1).should("have.trimmedText", "A1a");
        table.row(2).find("td").eq(1).should("have.trimmedText", "A1b");
        table.row(3).find("td").eq(1).should("have.trimmedText", "A1c");
    });

    it("should be able to get expanded expandable rows", () => {
        cy.mount(TestComponent, {
            props: {
                rows,
                rowHeader: false,
                expandable: true,
                selectable: false,
            },
        });

        table.row(0).click();
        table.row(1).find("td").eq(1).should("have.trimmedText", "A1a");
        table.row(2).find("td").eq(1).should("have.trimmedText", "A1b");
        table.row(3).find("td").eq(1).should("have.trimmedText", "A1c");
    });
});

describe("`checkbox()`", () => {
    it("should get `FCheckboxFieldPageObject` for given row", () => {
        cy.mount(TestComponent, {
            props: {
                rows,
                rowHeader: false,
                expandable: false,
                selectable: true,
            },
        });

        table.checkbox(1).label().should("contain.text", "Select row A1");
        table.checkbox(2).label().should("contain.text", "Select row A2");
        table.checkbox(3).label().should("contain.text", "Select row A3");
    });

    it("should count expanded rows", () => {
        cy.mount(TestComponent, {
            props: {
                rows,
                rowHeader: false,
                expandable: true,
                selectable: true,
            },
        });

        table.row(0).click();
        table.checkbox(1).label().should("contain.text", "Select row A1");
        table.checkbox(5).label().should("contain.text", "Select row A2");
        table.checkbox(6).label().should("contain.text", "Select row A3");
    });

    it("should ignore collapsed rows", () => {
        cy.mount(TestComponent, {
            props: {
                rows,
                rowHeader: false,
                expandable: true,
                selectable: true,
            },
        });

        table.checkbox(1).label().should("contain.text", "Select row A1");
        table.checkbox(2).label().should("contain.text", "Select row A2");
        table.checkbox(3).label().should("contain.text", "Select row A3");
    });
});

it("`columnItem()` should get `FTableColumnPageObject` for given row index", () => {
    cy.mount(TestComponent, {
        props: {
            rows,
            rowHeader: false,
            expandable: true,
            selectable: true,
        },
    });

    table
        .columnItem(0)
        .tableRowHeaderContent()
        .eq(2)
        .should("have.trimmedText", "A");
    table
        .columnItem(0)
        .tableRowHeaderContent()
        .eq(3)
        .should("have.trimmedText", "B");
    table
        .columnItem(0)
        .tableRowHeaderContent()
        .eq(4)
        .should("have.trimmedText", "C");
    table.columnItem(1).tableRowBodyContent(2).should("have.trimmedText", "A1");
    table.columnItem(1).tableRowBodyContent(3).should("have.trimmedText", "B1");
    table.columnItem(1).tableRowBodyContent(4).should("have.trimmedText", "C1");
});

it("`headerRowItem()` should get `FTableColumnPageObject` for header row", () => {
    cy.mount(TestComponent, {
        props: {
            rows,
            rowHeader: false,
            expandable: true,
            selectable: true,
        },
    });

    table.headerRowItem().tableRowHeaderContent().should("have.length", 5);
    table.headerRowItem().tableRowHeaderContent().eq(0).should("exist");
    table.headerRowItem().tableRowHeaderContent().eq(1).should("exist");
    table
        .headerRowItem()
        .tableRowHeaderContent()
        .eq(2)
        .should("have.trimmedText", "A");
    table
        .headerRowItem()
        .tableRowHeaderContent()
        .eq(3)
        .should("have.trimmedText", "B");
    table
        .headerRowItem()
        .tableRowHeaderContent()
        .eq(4)
        .should("have.trimmedText", "C");
});

it("`getColumnSortedByIcon()` should get sort icon of given column and order", () => {
    const SortedComponent = defineComponent({
        components: { FInteractiveTable, FTableColumn, FSortFilterDataset },
        data() {
            return {
                sortableAttributes: {
                    a: "A",
                    b: "B",
                    c: "C",
                },
                rows,
            };
        },
        template: /* HTML */ `
            <f-sort-filter-dataset
                :data="rows"
                default-sort-attribute="a"
                :default-sort-ascending="true"
                :sortable-attributes="sortableAttributes"
            >
                <template #default="{ sortFilterResult }">
                    <f-interactive-table
                        :rows="sortFilterResult"
                        selectable
                        expandable-attribute="nested"
                    >
                        <template #caption> Test table </template>
                        <template #checkbox-description> Select row </template>
                        <template #default="{ row }">
                            <f-table-column name="a" title="A">
                                {{ row.a }}
                            </f-table-column>
                            <f-table-column name="b" title="B">
                                {{ row.b }}
                            </f-table-column>
                            <f-table-column name="c" title="C">
                                {{ row.c }}
                            </f-table-column>
                        </template>
                    </f-interactive-table>
                </template>
            </f-sort-filter-dataset>
        `,
    });
    cy.mount(SortedComponent);

    table.getColumnSortedByIcon(2, "ascending").should("exist");
    table.getColumnSortedByIcon(2, "descending").should("not.exist");
    table.getColumnSortedByIcon(2, "unsorted").should("not.exist");

    table.headersRow().eq(2).click();
    table.getColumnSortedByIcon(2, "ascending").should("not.exist");
    table.getColumnSortedByIcon(2, "descending").should("exist");
    table.getColumnSortedByIcon(2, "unsorted").should("not.exist");

    table.headersRow().eq(2).click();
    table.getColumnSortedByIcon(2, "ascending").should("not.exist");
    table.getColumnSortedByIcon(2, "descending").should("not.exist");
    table.getColumnSortedByIcon(2, "unsorted").should("exist");
});
