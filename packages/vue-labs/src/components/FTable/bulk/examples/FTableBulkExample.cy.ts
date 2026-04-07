import { FTablePageObject } from "../../../../cypress";
import Example from "./FTableBulkExample.vue";

const table = new FTablePageObject();

describe("FTableBulkPlainExample", () => {
    it("selects all rows when header checkbox is checked", () => {
        cy.mount(Example);

        table.selectHeaderInput().should("not.be.checked");
        cy.get("[data-test=selected-count]").should(
            "contain.text",
            "Valda rader: 0",
        );

        table.selectHeaderInput().click();

        table.selectHeaderInput().should("be.checked");
        table.selectInput(1).should("be.checked");
        table.selectInput(10).should("be.checked");
        cy.get("[data-test=selected-count]").should(
            "contain.text",
            "Valda rader: 10",
        );
    });

    it("toggles indeterminate and unchecked state when selecting and unselecting a single row", () => {
        cy.mount(Example);

        table.selectInput(1).click();

        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", true);
        cy.get("[data-test=selected-count]").should(
            "contain.text",
            "Valda rader: 1",
        );

        table.selectInput(1).click();

        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", false);
        cy.get("[data-test=selected-count]").should(
            "contain.text",
            "Valda rader: 0",
        );
    });
});
