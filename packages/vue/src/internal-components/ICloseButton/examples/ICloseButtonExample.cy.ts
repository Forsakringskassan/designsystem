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
