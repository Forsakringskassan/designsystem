import DateExample from "./DateExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(DateExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should accept valid date formats", () => {
    cy.mount(DateExample);
    cy.get(input).clear();
    cy.get(input).type("2024-05-30");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show an error message for invalid date formats", () => {
    cy.mount(DateExample);
    cy.get(input).clear();
    cy.get(input).type("2020123");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show an error message when date contains invalid characters", () => {
    cy.mount(DateExample);
    cy.get(input).clear();
    cy.get(input).type("2020.02.30");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
