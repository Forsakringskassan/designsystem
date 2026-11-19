import FTableCrudDatasetExample from "./FTableCrudDatasetExample.vue";
import FTableCrudDatasetNestedExample from "./FTableCrudDatasetNestedExample.vue";
import { FCrudDatasetPageObject, FModalPageObject } from "@fkui/vue/cypress";
import { FTablePageObject } from "@fkui/vue/cypress";

const crudDataset = new FCrudDatasetPageObject();
const table = new FTablePageObject();
const modal = new FModalPageObject(".modal");

describe("FTableCrudDatasetExample", () => {
    beforeEach(() => {
        cy.mount(FTableCrudDatasetExample);
    });

    it("should render initial rows in FTable", () => {
        table.cell({ row: 1, col: 1 }).should("contain.text", "Ärende A");
        table
            .cell({ row: 1, col: 2 })
            .should("contain.text", "Beskrivning för ärende A");

        table.cell({ row: 2, col: 1 }).should("contain.text", "Ärende B");
        table
            .cell({ row: 2, col: 2 })
            .should("contain.text", "Beskrivning för ärende B");

        table.cell({ row: 3, col: 1 }).should("contain.text", "Ärende C");
        table
            .cell({ row: 3, col: 2 })
            .should("contain.text", "Beskrivning för ärende C");
    });

    it("should add a row and render it in table", () => {
        crudDataset.addButton().click();

        cy.get(".modal input").eq(0).clear();
        cy.get(".modal input").eq(0).type("Ärende D");

        cy.get(".modal input").eq(1).clear();
        cy.get(".modal input").eq(1).type("Beskrivning för ärende D");

        modal.primaryButton().click();

        table.cell({ row: 4, col: 1 }).should("contain.text", "Ärende D");
        table
            .cell({ row: 4, col: 2 })
            .should("contain.text", "Beskrivning för ärende D");
    });

    it("should modify a row and render updated values in table", () => {
        table.cell({ row: 1, col: 3 }).click();
        table.contextmenu().should("exist");

        table.contextmenuItems().eq(0).click();

        cy.get(".modal input").eq(0).clear();
        cy.get(".modal input").eq(0).type("Ärende A uppdaterad");

        cy.get(".modal input").eq(1).clear();
        cy.get(".modal input").eq(1).type("Uppdaterad beskrivning");

        modal.primaryButton().click();

        table
            .cell({ row: 1, col: 1 })
            .should("contain.text", "Ärende A uppdaterad");
        table
            .cell({ row: 1, col: 2 })
            .should("contain.text", "Uppdaterad beskrivning");
    });

    it("should delete a row and remove it from table", () => {
        table.cell({ row: 2, col: 3 }).click();
        table.contextmenu().should("exist");

        table.contextmenuItems().eq(1).click();

        modal.primaryButton().click();

        cy.contains(".table-ng tbody tr", "Ärende B").should("not.exist");
        cy.contains(".table-ng tbody tr", "Beskrivning för ärende B").should(
            "not.exist",
        );

        table.cell({ row: 1, col: 1 }).should("contain.text", "Ärende A");
        table.cell({ row: 2, col: 1 }).should("contain.text", "Ärende C");
    });

    it("should move focus to row above after deleting a row", () => {
        table.cell({ row: 2, col: 3 }).click();
        table.contextmenuItems().eq(1).click();
        modal.primaryButton().click();

        cy.contains(".table-ng tbody tr", "Ärende B").should("not.exist");
        table.cell({ row: 1, col: 3 }).find("button").should("have.focus");
    });

    it("should move focus to row below after deleting the first row", () => {
        table.cell({ row: 1, col: 3 }).click();
        table.contextmenuItems().eq(1).click();
        modal.primaryButton().click();

        cy.contains(".table-ng tbody tr", "Ärende A").should("not.exist");
        table.cell({ row: 1, col: 1 }).should("contain.text", "Ärende B");
        table.cell({ row: 1, col: 3 }).find("button").should("have.focus");
    });

    it("should restore focus to menu button after closing modify modal", () => {
        table.cell({ row: 1, col: 3 }).click();
        table.contextmenu().should("exist");

        table.contextmenuItems().eq(0).click();

        modal.secondaryButton().click();

        table.cell({ row: 1, col: 3 }).find("button").should("have.focus");
    });
});

describe("FTableCrudDatasetNestedExample", () => {
    beforeEach(() => {
        cy.mount(FTableCrudDatasetNestedExample);
    });

    it("should remove an expanded child row", () => {
        table.expandButton(1).click();
        table.cell({ row: 3, col: 2 }).should("contain.text", "1_2");

        table.cell({ row: 3, col: 3 }).click();

        cy.contains(".table-ng tbody tr", "1_2").should("not.exist");
        table.cell({ row: 2, col: 2 }).should("contain.text", "1_1");
        table.cell({ row: 3, col: 2 }).should("contain.text", "2");
    });

    it("should move focus to row above after removing an expanded child row", () => {
        table.expandButton(1).click();
        table.cell({ row: 3, col: 3 }).click();

        cy.contains(".table-ng tbody tr", "1_2").should("not.exist");
        table.cell({ row: 2, col: 3 }).find("button").should("have.focus");
    });

    it("should remove a parent row with its children", () => {
        table.expandButton(1).click();
        table.cell({ row: 1, col: 3 }).click();

        cy.contains(".table-ng tbody tr", "1_1").should("not.exist");
        table.cell({ row: 1, col: 2 }).should("contain.text", "2");
        table.cell({ row: 1, col: 3 }).find("button").should("have.focus");
    });
});
