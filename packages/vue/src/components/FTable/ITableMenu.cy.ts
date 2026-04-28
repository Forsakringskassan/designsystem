import { h } from "vue";
import { FTablePageObject } from "../../cypress";
import { useDatasetRef } from "../../utils";
import FTable from "./FTable.vue";
import { defineTableColumns } from "./table-column";

interface Row {
    id: number;
    text: string;
}

const table = new FTablePageObject();

before(() => {
    cy.viewport(800, 600);
});

describe("ITableMenu", () => {
    it("should open context menu when cell is activated", () => {
        const rows: Row[] = [{ id: 1, text: "Text" }];
        const columns = defineTableColumns<Row>([
            {
                type: "text",
                header: "Text",
                key: "text",
            },
            {
                type: "menu",
                header: "Actions",
                text() {
                    return "Actions";
                },
                actions: [{ label: "foo" }, { label: "bar" }],
            },
        ]);

        cy.mount(() =>
            h(FTable<Row>, { rows: useDatasetRef<Row>(rows).value, columns }),
        );

        table.contextmenu().should("not.exist");
        table.cell({ row: 1, col: 2 }).click();
        table.contextmenu().should("exist");
        table.contextmenuItems().should("have.length", 2);
        table.contextmenuItems().eq(0).should("contain.text", "foo");
        table.contextmenuItems().eq(1).should("contain.text", "bar");
    });

    it("should close context menu when pressing escape", () => {
        const rows: Row[] = [{ id: 1, text: "Text" }];
        const columns = defineTableColumns<Row>([
            { type: "text", header: "Text", key: "text" },
            {
                type: "menu",
                header: "Actions",
                text() {
                    return "Actions";
                },
                actions: [{ label: "foo" }, { label: "bar" }],
            },
        ]);

        cy.mount(() =>
            h(FTable<Row>, { rows: useDatasetRef<Row>(rows).value, columns }),
        );

        table.contextmenu().should("not.exist");
        table.cell({ row: 1, col: 2 }).click();
        table.contextmenu().should("exist");
        cy.focused().type("{esc}");
        table.contextmenu().should("not.exist");
        table.cell({ row: 1, col: 2 }).find("button").should("be.focused");
    });

    it("should close context menu when clicking outside", () => {
        const rows: Row[] = [{ id: 1, text: "Text" }];
        const columns = defineTableColumns<Row>([
            { type: "text", header: "Text", key: "text" },
            {
                type: "menu",
                header: "Actions",
                text() {
                    return "Actions";
                },
                actions: [{ label: "foo" }, { label: "bar" }],
            },
        ]);

        cy.mount(() =>
            h(FTable<Row>, { rows: useDatasetRef<Row>(rows).value, columns }),
        );

        table.contextmenu().should("not.exist");
        table.cell({ row: 1, col: 2 }).click();
        table.contextmenu().should("exist");
        table.cell({ row: 1, col: 1 }).click();
        table.contextmenu().should("not.exist");
        table.cell({ row: 1, col: 1 }).should("be.focused");
    });

    it("should close context menu when tabbing", () => {
        const rows: Row[] = [{ id: 1, text: "Text" }];
        const columns = defineTableColumns<Row>([
            { type: "text", header: "Text", key: "text" },
            {
                type: "menu",
                header: "Actions",
                text() {
                    return "Actions";
                },
                actions: [{ label: "foo" }, { label: "bar" }],
            },
        ]);

        cy.mount(() =>
            h(FTable<Row>, { rows: useDatasetRef<Row>(rows).value, columns }),
        );

        table.cell({ row: 1, col: 2 }).click();
        table.contextmenu().should("exist");
        cy.press(Cypress.Keyboard.Keys.TAB);
        table.contextmenu().should("not.exist");
        table.cell({ row: 1, col: 2 }).find("button").should("be.focused");
    });

    it("should close context menu after selecting an item", () => {
        const rows: Row[] = [{ id: 1, text: "Text" }];
        const columns = defineTableColumns<Row>([
            { type: "text", header: "Text", key: "text" },
            {
                type: "menu",
                header: "Actions",
                text() {
                    return "Actions";
                },
                actions: [{ label: "foo" }, { label: "bar" }],
            },
        ]);

        cy.mount(() =>
            h(FTable<Row>, { rows: useDatasetRef<Row>(rows).value, columns }),
        );

        table.cell({ row: 1, col: 2 }).click();
        table.contextmenu().should("exist");
        table.contextmenuItems().first().click();
        table.contextmenu().should("not.exist");
        table.cell({ row: 1, col: 2 }).find("button").should("be.focused");
    });

    it("should close current context menu when opening another", () => {
        const rows: Row[] = [
            { id: 1, text: "Text 1" },
            { id: 1, text: "Text 2" },
        ];
        const columns = defineTableColumns<Row>([
            { type: "text", header: "Text", key: "text" },
            {
                type: "menu",
                header: "Actions",
                text() {
                    return "Actions";
                },
                actions: [{ label: "foo" }, { label: "bar" }],
            },
        ]);

        cy.mount(() =>
            h(FTable<Row>, { rows: useDatasetRef<Row>(rows).value, columns }),
        );

        table.cell({ row: 2, col: 2 }).click();
        table.contextmenu().should("have.length", 1);

        table.cell({ row: 1, col: 2 }).click();
        table.contextmenu().should("have.length", 1);
    });

    it("should call action when menu item is selected", () => {
        const rows: Row[] = [{ id: 1, text: "Text" }];
        const foo = cy.stub().as("fooClick");
        const bar = cy.stub().as("barClick");
        const columns = defineTableColumns<Row>([
            { type: "text", header: "Text", key: "text" },
            {
                type: "menu",
                header: "Actions",
                text() {
                    return "Actions";
                },
                actions: [
                    { label: "foo", onClick: foo },
                    { label: "bar", onClick: bar },
                ],
            },
        ]);

        cy.mount(() =>
            h(FTable<Row>, { rows: useDatasetRef<Row>(rows).value, columns }),
        );

        table.cell({ row: 1, col: 2 }).click();
        table.contextmenuItems().first().click();
        cy.get("@fooClick").should("have.been.calledWith", rows[0]);
        cy.get("@barClick").should("not.have.been.called");
        table.contextmenu().should("not.exist");
        table.cell({ row: 1, col: 2 }).find("button").should("be.focused");
    });

    it("should handle actions without onClick handler", () => {
        const rows: Row[] = [{ id: 1, text: "Text" }];
        const foo = cy.stub().as("fooClick");
        const columns = defineTableColumns<Row>([
            { type: "text", header: "Text", key: "text" },
            {
                type: "menu",
                header: "Actions",
                text() {
                    return "Actions";
                },
                actions: [{ label: "foo", onClick: foo }, { label: "bar" }],
            },
        ]);

        cy.mount(() =>
            h(FTable<Row>, { rows: useDatasetRef<Row>(rows).value, columns }),
        );

        table.cell({ row: 1, col: 2 }).click();
        table.contextmenuItems().eq(1).click();
        cy.get("@fooClick").should("not.have.been.called");
        table.contextmenu().should("not.exist");
        table.cell({ row: 1, col: 2 }).find("button").should("be.focused");
    });

    it("should focus the menu when context menu is opened", () => {
        const rows: Row[] = [{ id: 1, text: "Text" }];
        const columns = defineTableColumns<Row>([
            { type: "text", header: "Text", key: "text" },
            {
                type: "menu",
                header: "Actions",
                text() {
                    return "Actions";
                },
                actions: [{ label: "foo" }, { label: "bar" }],
            },
        ]);

        cy.mount(() =>
            h(FTable<Row>, { rows: useDatasetRef<Row>(rows).value, columns }),
        );

        table.cell({ row: 1, col: 2 }).click();
        table.contextmenu().should("exist");
        table.contextmenu().should("be.focused");
    });

    it("should support keyboard navigation to open and navigate the context menu", () => {
        const rows: Row[] = [{ id: 1, text: "Text" }];
        const foo = cy.stub().as("fooClick");
        const bar = cy.stub().as("barClick");
        const columns = defineTableColumns<Row>([
            { type: "text", header: "Text", key: "text" },
            {
                type: "menu",
                header: "Actions",
                text() {
                    return "Actions";
                },
                actions: [
                    { label: "foo", onClick: foo },
                    { label: "bar", onClick: bar },
                ],
            },
        ]);

        cy.mount(() =>
            h(FTable<Row>, { rows: useDatasetRef<Row>(rows).value, columns }),
        );

        table.cell({ row: 1, col: 2 }).find("button").focus();
        cy.focused().type("{enter}");
        table.contextmenu().should("exist");
        cy.focused().type("{downarrow}");
        cy.focused().type("{enter}");
        cy.get("@fooClick").should("have.been.calledWith", rows[0]);
    });

    it("should match visual regression", () => {
        const rows: Row[] = [{ id: 1, text: "Text" }];
        const columns = defineTableColumns<Row>([
            { type: "text", header: "Text", key: "text" },
            {
                type: "menu",
                header: "Actions",
                text() {
                    return "Actions";
                },
                actions: [
                    { label: "Edit", icon: "pen" },
                    { label: "Delete", icon: "trashcan" },
                    { label: "View", icon: "pdf" },
                    { label: "Share" },
                ],
            },
        ]);

        cy.mount(() =>
            h(FTable<Row>, { rows: useDatasetRef<Row>(rows).value, columns }),
        );

        table.cell({ row: 1, col: 2 }).click();
        table.el().toMatchScreenshot();
    });
});
