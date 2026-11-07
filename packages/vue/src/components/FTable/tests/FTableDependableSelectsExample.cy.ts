import Example from "./FTableDependableSelectsExample.vue";
import { FTablePageObject } from "@fkui/vue/cypress";

const table = new FTablePageObject();

describe("FTableDependableSelectsExample", () => {
    it("should show options depending on the selected category", () => {
        cy.mount(Example);

        table.select(1, 1).should("contain.text", "Katter");
        table.select(1, 1).should("contain.text", "Hundar");

        table.cell({ row: 1, col: 1 }).should("contain.text", "Katter");

        table.cell({ row: 1, col: 2 }).click();

        table.select(1, 2).should("contain.text", "Findus");
        table.select(1, 2).should("contain.text", "Pelle Svanslös");
        table.select(1, 2).should("contain.text", "Katten Jansson");

        table.select(1, 1).select("Hundar");

        table.cell({ row: 1, col: 1 }).should("contain.text", "Hundar");

        table.select(1, 2).should("contain.text", "Båtsman");
        table.select(1, 2).should("contain.text", "Pluto");
        table.select(1, 2).should("contain.text", "Bluey");
    });
});
