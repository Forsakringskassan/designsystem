import IPopupExample from "./IPopupExample.vue";

it("should trap keyboard focus", () => {
    cy.viewport(1024, 600);
    cy.mount(IPopupExample);
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
