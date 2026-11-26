import PhoneNumberExample from "./PhoneNumberExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(PhoneNumberExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow input with valid phone number format", () => {
    cy.mount(PhoneNumberExample);
    cy.get(input).clear();
    cy.get(input).type("+46 123456789");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show error if input has more than 17 digits", () => {
    cy.mount(PhoneNumberExample);
    cy.get(input).clear();
    cy.get(input).type("123456789012345678");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show error if input has less than 3 digits", () => {
    cy.mount(PhoneNumberExample);
    cy.get(input).clear();
    cy.get(input).type("12");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show error when input contains letters", () => {
    cy.mount(PhoneNumberExample);
    cy.get(input).clear();
    cy.get(input).type("12345A");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
