import { type DefineComponent, type VNode, defineComponent, ref } from "vue";
import { h } from "vue";
import { assertSet } from "@fkui/logic";
import { FTablePageObject } from "../../cypress";
import { type FTableApi } from "./f-table-api";
import { FTable, TableColumn, defineTableColumns } from ".";

const table = new FTablePageObject();

interface TableOptions {
    expandable?: "custom" | "rows";
    columns?: Array<TableColumn<Row, keyof Row>>;
    selectable?: "multi" | "single";
    striped?: boolean;
    empty?: boolean;
    filter?: boolean;
}

interface Row {
    rowheader: string;
    text: string;
    input: string;
    button: string;
    anchor: string;
    dropdown: string;
    checkbox: boolean;
    radio: boolean;
}

const defaultColumns = defineTableColumns<Row>([
    {
        type: "rowheader",
        header: "Rowheader",
        key: "rowheader",
    },
    {
        type: "text",
        header: "Text",
        key: "text",
    },
    {
        type: "text",
        header: "Input",
        key: "input",
        editable: true,
        label: () => "Input label",
        value: (row) => row.input,
    },
    {
        type: "button",
        header: "Button",
        key: "button",
        icon: "trashcan",
        value: (row) => row.button,
    },
    {
        header: "Anchor",
        type: "anchor",
        key: "anchor",
        href: "#",
        value: (row) => row.anchor,
    },
]);

function createComponent(options: TableOptions = {}): DefineComponent {
    const { selectable, expandable, striped, empty } = options;
    const stripedAttr = striped ? "striped" : "";
    const expandableAttr = expandable ? 'expandable-attribute="nested"' : "";
    const expandableSlot =
        expandable === "custom"
            ? "<template #expandable='{ row }'> {{ row.name }} </template>"
            : "";

    return defineComponent({
        template: /* HTML */ `
            <f-table
                :rows="${empty ? "[]" : "rows"}"
                :columns
                selectable="${selectable}"
                ${expandableAttr}
                ${stripedAttr}
            >
                ${expandableSlot}
            </f-table>
        `,
        components: {
            FTable,
        },
        data() {
            return {
                rows: [
                    {
                        rowheader: "A1",
                        text: "A2",
                        input: "A3",
                        button: "A4",
                        anchor: "A5",
                        dropdown: "Foo",
                        checkbox: false,
                        radio: false,

                        nested: [
                            {
                                rowheader: "A-A1",
                                text: "A-A2",
                                input: "A-A3",
                                button: "A-A4",
                                anchor: "A-A5",
                                dropdown: "Foo",
                                checkbox: false,
                                radio: false,
                            },
                            {
                                rowheader: "A-B1",
                                text: "A-B2",
                                input: "A-B3",
                                button: "A-B4",
                                anchor: "A-B5",
                                dropdown: "Foo",
                                checkbox: false,
                                radio: false,
                            },
                        ],
                    },
                    {
                        rowheader: "B1",
                        text: "B2",
                        input: "B3",
                        button: "B4",
                        anchor: "B5",
                        dropdown: "Foo",
                        checkbox: false,
                        radio: false,
                    },
                    {
                        rowheader: "C1",
                        text: "C2",
                        input: "C3",
                        button: "C4",
                        anchor: "C5",
                        dropdown: "Foo",
                        checkbox: false,
                        radio: false,

                        nested: [
                            {
                                rowheader: "C-A1",
                                text: "C-A2",
                                input: "C-A3",
                                button: "C-A4",
                                anchor: "C-A5",
                                dropdown: "Foo",
                                checkbox: false,
                                radio: false,
                            },
                            {
                                rowheader: "C-B1",
                                text: "C-B2",
                                input: "C-B3",
                                button: "C-B4",
                                anchor: "C-B5",
                                dropdown: "Foo",
                                checkbox: false,
                                radio: false,
                            },
                        ],
                    },
                ],
                columns: options.columns ? options.columns : defaultColumns,
            };
        },
    });
}

function renderButton(
    text: string,
    dataTest: string,
    onClick?: () => void,
): VNode {
    return h(
        "button",
        {
            type: "button",
            "data-test": dataTest,
            onClick,
        },
        text,
    );
}

function getTestSelector(value: string): string {
    return `[data-test="${value}"]`;
}

describe("1.1 Caption", () => {
    it.skip("should render visible caption when provided", () => {
        //todo not implemented
        //Konsumenten ska kunna sätta caption och bestämma om den ska vara SR-only eller ej.
    });

    it.skip("should render caption as sr-only when specified", () => {
        //todo not implemented
        //Konsumenten ska kunna sätta caption och bestämma om den ska vara SR-only eller ej.
    });

    it.skip("should not render caption when slot is omitted", () => {
        //todo not implemented
    });
});

describe("1.3", () => {
    it("Should set correct headertext 1.3", () => {
        cy.mount(createComponent());
        table.header(1).should("contain.text", "Rowheader");
        table.header(2).should("contain.text", "Text");
        table.header(3).should("contain.text", "Input");
        table.header(4).should("contain.text", "Button");
        table.header(5).should("contain.text", "Anchor");
    });
    it.skip("should be left-aligned by default", () => {
        //todo

        cy.mount(createComponent());
    });
    it.skip("should be left-aligned without tnum for text columns", () => {
        //todo
    });

    it.skip("should allow consumer to override alignment and tnum", () => {
        //todo
    });

    it.skip("should render icon next to header text if provided", () => {
        //help icon i rubriken
        //todo

        const testColumns = defineTableColumns<Row>([
            {
                type: "rowheader",
                header: "Status",
                key: "rowheader",
                icon: "trashcan",
                value(row) {
                    return row.rowheader;
                },
            },
        ]);
        cy.mount(createComponent({ columns: testColumns }));
        table.header(1).within(() => {
            cy.get("svg, .icon").should("exist");
            cy.contains("Status");
        });
    });

    it.skip("should render description under header", () => {
        //todo
    });

    it.skip("should render help format on header", () => {
        //todo
    });

    it.skip("should render screen reader text on header", () => {
        //todo
    });
});

describe("1.4", () => {
    it("should set rowheader 1.4", () => {
        cy.mount(createComponent());
        table.cell({ row: 1, col: 1 }).should("have.prop", "tagName", "TH");
        table.cell({ row: 2, col: 1 }).should("have.prop", "tagName", "TH");
    });

    it("should set rowheader on expandable rows 1.4", () => {
        cy.mount(createComponent({ expandable: "rows" }));
        table.expandButton(1).click();
        table.cell({ row: 1, col: 2 }).should("have.prop", "tagName", "TH");
        table.cell({ row: 2, col: 2 }).should("have.prop", "tagName", "TH");
        table.cell({ row: 3, col: 2 }).should("have.prop", "tagName", "TH");
        table.cell({ row: 4, col: 2 }).should("have.prop", "tagName", "TH");
    });
});

describe("1.5", () => {
    it("should have correct class for striped 1.5", () => {
        cy.mount(createComponent({ striped: true }));
        table.el().should("have.class", "table-ng--striped");
    });

    it.skip("should have correct striped appearence 1.5", () => {
        //screenshot
        cy.mount(createComponent({ striped: true }));
        cy.toMatchScreenshot();
    });

    it.skip("should have correct seperator when not striped 1.5", () => {
        cy.mount(createComponent());
        cy.toMatchScreenshot();
    });

    it.skip("should have correct class for expandable 1.5", () => {
        cy.mount(createComponent({ expandable: "rows", striped: true }));
        table.expandButton(1).click();
        cy.toMatchScreenshot();
    });

    it.skip("should have correct class for separator 1.5", () => {
        //TODO
        //  cy.mount(createComponent({ striped: true }));
        // table.el().should("have.class", "table-ng--striped");
    });

    it.skip("should have correct separator appearence 1.5", () => {
        //TODO not implemented
        // cy.mount(createComponent({ separator: true }));
        cy.toMatchScreenshot();
    });
    it.skip("should have correct separator class for expandable 1.5", () => {
        //TODO not implemented
        cy.mount(createComponent({ expandable: "rows", striped: true }));
        table.expandButton(1).click();
        cy.toMatchScreenshot();
    });
});

describe("1.6 columnwidth", () => {
    it("should fill the full available width", () => {
        //todo screenshot not implemented
    });

    it("should allow column to take maximum width", () => {
        //todo screenshot not implemented
    });

    it("should allow column to take minimal width", () => {
        //todo screenshot not implemented
    });
});

describe("1.7 Format", () => {
    it("should format value using standardformat", () => {
        //todo
    });

    it("should format value using custom formatter from consumer", () => {
        //todo
    });

    it("should format value using format() function from consumer", () => {
        //todo
    });
});

it.skip("1.8 should be able to focus empty row ", () => {
    //todo not implemented
    cy.mount(createComponent({ empty: true }));
    table.tabbableElement().focus();
    table.cell({ row: 1, col: 1 }).should("have.focus");
});

describe("1.9 screen reader text sr-only", () => {
    it("should render screen reader text on column header", () => {
        //todo
    });

    it("should render screen reader text inside cell", () => {
        //todo
    });

    it("should not render sr-only text when not provided", () => {
        //todo
    });
});

describe("1.10", () => {
    it("should have correct focus on button 1.10", () => {
        const testColumns = defineTableColumns<Row>([
            {
                type: "button",
                header: "Button",
                key: "button",
                icon: "trashcan",
                value(row) {
                    return row.button;
                },
            },
        ]);

        cy.mount(createComponent({ columns: testColumns }));
        table.tabbableElement().focus();
        table.cell({ row: 1, col: 1 }).find("button").should("have.focus");
        cy.focused().trigger("keydown", { code: "ArrowDown" });
        table.cell({ row: 2, col: 1 }).find("button").should("have.focus");
    });

    it("should have correct focus on anchor 1.10", () => {
        const testColumns = defineTableColumns<Row>([
            {
                type: "anchor",
                header: "Anchor",
                key: "anchor",
                href: "#",
                value(row) {
                    return row.anchor;
                },
            },
        ]);

        cy.mount(createComponent({ columns: testColumns }));
        table.tabbableElement().focus();
        table.cell({ row: 1, col: 1 }).find("a").should("have.focus");
        cy.focused().trigger("keydown", { code: "ArrowDown" });
        table.cell({ row: 2, col: 1 }).find("a").should("have.focus");
    });

    it("should have correct focus on dropdown 1.10", () => {
        const testColumns = defineTableColumns<Row>([
            {
                type: "select",
                header: "Dropdown",
                key: "dropdown",
                options: ["Foo", "Bar", "Baz"],
                label: () => "Dropdown label",
                value(row) {
                    return row.dropdown;
                },
            },
        ]);

        cy.mount(createComponent({ columns: testColumns }));
        table.tabbableElement().focus();
        table.cell({ row: 1, col: 1 }).should("have.focus");
        cy.focused().trigger("keydown", { code: "ArrowDown" });
        table.cell({ row: 2, col: 1 }).should("have.focus");
    });

    it("should have correct focus on input 1.10", () => {
        const testColumns = defineTableColumns<Row>([
            {
                type: "text",
                header: "Input",
                key: "input",
                editable: true,
                label: () => "Input label",
                value(row) {
                    return row.input;
                },
            },
        ]);

        cy.mount(createComponent({ columns: testColumns }));
        table.tabbableElement().focus();
        table.cell({ row: 1, col: 1 }).should("have.focus").and("be.visible");
        cy.press(Cypress.Keyboard.Keys.DOWN);
        //cy.focused().trigger("keydown", { code: "ArrowDown" }); //bugg  jira SFKUI-7438

        table.cell({ row: 2, col: 1 }).should("have.focus");
    });

    it("should have correct focus on checkbox 1.10", () => {
        const testColumns = defineTableColumns<Row>([
            {
                type: "checkbox",
                header: "Check",
                key: "checkbox",
                editable: true,
                label: () => "Check label",
                value(row) {
                    return row.checkbox;
                },
            },
        ]);

        cy.mount(createComponent({ columns: testColumns }));
        table.tabbableElement().focus();
        table
            .cell({ row: 1, col: 1 })
            .find('input[type="checkbox"]')
            .should("have.focus");
        cy.focused().trigger("keydown", { code: "ArrowDown" });
        table
            .cell({ row: 2, col: 1 })
            .find('input[type="checkbox"]')
            .should("have.focus");
    });
});

it("should have correct focus on radio 1.10", () => {
    const testColumns = defineTableColumns<Row>([
        {
            type: "radio",
            header: "Radio",
            key: "radio",
            label: () => "Radio label",
            value(row) {
                return row.radio;
            },
        },
    ]);

    cy.mount(createComponent({ columns: testColumns }));
    table.tabbableElement().focus();
    table
        .cell({ row: 1, col: 1 })
        .find('input[type="radio"]')
        .should("have.focus");
    cy.focused().trigger("keydown", { code: "ArrowDown" });
    table
        .cell({ row: 2, col: 1 })
        .find('input[type="radio"]')
        .should("have.focus");
});

describe("1.12 ARIA-attribute", () => {
    it("should set aria-rowcount to total number of rows including hidden", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        table.el().should("have.attr", "aria-rowcount", "8");

        //parents
        table.expandButton(1).click();
        table.expandButton(5).click();

        table.el().should("have.attr", "aria-rowcount", "8");
    });

    it("should set aria-rowindex correctly for each visible row", () => {
        cy.mount(createComponent());

        table.rows().eq(0).should("have.attr", "aria-rowindex", "2");
        table.rows().eq(1).should("have.attr", "aria-rowindex", "3");
        table.rows().eq(2).should("have.attr", "aria-rowindex", "4");
    });

    it("should preserve aria-rowindex and rowcount with expandable rows", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        table.el().should("have.attr", "aria-rowcount", "8");

        table.rows().eq(0).should("have.attr", "aria-rowindex", "2");
        table.rows().eq(1).should("have.attr", "aria-rowindex", "5");
        table.rows().eq(2).should("have.attr", "aria-rowindex", "6");

        table.expandButton(1).click();
        table.expandButton(5).click();

        table.rows().eq(0).should("have.attr", "aria-rowindex", "2");
        table.rows().eq(1).should("have.attr", "aria-rowindex", "3");
        table.rows().eq(2).should("have.attr", "aria-rowindex", "4");
        table.rows().eq(3).should("have.attr", "aria-rowindex", "5");
        table.rows().eq(4).should("have.attr", "aria-rowindex", "6");
        table.rows().eq(5).should("have.attr", "aria-rowindex", "7");
    });

    it.skip("should preserve aria-rowindex even when rows are filtered", () => {
        //  filterfunktionen? todo
        cy.mount(createComponent({ expandable: "rows" }));

        // FSortFilterDataset kan filtrera.

        table.el().should("have.attr", "aria-rowcount", "4");
        table.rows().eq(0).should("have.attr", "aria-rowindex", "3");
    });
});

describe("1.13", () => {
    it("should programmatically activate a cell", () => {
        //todo
    });
});
describe("1.14", () => {
    it("should programmatically set focus on a cell", () => {
        //todo
    });
});
describe("1.15 focus after removing row", () => {
    it("should focus cell above after row is removed", () => {
        //todo
        cy.mount(createComponent({}));
    });

    it("should focus fallback cell when table is empty", () => {
        //todo
        cy.mount(createComponent({}));
    });
});
describe("1.16 Data loading", () => {
    it.skip("should show spinner after 1s and block interaction while loading", () => {
        //todo spinner?
        cy.clock(); // kontrollera tid manuellt

        cy.mount(createComponent({}));

        // Direkt efter mount: spinner ska inte synas

        // Efter 999ms: spinner ska fortfarande inte synas
        cy.tick(999);

        // Efter 1000ms: spinner ska synas
        cy.tick(1);

        // Tabell ska inte vara interagerbar ( inga tabbable element)
    });
});

describe("2.4 active compenents", () => {
    it.skip("should not show pen icon for input field when active", () => {
        //screenshot diff

        const testColumns = defineTableColumns<Row>([
            {
                type: "text",
                header: "Input",
                key: "input",
                editable: true,
                value(row) {
                    return row.input;
                },
            },
        ]);

        cy.mount(createComponent({ columns: testColumns }));

        table.cell({ row: 1, col: 1 }).click();
        cy.toMatchScreenshot();
    });

    it("should show arrow icon for dropdown when active", () => {
        //todo
    });

    it("should show arrow icon for combobox when active", () => {
        //todo
    });
});

describe("4.2 Arrow key navigation", () => {
    it("should allow arrow navigation between cells after tabbing into table", () => {
        cy.mount(createComponent({}));

        table.tabbableElement().focus();
        table.cell({ row: 1, col: 1 }).should("have.focus");

        //not circular
        cy.focused().type("{leftarrow}");
        table.cell({ row: 1, col: 1 }).should("have.focus");

        cy.focused().type("{uparrow}");
        table.header(1).should("have.focus");
        cy.focused().type("{downarrow}");

        cy.focused().type("{rightarrow}");
        table.cell({ row: 1, col: 2 }).should("have.focus");

        cy.focused().type("{rightarrow}");
        table.cell({ row: 1, col: 3 }).should("have.focus");

        cy.focused().type("{rightarrow}");
        table.cell({ row: 1, col: 4 }).find("button").should("have.focus");

        cy.focused().type("{rightarrow}");
        table.cell({ row: 1, col: 5 }).find("a").should("have.focus");

        cy.focused().type("{rightarrow}");
        table.cell({ row: 1, col: 5 }).find("a").should("have.focus");

        cy.focused().type("{rightarrow}");
        table.cell({ row: 1, col: 5 }).find("a").should("have.focus");
        //left

        cy.focused().type("{leftarrow}");
        table.cell({ row: 1, col: 4 }).find("button").should("have.focus");

        cy.focused().type("{leftarrow}");
        table.cell({ row: 1, col: 3 }).should("have.focus");

        //down
        cy.focused().type("{downarrow}");
        table.cell({ row: 2, col: 3 }).should("have.focus");

        cy.focused().type("{downarrow}");
        table.cell({ row: 3, col: 3 }).should("have.focus");

        cy.focused().type("{downarrow}");
        table.cell({ row: 3, col: 3 }).should("have.focus");
    });
});

describe("6.1 Expandable row interaction", () => {
    it("should expand row when user presses Enter on expand cell", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        table.expandButton(1).focus();
        table.expandButton(1).type("{enter}");

        table.rows().should("have.length.greaterThan", 3);
        table.cell({ row: 2, col: 2 }).should("contain.text", "A-A1");
        table.cell({ row: 3, col: 2 }).should("contain.text", "A-B1");

        table.expandButton(5).focus();
        table.expandButton(5).type("{enter}");

        table.rows().should("have.length.greaterThan", 5);
        table.cell({ row: 6, col: 2 }).should("contain.text", "C-A1");
        table.cell({ row: 7, col: 2 }).should("contain.text", "C-B1");
    });

    it("should expand row when user presses Space on expand cell", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        table.expandButton(1).focus().type(" ");

        table.rows().should("have.length.greaterThan", 2);
        table.cell({ row: 2, col: 2 }).should("contain.text", "A-A1");
        table.cell({ row: 3, col: 2 }).should("contain.text", "A-B1");

        table.expandButton(5).focus();
        table.expandButton(5).type(" ");

        table.rows().should("have.length.greaterThan", 5);
        table.cell({ row: 6, col: 2 }).should("contain.text", "C-A1");
        table.cell({ row: 7, col: 2 }).should("contain.text", "C-B1");
    });

    it("should expand row when user clicks expand cell", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        table.expandButton(1).click();

        table.rows().should("have.length.greaterThan", 2);
        table.cell({ row: 2, col: 2 }).should("contain.text", "A-A1");
        table.cell({ row: 3, col: 2 }).should("contain.text", "A-B1");

        table.expandButton(5).focus();
        table.expandButton(5).click();

        table.rows().should("have.length.greaterThan", 5);
        table.cell({ row: 6, col: 2 }).should("contain.text", "C-A1");
        table.cell({ row: 7, col: 2 }).should("contain.text", "C-B1");
    });
});

describe("6.2 Keyboard navigation in expandable table", () => {
    it("should allow arrow navigation into and out of child rows", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        table.expandButton(1).click();
        table.tabbableElement().focus();

        //not circular
        cy.focused().type("{leftarrow}");
        table.tabbableElement().focus();

        cy.focused().type("{uparrow}");
        table.header(1).should("have.focus");
        cy.focused().type("{downarrow}");

        cy.focused().type("{rightarrow}");
        table.cell({ row: 1, col: 2 }).should("have.focus");

        cy.focused().type("{rightarrow}");
        table.cell({ row: 1, col: 3 }).should("have.focus");

        cy.focused().type("{rightarrow}");
        table.cell({ row: 1, col: 4 }).should("have.focus");

        cy.focused().type("{rightarrow}");
        table.cell({ row: 1, col: 5 }).find("button").should("have.focus");

        cy.focused().type("{rightarrow}");
        table.cell({ row: 1, col: 6 }).find("a").should("have.focus");

        //not circular
        cy.focused().type("{rightarrow}");
        table.cell({ row: 1, col: 6 }).find("a").should("have.focus");

        //left
        cy.focused().type("{leftarrow}");
        table.cell({ row: 1, col: 5 }).find("button").should("have.focus");

        cy.focused().type("{leftarrow}");
        table.cell({ row: 1, col: 4 }).should("have.focus");
        //down
        cy.focused().type("{downarrow}");
        table.cell({ row: 2, col: 4 }).should("have.focus");

        cy.focused().type("{downarrow}");
        table.cell({ row: 3, col: 4 }).should("have.focus");

        table.cell({ row: 3, col: 4 }).click(); //activate textinput
        cy.focused().type("{enter}");
        table.cell({ row: 4, col: 4 }).should("have.focus");

        cy.focused().type("{downarrow}");
        table.cell({ row: 5, col: 4 }).should("have.focus");

        //not circular
        cy.focused().type("{downarrow}");
        table.cell({ row: 5, col: 4 }).should("have.focus");
    });
});

describe("6.3 Collapse expanded row", () => {
    it("should collapse expanded row when pressing Enter on expand button", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        table.expandButton(1).focus().type("{enter}");
        table.rows().should("have.length.greaterThan", 3);
        table.expandButton(1).focus().type("{enter}");
        table.rows().should("have.length", 3);

        table.expandButton(3).focus().type("{enter}");
        table.rows().should("have.length.greaterThan", 3);
        table.expandButton(3).focus().type("{enter}");
        table.rows().should("have.length", 3);
    });

    it("should collapse expanded row when pressing Space on expand button", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        table.expandButton(1).focus().type(" ");
        table.rows().should("have.length.greaterThan", 3);
        table.expandButton(1).focus().type(" ");
        table.rows().should("have.length", 3);

        table.expandButton(3).focus().type(" ");
        table.rows().should("have.length.greaterThan", 3);
        table.expandButton(3).focus().type(" ");
        table.rows().should("have.length", 3);
    });

    it("should collapse expanded row when clicking expand button again", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        table.expandButton(1).click();
        table.rows().should("have.length.greaterThan", 3);
        table.expandButton(1).click();
        table.rows().should("have.length", 3);

        table.expandButton(3).click();
        table.rows().should("have.length.greaterThan", 3);
        table.expandButton(3).click();
        table.rows().should("have.length", 3);
    });
});

describe("6.4 ARIA attributes for expandable rows", () => {
    it("should set correct aria-expanded on expandable rows", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        table.expandButton(1).should("have.attr", "aria-expanded", "false"); //ska den sitta på knappen?
        table.expandButton(1).click();
        table.expandButton(1).should("have.attr", "aria-expanded", "true");
    });

    it("should set correct aria-level, aria-setsize and aria-posinset", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        // parents
        table.expandButton(1).click();
        table.expandButton(5).click();

        //beslut om vi ska stödja todo
        //aria-setsize: antal rader på samma nivå
        //aria-posinset: position i mängden rader på samma nivå

        // parents
        table.rows().eq(0).should("have.attr", "aria-level", "1");

        //table.rows().eq(0).should("have.attr", "aria-setsize", "3");
        // table.rows().eq(0).should("have.attr", "aria-posinset", "1");

        //  table.rows().eq(5).should("have.attr", "aria-level", "1");
        //table.rows().eq(0).should("have.attr", "aria-setsize", "3");
        // table.rows().eq(0).should("have.attr", "aria-posinset", "1");
        // childs
        table.rows().eq(2).should("have.attr", "aria-level", "2");
        //table.rows().eq(3).should("have.attr", "aria-level", "2");
        //table.rows().eq(4).should("have.attr", "aria-level", "2");
        table.rows().eq(6).should("have.attr", "aria-level", "2");
        // table.rows().eq(7).should("have.attr", "aria-level", "2");
    });
});
describe("7.1 Bulk checkbox in header when multiselect is enabled", () => {
    it("should render bulk checkbox in first column header for regular table", () => {
        //todo
        // Kryssruta ska finnas i första kolumnens rubrik
    });

    it("should render bulk checkbox in second column header for expandable table", () => {
        //todo
        // Kryssruta ska finnas i andra kolumnens rubrik
        // Första kolumnen (expand) ska inte ha checkbox
    });
});
describe("7.4 Bulk selection in expandable", () => {
    //todo
    it.skip("should render checkboxes only for top-level rows", () => {
        cy.mount(createComponent({ expandable: "rows" }));
        table.expandButton(1).click();
        table.expandButton(1).click();

        // Kontrollera att parent-rader har checkboxar

        // Kontrollera att child-rader saknar checkboxar
    });

    it("should place selection checkboxes in column 2 when expandable column exists", () => {
        //todo
        cy.mount(createComponent({ expandable: "rows" }));

        // Kontrollera att checkbox för bulk ligger i kolumn 2
    });

    it("should allow selecting multiple top-level rows for bulk operation", () => {
        //todo

        cy.mount(createComponent({ expandable: "rows" }));

        // Select both top-level rows

        // Verify that both are checked

        // Verify that child rows cannot be selected

        // Simulate bulk action (e.g. delete?) and verify
    });
});

describe("7.6 aria-selected ", () => {
    it.skip("should set aria-selected=true when row is selected via checkbox", () => {
        //todo
        // Välj en rad
        table.selectInput(2).check();

        // Kontrollera att <tr> har aria-selected=true
        table.rows().eq(1).should("have.attr", "aria-selected", "true");

        // Ej vald rad ska inte vara vald
        table.rows().eq(0).should("not.have.attr", "aria-selected");
    });
    it.skip("should set aria-selected=true only for top-level rows expandable table", () => {
        //todo
        cy.mount(createComponent({ expandable: "rows" }));

        table.expandButton(1).click();
        table.expandButton(5).click();

        // parents
        table.rows().eq(1).should("have.attr", "aria-selected", "true");
        table.rows().eq(5).should("have.attr", "aria-selected", "true");

        // childs
        table.rows().eq(2).should("not.have.attr", "aria-selected");
        table.rows().eq(3).should("not.have.attr", "aria-selected");
        table.rows().eq(4).should("not.have.attr", "aria-selected");
        table.rows().eq(6).should("not.have.attr", "aria-selected");
        table.rows().eq(7).should("not.have.attr", "aria-selected");
    });
});

describe("7.7 Dataset change resets selection ", () => {
    it.skip("should clear all selected rows and bulk checkbox when a row is added", () => {
        //todo
    });
    it.skip("should clear all selected rows and bulk checkbox when a row is removed", () => {
        //todo
    });
});

describe("1.8 when table is empty", () => {
    const rows: never[] = [];
    const columns = defineTableColumns<(typeof rows)[number]>([
        {
            type: "text",
            header: "A",
        },
        {
            type: "text",
            header: "B",
        },
        {
            type: "text",
            header: "C",
        },
    ]);

    it("should have a single empty row with default text", () => {
        cy.mount(FTable<(typeof rows)[number]>, { props: { rows, columns } });
        table.rows().should("have.length", 1);
        table
            .cell({ row: 1, col: 1 })
            .should("contain.text", "Tabellen är tom");
    });

    it("should be able to change text of empty row", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns },
            slots: { empty: "Foo" },
        });

        table.cell({ row: 1, col: 1 }).should("contain.text", "Foo");
    });

    it("should span all columns", () => {
        cy.mount(FTable<(typeof rows)[number]>, { props: { rows, columns } });
        table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "3");
    });

    it("should span all columns when expandable", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns, expandableAttribute: "nested" },
        });
        table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "4");
    });

    it("should span all columns when selectable", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows: [], columns, selectable: "multi" },
        });
        table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "4");
    });

    it("should span all columns when selectable and expandable", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
                expandableAttribute: "nested",
                selectable: "multi",
            },
        });
        table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "5");
    });

    it("should span one column when table has no columns", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns: [],
            },
        });
        table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "1");
    });
});

describe("5 tabstop", () => {
    interface TabstopRow {
        foo: string;
        bar: string;
    }

    function mountTabstopTestbed(): {
        buttonBeforeTable: string;
        buttonAfterTable: string;
        buttonAddRow: string;
        buttonRemoveRow: string;
    } {
        const rows = ref([
            { foo: "1", bar: "alpha" },
            { foo: "2", bar: "beta" },
            { foo: "3", bar: "gamma" },
        ]);

        const columns = defineTableColumns<TabstopRow>([
            {
                type: "text",
                header: "foo",
                key: "foo",
            },
            {
                type: "button",
                header: "remove",
                icon: "trashcan",
                value(row) {
                    return row.bar;
                },
                onClick(row) {
                    rows.value.splice(rows.value.indexOf(row), 1);
                },
            },
        ]);

        const buttonBeforeTable = "button-before-table";
        const buttonAfterTable = "button-after-table";
        const buttonAddRow = "button-add-row";
        const buttonRemoveRow = "button-remove-row";
        const counter = ref(4);

        cy.mount(() =>
            h("div", [
                renderButton("Before table", buttonBeforeTable),
                h(FTable<TabstopRow>, {
                    rows: rows.value,
                    columns,
                }),
                renderButton("After table", buttonAfterTable),
                renderButton("Add row", buttonAddRow, () =>
                    rows.value.push({
                        foo: String(counter.value++),
                        bar: "Added row",
                    }),
                ),
                renderButton("Remove row", buttonRemoveRow, () =>
                    rows.value.shift(),
                ),
            ]),
        );

        return {
            buttonBeforeTable: getTestSelector(buttonBeforeTable),
            buttonAfterTable: getTestSelector(buttonAfterTable),
            buttonAddRow: getTestSelector(buttonAddRow),
            buttonRemoveRow: getTestSelector(buttonRemoveRow),
        };
    }

    function mountRowRemovalTestbed(): void {
        let api: FTableApi | undefined = undefined;

        const rows = ref([
            { foo: "1", bar: "alpha" },
            { foo: "2", bar: "beta" },
            { foo: "3", bar: "gamma" },
        ]);

        const columns = defineTableColumns<TabstopRow>([
            {
                type: "text",
                header: "foo",
                key: "foo",
            },
            {
                type: "button",
                header: "remove",
                icon: "trashcan",
                value(row) {
                    return row.bar;
                },
                onClick(row) {
                    assertSet(api);
                    api.withTabstopBehaviour("row-removal", () => {
                        rows.value.splice(rows.value.indexOf(row), 1);
                    });
                },
            },
        ]);

        cy.mount(() =>
            h(FTable<TabstopRow>, {
                rows: rows.value,
                columns,
                ref: (exposed: unknown) => (api = exposed as FTableApi),
            }),
        );
    }

    interface NavigationRow {
        staticText: string;
        editText: string;
        select: string;
        checkbox: boolean;
        radio: boolean;
        button: string;
        anchor: string;
        custom: string;
        children?: NavigationRow[];
    }

    function mountNavigationTestbed(): {
        buttonBeforeTable: string;
    } {
        const rows = ref([
            {
                staticText: "awesome static text",
                editText: "awesome edit text",
                select: "awesome option",
                checkbox: true,
                radio: true,
                button: "awesome button",
                anchor: "awesome anchor",
                custom: "awesome custom",
                children: [
                    {
                        staticText: "child static text",
                        editText: "child edit text",
                        select: "another option",
                        checkbox: false,
                        radio: false,
                        button: "child button",
                        anchor: "child anchor",
                        custom: "child custom",
                    },
                ],
            },
        ]);

        const columns = defineTableColumns<NavigationRow>([
            {
                type: "text",
                header: "static text header",
                key: "staticText",
            },
            {
                type: "text",
                editable: true,
                header: "edit text header",
                key: "editText",
                label: () => "edit text label",
            },
            {
                type: "select",
                header: "select header",
                options: ["awesome option", "catastrophic option"],
                key: "select",
                label: () => "select label",
            },
            {
                type: "checkbox",
                header: "checkbox header",
                key: "checkbox",
                editable: true,
                label: () => "checkbox label",
            },
            {
                type: "radio",
                header: "radio header",
                key: "radio",
                label: () => "radio label",
            },
            {
                type: "button",
                header: "button header",
                value(row) {
                    return row.button;
                },
                icon: "bell",
            },
            {
                type: "anchor",
                header: "anchor header",
                value(row) {
                    return row.anchor;
                },
                href: "awesome href",
            },
        ]);

        const buttonBeforeTable = "button-before-table";

        cy.mount(() =>
            h("div", [
                renderButton("Before table", buttonBeforeTable),
                h(FTable<NavigationRow>, {
                    rows: rows.value,
                    columns,
                    expandableAttribute: "children",
                    selectable: "multi",
                }),
            ]),
        );

        return {
            buttonBeforeTable: getTestSelector(buttonBeforeTable),
        };
    }

    it("5.1 should default to first datacell", () => {
        const { buttonBeforeTable } = mountTabstopTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);

        table.cell({ row: 1, col: 1 }).should("have.focus");
    });

    it("5.1 should leave table on tab", () => {
        const { buttonBeforeTable, buttonAfterTable } = mountTabstopTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.get(buttonAfterTable).should("have.focus");
    });

    it("5.2 should only have one tabstop", () => {
        const { buttonBeforeTable } = mountTabstopTestbed();
        table.cell({ row: 2, col: 1 }).as("td").click();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.focused().should("contain.text", "After table");
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.get("@td").should("have.focus");
    });

    it("5.3 should have tabstop on focused element", () => {
        const { buttonBeforeTable } = mountTabstopTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.focused().should("contain.text", "1");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().should("contain.text", "alpha");
    });

    it("5.4 should fallback according to first-cell mode when current tabstop is removed", () => {
        const { buttonBeforeTable } = mountTabstopTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.focused().should("contain.text", "1");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.focused().should("contain.text", "2");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.focused().should("contain.text", "3");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.focused().should("contain.text", "Tabellen är tom");
    });

    it("5.5 should fallback according to sticky mode when current tabstop is removed", () => {
        mountRowRemovalTestbed();
        table.cell({ row: 2, col: 2 }).click();
        cy.focused().should("contain.text", "alpha");
        cy.focused().click();
        cy.focused().should("contain.text", "gamma");
        cy.focused().click();
        cy.focused().should("contain.text", "Tabellen är tom");
    });

    it("should not set focus when removing rows from outside table", () => {
        const { buttonRemoveRow } = mountTabstopTestbed();
        cy.get(buttonRemoveRow).focus();
        cy.focused().click();
        cy.get(buttonRemoveRow).should("be.focused");
        cy.focused().click();
        cy.get(buttonRemoveRow).should("be.focused");
        cy.focused().click();
        cy.get(buttonRemoveRow).should("be.focused");
    });

    it("should set tabstop to first cell when a first row is added", () => {
        const { buttonBeforeTable, buttonAddRow } = mountTabstopTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.get(buttonAddRow).click();
        table.cell({ row: 1, col: 1 }).should("have.attr", "tabindex", "0");
    });

    it("should set correct tabstop for all types of headers and cells on navigation", () => {
        const { buttonBeforeTable } = mountNavigationTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        // {1, 1}: expand button
        cy.focused().click();
        cy.focused()
            .should("have.prop", "tagName", "BUTTON")
            .should("have.attr", "aria-expanded", "true");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 2}: selectable checkbox
        cy.focused().click();
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 3}: static text
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("contain.text", "awesome static text");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 4}: edit text
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("contain.text", "awesome edit text");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 5}: select
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("contain.text", "awesome option");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 6}: checkbox
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 7}: radio
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "radio");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 8}: button
        cy.focused()
            .should("have.prop", "tagName", "BUTTON")
            .should("contain.text", "awesome button");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 9}: anchor
        cy.focused()
            .should("have.prop", "tagName", "A")
            .should("contain.text", "awesome anchor");
        cy.focused().press(Cypress.Keyboard.Keys.UP);
        // {0, 9}: anchor header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "anchor header", true);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 8}: button header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "button header", true);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 7}: radio header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "radio header", true);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 6}: checkbox header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "checkbox header", true);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 5}: select header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "select header", true);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 4}: edit text header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "edit text header", true);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 3}: static text header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "static text header", true);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 2}: selectable header
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox");
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 1}: expand header (empty)
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("not.have.text");
        cy.focused().press(Cypress.Keyboard.Keys.DOWN);
        // {1, 1}: expand
        cy.focused().press(Cypress.Keyboard.Keys.DOWN);
        // {1, 2}: expand for child (empty)
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("not.have.text");
    });
});
