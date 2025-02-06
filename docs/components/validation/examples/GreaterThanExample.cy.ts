import GreaterThanExample from "./GreaterThanExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(GreaterThanExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow negative value", () => {
    cy.mount(GreaterThanExample);
    cy.get(input).clear();
    cy.get(input).type("-11");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow values greater than the limit", () => {
    cy.mount(GreaterThanExample);
    cy.get(input).clear();
    cy.get(input).type("0.124");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show an error for values equal/below the limit", () => {
    cy.mount(GreaterThanExample);
    cy.get(input).clear();
    cy.get(input).type("0.123");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show error when input contains letters", () => {
    cy.mount(GreaterThanExample);
    cy.get(input).clear();
    cy.get(input).type("ÄÄ");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show an error for non-leading minus sign", () => {
    cy.mount(GreaterThanExample);
    cy.get(input).clear();
    cy.get(input).type("45-16");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
