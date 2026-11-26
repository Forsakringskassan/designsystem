import BankgiroExample from "./BankgiroExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(BankgiroExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("Should allow valid characters (digits and hyphen)", () => {
    cy.mount(BankgiroExample);
    cy.get(input).clear();
    cy.get(input).type("0000-0000 ");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("Should accept input with 7 digits", () => {
    cy.mount(BankgiroExample);
    cy.get(input).clear();
    cy.get(input).type("0000000");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("Should show error when input contains invalid characters", () => {
    cy.mount(BankgiroExample);
    cy.get(input).clear();
    cy.get(input).type("0000 0000");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("Should show error when input contains letters", () => {
    cy.mount(BankgiroExample);
    cy.get(input).clear();
    cy.get(input).type("0000-00A");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("Should show error when input exceeds 8 characters", () => {
    cy.mount(BankgiroExample);
    cy.get(input).clear();
    cy.get(input).type("12345678");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
