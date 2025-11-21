import { FPaginatorPageobject } from "../../../cypress/FPaginator.pageobject";
import Example from "./FPaginatorPageObject.vue";

describe("FPaginator - Funktionalitet enligt krav 1.6", () => {
    const totalpage = 20; // antal sidor
    beforeEach(() => {
        cy.mount(Example);
        cy.viewport("macbook-13");
    });

    it(" ska mounta komponenten och visa första sidan", () => {
        const paginator = new FPaginatorPageobject("myPaginator");
        paginator.currentPageButton().should("contain.text", "1");
        cy.viewport("iphone-8");
        paginator
            .pageCounter()
            .should("contain.text", `sida 1 av ${totalpage}`);
    });
});
