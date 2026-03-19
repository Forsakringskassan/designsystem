import FSelectFieldWidthsExample from "./FSelectFieldWidths.vue";

describe("FSelectFieldWidths example", () => {
    it("should set width classes", () => {
        cy.mount(FSelectFieldWidthsExample);
        cy.get(".i-width-md-9 label").should("exist");
        cy.get(".i-width-md-6 select").should("exist");
    });
});
