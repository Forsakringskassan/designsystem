import WhitelistExample from "./WhitelistExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

it("should allow empty input", () => {
    cy.mount(WhitelistExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow if input only has allowed characters", () => {
    cy.mount(WhitelistExample);
    cy.get(input).clear();
    cy.get(input).type("foobar");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show error if input has invalid characters", () => {
    cy.mount(WhitelistExample);
    cy.get(input).clear();
    cy.get(input).type(" /, % ");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
