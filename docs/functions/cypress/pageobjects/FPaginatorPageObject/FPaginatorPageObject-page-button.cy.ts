import { FPaginatorPageObject } from "@fkui/vue/cypress";
import Example from "./FPaginatorPageObject.vue";

it("pageButton() should navigate to specific page", () => {
    cy.mount(Example);
    cy.viewport("macbook-13");

    /* --- cut above --- */
    const paginator = new FPaginatorPageObject("[data-test='myPaginator']");
    paginator.pageButton(4).click();
    paginator.currentPageButton().should("contain.text", "4");
    /* --- cut below --- */
});
