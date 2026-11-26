import OrganisationsnummerExample from "./OrganisationsnummerExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(OrganisationsnummerExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should not show error message for valid format", () => {
    cy.mount(OrganisationsnummerExample);
    cy.get(input).clear();
    cy.get(input).type("999999-9999");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show error when input contains invalid characters", () => {
    cy.mount(OrganisationsnummerExample);
    cy.get(input).clear();
    cy.get(input).type("999999/9999");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show an error message for invalid format", () => {
    cy.mount(OrganisationsnummerExample);
    cy.get(input).clear();
    cy.get(input).type("12345-4455");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
