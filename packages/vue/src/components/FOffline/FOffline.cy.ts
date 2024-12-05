import FOffline from "./FOffline.vue";

const Viewport = {
    DESKTOP: [1024, 600] as const,
    MOBILE: [639, 600] as const,
};

it("should match visual regression (desktop)", () => {
    cy.viewport(...Viewport.DESKTOP);
    cy.mount(FOffline);
    cy.window().then((window) => {
        window.dispatchEvent(new Event("offline"));
    });
    cy.get(".offline__wrapper").should("be.visible");
    cy.toMatchScreenshot();
});

it("should match visual regression (mobile)", () => {
    cy.viewport(...Viewport.MOBILE);
    cy.mount(FOffline);
    cy.window().then((window) => {
        window.dispatchEvent(new Event("offline"));
    });
    cy.get(".offline__wrapper").should("be.visible");
    cy.toMatchScreenshot();
});
