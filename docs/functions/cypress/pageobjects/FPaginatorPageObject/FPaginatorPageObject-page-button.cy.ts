import { FPaginatorPageObject } from "@fkui/vue/cypress";
import Example from "./FPaginatorPageObject.vue";

it("pageButton() should navigate to specific page or pages", () => {
    cy.mount(Example);
    cy.viewport("macbook-13");

    /* --- cut above --- */
    const paginator = new FPaginatorPageObject("[data-test='myPaginator']");

    // No param
    const pageButtons = paginator.pageButton();
    pageButtons.should("have.length", 9);

    // String param
    paginator.pageButton("3").click();
    paginator.currentPageButton().should("contain.text", "3");

    // Number param
    paginator.pageButton(3).click();
    paginator.currentPageButton().should("contain.text", "4");

    // Number param with value "-1"
    paginator.pageButton(-1).click();
    paginator.currentPageButton().should("contain.text", "20");

    // Number param with value "-2"
    paginator.pageButton(-2).click();
    paginator.currentPageButton().should("contain.text", "19");

    // Number param with value "0"
    paginator.pageButton(0).click();
    paginator.currentPageButton().should("contain.text", "1");
    /* --- cut below --- */
});
