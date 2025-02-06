import RequiredExample from "./RequiredExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;
const submit = `button#submit`;

it("should not show error if input has any text", () => {
    cy.mount(RequiredExample);
    cy.get(input).clear();
    cy.get(input).type("foobar");
    cy.get(input).blur();
    cy.get(submit).click();
    cy.get(error).should("not.exist");
});

it("should show error if input is empty", () => {
    cy.mount(RequiredExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(submit).click();
    cy.get(error).should("exist");
});

it("should show error if input only contain space", () => {
    cy.mount(RequiredExample);
    cy.get(input).clear();
    cy.get(input).type(" ");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
