import { FTablePageObject } from "../../../cypress";
import Example from "./FTableDynamicHeader.vue";

const table = new FTablePageObject();

it("should update column headers", () => {
    cy.mount(Example);
    table.headerTitle(1).should("contain.text", "Column 1");
    table.headerTitle(2).should("contain.text", "Column 2");
    table.headerTitle(3).should("contain.text", "Column 3");
    cy.get("[data-test=input-1] input").type("{selectall}{del}foo");
    cy.get("[data-test=input-2] input").type("{selectall}{del}bar");
    cy.get("[data-test=input-3] input").type("{selectall}{del}baz");
    table.tabbableElement().focus();
    table.headerTitle(1).should("contain.text", "foo");
    table.headerTitle(2).should("contain.text", "bar");
    table.headerTitle(3).should("contain.text", "baz");
});
