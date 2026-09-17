import Example from "./FTableDependebleSelectsExample.vue";
import { FTablePageObject } from "@fkui/vue/cypress";

const table = new FTablePageObject();

describe("FTableDependebleSelectsExample", () => {
    it("should show options depending on the selected category", () => {
        cy.mount(Example);

        table.cell({ row: 1, col: 1 }).click();
        table.selectDropdown().should("contain.text", "Katter");
        table.selectDropdown().should("contain.text", "Hundar");

        table.cell({ row: 1, col: 1 }).should("contain.text", "Katter");

        cy.focused().type("{esc}");

        table.cell({ row: 1, col: 2 }).click();

        table.selectDropdown().should("contain.text", "Findus");
        table.selectDropdown().should("contain.text", "Pelle Svanslös");
        table.selectDropdown().should("contain.text", "Katten Jansson");

        table.cell({ row: 1, col: 1 }).click();
        table.selectDropdown().contains("Hundar").click();

        table.cell({ row: 1, col: 1 }).should("contain.text", "Hundar");

        cy.focused().type("{esc}");

        table.cell({ row: 1, col: 2 }).click();
        table.selectDropdown().should("contain.text", "Båtsman");
        table.selectDropdown().should("contain.text", "Pluto");
        table.selectDropdown().should("contain.text", "Bluey");

        cy.focused().type("{esc}");
    });
});
