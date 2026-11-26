import MinDateExample from "./MinDateExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(MinDateExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should accept a date equal/after minimum date", () => {
    cy.mount(MinDateExample);
    cy.get(input).clear();
    cy.get(input).type("2020-01-01");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show an error message when date is before the minimum date", () => {
    cy.mount(MinDateExample);
    cy.get(input).clear();
    cy.get(input).type("2019-12-31");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
