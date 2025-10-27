import { type VNode, ref } from "vue";
import { h } from "vue";
import FTable from "./FTable.vue";
import { defineTableColumns } from "./table-column";

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
