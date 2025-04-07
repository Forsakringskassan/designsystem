import FCrudDatasetAdditionalButtons from "./FCrudDatasetAdditionalButtons.vue";

it("should show an extra button", () => {
    cy.mount(FCrudDatasetAdditionalButtons);
    cy.get("button").should("have.length", 2);
    cy.get("button:nth(0)").should("contain.text", "Lägg till");
    cy.get("button:nth(1)").should("contain.text", "My button");
});
