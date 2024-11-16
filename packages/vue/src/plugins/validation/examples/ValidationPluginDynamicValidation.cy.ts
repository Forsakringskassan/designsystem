import Example from "./ValidationPluginDynamicValidation.vue";

const nameInput = `#min-name input`;
const nameError = `#min-name .label__message--error`;
const minLengthInput = `#min-minLength input`;

it("should revalidate name when minlength is updated", () => {
    cy.mount(Example);

    // when text is empty and minlength 8
    cy.get(nameError).should("not.exist");

    // when text is foobar and minlength 8
    cy.get(nameInput).type("foobar");
    cy.get(nameInput).blur();
    cy.get(nameError).should("exist");

    // when text is foobar and maxlength 6
    cy.get(minLengthInput).clear();
    cy.get(minLengthInput).type("6");
    cy.get(minLengthInput).blur();
    cy.get(nameError).should("not.exist");
});
