import MaxLengthExample from "./MaxLengthExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(MaxLengthExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow length equal/below the limit", () => {
    cy.mount(MaxLengthExample);
    cy.get(input).clear();
    cy.get(input).type("1234567890");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show error when length is above the limit", () => {
    cy.mount(MaxLengthExample);
    cy.get(input).clear();
    cy.get(input).type("12345678901");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
