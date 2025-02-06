import MaxValueExample from "./MaxValueExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(MaxValueExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow decimal", () => {
    cy.mount(MaxValueExample);
    cy.get(input).clear();
    cy.get(input).type("1,5");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow value at/below the limit", () => {
    cy.mount(MaxValueExample);
    cy.get(input).clear();
    cy.get(input).type("50");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show an error for values exceeding the limit", () => {
    cy.mount(MaxValueExample);
    cy.get(input).clear();
    cy.get(input).type("51");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should allow negative values", () => {
    cy.mount(MaxValueExample);
    cy.get(input).clear();
    cy.get(input).type("-45");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});
it("should show error for non-leading minus sign", () => {
    cy.mount(MaxValueExample);
    cy.get(input).clear();
    cy.get(input).type("45-16");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
