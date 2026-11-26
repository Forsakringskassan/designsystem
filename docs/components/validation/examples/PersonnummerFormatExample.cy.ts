import PersonnummerFormatExample from "./PersonnummerFormatExample.vue";

// The test social security numbers(personnummer) used is approved by Skatteverket.

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(PersonnummerFormatExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow valid personnummer", () => {
    cy.mount(PersonnummerFormatExample);
    cy.get(input).clear();
    cy.get(input).type("19120211-9150");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("Should show error when the date is before May 5, 1840", () => {
    cy.mount(PersonnummerFormatExample);
    cy.get(input).clear();
    cy.get(input).type("18390503-1122");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show error when input contains letters", () => {
    cy.mount(PersonnummerFormatExample);
    cy.get(input).clear();
    cy.get(input).type("191202AA-9150");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
