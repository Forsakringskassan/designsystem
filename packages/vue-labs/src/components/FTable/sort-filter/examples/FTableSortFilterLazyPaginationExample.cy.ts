import {
    FPaginatorPageObject,
    FSortFilterDatasetPageObject,
} from "@fkui/vue/cypress";
import { FTablePageObject } from "../../../../cypress";
import Example from "./FTableSortFilterLazyPaginationExample.vue";

const table = new FTablePageObject();
const paginator = new FPaginatorPageObject();
const sorter = new FSortFilterDatasetPageObject('[data-test="filter"]');

describe("FTableSortFilterLazyPaginationExample", () => {
    it("jumps to last page when a new row is added", () => {
        cy.mount(Example);

        paginator.currentPageButton().should("contain.text", "1");

        cy.get('[data-test="add-row"]').click();

        paginator.currentPageButton().should("contain.text", "3");
    });

    it("jumps to first page when refresh is called", () => {
        cy.mount(Example);

        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        cy.get('[data-test="refresh"]').click();

        paginator.currentPageButton().should("contain.text", "1");
    });

    it("clears selected rows when refresh is called", () => {
        cy.mount(Example);

        table.selectInput(1).click();
        cy.get('[data-test="selected-count"]').should("contain.text", "Valda rader: 1");

        cy.get('[data-test="refresh"]').click();

        cy.get('[data-test="selected-count"]').should("contain.text", "Valda rader: 0");
        table.selectInput(1).should("not.be.checked");
    });

    it("goes to first page when user applies filter", () => {
        cy.mount(Example);

        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        sorter.textField.input().type("Ban");

        paginator.currentPageButton().should("contain.text", "1");
    });
});
