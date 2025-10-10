import { type VNode, ref } from "vue";
import { h } from "vue";
import { assertSet } from "@fkui/logic";
import FTable from "./FTable.vue";
import { type FTableApi } from "./f-table-api";
import { defineTableColumns } from "./table-column";

interface AwesomeRow {
    foo: string;
    bar: string;
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
    buttonAfterTable: string;
    buttonAddRow: string;
    getTd: (row: number, col: number) => string;
} {
    const rows = ref([
        { foo: "1", bar: "alpha" },
        { foo: "2", bar: "beta" },
        { foo: "3", bar: "gamma" },
    ]);

    const columns = defineTableColumns<AwesomeRow>([
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
            h(FTable<AwesomeRow>, {
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
        getTd: (rowIndex: number, colIndex: number) =>
            `tr:nth-child(${rowIndex}) td:nth-child(${colIndex})`,
    };
}

function mountRowRemovalTestbed(): {
    buttonBeforeTable: string;
    getTd: (row: number, col: number) => string;
} {
    let api: FTableApi | undefined = undefined;

    const rows = ref([
        { foo: "1", bar: "alpha" },
        { foo: "2", bar: "beta" },
        { foo: "3", bar: "gamma" },
    ]);

    const columns = defineTableColumns<AwesomeRow>([
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

    const buttonBeforeTable = "button-before-table";

    cy.mount(() =>
        h("div", [
            renderButton("Before table", buttonBeforeTable),
            h(FTable<AwesomeRow>, {
                rows: rows.value,
                columns,
                ref: (exposed: unknown) => (api = exposed as FTableApi),
            }),
        ]),
    );

    return {
        buttonBeforeTable: getTestSelector(buttonBeforeTable),
        getTd: (rowIndex: number, colIndex: number) =>
            `tr:nth-child(${rowIndex}) td:nth-child(${colIndex})`,
    };
}

describe("5 tabstop", () => {
    it("5.1 should default to first datacell", () => {
        const { buttonBeforeTable, getTd } = mountDefaultTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.get(getTd(1, 1)).should("have.focus");
    });

    it("5.1 should leave table on tab", () => {
        const { buttonBeforeTable, buttonAfterTable } = mountDefaultTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.get(buttonAfterTable).should("have.focus");
    });

    it("5.2 should only have one tabstop", () => {
        const { buttonBeforeTable, getTd } = mountDefaultTestbed();
        cy.get(getTd(2, 1)).as("td").click();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.focused().should("contain.text", "After table");
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.get("@td").should("have.focus");
    });

    it("5.3 should have tabstop on focused element", () => {
        const { buttonBeforeTable } = mountDefaultTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.focused().should("contain.text", "1");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().should("contain.text", "alpha");
    });

    it("5.4 should fallback according to first-cell mode when current tabstop is removed", () => {
        const { buttonBeforeTable } = mountDefaultTestbed();
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
        const { getTd } = mountRowRemovalTestbed();
        cy.get(getTd(2, 2)).click();
        cy.focused().should("contain.text", "alpha");
        cy.focused().click();
        cy.focused().should("contain.text", "gamma");
        cy.focused().click();
        cy.focused().should("contain.text", "Tabellen är tom");
    });

    it("should set tabstop to first cell when a first row is added", () => {
        const { buttonBeforeTable, buttonAddRow, getTd } =
            mountDefaultTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.get(buttonAddRow).click();
        cy.get(getTd(1, 1)).should("have.attr", "tabindex", "0");
    });
});
