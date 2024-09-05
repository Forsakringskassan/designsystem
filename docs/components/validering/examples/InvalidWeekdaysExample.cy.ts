import InvalidWeekdaysExample from "./InvalidWeekdaysExample.vue";

const input = `.text-field:has(#input) input`;
const error = `.text-field:has(#input) .label__message--error`;

it("should allow empty input", () => {
    cy.mount(InvalidWeekdaysExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow a date that is not Monday, Tuesday, Wednesday, or Thursday.", () => {
    cy.mount(InvalidWeekdaysExample);
    cy.get(input).clear();
    cy.get(input).type("2022-01-01");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show error message for date Monday, Tuesday, Wednesday, or Thursday.", () => {
    cy.mount(InvalidWeekdaysExample);
    cy.get(input).clear();
    cy.get(input).type("2019-12-31");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
