import { FPaginatorPageobject } from "@fkui/vue/cypress";
import Example from "./FPaginatorPageObject.vue";

it("el() should select correct element", () => {
    cy.mount(Example);
    cy.viewport("macbook-13");

    /* --- cut above --- */
    const paginator = new FPaginatorPageobject("[data-test='myPaginator']");
    paginator.el().should("have.attr", "data-test", "myPaginator");
    /* --- cut below --- */
});
