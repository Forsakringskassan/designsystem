import EmailExample from "./EmailExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(EmailExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should not show error message for valid format", () => {
    cy.mount(EmailExample);
    cy.get(input).clear();
    cy.get(input).type("mail.mail32@gmail.com");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show an error message for invalid format", () => {
    cy.mount(EmailExample);
    cy.get(input).clear();
    cy.get(input).type(".email12@hotmail.se");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
