import { FPaginatorPageObject } from "@fkui/vue/cypress";
import Example from "./FPaginatorPageObject.vue";

it("previousButton() should navigate to previous page", () => {
    cy.mount(Example);
    cy.viewport("macbook-13");

    /* --- cut above --- */
    const paginator = new FPaginatorPageObject("[data-test='myPaginator']");
    paginator.pageButton(3).click();
    paginator.currentPageButton().should("contain.text", "3");

    // Go to previous page
    paginator.previousButton().click();
    paginator.currentPageButton().should("contain.text", "2");
    /* --- cut below --- */
});
