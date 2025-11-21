import { FInteractiveTablePageObject } from "../../../cypress";
import { FPaginatorPageobject } from "../../../cypress/FPaginator.pageobject";
import Example1 from "./FPaginatorExample.vue";
import Example from "./FPaginatorPageObject.vue";

describe("Requirement 1.1: splitting data across multiple pages", () => {
    beforeEach(() => {
        cy.mount(Example);
        cy.viewport("macbook-13");
    });

    it("should display multiple pages and allow navigation between them", () => {
        const nav = '[data-test="nav"]';

        const paginator = new FPaginatorPageobject("[data-test='myPaginator']");
        paginator.currentPageButton().should("contain.text", "1");

        // Go to next page
        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "3");

        paginator.pageButton(-1).click();
        paginator.currentPageButton().should("contain.text", "4");

        paginator.pageButton(0).click();
        paginator.currentPageButton().should("contain.text", "1");

        paginator.previousButton().click();
        paginator.currentPageButton().should("contain.text", "1");
    });
});

describe("Requirement 1.2", () => {
    beforeEach(() => {
        cy.mount(Example1);
        cy.viewport("macbook-13");
    });

    //subset
    it("should be able to fetch a subset", () => {
        const table = new FInteractiveTablePageObject();
        const paginator = new FPaginatorPageobject("[data-test='myPaginator']");

        table.bodyRow().should("have.length", 5); //check the first page (subset)
        table.cell({ row: 1, col: 1 }).should("contain.text", "A1");
        table.cell({ row: 5, col: 3 }).should("contain.text", "C5");

        paginator.nextButton().click();
        table.cell({ row: 1, col: 1 }).should("contain.text", "A6");
        table.cell({ row: 5, col: 3 }).should("contain.text", "C10");

        paginator.nextButton().click();
        table.cell({ row: 1, col: 1 }).should("contain.text", "A11");
        table.cell({ row: 5, col: 3 }).should("contain.text", "C15");

        paginator.pageButton(-1).click();
        table.cell({ row: 1, col: 1 }).should("contain.text", "A16");
        table.cell({ row: 5, col: 3 }).should("contain.text", "C20");
    });

    // the entire dataset
    it("should be able to fetch the entire dataset", () => {
        const table = new FInteractiveTablePageObject();
        const paginator = new FPaginatorPageobject("[data-test='myPaginator']");

        table.bodyRow().should("have.length", 10);
        table
            .cell({ row: 1, col: 2 })
            .should("contain.text", "Anabel Kolakovic");
        table.cell({ row: 10, col: 2 }).should("contain.text", "Dolf Buttrey");

        paginator.nextButton().click();
        table
            .cell({ row: 1, col: 2 })
            .should("contain.text", "Giulietta Wiltshire");
        table
            .cell({ row: 10, col: 2 })
            .should("contain.text", "Hildegarde Smickle");

        paginator.nextButton().click();
        table
            .cell({ row: 1, col: 2 })
            .should("contain.text", "Sherlocke Bowller");
        table.cell({ row: 10, col: 2 }).should("contain.text", "Maria Covotti");

        paginator.pageButton(-1).click();
        table
            .cell({ row: 1, col: 2 })
            .should("contain.text", "Raymund Desorts");
        table.cell({ row: 10, col: 2 }).should("contain.text", "Jeni Gummie");
    });
});

describe("Requirement 1.3", () => {
    beforeEach(() => {
        cy.mount(Example);
        cy.viewport("macbook-13");
    });

    it("should be able to set how many rows are displayed per page", () => {
        const paginator = new FPaginatorPageobject(".paginator");

        paginator.currentPageButton().should("contain.text", "1");

        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");
    });
});

describe("Requirement 1.4", () => {
    beforeEach(() => {
        cy.mount(Example);
        cy.viewport("macbook-13");
    });

    it("should be able to navigate to different pages and restrict navigation at the edges", () => {
        cy.get("button")
            .contains("1")
            .should("have.attr", "aria-current", "page");

        cy.get("button").contains("3").click();
        cy.get("button")
            .contains("3")
            .should("have.attr", "aria-current", "page");

        cy.get("button").contains("Nästa").click();
        cy.get("button")
            .contains("4")
            .should("have.attr", "aria-current", "page");

        cy.get("button").contains("1").click();
        cy.get("button")
            .contains("1")
            .should("have.attr", "aria-current", "page");
    });
});

describe("Requirement 1.5: display navigable pages", () => {
    const totalpage = 20;
    beforeEach(() => {
        cy.mount(Example);
        cy.viewport("macbook-13");
    });

    it("should show which pages are available for navigation", () => {
        const paginator = new FPaginatorPageobject("[data-test='myPaginator']");

        paginator.currentPageButton().should("contain.text", "1");

        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        paginator.pageButton(3).click();
        paginator.currentPageButton().should("contain.text", "3");

        paginator.pageButton(1).should("not.have.attr", "aria-current", "page");

        paginator
            .currentPageButton()
            .should("have.attr", "aria-current", "page");
    });
});

describe("Requirement 1.6: Navigation & visual page information", () => {
    beforeEach(() => {
        cy.mount(Example1);
        cy.viewport("macbook-13");
    });

    it("should display the current page when navigation & visual page information", () => {
        const paginator = new FPaginatorPageobject("[data-test='myPaginator']");

        paginator.currentPageButton().should("contain.text", "1");

        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        paginator.previousButton().click();
        paginator.currentPageButton().should("contain.text", "1");

        paginator.pageButton(3).click();
        paginator.currentPageButton().should("contain.text", "3");

        paginator.pageButton(0).click();
        paginator.currentPageButton().should("contain.text", "1");

        paginator.pageButton(-1).click();
        paginator.currentPageButton().should("contain.text", "10");
    });

    it("should display previous/Next below the page on mobile", () => {
        cy.viewport("iphone-6");

        const paginator = new FPaginatorPageobject("[data-test='myPaginator']");

        paginator.previousButton().should("be.visible");

        paginator.nextButton().should("be.visible");
    });
});

describe("Requirement 1.9: focus during navigation", () => {
    beforeEach(() => {
        cy.mount(Example);
        cy.viewport("macbook-13");
    });

    it("should show which pages are available for navigation", () => {
        const paginator = new FPaginatorPageobject("[data-test='myPaginator']");

        paginator.nextButton().click();

        paginator.previousButton().click();

        paginator.previousButton().should("be.focused");
    });

    it("should retain focus on the Next button after click", () => {
        const paginator = new FPaginatorPageobject("[data-test='myPaginator']");

        paginator.nextButton().click().should("be.focused");
    });
});

describe("Requirement 1.10: aria-current", () => {
    beforeEach(() => {
        cy.mount(Example);
        cy.viewport("macbook-13");
    });

    it("should have aria-current on the active page", () => {
        const paginator = new FPaginatorPageobject("[data-test='myPaginator']");

        paginator
            .currentPageButton()
            .should("have.attr", "aria-current", "page");

        paginator.nextButton().click();
        paginator
            .currentPageButton()
            .should("have.attr", "aria-current", "page");

        paginator.nextButton().click();

        paginator
            .currentPageButton()
            .should("have.attr", "aria-current", "page");
    });
});

describe("Requirement 1.11: Mobile mode", () => {
    beforeEach(() => {
        cy.mount(Example);
        cy.viewport("iphone-8");
    });

    it("should display and navigate between pages on mobile", () => {
        const paginator = new FPaginatorPageobject("[data-test='myPaginator']");

        paginator.currentPageButton().should("contain.text", "1");

        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "3");

        paginator.previousButton().click();
        paginator.currentPageButton().should("contain.text", "2");
    });
});
