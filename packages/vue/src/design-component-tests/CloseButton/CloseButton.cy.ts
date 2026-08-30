import CloseButtonVisualTest from "./examples/CloseButtonVisualTest.vue";

describe("Visual forcedColor", () => {
    const forcedColorModes = ["none", "dark", "light"] as const;

    afterEach(() => {
        cy.forcedColors("none");
    });

    for (const mode of forcedColorModes) {
        it(`should render correct styling for forced color '${mode}' (visual)`, () => {
            cy.viewport(200, 300);
            cy.forcedColors(mode);
            cy.mount(CloseButtonVisualTest);
            cy.get("#visual-wrapper").toMatchScreenshot();
        });
    }
});
