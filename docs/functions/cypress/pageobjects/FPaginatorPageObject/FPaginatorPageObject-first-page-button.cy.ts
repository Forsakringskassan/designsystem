import { FPaginatorPageObject } from "@fkui/vue/cypress";
import Example from "./FPaginatorPageObject.vue";

it("firstPageButton() should navigate to first page", () => {
    cy.mount(Example);
    cy.viewport("macbook-13");

    /* --- cut above --- */
    const paginator = new FPaginatorPageObject("[data-test='myPaginator']");
    paginator.pageButton(3).click();
    paginator.currentPageButton().should("contain.text", "3");

    // Go to first page
    paginator.firstPageButton().click();
    paginator.currentPageButton().should("contain.text", "1");
    /* --- cut below --- */
});
