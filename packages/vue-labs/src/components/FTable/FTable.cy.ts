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

describe("4.4 Keyboard and shortcut navigation in table", () => {
    const rows = [
        { text: "A1", nested: [{ text: "A2" }] },
        { text: "B1", nested: [{ text: "B2" }] },
    ];

    const columns = defineTableColumns<(typeof rows)[number]>([
        {
            type: "text",
            header: "A",
            key: "text",
        },
        {
            type: "text",
            header: "B",
            key: "text",
        },
    ]);

    const expandableAttribute = "nested";

    it("should move focus correctly when pressing Home, End, Ctrl+Home and Ctrl+End", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns, expandableAttribute, selectable: "multi" },
        });
        table.expandButton(2).click();
        table.expandButton(1).click();

        cy.focused().press(Cypress.Keyboard.Keys.HOME);
        table.expandButton(1).should("have.focus");

        cy.focused().press(Cypress.Keyboard.Keys.END);
        table.cell({ row: 1, col: 4 }).should("have.focus");
        cy.focused().press(Cypress.Keyboard.Keys.DOWN);

        cy.focused().press(Cypress.Keyboard.Keys.HOME);
        table.cell({ row: 2, col: 1 }).should("have.focus");

        cy.focused().realPress(["Control", "End"]);
        table.cell({ row: 4, col: 4 }).should("have.focus");

        cy.focused().realPress(["Control", "Home"]);
        table.expandButton(1).should("have.focus");
        cy.focused().press(Cypress.Keyboard.Keys.UP);

        cy.focused().press(Cypress.Keyboard.Keys.END);
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "B", true);

        cy.focused().realPress(["Control", "End"]);
        table.cell({ row: 4, col: 4 }).should("have.focus");
    });
});

describe("6 Expandable table", () => {
    const rows = [
        { text: "A1", nested: [{ text: "A2" }, { text: "A3" }] },
        { text: "B1", nested: [{ text: "B2" }, { text: "B3" }] },
    ];

    const columns = defineTableColumns<(typeof rows)[number]>([
        {
            type: "text",
            header: "A",
            key: "text",
        },
    ]);

    const expandableAttribute = "nested";

    it("6.1 should expand row when pressing Enter on expand cell", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns, expandableAttribute },
        });

        table.expandButton(2).focus();
        table.expandButton(2).type("{enter}");
        table.expandButton(1).focus();
        table.expandButton(1).type("{enter}");

        table.rows().should("have.length", 6);
        table.cell({ row: 2, col: 2 }).should("contain.text", "A2");
        table.cell({ row: 3, col: 2 }).should("contain.text", "A3");

        table.cell({ row: 5, col: 2 }).should("contain.text", "B2");
        table.cell({ row: 6, col: 2 }).should("contain.text", "B3");
    });

    it("6.1 should expand row when pressing Space on expand cell", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns, expandableAttribute },
        });

        table.expandButton(2).focus();
        table.expandButton(2).press(Cypress.Keyboard.Keys.SPACE);

        table.expandButton(1).focus();
        table.expandButton(1).press(Cypress.Keyboard.Keys.SPACE);

        table.rows().should("have.length", 6);
        table.cell({ row: 2, col: 2 }).should("contain.text", "A2");
        table.cell({ row: 3, col: 2 }).should("contain.text", "A3");

        table.cell({ row: 5, col: 2 }).should("contain.text", "B2");
        table.cell({ row: 6, col: 2 }).should("contain.text", "B3");
    });

    describe("6.2 Keyboard navigation", () => {
        const navRows = [
            { text: "A1", nested: [{ text: "A2" }] },
            { text: "B1" },
        ];

        const navColumns = defineTableColumns<(typeof navRows)[number]>([
            {
                type: "text",
                header: "A",
                key: "text",
            },
            {
                type: "text",
                header: "B",
                key: "text",
            },
            {
                type: "text",
                header: "C",
                key: "text",
            },
        ]);

        it("should have correct arrow navigation in expanded row", () => {
            cy.mount(FTable<(typeof navRows)[number]>, {
                props: {
                    rows: navRows,
                    columns: navColumns,
                    expandableAttribute,
                },
            });

            table.expandButton(1).click();

            // column 1
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 2, col: 1 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 3, col: 1 }).should("have.focus");

            // column 2
            cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
            table.cell({ row: 3, col: 2 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.UP);
            table.cell({ row: 2, col: 2 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.UP);
            table.cell({ row: 1, col: 2 }).should("have.focus");

            // column 3
            cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
            table.cell({ row: 1, col: 3 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 2, col: 3 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 3, col: 3 }).should("have.focus");

            // row
            cy.focused().press(Cypress.Keyboard.Keys.UP);
            table.cell({ row: 2, col: 3 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.LEFT);
            table.cell({ row: 2, col: 2 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.LEFT);
            table.cell({ row: 2, col: 1 }).should("have.focus");
        });

        it("should have correct arrow navigation in custom expanded row", () => {
            cy.mount(FTable<(typeof navRows)[number]>, {
                props: {
                    rows: navRows,
                    columns: navColumns,
                    expandableAttribute,
                },
                slots: { expandable: "Foo" },
            });

            table.expandButton(1).click();

            // column 1
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 2, col: 1 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 3, col: 1 }).should("have.focus");

            // column 2
            cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
            table.cell({ row: 3, col: 2 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.UP);
            table.cell({ row: 2, col: 2 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.UP);
            table.cell({ row: 1, col: 2 }).should("have.focus");

            // column 3
            cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
            table.cell({ row: 1, col: 3 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 2, col: 2 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 3, col: 3 }).should("have.focus");
        });
    });

    describe("6.3 Collapse expanded row", () => {
        const rows = [
            { text: "A1", nested: [{ text: "A2" }, { text: "A3" }] },
            { text: "B1", nested: [{ text: "B2" }, { text: "B3" }] },
        ];

        const columns = defineTableColumns<(typeof rows)[number]>([
            {
                type: "rowheader",
                header: "A",
                key: "text",
            },
        ]);

        it("should collapse expanded row when pressing Enter on expand button", () => {
            cy.mount(FTable<(typeof rows)[number]>, {
                props: { rows, columns, expandableAttribute },
            });

            table.rows().should("have.length", 2);

            table.expandButton(2).focus().type("{enter}");
            table.expandButton(1).focus().type("{enter}");

            table.rows().should("have.length", 6);

            table.expandButton(4).focus().type("{enter}");
            table.expandButton(1).focus().type("{enter}");

            table.rows().should("have.length", 2);
        });

        it("should collapse expanded row when pressing Space on expand button", () => {
            cy.mount(FTable<(typeof rows)[number]>, {
                props: { rows, columns, expandableAttribute },
            });

            table.rows().should("have.length", 2);

            table.expandButton(2).focus();
            table.expandButton(2).press(Cypress.Keyboard.Keys.SPACE);
            table.expandButton(1).focus();
            table.expandButton(1).press(Cypress.Keyboard.Keys.SPACE);

            table.rows().should("have.length", 6);

            //collapse
            table.expandButton(4).focus();
            table.expandButton(4).press(Cypress.Keyboard.Keys.SPACE);
            table.expandButton(1).focus();
            table.expandButton(1).press(Cypress.Keyboard.Keys.SPACE);

            table.rows().should("have.length", 2);
        });
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

    function mountNavigationTestbed(slots?: object): {
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
                h(
                    FTable<NavigationRow>,
                    {
                        rows: rows.value,
                        columns,
                        expandableAttribute: "children",
                        selectable: "multi",
                    },
                    slots,
                ),
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
            .should("have.attr", "aria-expanded", "true")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 2}: selectable checkbox
        cy.focused().click();
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 3}: static text
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("contain.text", "awesome static text")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 4}: edit text
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("contain.text", "awesome edit text")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 5}: select
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("contain.text", "awesome option")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 6}: checkbox
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 7}: radio
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "radio")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 8}: button
        cy.focused()
            .should("have.prop", "tagName", "BUTTON")
            .should("contain.text", "awesome button")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 9}: anchor
        cy.focused()
            .should("have.prop", "tagName", "A")
            .should("contain.text", "awesome anchor")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.UP);
        // {0, 9}: anchor header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "anchor header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 8}: button header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "button header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 7}: radio header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "radio header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 6}: checkbox header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "checkbox header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 5}: select header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "select header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 4}: edit text header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "edit text header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 3}: static text header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "static text header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 2}: selectable header
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 1}: expand header (empty)
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("not.have.text")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.DOWN);
        // {1, 1}: expand
        cy.focused().press(Cypress.Keyboard.Keys.DOWN);
        // {2, 1}: expand for child (empty)
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("not.have.text")
            .should("have.attr", "tabindex", 0);
    });

    it("should set correct tabstop for all types of headers and cells on click", () => {
        mountNavigationTestbed();

        // {1, 1}: expand button
        table.cell({ row: 1, col: 1 }).click();
        cy.focused()
            .should("have.prop", "tagName", "BUTTON")
            .should("have.attr", "aria-expanded", "true")
            .should("have.attr", "tabindex", 0);
        // {1, 2}: selectable checkbox
        table.cell({ row: 1, col: 2 }).click();
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox")
            .should("have.attr", "tabindex", 0);
        // {1, 3}: static text
        table.cell({ row: 1, col: 3 }).click();
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("contain.text", "awesome static text")
            .should("have.attr", "tabindex", 0);
        // {1, 4}: edit text
        table.cell({ row: 1, col: 4 }).click();
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "tabindex", 0);
        // {1, 5}: select
        table.cell({ row: 1, col: 5 }).click();
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("contain.text", "awesome option")
            .should("have.attr", "tabindex", 0);
        // {1, 6}: checkbox
        table.cell({ row: 1, col: 6 }).click();
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox")
            .should("have.attr", "tabindex", 0);
        // {1, 7}: radio
        table.cell({ row: 1, col: 7 }).click();
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "radio")
            .should("have.attr", "tabindex", 0);
        // {1, 8}: button
        table.cell({ row: 1, col: 8 }).click();
        cy.focused()
            .should("have.prop", "tagName", "BUTTON")
            .should("contain.text", "awesome button")
            .should("have.attr", "tabindex", 0);
        // {0, 9}: anchor header
        table.header(9).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "anchor header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 8}: button header
        table.header(8).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "button header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 7}: radio header
        table.header(7).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "radio header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 6}: checkbox header
        table.header(6).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "checkbox header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 5}: select header
        table.header(5).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "select header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 4}: edit text header
        table.header(4).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "edit text header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 3}: static text header
        table.header(3).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "static text header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 2}: selectable header
        table.header(2).click();
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox")
            .should("have.attr", "tabindex", 0);
        // {0, 1}: expand header (empty)
        table.header(1).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("not.have.text")
            .should("have.attr", "tabindex", 0);
        // {2, 1}: expand for child (empty)
        table.cell({ row: 2, col: 1 }).click();
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("not.have.text")
            .should("have.attr", "tabindex", 0);
    });

    it("should allow tab navigation in and out of expanded row", () => {
        const { buttonBeforeTable } = mountNavigationTestbed();

        table.expandButton(1).click();
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().press(Cypress.Keyboard.Keys.DOWN);
        table.cell({ row: 2, col: 3 }).should("have.focus");

        cy.focused().realPress(["Shift", "Tab"]);
        cy.get(buttonBeforeTable).should("have.focus");

        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        table.cell({ row: 2, col: 3 }).should("have.focus");
    });

    it("should allow tab navigation in and out of custom expanded row", () => {
        const slots = { expandable: "Foo" };
        const { buttonBeforeTable } = mountNavigationTestbed(slots);

        table.expandButton(1).click();
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().press(Cypress.Keyboard.Keys.DOWN);
        table.cell({ row: 2, col: 2 }).should("have.focus");

        cy.focused().realPress(["Shift", "Tab"]);
        cy.get(buttonBeforeTable).should("have.focus");

        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        table.cell({ row: 2, col: 2 }).should("have.focus");
    });
});
