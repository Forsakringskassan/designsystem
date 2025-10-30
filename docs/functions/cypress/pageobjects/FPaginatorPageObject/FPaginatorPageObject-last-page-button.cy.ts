import { FPaginatorPageObject } from "@fkui/vue/cypress";
import Example from "./FPaginatorPageObject.vue";

// eslint-disable-next-line mocha/no-pending-tests -- Await adjustments in FPaginatorPageObject
it.skip("lastPageButton() should navigate to last page", () => {
    cy.mount(Example);
    cy.viewport("macbook-13");

    /* --- cut above --- */
    const paginator = new FPaginatorPageObject("[data-test='myPaginator']");
    paginator.pageButton(3).click();
    paginator.currentPageButton().should("contain.text", "3");

    // Go to last page
    paginator.lastPageButton().click();
    paginator.currentPageButton().should("contain.text", "20");
    /* --- cut below --- */
});
