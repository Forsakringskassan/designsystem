import LessThanExample from "./LessThanExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(LessThanExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow negative value", () => {
    cy.mount(LessThanExample);
    cy.get(input).clear();
    cy.get(input).type("-11");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow decimal value", () => {
    cy.mount(LessThanExample);
    cy.get(input).clear();
    cy.get(input).type("85,5");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow values below the limit", () => {
    cy.mount(LessThanExample);
    cy.get(input).clear();
    cy.get(input).type("99");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show an error for values equal/exceeding the limit", () => {
    cy.mount(LessThanExample);
    cy.get(input).clear();
    cy.get(input).type("100");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show error when input contains letters", () => {
    cy.mount(LessThanExample);
    cy.get(input).clear();
    cy.get(input).type("ÄÄ");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show error for non-leading minus sign", () => {
    cy.mount(LessThanExample);
    cy.get(input).clear();
    cy.get(input).type("45-16");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
