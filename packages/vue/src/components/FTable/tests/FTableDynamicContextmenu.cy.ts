import Example from "./FTableDynamicContextmenuExample.vue";
import { FSelectFieldPageObject, FTablePageObject } from "@fkui/vue/cypress";

const table = new FTablePageObject();
const permissionSelect = new FSelectFieldPageObject(
    ".select-field:contains('Behörighet')",
);

describe("FTableDynamicContextmenuExample", () => {
    it("1.1 should show different actions depending on row status", () => {
        cy.mount(Example);

        table.cell({ row: 1, col: 3 }).click();
        table.contextmenuItems().should("contain.text", "Visa beslut");
        table.contextmenuItems().should("not.contain.text", "Visa utkast");
        table.contextmenuItems().should("not.contain.text", "Skicka in");
        table.contextmenuItems().should("not.contain.text", "Redigera");

        cy.focused().type("{esc}");

        table.cell({ row: 3, col: 3 }).click();
        table.contextmenuItems().should("contain.text", "Visa utkast");
        table.contextmenuItems().should("contain.text", "Skicka in");
        table.contextmenuItems().should("contain.text", "Redigera");
        table.contextmenuItems().should("not.contain.text", "Visa beslut");
    });

    it("1.2 should show and hide actions depending on permission", () => {
        cy.mount(Example);

        table.cell({ row: 1, col: 3 }).click();
        table.contextmenuItems().should("contain.text", "Visa beslut");
        table.contextmenuItems().should("not.contain.text", "Ta bort");

        cy.focused().type("{esc}");
        table.contextmenu().should("not.exist");

        permissionSelect.dropdown().select("Admin");

        table.cell({ row: 1, col: 3 }).click();
        table.contextmenuItems().should("contain.text", "Visa beslut");
        table.contextmenuItems().should("contain.text", "Ta bort");
    });

    it("1.3 should update menu actions when row status is changed", () => {
        cy.mount(Example);

        table.cell({ row: 3, col: 3 }).click();
        table.contextmenuItems().should("contain.text", "Visa utkast");
        table.contextmenuItems().should("contain.text", "Skicka in");
        table.contextmenuItems().should("contain.text", "Redigera");
        table.contextmenuItems().should("not.contain.text", "Visa beslut");

        cy.focused().type("{esc}");
        table.contextmenu().should("not.exist");

        table.cell({ row: 3, col: 2 }).click();
        table.selectDropdown().should("exist");

        cy.focused().type("{downarrow}{enter}");

        table.cell({ row: 3, col: 3 }).click();
        table.contextmenuItems().should("contain.text", "Visa beslut");
        table.contextmenuItems().should("not.contain.text", "Visa utkast");
        table.contextmenuItems().should("not.contain.text", "Skicka in");
        table.contextmenuItems().should("not.contain.text", "Redigera");
    });
});
