import FPaginator from "./FPaginator.vue";

describe("visual regression", () => {
    beforeEach(() => {
        cy.mount(FPaginator, {
            props: {
                numberOfPages: 15,
                currentPage: 7,
            },
        });
    });

    it("should have approved design for desktop", () => {
        cy.viewport(800, 80);
        cy.toMatchScreenshot();
    });

    it("should have approved design for mobile", () => {
        cy.viewport(400, 80);
        cy.toMatchScreenshot();
    });
});
