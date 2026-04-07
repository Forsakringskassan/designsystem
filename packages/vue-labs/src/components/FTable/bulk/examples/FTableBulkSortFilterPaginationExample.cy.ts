import {
    FPaginatorPageObject,
    FSortFilterDatasetPageObject,
} from "@fkui/vue/cypress";
import { FTablePageObject } from "../../../../cypress";
import Example from "./FTableBulkSortFilterPaginationExample.vue";

const table = new FTablePageObject();
const paginator = new FPaginatorPageObject();
const sorter = new FSortFilterDatasetPageObject('[data-test="filter"]');

describe("FTableBulkSortFilterPaginationExample", () => {
    it("selecting all on page 2 selects all rows across pages", () => {
        cy.mount(Example);

        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        table.selectHeaderInput().click();

        cy.get("[data-test=selected-count]").should(
            "contain.text",
            "Valda rader: 8",
        );
        table
            .selectHeaderInput()
            .should("be.checked")
            .and("have.prop", "indeterminate", false);

        paginator.previousButton().click();
        paginator.currentPageButton().should("contain.text", "1");
        table.selectInput(1).should("be.checked");
        table.selectInput(3).should("be.checked");
    });

    it("unselecting all on page 2 clears selections across all pages", () => {
        cy.mount(Example);

        paginator.nextButton().click();
        table.selectHeaderInput().click();
        table.selectHeaderInput().click();

        cy.get("[data-test=selected-count]").should(
            "contain.text",
            "Valda rader: 0",
        );
        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", false);

        paginator.previousButton().click();
        table.selectInput(1).should("not.be.checked");
        table.selectInput(3).should("not.be.checked");
    });

    it("selecting all on page 2 of a filtered result selects all filtered rows", () => {
        cy.mount(Example);

        sorter.textField.input().type("Alfa");
        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        table.selectHeaderInput().click();

        cy.get("[data-test=selected-count]").should(
            "contain.text",
            "Valda rader: 5",
        );
        table
            .selectHeaderInput()
            .should("be.checked")
            .and("have.prop", "indeterminate", false);

        paginator.previousButton().click();
        table.selectInput(1).should("be.checked");
        table.selectInput(3).should("be.checked");
    });
});
