import FTableCrudDatasetExample from "./FTableCrudDatasetExample.vue";
import { FCrudDatasetPageObject } from "@fkui/vue/cypress";
import { FTablePageObject } from "@fkui/vue/cypress";

const crudDataset = new FCrudDatasetPageObject();
const table = new FTablePageObject();

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

        crudDataset.confirmButton().click();

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

        crudDataset.confirmButton().click();

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

        crudDataset.confirmButton().click();

        cy.contains(".table-ng tbody tr", "Ärende B").should("not.exist");
        cy.contains(".table-ng tbody tr", "Beskrivning för ärende B").should(
            "not.exist",
        );

        table.cell({ row: 1, col: 1 }).should("contain.text", "Ärende A");
        table.cell({ row: 2, col: 1 }).should("contain.text", "Ärende C");
    });
});
