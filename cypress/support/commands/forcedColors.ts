/// <reference types="cypress" />

export type ForcedColorMode = "none" | "dark" | "light";

/**
 * Custom Cypress command for testing with forced colors mode
 * Forces the browser to use forced colors prefers-color-scheme media query
 */
Cypress.Commands.add("forcedColors", (mode: ForcedColorMode) => {
    const cdpCommand = "Emulation.setEmulatedMedia";
    const media = "forced-colors";

    const features =
        mode === "none"
            ? [{ name: media, value: "none" }]
            : [
                  { name: media, value: "active" },
                  {
                      name: "prefers-color-scheme",
                      value: mode,
                  },
              ];

    cy.then(() => {
        return Cypress.automation("remote:debugger:protocol", {
            command: cdpCommand,
            params: {
                media,
                features,
            },
        });
    }).window();
});
