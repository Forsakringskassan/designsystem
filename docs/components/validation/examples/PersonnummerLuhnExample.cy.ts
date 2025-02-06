import PersonnummerLuhnExample from "./PersonnummerLuhnExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

// The test social security numbers(personnummer) used is approved by Skatteverket.

it("should allow empty input", () => {
    cy.mount(PersonnummerLuhnExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow valid personnummer with 12 digits", () => {
    cy.mount(PersonnummerLuhnExample);
    cy.get(input).clear();
    cy.get(input).type("19120211-9150");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show error when the date is before May 5, 1840", () => {
    cy.mount(PersonnummerLuhnExample);
    cy.get(input).clear();
    cy.get(input).type("18390503-1122");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show error when input contains invalid characters", () => {
    cy.mount(PersonnummerLuhnExample);
    cy.get(input).clear();
    cy.get(input).type("19120211/9150");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
