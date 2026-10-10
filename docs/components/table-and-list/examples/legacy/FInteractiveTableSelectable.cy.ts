import { FInteractiveTablePageObject } from "@fkui/vue/cypress";
import Example from "./FInteractiveTableSelectable.vue";

const table = new FInteractiveTablePageObject(".table");

it("should have correct checkbox labels", () => {
    cy.mount(Example);
    table
        .row(0)
        .find(".checkbox__label")
        .should("contain.text", `Välj "Kalle Anka"`);
    table
        .row(1)
        .find(".checkbox__label")
        .should("contain.text", `Välj "Kajsa Anka"`);
    table
        .row(2)
        .find(".checkbox__label")
        .should("contain.text", `Välj "Joakim von Anka"`);
});

it("should update v-model", () => {
    cy.mount(Example);
    cy.get("pre").should("not.contain.text", "Kalle Anka");
    cy.get("pre").should("not.contain.text", "Joakim von Anka");
    table.row(0).find(".checkbox__label").click();
    table.row(2).find(".checkbox__label").click();
    cy.get("pre").should("contain.text", "Kalle Anka");
    cy.get("pre").should("contain.text", "Joakim von Anka");
});
