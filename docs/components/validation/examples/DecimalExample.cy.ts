import DecimalExample from "./DecimalExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(DecimalExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow decimal value", () => {
    cy.mount(DecimalExample);
    cy.get(input).clear();
    cy.get(input).type("1,5");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow negative decimal", () => {
    cy.mount(DecimalExample);
    cy.get(input).clear();
    cy.get(input).type("-4,5");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show an error for non-decimal input", () => {
    cy.mount(DecimalExample);
    cy.get(input).clear();
    cy.get(input).type("45");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show error when input contains invalid characters", () => {
    cy.mount(DecimalExample);
    cy.get(input).clear();
    cy.get(input).type("45 16");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show an error for non-leading minus sign", () => {
    cy.mount(DecimalExample);
    cy.get(input).clear();
    cy.get(input).type("4,5-1,6");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
