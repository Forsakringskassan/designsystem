import BankAccountNumberExample from "./BankAccountNumberExample.vue";

const input = `.text-field:has(#input) input`;
const error = `.text-field:has(#input) .label__message--error`;

it("should allow empty input", () => {
    cy.mount(BankAccountNumberExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("Should allow valid bank account number (digits and hyphen)", () => {
    cy.mount(BankAccountNumberExample);
    cy.get(input).clear();
    cy.get(input).type("1-234 567 89");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("Should show error when input exceeds 16 digits", () => {
    cy.mount(BankAccountNumberExample);
    cy.get(input).clear();
    cy.get(input).type("12345678901234567");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("Should show error when input contains invalid characters", () => {
    cy.mount(BankAccountNumberExample);
    cy.get(input).clear();
    cy.get(input).type("0000_0A");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
