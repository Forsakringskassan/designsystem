import Example from "./FTableDependableSelectsExample.vue";
import { FTablePageObject } from "@fkui/vue/cypress";

const table = new FTablePageObject();

describe("FTableDependableSelectsExample", () => {
    it("should show options depending on the selected category", () => {
        cy.mount(Example);

        table.select({ row: 1, col: 1 }).should("contain.text", "Katter");
        table.select({ row: 1, col: 1 }).should("contain.text", "Hundar");

        table.cell({ row: 1, col: 1 }).should("contain.text", "Katter");

        table.cell({ row: 1, col: 2 }).click();

        table.select({ row: 1, col: 2 }).should("contain.text", "Findus");
        table
            .select({ row: 1, col: 2 })
            .should("contain.text", "Pelle Svanslös");
        table
            .select({ row: 1, col: 2 })
            .should("contain.text", "Katten Jansson");

        table.select({ row: 1, col: 1 }).select("Hundar");

        table.cell({ row: 1, col: 1 }).should("contain.text", "Hundar");

        table.select({ row: 1, col: 2 }).should("contain.text", "Båtsman");
        table.select({ row: 1, col: 2 }).should("contain.text", "Pluto");
        table.select({ row: 1, col: 2 }).should("contain.text", "Bluey");
    });
});
