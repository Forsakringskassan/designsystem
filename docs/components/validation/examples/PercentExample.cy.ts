import PercentExample from "./PercentExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(PercentExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow decimal value", () => {
    cy.mount(PercentExample);
    cy.get(input).clear();
    cy.get(input).type("30.4");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow negative value", () => {
    cy.mount(PercentExample);
    cy.get(input).clear();
    cy.get(input).type("-11");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show error for non-leading minus sign", () => {
    cy.mount(PercentExample);
    cy.get(input).clear();
    cy.get(input).type("45-16");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show error when input contains percent sign", () => {
    cy.mount(PercentExample);
    cy.get(input).clear();
    cy.get(input).type("30%");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show error when input contains letters", () => {
    cy.mount(PercentExample);
    cy.get(input).clear();
    cy.get(input).type("20Ä");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
