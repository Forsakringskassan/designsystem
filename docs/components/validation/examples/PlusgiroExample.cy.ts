import PlusgiroExample from "./PlusgiroExample.vue";

const input = `.text-field input`;
const error = `.text-field .label__message--error`;

// These fake plusgiro values are as of this writing 2024-05-27 verified as non-existing,
// but are not provided as official fake sample numbers by plusgirot.se

it("should allow empty input", () => {
    cy.mount(PlusgiroExample);
    cy.get(input).clear();
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should allow valid plusgiro format", () => {
    cy.mount(PlusgiroExample);
    cy.get(input).clear();
    cy.get(input).type("1111-4");
    cy.get(input).blur();
    cy.get(error).should("not.exist");
});

it("should show error when input has plusgiro with invalid checksum", () => {
    cy.mount(PlusgiroExample);
    cy.get(input).clear();
    cy.get(input).type("999999-1");
    cy.get(input).blur();
    cy.get(error).should("exist");
});

it("should show error when input contains letters", () => {
    cy.mount(PlusgiroExample);
    cy.get(input).clear();
    cy.get(input).type("111A-4");
    cy.get(input).blur();
    cy.get(error).should("exist");
});
