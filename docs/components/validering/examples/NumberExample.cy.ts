import NumberExample from "./NumberExample.vue";

const input = `.text-field:has(#input) input`;
const error = `.text-field:has(#input) .label__message--error`;

it("should allow empty input", () => {
    cy.mount(NumberExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow integer", () => {
    cy.mount(NumberExample);
    cy.get(input).clear();
    cy.get(input).type("45");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow decimal", () => {
    cy.mount(NumberExample);
    cy.get(input).clear();
    cy.get(input).type("1,5");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow negative values", () => {
    cy.mount(NumberExample);
    cy.get(input).clear();
    cy.get(input).type("-11");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show error for non-leading minus sign", () => {
    cy.mount(NumberExample);
    cy.get(input).clear();
    cy.get(input).type("45-16");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
