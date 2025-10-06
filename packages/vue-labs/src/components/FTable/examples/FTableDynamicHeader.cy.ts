import Example from "./FTableDynamicHeader.vue";

it("should update column headers", () => {
    cy.mount(Example);
    cy.get("thead th:nth-child(1)").should("contain.text", "Column 1");
    cy.get("thead th:nth-child(2)").should("contain.text", "Column 2");
    cy.get("thead th:nth-child(3)").should("contain.text", "Column 3");
    cy.get("[data-test=input-1] input").type("{selectall}{del}foo");
    cy.get("[data-test=input-2] input").type("{selectall}{del}bar");
    cy.get("[data-test=input-3] input").type("{selectall}{del}baz");
    cy.get("table [tabindex=0]").focus();
    cy.get("thead th:nth-child(1)").should("contain.text", "foo");
    cy.get("thead th:nth-child(2)").should("contain.text", "bar");
    cy.get("thead th:nth-child(3)").should("contain.text", "baz");
});
