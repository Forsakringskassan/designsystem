import {
    FDetailsPanelPageObject,
    FInteractiveTablePageObject,
} from "../../../cypress";
import FDetailsPanelExample from "./FDetailsPanelEdit.vue";

class CustomPanelPageObject extends FDetailsPanelPageObject {
    public static fromName(name: string): CustomPanelPageObject {
        const selector = FDetailsPanelPageObject.nameSelector(name);
        return new CustomPanelPageObject(selector);
    }

    public input1(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(`${this.selector} .text-field:nth(0) input`);
    }

    public input2(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(`${this.selector} .text-field:nth(1) input`);
    }

    public input3(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(`${this.selector} .text-field:nth(2) input`);
    }

    public input4(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(`${this.selector} .text-field:nth(3) input`);
    }

    public saveButton(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return cy.get(`${this.selector} button:contains('Spara')`);
    }

    public cancelButton(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return cy.get(`${this.selector} button:contains('Avbryt')`);
    }
}

const table = new FInteractiveTablePageObject("table");
const panel = CustomPanelPageObject.fromName("edit-panel");

beforeEach(() => {
    cy.viewport(800, 600);
});

it("should open and close details panel", () => {
    cy.mount(FDetailsPanelExample);
    panel.el().should("not.exist");
    table.cell({ row: 2, col: 1 }).click();
    panel.el().should("exist");
    panel.closeButton().click();
    panel.el().should("not.exist");
});

it("should save edited row", () => {
    cy.mount(FDetailsPanelExample);
    table.cell({ row: 2, col: 1 }).should("contain.text", "Text21");
    table.cell({ row: 2, col: 2 }).should("contain.text", "Text22");
    table.cell({ row: 2, col: 3 }).should("contain.text", "Text23");
    table.cell({ row: 2, col: 4 }).should("contain.text", "Text24");
    table.cell({ row: 2, col: 1 }).click();
    panel.el().should("exist");
    panel.input1().type("{selectall}{del}Lorem");
    panel.input2().type("{selectall}{del}ipsum");
    panel.input3().type("{selectall}{del}dolor");
    panel.input4().type("{selectall}{del}sit amet");
    panel.saveButton().click();
    panel.el().should("not.exist");
    table.cell({ row: 2, col: 1 }).should("contain.text", "Lorem");
    table.cell({ row: 2, col: 2 }).should("contain.text", "ipsum");
    table.cell({ row: 2, col: 3 }).should("contain.text", "dolor");
    table.cell({ row: 2, col: 4 }).should("contain.text", "sit amet");
});

it("should retain original object when cancellng", () => {
    cy.mount(FDetailsPanelExample);
    table.cell({ row: 2, col: 1 }).should("contain.text", "Text21");
    table.cell({ row: 2, col: 2 }).should("contain.text", "Text22");
    table.cell({ row: 2, col: 3 }).should("contain.text", "Text23");
    table.cell({ row: 2, col: 4 }).should("contain.text", "Text24");
    table.cell({ row: 2, col: 1 }).click();
    panel.el().should("exist");
    panel.input1().type("{selectall}{del}Lorem");
    panel.input2().type("{selectall}{del}ipsum");
    panel.input3().type("{selectall}{del}dolor");
    panel.input4().type("{selectall}{del}sit amet");
    panel.cancelButton().click();
    panel.el().should("not.exist");
    table.cell({ row: 2, col: 1 }).should("contain.text", "Text21");
    table.cell({ row: 2, col: 2 }).should("contain.text", "Text22");
    table.cell({ row: 2, col: 3 }).should("contain.text", "Text23");
    table.cell({ row: 2, col: 4 }).should("contain.text", "Text24");
});
