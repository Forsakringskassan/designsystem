import { FPaginatorPageobject } from "@fkui/vue/cypress";
import Example from "./FPaginatorPageObject.vue";

it("nextButton() should navigate to next page", () => {
    cy.mount(Example);
    cy.viewport("macbook-13");

    /* --- cut above --- */
    const paginator = new FPaginatorPageobject("[data-test='myPaginator']");
    paginator.currentPageButton().should("contain.text", "1");

    // Go to next page
    paginator.nextButton().click();
    paginator.currentPageButton().should("contain.text", "2");
    /* --- cut below --- */
});
