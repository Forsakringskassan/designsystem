import { FPaginatorPageObject } from "@fkui/vue/cypress";
import { FTablePageObject } from "../../../../cypress";
import Example from "./FTableBulkPaginationExample.vue";

const table = new FTablePageObject();
const paginator = new FPaginatorPageObject();

describe("FTableBulkPaginationExample", () => {
    it("selecting all rows on page 1 selects the full dataset, not only current page", () => {
        cy.mount(Example);

        paginator.currentPageButton().should("contain.text", "1");
        table.rows().should("have.length", 3);

        table.selectHeaderInput().click();

        table
            .selectHeaderInput()
            .should("be.checked")
            .and("have.prop", "indeterminate", false);
        table.selectInput(1).should("be.checked");
        table.selectInput(3).should("be.checked");

        cy.get("[data-test=selected-count]").should(
            "contain.text",
            "Valda rader: 6",
        );
    });

    it("navigating to page 2 keeps previously selected rows", () => {
        cy.mount(Example);

        table.selectHeaderInput().click();
        cy.get("[data-test=selected-count]").should(
            "contain.text",
            "Valda rader: 6",
        );

        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        table.selectInput(1).should("be.checked");
        table.selectInput(3).should("be.checked");
        table
            .selectHeaderInput()
            .should("be.checked")
            .and("have.prop", "indeterminate", false);
        cy.get("[data-test=selected-count]").should(
            "contain.text",
            "Valda rader: 6",
        );
    });
});
