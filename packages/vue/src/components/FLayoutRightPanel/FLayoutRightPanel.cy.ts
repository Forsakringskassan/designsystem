import FLayoutRightPanelVisualExample from "./examples/FLayoutRightPanelVisualExample.vue";

describe("FLayoutRightPanel", () => {
    it("should render correct styling", () => {
        cy.viewport(800, 500);
        cy.mount(FLayoutRightPanelVisualExample);
        cy.get("#Träutensilier").click();
        cy.toMatchScreenshot();
    });
});
