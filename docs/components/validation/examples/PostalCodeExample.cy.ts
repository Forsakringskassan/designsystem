import PostalCodeExample from "./PostalCodeExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(PostalCodeExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow valid postal code", () => {
    cy.mount(PostalCodeExample);
    cy.get(input).clear();
    cy.get(input).type("123 45");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show error when input has more than 5 digits", () => {
    cy.mount(PostalCodeExample);
    cy.get(input).clear();
    cy.get(input).type("123456");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show error when input has less than 5 digits", () => {
    cy.mount(PostalCodeExample);
    cy.get(input).clear();
    cy.get(input).type("1234");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show error when input contains letters", () => {
    cy.mount(PostalCodeExample);
    cy.get(input).clear();
    cy.get(input).type("123 4A");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show error when space is not at position 4", () => {
    cy.mount(PostalCodeExample);
    cy.get(input).clear();
    cy.get(input).type("12 345");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
