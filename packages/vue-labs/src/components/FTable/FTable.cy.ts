import { type DefineComponent, defineComponent } from "vue";
import { FTablePageObject } from "../../cypress/FTable.pageobject";
import { FTable, defineTableColumns } from ".";

const table = new FTablePageObject();

interface Row {
    rowheader: string;
    text: string;
    input: string;
    button: string;
    anchor: string;
}

const columns = defineTableColumns<Row>([
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
        value(row) {
            return row.input;
        },
    },
    {
        type: "button",
        header: "Button",
        key: "button",
        icon: "trashcan",
        value(row) {
            return row.button;
        },
    },
    {
        header: "Anchor",
        type: "anchor",
        key: "anchor",
        href: "#",
        value(row) {
            return row.anchor;
        },
    },
]);

interface TableOptions {
    expandable?: "custom" | "rows";
    selectable?: "multi" | "single";
    striped?: boolean;
    empty?: boolean;
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
                ],
                columns,
            };
        },
    });
}

beforeEach(() => {
    cy.viewport(1024, 768);
});

it("Should set correct headertext 1.3", () => {
    cy.mount(createComponent());
    table.header(1).should("contain.text", "Rowheader");
    table.header(2).should("contain.text", "Text");
    table.header(3).should("contain.text", "Input");
    table.header(4).should("contain.text", "Button");
    table.header(5).should("contain.text", "Anchor");
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
});

it.only("should have empty row 1.8", () => {
    cy.mount(createComponent({ empty: true }));
    table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "6");
    table.rows().should("have.length", 1);
    table.cell({ row: 1, col: 1 }).should("contain.text", "Tabellen är tom");
});

it("should have correct focus 1.10", () => {
    cy.mount(createComponent());
    table.tabbableElement().focus();
    cy.focused().trigger("keydown", { code: "ArrowRight" });
    table.cell({ row: 1, col: 2 }).should("have.focus");
});

it("should have correct checkbox labels 7.6", () => {
    cy.mount(createComponent({ selectable: "multi" }));
    table.selectInput(1).should("have.attr", "aria-label", "selectable");
});
