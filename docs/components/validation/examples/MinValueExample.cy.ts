import MinValueExample from "./MinValueExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(MinValueExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow decimal value", () => {
    cy.mount(MinValueExample);
    cy.get(input).clear();
    cy.get(input).type("10,5");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow value equal/above the limit", () => {
    cy.mount(MinValueExample);
    cy.get(input).clear();
    cy.get(input).type("10");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show error if value is below the limit", () => {
    cy.mount(MinValueExample);
    cy.get(input).clear();
    cy.get(input).type("9");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
