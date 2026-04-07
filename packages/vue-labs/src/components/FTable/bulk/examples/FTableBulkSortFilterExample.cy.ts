import { FSortFilterDatasetPageObject } from "@fkui/vue/cypress";
import { FTablePageObject } from "../../../../cypress";
import Example from "./FTableBulkSortFilterExample.vue";

const table = new FTablePageObject();
const sorter = new FSortFilterDatasetPageObject('[data-test="filter"]');

it("should have working table", () => {
    cy.mount(Example);
    table.rows().should("have.length", 2);
});

it("should have working sortfilter", () => {
    cy.mount(Example);
    sorter.textField.enter("b");
    table.rows().should("have.length", 1);
});

it(`should have working "Lägg till rad" button`, () => {
    cy.mount(Example);
    cy.contains("button", "Lägg till rad").click();
    table.rows().should("have.length", 3);
});

it(`should have working "Ta bort markerade rader" button`, () => {
    cy.mount(Example);
    table.selectInput(2).check();
    cy.contains("button", "Ta bort markerade rader").click();
    table.rows().should("have.length", 1);
});
