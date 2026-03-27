import Example from "./CrossValidateDates.vue";

const fromInput = `.text-field:nth(0) input`;
const toInput = `.text-field:nth(1) input`;
const toError = `.text-field:nth(1) .label__message--error`;

it("should revalidate to-date when from-date is updated", () => {
    cy.clock(new Date(2024, 11, 15), ["Date"]);
    cy.mount(Example);

    // when text is empty and minlength 8
    cy.get(toError).should("not.exist");

    // when from-date is before to-date
    cy.get(fromInput).type("2024-11-12");
    cy.get(fromInput).blur();
    cy.get(toInput).type("2024-11-13");
    cy.get(toInput).blur();
    cy.get(toError).should("not.exist");

    // when from-date is after to-date
    cy.get(fromInput).clear();
    cy.get(fromInput).type("2024-11-14");
    cy.get(fromInput).blur();
    cy.get(toError).should("exist");
});
