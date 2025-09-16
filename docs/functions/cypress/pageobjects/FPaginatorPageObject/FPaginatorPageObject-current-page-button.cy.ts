import { FPaginatorPageobject } from "@fkui/vue/cypress";
import Example from "./FPaginatorPageObject.vue";

it("currentPageButton() should select current page button", () => {
    cy.mount(Example);
    cy.viewport("macbook-13");

    /* --- cut above --- */
    const paginator = new FPaginatorPageobject("[data-test='myPaginator']");
    paginator.currentPageButton().should("contain.text", "1");
    /* --- cut below --- */
});
