import MountOptionsExample from "./examples/MountOptionsExample.vue";

it("should handle props", () => {
    cy.mount(MountOptionsExample);
    cy.get("p").should("contain", "Hej Världen!");
});

it("should handle event listeners", () => {
    const onAlert = cy.stub().as("alert");
    cy.mount(MountOptionsExample);
    cy.on("window:alert", onAlert);
    cy.get("button").click();
    cy.get("@alert").should("have.been.calledOnceWith", "Fick ett svar!");
});
