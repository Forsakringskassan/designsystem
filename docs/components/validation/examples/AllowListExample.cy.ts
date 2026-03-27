import AllowListExample from "./AllowListExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(AllowListExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow if input exactly matches option in list", () => {
    cy.mount(AllowListExample);
    cy.get(input).clear();
    cy.get(input).type("bar");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show error if input not exactly matches option in list", () => {
    cy.mount(AllowListExample);
    cy.get(input).clear();
    cy.get(input).type("lorem");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
