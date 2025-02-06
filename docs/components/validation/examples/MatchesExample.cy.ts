import MatchesExample from "./MatchesExample.vue";

const reference = `.text-field:has(#reference) input`;
const input = `.text-field:has(#other) input`;
const error = `.text-field:has(#other) .label__message--error`;

it("should validate ok when value is empty", () => {
    cy.mount(MatchesExample);
    cy.get(reference).clear();
    cy.get(reference).type("foobar");
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should validate ok when value matches reference value", () => {
    cy.mount(MatchesExample);
    cy.get(reference).clear();
    cy.get(reference).type("foobar");
    cy.get(input).clear();
    cy.get(input).type("foobar");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should validate error when value does not match reference value", () => {
    cy.mount(MatchesExample);
    cy.get(reference).clear();
    cy.get(reference).type("foobar");
    cy.get(input).clear();
    cy.get(input).type("spam");
    cy.get(input).blur();
    cy.get(error)
        .should("exist")
        .and("contain.text", "Fälten stämmer inte överens");
});
