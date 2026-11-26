import VisualExample from "./examples/FLayoutLeftPanelVisualExample.vue";

describe("Visual", () => {
    beforeEach(() => {
        cy.viewport(800, 500);
        cy.mount(VisualExample);
    });

    it("should render correct styling when open", () => {
        cy.toMatchScreenshot();
    });

    it("should render correct styling when closed", () => {
        // Technical debt: currently no pageobject/selectors for FLayoutLeftPanel.
        cy.get(".layout-navigation__navigation__inner__title button").click();
        cy.toMatchScreenshot();
    });
});
