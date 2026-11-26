import EntrypointVisualTest from "./examples/EntrypointVisualTest.vue";

describe("Visual", () => {
    it("entrypoint should have correct style", () => {
        cy.viewport(400, 200);
        cy.mount(EntrypointVisualTest);
        cy.get("#visual-wrapper").toMatchScreenshot();
    });
});
