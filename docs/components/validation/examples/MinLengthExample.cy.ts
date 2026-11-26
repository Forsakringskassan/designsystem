import MinLengthExample from "./MinLengthExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(MinLengthExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow value equal/above length limit", () => {
    cy.mount(MinLengthExample);
    cy.get(input).clear();
    cy.get(input).type("1234");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show error when value is below length limit", () => {
    cy.mount(MinLengthExample);
    cy.get(input).clear();
    cy.get(input).type("123");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
