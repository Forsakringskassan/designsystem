import MaxDateExample from "./MaxDateExample.vue";

const input = `.text-field:has(#input) input`;
const error = `.text-field:has(#input) .label__message--error`;

it("should allow empty input", () => {
    cy.mount(MaxDateExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should accept a date equal/before the maximum date (2020-01-30)", () => {
    cy.mount(MaxDateExample);
    cy.get(input).clear();
    cy.get(input).type("2020-01-30");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show error when date is after the maximum date (2020-01-30)", () => {
    cy.mount(MaxDateExample);
    cy.get(input).clear();
    cy.get(input).type("2020-01-31");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
