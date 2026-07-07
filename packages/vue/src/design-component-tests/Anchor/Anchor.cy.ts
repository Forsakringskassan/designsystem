import AnchorVisualTest from "./examples/AnchorVisualTest.vue";

describe("Visual", () => {
    it("anchor should have correct style", () => {
        cy.viewport(300, 500);
        cy.mount(AnchorVisualTest);
        cy.get("#visual-wrapper").toMatchScreenshot();
    });

    it("discrete anchor should have correct style", () => {
        cy.viewport(300, 500);
        cy.mount(AnchorVisualTest, { props: { discrete: true } });
        cy.get("#visual-wrapper").toMatchScreenshot();
    });
});
