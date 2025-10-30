import { type DefineComponent, type VNode, defineComponent, ref } from "vue";
import { h } from "vue";
import { FTablePageObject } from "../../cypress/FTable.pageobject";
import FTable from "./FTable.vue";
import { defineTableColumns } from "./table-column";
import { FTable, TableColumn, defineTableColumns } from ".";

const table = new FTablePageObject();

interface AwesomeRow {
    staticText: string;
    editText: string;
    select: string;
    checkbox: boolean;
    radio: boolean;
    button: string;
    anchor: string;
    custom: string;
    children?: AwesomeRow[];
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

function mountDefaultTestbed(): {
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

    const columns = defineTableColumns<AwesomeRow>([
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
            h(FTable<AwesomeRow>, {
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

beforeEach(() => {
    cy.viewport(1024, 768);
});

describe("navigation", () => {
    it("should activate correct cell elements", () => {
        const { buttonBeforeTable } = mountDefaultTestbed();
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

interface TableOptions {
    expandable?: "custom" | "rows";
    columns?: TableColumn<Row, keyof Row>[];
    selectable?: "multi" | "single";
    striped?: boolean;
    empty?: boolean;
    filter?: boolean;
}

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
                ],
                columns: options.columns ? options.columns : defaultColumns,
            };
        },
    });
}

describe("1.1", () => {
    it.skip("should render caption when slot is provided", () => {
        //todo not implemented
    });

    it.skip("should render caption as sr-only when specified", () => {
        //todo not implemented
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
        //help alla typer?

        cy.mount(createComponent());
        table.header(1).should("have.class", "text-left"); //skapa?
    });
    it.skip("should be left-aligned without tnum for text columns", () => {
        //help alla typer?

        cy.mount(createComponent());
        table.header(1).should("have.class", "text-left"); //skapa?
    });

    it.skip("should allow consumer to override alignment and tnum", () => {
        //help
        const columns = [
            {
                key: "custom",
                rowheader: "Custom",
                align: "center", //Finns align?
                tnum: false,
            },
        ];
        cy.mount(createComponent({ columns }));
        table.header(1).should("have.class", "text-center"); //skapa?
    });

    it.skip("should render icon next to header text if provided", () => {
        //help icon i rubriken

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
        //kan testas implementerat uppdatera pageobject
    });

    it.skip("should render help format on header", () => {
        // not implemented
    });

    it.skip("should render screen reader text on header", () => {});
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
        //TODO not implemented
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
        // cy.mount(createComponent({ expandable: "rows", striped: true }));
        // table.expandButton(1).click();
        // cy.toMatchScreenshot();
    });
});

describe("1.6 columnwidth", () => {
    it("should fill the full available width", () => {
        //screenshot not implemented
    });

    it("should allow column to take maximum width", () => {
        //screenshot not implemented
    });

    it("should allow column to take minimal width", () => {
        //screenshot not implemented
    });
});

describe("1.7 Format", () => {
    it("should format value using standardformat", () => {});

    it("should format value using custom formatter from consumer", () => {});

    it("should format value using format() function from consumer", () => {
        //funkar detta?
    });
});

describe("1.8", () => {
    it("should have empty row ", () => {
        cy.mount(createComponent({ empty: true }));
        table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "6");
        table.rows().should("have.length", 1);
        table
            .cell({ row: 1, col: 1 })
            .should("contain.text", "Tabellen är tom");
    });
    it.skip("should be able to focus empty row ", () => {
        //todo not implemented
        cy.mount(createComponent({ empty: true }));
        table.tabbableElement().focus();
        table.cell({ row: 1, col: 1 }).should("have.focus");
    });
});

describe("1.9 screen reader text sr-only", () => {
    //testas manuellt också
    it("should render screen reader text on column header", () => {});

    it("should render screen reader text inside cell", () => {});

    it("should not render sr-only text when not provided", () => {});
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

    it.skip("should have correct focus on dropdown 1.10", () => {
        //help fix dropdown Niklas kollar
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
        table.cell({ row: 1, col: 1 }).find("select").should("have.focus");
        cy.focused().trigger("keydown", { code: "ArrowDown" });
        table.cell({ row: 2, col: 1 }).find("select").should("have.focus");
    });

    it.skip("should have correct focus on input 1.10", () => {
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
        table.cell({ row: 1, col: 1 }).should("have.focus");
        cy.focused().trigger("keydown", { code: "ArrowDown" }); //bugg i alphanumeric
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

        table.el().should("have.attr", "aria-rowcount", "5");
    });

    it("should set aria-rowindex correctly for each visible row", () => {
        cy.mount(createComponent());

        table.rows().eq(0).should("have.attr", "aria-rowindex", "2");
        table.rows().eq(1).should("have.attr", "aria-rowindex", "3");
    });

    it.skip("should preserve aria-rowindex even when rows are filtered", () => {
        //Help  filterfunktionen?
        // cy.mount(createComponent({ expandable: "rows", filter: (row) => row.rowheader == "A1" }));

        //filter: (row) => row.rowheader == "A1", // filtrera bort rad 1

        // FSortFilterDataset kan filtrera.

        table.el().should("have.attr", "aria-rowcount", "4");
        table.rows().eq(0).should("have.attr", "aria-rowindex", "3"); //Detta borde väl vara den enda synliga raden =0?
    });
});
describe("1.13", () => {
    it("should programmatically activate a cell", () => {
        //not implemented
    });
});
describe("1.14", () => {
    //not implemented
    it("should programmatically set focus on a cell", () => {
        //not implemented
    });
});
describe("1.15 focus after removing row", () => {
    it("should focus cell above after row is removed", () => {
        cy.mount(createComponent({}));
    });

    it("should focus fallback cell when table is empty", () => {
        cy.mount(createComponent({}));
    });
});
describe("1.16 Data loading", () => {
    //todo  implemented?
    it.skip("should show spinner after 1s and block interaction while loading", () => {
        cy.clock(); // kontrollera tid manuellt

        cy.mount(createComponent({}));

        // Direkt efter mount: spinner ska inte synas

        // Efter 999ms: spinner ska fortfarande inte synas
        cy.tick(999);

        // Efter 1000ms: spinner ska synas
        cy.tick(1);

        // Tabell ska inte vara interagerbar (t.ex. inga tabbable element)
        table.tabbableElement().should("not.exist");
    });
});

describe("2.4 active compenents", () => {
    //screenshot

    it.skip("should not show pen icon for input field when active", () => {
        //image diff

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
        // Aktivera cellen
        table.cell({ row: 1, col: 1 }).click();

        // Kontrollera att penna-ikon inte visas
        cy.toMatchScreenshot();
    });

    it("should show arrow icon for dropdown when active", () => {});

    it("should show arrow icon for combobox when active", () => {});
});

describe("6.1 Expandable row interaction", () => {
    it("should expand row when user presses Enter on expand cell", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        table.expandButton(1).focus();
        table.expandButton(1).type("{enter}");

        // Verify childs
        table.rows().should("have.length.greaterThan", 2);
        table.cell({ row: 2, col: 2 }).should("contain.text", "A-A1");
        table.cell({ row: 3, col: 2 }).should("contain.text", "A-B1");
    });

    it("should expand row when user presses Space on expand cell", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        table.expandButton(1).focus().type(" ");

        // Verify childs
        table.rows().should("have.length.greaterThan", 2);
        table.cell({ row: 2, col: 2 }).should("contain.text", "A-A1");
        table.cell({ row: 3, col: 2 }).should("contain.text", "A-B1");
    });

    it("should expand row when user clicks expand cell", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        table.expandButton(1).click();

        // Verify childs
        table.rows().should("have.length.greaterThan", 2);
        table.cell({ row: 2, col: 2 }).should("contain.text", "A-A1");
        table.cell({ row: 3, col: 2 }).should("contain.text", "A-B1");
    });
});
describe("6.2 Keyboard navigation in expandable table", () => {
    it.skip("should allow arrow navigation into and out of child rows", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        table.expandButton(1).click();

        // Utfälld expand? HELP columnindex?
        table.cell({ row: 1, col: 1 }).click();
        table.cell({ row: 1, col: 1 }).should("have.focus");

        // Pil ner
        cy.focused().type("{downarrow}");
        table.cell({ row: 2, col: 1 }).should("have.focus");

        // Pil ner
        cy.focused().type("{downarrow}");
        table.cell({ row: 3, col: 1 }).should("have.focus");

        // Pil ner
        cy.focused().type("{downarrow}");
        table.cell({ row: 4, col: 1 }).should("have.focus");

        // Pil upp
        cy.focused().type("{uparrow}");
        table.cell({ row: 3, col: 1 }).should("have.focus");
    });

    it.skip("should allow arrow navigation in first column including expand cell", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        table.expandButton(1).click();

        // Fokusera expand-knapp i rad 1 HELP columnindex?
        table.expandButton(1).focus().should("have.focus");

        // Pil ner → ska gå till tom cell i child-radens första kolumn
        cy.focused().type("{downarrow}");
        table.cell({ row: 2, col: 0 }).should("exist").and("have.focus");
    });
});

describe("6.3 Collapse expanded row in f-table", () => {
    it("should collapse expanded row when pressing Enter on expand button", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        // Expand parent row
        table.expandButton(1).click();
        table.rows().should("have.length.greaterThan", 2);

        table.expandButton(1).focus().type("{enter}");

        table.rows().should("have.length", 2);
    });

    it("should collapse expanded row when pressing Space on expand button", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        table.expandButton(1).click();
        table.rows().should("have.length.greaterThan", 2);

        table.expandButton(1).focus().type(" ");

        table.rows().should("have.length", 2);
    });

    it("should collapse expanded row when clicking expand button again", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        table.expandButton(1).click();
        table.rows().should("have.length.greaterThan", 2);

        table.expandButton(1).click();
        table.rows().should("have.length", 2);
    });
});

describe("6.4 ARIA attributes for expandable rows in f-table", () => {
    //Help är implementerat?

    it.skip("should set correct aria-expanded on expandable rows", () => {
        cy.mount(createComponent({ expandable: "rows" }));

        table.rows().eq(0).should("have.attr", "aria-expanded", "false");
        table.expandButton(1).click();
        table.rows().eq(0).should("have.attr", "aria-expanded", "true");
    });

    it.skip("should set correct aria-level, aria-setsize and aria-posinset", () => {
        cy.mount(createComponent({ expandable: "testRows" })); //HELP behöver ha 2 expanderbara
        // cy.mount(createComponent({ testColumns, rows }));
        //

        // Expandera båda parent-rader
        table.expandButton(1).click();
        table.expandButton(2).click();

        // Kontrollera parent-rader
        table
            .rows()
            .eq(0)
            .should("have.attr", "aria-level", "1")
            .and("have.attr", "aria-setsize", "2")
            .and("have.attr", "aria-posinset", "1");

        table
            .rows()
            .eq(3)
            .should("have.attr", "aria-level", "1")
            .and("have.attr", "aria-setsize", "2")
            .and("have.attr", "aria-posinset", "2");

        // Kontrollera child-rader
        table
            .rows()
            .eq(1)
            .should("have.attr", "aria-level", "2")
            .and("have.attr", "aria-setsize", "2")
            .and("have.attr", "aria-posinset", "1");

        table
            .rows()
            .eq(2)
            .should("have.attr", "aria-level", "2")
            .and("have.attr", "aria-setsize", "2")
            .and("have.attr", "aria-posinset", "2");

        table
            .rows()
            .eq(4)
            .should("have.attr", "aria-level", "2")
            .and("have.attr", "aria-setsize", "1")
            .and("have.attr", "aria-posinset", "1");
    });

    it.skip("should preserve aria-level, aria-setsize and aria-posinset after filtering", () => {
        //Agneta HELP
        const columns = [
            { key: "expand", type: "expand" },
            { key: "name", header: "Name" },
        ];
        const rows = [
            {
                name: "Parent",
                children: [{ name: "Child 1" }, { name: "Child 2" }],
            },
        ];

        cy.mount(
            createComponent({
                columns,
                rows,
                filter: (row) => row.name !== "Child 1", // filtrera bort en child
            }),
        );

        table.expandButton(1).click();

        // Kontrollera att Child 2 behåller sin identitet
        table
            .rows()
            .eq(1)
            .should("have.attr", "aria-level", "2")
            .and("have.attr", "aria-setsize", "2") // fortfarande 2 i setsize
            .and("have.attr", "aria-posinset", "2"); // positionen kvar
    });
});

it("should have correct checkbox labels 7.6", () => {
    cy.mount(createComponent({ selectable: "multi" }));
    table.selectInput(1).should("have.attr", "aria-label", "Välj rad");
});
