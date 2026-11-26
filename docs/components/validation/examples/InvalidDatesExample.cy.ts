import InvalidDatesExample from "./InvalidDatesExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(InvalidDatesExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow valid dates (not: 2022-01-01, 2022-05-05, 2022-06-20)", () => {
    cy.mount(InvalidDatesExample);
    cy.get(input).clear();
    cy.get(input).type("2019-12-31");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show an error message for invalid date (2022-01-01, 2022-05-05, 2022-06-20)", () => {
    cy.mount(InvalidDatesExample);
    cy.get(input).clear();
    cy.get(input).type("2022-01-01");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
