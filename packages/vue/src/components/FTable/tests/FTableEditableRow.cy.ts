import Example from "./FTableEditableRowExample.vue";
import { FTablePageObject } from "@fkui/vue/cypress";

const table = new FTablePageObject();

function firstRow(): Cypress.Chainable<Record<string, string>> {
    return cy
        .get("[data-test=rows]")
        .invoke("text")
        .then((text) => (JSON.parse(text) as Array<Record<string, string>>)[0]);
}

describe("FTable with editable(row) depending on other fields", () => {
    beforeEach(() => {
        cy.mount(Example);

        table.cell({ row: 1, col: 1 }).click();
        table.selectDropdownOption(1).click();
        table.cell({ row: 1, col: 2 }).click();
        table.selectDropdownOption(1).click();
    });

    it("should keep description after clicking outside the row", () => {
        table.cell({ row: 1, col: 3 }).click();
        cy.focused().type("Hund i parken");
        cy.get("button").contains("Utanför").click();

        table.cell({ row: 1, col: 3 }).should("contain.text", "Hund i parken");
        firstRow().should("have.property", "description", "Hund i parken");
    });

    it("should still be editable when clicking the description again", () => {
        table.cell({ row: 1, col: 3 }).click();
        cy.focused().type("Hund i parken");
        cy.get("button").contains("Utanför").click();

        table.cell({ row: 1, col: 3 }).click();
        table.cell({ row: 1, col: 3 }).find("input").should("have.focus");
        table
            .cell({ row: 1, col: 3 })
            .find("input")
            .should("have.value", "Hund i parken");
    });

    it("should reset description only when animal changes", () => {
        table.cell({ row: 1, col: 3 }).click();
        cy.focused().type("Hund i parken");
        cy.get("button").contains("Utanför").click();

        table.cell({ row: 1, col: 1 }).click();
        table.selectDropdownOption(2).click();

        firstRow().should("include", {
            animal: "Katt",
            name: "",
            description: "",
        });
    });

    it("should show reset name in the cell when animal changes", () => {
        table.cell({ row: 1, col: 2 }).should("contain.text", "Pluto");

        table.cell({ row: 1, col: 1 }).click();
        table.selectDropdownOption(2).click();

        table.cell({ row: 1, col: 1 }).should("contain.text", "Katt");
        table.cell({ row: 1, col: 2 }).should("not.contain.text", "Pluto");
    });
});
