import { h } from "vue";
import { FTable, defineTableColumns } from "../components";
import { useDatasetRef } from "../utils";
import { FTablePageObject } from "./FTable.pageobject";

const table = new FTablePageObject();

const TABLE_CLASS = {
    HEADER_EXPAND: "table-ng__column--expand",
    HEADER_SELECT: "table-ng__column--selectable",
    CELL_EXPAND: "table-ng__cell--expand",
    CELL_SELECT: "table-ng__cell--selectable",
};

interface Row {
    rowheader: string;
    text: string;
    input: string;
    button: string;
    anchor: string;
    nested?: Row[];
}

const rows: Row[] = [
    {
        rowheader: "A1",
        text: "A2",
        input: "A3",
        button: "A4",
        anchor: "A5",
        nested: [
            {
                rowheader: "A-A1",
                text: "A-A2",
                input: "A-A3",
                button: "A-A4",
                anchor: "A-A5",
            },
            {
                rowheader: "A-B1",
                text: "A-B2",
                input: "A-B3",
                button: "A-B4",
                anchor: "A-B5",
            },
        ],
    },
    {
        rowheader: "B1",
        text: "B2",
        input: "B3",
        button: "B4",
        anchor: "B5",
    },
];

const dataset = useDatasetRef(
    rows.map(({ nested, ...it }) => ({ ...it })),
).value;
const expandableDataset = useDatasetRef(
    rows.map((it) => ({ ...it })),
    "nested",
).value;

const columns = defineTableColumns<Row>([
    {
        type: "rowheader",
        header: "Rowheader",
        description: "Column 1",
        key: "rowheader",
    },
    {
        type: "text",
        header: "Text",
        description: "Column 2",
        key: "text",
    },
    {
        type: "text",
        header: "Input",
        description: "Column 3",
        key: "input",
        editable: true,
        label: () => "Input label",
        value(row) {
            return row.input;
        },
    },
    {
        type: "button",
        header: "Button",
        description: "Column 4",
        key: "button",
        icon: "trashcan",
        text(row) {
            return row.button;
        },
    },
    {
        header: "Anchor",
        description: "Column 5",
        type: "anchor",
        key: "anchor",
        href: "#",
        text(row) {
            return row.anchor;
        },
    },
]);

beforeEach(() => {
    cy.viewport(1024, 768);
});

it("el() should get root element", () => {
    cy.mount(() => h(FTable<Row>, { columns, rows: dataset }));
    table.el().should("have.prop", "tagName", "TABLE");
});

it("header()", () => {
    it("should get correct header", () => {
        cy.mount(() => h(FTable<Row>, { columns, rows: dataset }));
        table.header(1).should("contain.text", "Rowheader");
        table.header(2).should("contain.text", "Text");
        table.header(3).should("contain.text", "Input");
        table.header(4).should("contain.text", "Button");
        table.header(5).should("contain.text", "Anchor");
    });

    it("should include expand header in header()", () => {
        cy.mount(() =>
            h(FTable<Row>, {
                columns,
                rows: expandableDataset,
            }),
        );
        table.header(1).should("have.class", TABLE_CLASS.HEADER_EXPAND);
    });

    it("should include select header in header()", () => {
        cy.mount(() =>
            h(FTable<Row>, {
                columns,
                rows: dataset,
                selectable: "multi",
            }),
        );
        table.header(1).should("have.class", TABLE_CLASS.HEADER_SELECT);
    });
});

it("headerTitle()", () => {
    it("should get correct header title", () => {
        cy.mount(() =>
            h(FTable<Row>, {
                columns,
                rows: dataset,
            }),
        );
        table.headerTitle(1).should("contain.text", "Rowheader");
        table.headerTitle(2).should("contain.text", "Text");
        table.headerTitle(3).should("contain.text", "Input");
        table.headerTitle(4).should("contain.text", "Button");
        table.headerTitle(5).should("contain.text", "Anchor");
    });

    it("should include expand header in headerTitle()", () => {
        cy.mount(() =>
            h(FTable<Row>, {
                columns,
                rows: expandableDataset,
            }),
        );
        table.headerTitle(2).should("have.class", "Rowheader");
    });

    it("should include select header in headerTitle()", () => {
        cy.mount(() =>
            h(FTable<Row>, {
                columns,
                rows: dataset,
                selectable: "multi",
            }),
        );
        table.headerTitle(2).should("have.class", "Rowheader");
    });
});

it("headerDescription()", () => {
    it("should get correct header description", () => {
        cy.mount(() =>
            h(FTable<Row>, {
                columns,
                rows: dataset,
            }),
        );
        table.headerDescription(1).should("contain.text", "Column 1");
        table.headerDescription(2).should("contain.text", "Column 2");
        table.headerDescription(3).should("contain.text", "Column 3");
        table.headerDescription(4).should("contain.text", "Column 4");
        table.headerDescription(5).should("contain.text", "Column 5");
    });

    it("should include expand header in headerDescription()", () => {
        cy.mount(() =>
            h(FTable<Row>, {
                columns,
                rows: expandableDataset,
            }),
        );
        table.headerDescription(2).should("have.class", "Rowheader");
    });

    it("should include select header in headerDescription()", () => {
        cy.mount(() =>
            h(FTable<Row>, {
                columns,
                rows: dataset,
                selectable: "multi",
            }),
        );
        table.headerDescription(2).should("have.class", "Rowheader");
    });
});

describe("cell()", () => {
    it("should get correct cell", () => {
        cy.mount(() =>
            h(FTable<Row>, {
                columns,
                rows: dataset,
            }),
        );

        table.cell({ row: 1, col: 1 }).should("contain.text", "A1");
        table.cell({ row: 1, col: 2 }).should("contain.text", "A2");
        table.cell({ row: 1, col: 3 }).should("contain.text", "A3");
        table.cell({ row: 1, col: 4 }).should("contain.text", "A4");
        table.cell({ row: 1, col: 5 }).should("contain.text", "A5");

        table.cell({ row: 2, col: 1 }).should("contain.text", "B1");
        table.cell({ row: 2, col: 2 }).should("contain.text", "B2");
        table.cell({ row: 2, col: 3 }).should("contain.text", "B3");
        table.cell({ row: 2, col: 4 }).should("contain.text", "B4");
        table.cell({ row: 2, col: 5 }).should("contain.text", "B5");
    });

    it("should include column with expand button", () => {
        cy.mount(() =>
            h(FTable<Row>, {
                columns,
                rows: expandableDataset,
            }),
        );

        table
            .cell({ row: 1, col: 1 })
            .should("have.class", TABLE_CLASS.CELL_EXPAND);
        table
            .cell({ row: 2, col: 1 })
            .should("have.class", TABLE_CLASS.CELL_EXPAND);
    });

    it("should include column with select checkbox", () => {
        cy.mount(() =>
            h(FTable<Row>, {
                columns,
                rows: dataset,
                selectable: "multi",
            }),
        );

        table
            .cell({ row: 1, col: 1 })
            .should("have.class", TABLE_CLASS.CELL_SELECT);
        table
            .cell({ row: 2, col: 1 })
            .should("have.class", TABLE_CLASS.CELL_SELECT);
    });

    it("should get cells in expandable row when expanded", () => {
        cy.mount(() =>
            h(FTable<Row>, {
                columns,
                rows: expandableDataset,
            }),
        );

        table.cell({ row: 2, col: 2 }).should("contain.text", "B1");
        table.cell({ row: 2, col: 3 }).should("contain.text", "B2");
        table.cell({ row: 2, col: 4 }).should("contain.text", "B3");
        table.cell({ row: 2, col: 5 }).should("contain.text", "B4");
        table.cell({ row: 2, col: 6 }).should("contain.text", "B5");

        table.expandButton(1).click();
        table.cell({ row: 2, col: 2 }).should("contain.text", "A-A1");
        table.cell({ row: 2, col: 3 }).should("contain.text", "A-A2");
        table.cell({ row: 2, col: 4 }).should("contain.text", "A-A3");
        table.cell({ row: 2, col: 5 }).should("contain.text", "A-A4");
        table.cell({ row: 2, col: 6 }).should("contain.text", "A-A5");

        table.cell({ row: 3, col: 2 }).should("contain.text", "A-B1");
        table.cell({ row: 3, col: 3 }).should("contain.text", "A-B2");
        table.cell({ row: 3, col: 4 }).should("contain.text", "A-B3");
        table.cell({ row: 3, col: 5 }).should("contain.text", "A-B4");
        table.cell({ row: 3, col: 6 }).should("contain.text", "A-B5");
    });

    it("should get custom expandable row when expanded", () => {
        cy.mount(() =>
            h(
                FTable<Row>,
                {
                    columns,
                    rows: expandableDataset,
                },
                {
                    expandable: (scope: { row: Row }) => scope.row.rowheader,
                },
            ),
        );

        table.cell({ row: 2, col: 2 }).should("contain.text", "B1");
        table.cell({ row: 2, col: 3 }).should("contain.text", "B2");
        table.cell({ row: 2, col: 4 }).should("contain.text", "B3");
        table.cell({ row: 2, col: 5 }).should("contain.text", "B4");
        table.cell({ row: 2, col: 6 }).should("contain.text", "B5");

        table.expandButton(1).click();
        table.cell({ row: 2, col: 2 }).should("contain.text", "A-A1");
        table.cell({ row: 3, col: 2 }).should("contain.text", "A-B1");
    });
});

it("expandButton() should get expand button", () => {
    cy.mount(() =>
        h(FTable<Row>, {
            columns,
            rows: expandableDataset,
        }),
    );
    table.expandButton(1).should("have.prop", "tagName", "BUTTON");
    table.expandButton(2).should("not.exist");
});

describe("selectInput()", () => {
    it("should get multiselect input", () => {
        cy.mount(() =>
            h(FTable<Row>, {
                columns,
                rows: dataset,
                selectable: "multi",
            }),
        );
        table.selectInput(1).should("have.prop", "tagName", "INPUT");
        table.selectInput(2).should("have.prop", "tagName", "INPUT");
    });

    it("should get single select input", () => {
        cy.mount(() =>
            h(FTable<Row>, {
                columns,
                rows: dataset,
                selectable: "single",
            }),
        );
        table.selectInput(1).should("have.prop", "tagName", "INPUT");
        table.selectInput(2).should("have.prop", "tagName", "INPUT");
    });
});

it("selectHeaderInput() should get input when table is multiselect", () => {
    cy.mount(() =>
        h(FTable<Row>, {
            columns,
            rows: dataset,
            selectable: "multi",
        }),
    );
    table.selectHeaderInput().should("have.prop", "tagName", "INPUT");
});

it("footer() should get table footer when footer slot is used", () => {
    cy.mount(() =>
        h(
            FTable<Row>,
            {
                columns,
                rows: dataset,
            },
            {
                footer: "Footer",
            },
        ),
    );
    table.footer().should("have.prop", "tagName", "TFOOT");
    table.footer().should("contain.text", "Footer");
});

describe("tabbableElement()", () => {
    it("should get current tabbable element", () => {
        cy.mount(() =>
            h(FTable<Row>, {
                columns,
                rows: dataset,
            }),
        );
        table.tabbableElement().focus();
        table.cell({ row: 1, col: 1 }).should("be.focused");

        cy.focused().trigger("keydown", { code: "ArrowRight" });
        table.cell({ row: 1, col: 2 }).should("be.focused");

        cy.focused().blur();
        table.cell({ row: 1, col: 2 }).should("not.be.focused");

        table.tabbableElement().focus();
        table.cell({ row: 1, col: 2 }).should("be.focused");
    });

    it("should get current tabbable element if table is expandable", () => {
        cy.mount(() =>
            h(FTable<Row>, {
                columns,
                rows: expandableDataset,
            }),
        );
        table.tabbableElement().focus();
        table.expandButton(1).should("be.focused");
    });

    it("should get current tabbable element if table is selectable", () => {
        cy.mount(() =>
            h(FTable<Row>, {
                columns,
                rows: dataset,
                selectable: "multi",
            }),
        );
        table.tabbableElement().focus();
        table.selectInput(1).should("be.focused");
    });
});

describe("rows()", () => {
    it("should get all rows", () => {
        cy.mount(() =>
            h(FTable<Row>, {
                columns,
                rows: dataset,
            }),
        );
        table.rows().should("have.length", 2);
    });

    it("should include expandable rows if expanded", () => {
        cy.mount(() =>
            h(FTable<Row>, {
                columns,
                rows: expandableDataset,
            }),
        );
        table.rows().should("have.length", 2);

        table.expandButton(1).click();
        table.rows().should("have.length", 4);
    });
});

it("selectDropdown() should get dropdown when open", () => {
    interface SelectRow {
        option: string;
    }

    const selectRows = useDatasetRef<SelectRow>([
        { option: "Foo" },
        { option: "Bar" },
    ]);
    const selectColumns = defineTableColumns<SelectRow>([
        {
            type: "select",
            header: "Header",
            options: ["Foo", "Bar", "Baz"],
            key: "option",
            label: () => "Label",
        },
    ]);
    cy.mount(() =>
        h(FTable<SelectRow>, {
            columns: selectColumns,
            rows: selectRows.value,
        }),
    );
    table.selectDropdown().should("not.exist");
    table.cell({ row: 1, col: 1 }).click();
    table.selectDropdown().should("exist");
});

it("selectDropdownOption() should get options when dropdown is open", () => {
    interface SelectRow {
        option: string;
    }

    const selectRows = useDatasetRef<SelectRow>([
        { option: "Foo" },
        { option: "Bar" },
    ]);
    const selectColumns = defineTableColumns<SelectRow>([
        {
            type: "select",
            header: "Header",
            options: ["Foo", "Bar", "Baz"],
            key: "option",
            label: () => "Label",
        },
    ]);
    cy.mount(() =>
        h(FTable<SelectRow>, {
            columns: selectColumns,
            rows: selectRows.value,
        }),
    );
    table.selectDropdownOption(1).should("not.exist");
    table.cell({ row: 1, col: 1 }).click();
    table.selectDropdownOption(1).should("contain.text", "Foo");
    table.selectDropdownOption(2).should("contain.text", "Bar");
});
