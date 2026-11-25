import ICloseButtonExample from "./ICloseButtonExample.vue";

it("should close the popup and return focus to its opener", () => {
    cy.mount(ICloseButtonExample);

    cy.contains("button", "Öppna popup")
        .should("have.attr", "aria-expanded", "false")
        .click();
    cy.contains("p", "Innehåll i popupen.").should("be.visible");
    cy.contains("button", "Stäng")
        .should("have.focus")
        .and(($button) => {
            expect($button.text().trim()).to.equal("Stäng");
            expect($button).to.have.attr("aria-label", "Stäng popupen");
        })
        .click();

    cy.contains("p", "Innehåll i popupen.").should("not.exist");
    cy.contains("button", "Öppna popup")
        .should("have.focus")
        .and("have.attr", "aria-expanded", "false");
});

it("should trap keyboard focus", () => {
    cy.viewport(1024, 600);
    cy.mount(ICloseButtonExample);
    cy.contains("button", "Öppna popup").click();
    cy.get(".popup button")
        .should("have.focus")
        .then(($button) => {
            const event = new KeyboardEvent("keydown", {
                key: "Tab",
                bubbles: true,
                cancelable: true,
            });
            $button[0].dispatchEvent(event);
            expect(event.defaultPrevented).to.equal(true);
        });
    cy.get(".popup button").should("have.focus");
    cy.get(".popup button").click();
    cy.contains("button", "Öppna popup").should("have.focus");
});
