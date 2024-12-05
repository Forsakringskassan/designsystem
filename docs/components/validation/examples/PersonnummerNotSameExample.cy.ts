import PersonnummerNotSameExample from "./PersonnummerNotSameExample.vue";

const inputReference = `.text-field:has(#personnummer-not-same-reference) input`;
const errorReference = `.text-field:has(#personnummer-not-same-reference) .label__message--error`;
const input = `.text-field:has(#personnummer-not-same-input) input`;
const error = `.text-field:has(#personnummer-not-same-input) .label__message--error`;

// The test social security numbers(personnummer) used is approved by Skatteverket.

it("should allow empty input", () => {
    cy.mount(PersonnummerNotSameExample);
    cy.get(inputReference).clear();
    cy.get(inputReference).blur();
    cy.get(errorReference).should("not.exist");
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow valid personnummer with 12 digits", () => {
    cy.mount(PersonnummerNotSameExample);
    cy.get(inputReference).clear();
    cy.get(inputReference).type("19120211-9150");
    cy.get(inputReference).blur();
    cy.get(errorReference).should("not.exist");
    cy.get(input).clear();
    cy.get(input).type("20130101-2397");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show error when personnummer is the same", () => {
    cy.mount(PersonnummerNotSameExample);
    cy.get(inputReference).clear();
    cy.get(inputReference).type("19120211-9150");
    cy.get(inputReference).blur();
    cy.get(input).clear();
    cy.get(input).type("19120211-9150");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
