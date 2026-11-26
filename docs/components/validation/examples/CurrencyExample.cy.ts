import CurrencyExample from "./CurrencyExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(CurrencyExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow negative currency value", () => {
    cy.mount(CurrencyExample);
    cy.get(input).clear();
    cy.get(input).type("-11");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow decimal currency value", () => {
    cy.mount(CurrencyExample);
    cy.get(input).clear();
    cy.get(input).type("85,5");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show error when input contains letters", () => {
    cy.mount(CurrencyExample);
    cy.get(input).clear();
    cy.get(input).type("ÄÄ");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show error when input contains invalid characters", () => {
    cy.mount(CurrencyExample);
    cy.get(input).clear();
    cy.get(input).type("30%");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show an error for non-leading minus sign", () => {
    cy.mount(CurrencyExample);
    cy.get(input).clear();
    cy.get(input).type("45-16");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
