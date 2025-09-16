import { FPaginatorPageObject } from "@fkui/vue/cypress";
import Example from "./FPaginatorPageObject.vue";

it("pageButtons() should return all page buttons", () => {
    cy.mount(Example);
    cy.viewport("macbook-13");

    /* --- cut above --- */
    const paginator = new FPaginatorPageObject("[data-test='myPaginator']");
    const pageButtons = paginator.pageButtons();
    pageButtons.should("have.length", 9);
    /* --- cut below --- */
});
