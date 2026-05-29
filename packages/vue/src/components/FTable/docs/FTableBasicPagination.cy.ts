import FTableBasicPagination from "./FTableBasicPagination.vue";
import { FPaginatorPageObject, FTablePageObject } from "@fkui/vue/cypress";

const table = new FTablePageObject();
const paginator = new FPaginatorPageObject();

it("should paginate", () => {
    cy.mount(FTableBasicPagination);
    paginator.currentPageButton().should("contain.text", "1");
    table.rows().should("have.length", 3);
    paginator.nextButton().click();
    paginator.currentPageButton().should("contain.text", "2");
    table.rows().should("have.length", 1);
});
