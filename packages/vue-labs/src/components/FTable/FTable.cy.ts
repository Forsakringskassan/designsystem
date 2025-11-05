import { type VNode, ref } from "vue";
import { h } from "vue";
import { assertSet } from "@fkui/logic";
import { FTablePageObject } from "../../cypress";
import FTable from "./FTable.vue";
import { type FTableApi } from "./f-table-api";
import { defineTableColumns } from "./table-column";

const table = new FTablePageObject();

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

it("should show empty table", () => {
    cy.mount(FTable, {
        props: {
            columns: [],
            rows: [],
        },
    });

    table.el().should("exist");
    // table.cell({ row: 1, col: 1 }).should("not.have.attr", "colspan");
});

it.only("should foo", () => {
    const rows = [{ foo: "Awesome text" }];
    const columns = defineTableColumns<(typeof rows)[number]>([
        { header: "My awesome header", key: "foo" },
    ]);

    cy.mount(FTable<(typeof rows)[number]>, {
        props: {
            columns,
            rows,
        },
    });

    table.el().should("exist");
    table.rows().should("have.length", 1);
    table.cell({ row: 1, col: 1 }).should("have.text", "Awesome text");
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
            ]),
        );

        return {
            buttonBeforeTable: getTestSelector(buttonBeforeTable),
            buttonAfterTable: getTestSelector(buttonAfterTable),
            buttonAddRow: getTestSelector(buttonAddRow),
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
