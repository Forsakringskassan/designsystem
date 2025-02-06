import IntegerExample from "./IntegerExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(IntegerExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow integers", () => {
    cy.mount(IntegerExample);
    cy.get(input).clear();
    cy.get(input).type("45");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow integer with spaces", () => {
    cy.mount(IntegerExample);
    cy.get(input).clear();
    cy.get(input).type("45 160 000");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow negative integer", () => {
    cy.mount(IntegerExample);
    cy.get(input).clear();
    cy.get(input).type("-45");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("Should show an error for non-leading minus sign", () => {
    cy.mount(IntegerExample);
    cy.get(input).clear();
    cy.get(input).type("45-16");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show an error for decimal value", () => {
    cy.mount(IntegerExample);
    cy.get(input).clear();
    cy.get(input).type("1,5");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
