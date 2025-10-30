import { FPaginatorPageObject } from "@fkui/vue/cypress";
import Example from "./FPaginatorPageObject.vue";

it("pageCounter() should contain correct text", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const paginator = new FPaginatorPageObject("[data-test='myPaginator']");
    paginator.pageCounter().should("contain.text", "1 av 20");
    /* --- cut below --- */
});
