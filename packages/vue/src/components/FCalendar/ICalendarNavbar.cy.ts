import ICalendarNavbarExample from "./examples/ICalendarNavbarExample.vue";

const forcedColorModes = ["none", "dark", "light"] as const;

describe("`forced-colors` media feature", () => {
    for (const mode of Object.values(forcedColorModes)) {
        it(`should render correct styling for mode '${mode}'`, () => {
            cy.viewport(400, 200);
            cy.forcedColors(mode);
            cy.mount(ICalendarNavbarExample);
            cy.toMatchScreenshot();
        });
    }
});
