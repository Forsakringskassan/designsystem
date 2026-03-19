import ClearingNumberExample from "./ClearingNumberExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(ClearingNumberExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("Should allow valid clearing number with hyphen", () => {
    cy.mount(ClearingNumberExample);
    cy.get(input).clear();
    cy.get(input).type("1234-5");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("Should show error when input exceeds 5 digits", () => {
    cy.mount(ClearingNumberExample);
    cy.get(input).clear();
    cy.get(input).type("1234-56");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("Should show error when input contains letters", () => {
    cy.mount(ClearingNumberExample);
    cy.get(input).clear();
    cy.get(input).type("1234-A");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("Should show error when input contains invalid characters", () => {
    cy.mount(ClearingNumberExample);
    cy.get(input).clear();
    cy.get(input).type("0000,0");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
