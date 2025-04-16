import FCrudDatasetTableExample from "../components/FCrudDataset/examples/FCrudDatasetTableExample.vue";
import FConfirmModalApiExample from "../components/FModal/examples/FConfirmModalApiExample.vue";
import FFormModalApiExample from "../components/FModal/examples/FFormModalApiExample.vue";
import { FCrudDatasetPageObject, FModalPageObject } from "../cypress";
import { config } from "./config";
import { FKUIConfigButtonOrder } from "./FKUIConfig";

describe("Components", () => {
    describe("FConfirmModal", () => {
        describe("LEFT_TO_RIGHT", () => {
            it("should respect button order", () => {
                config.buttonOrder = FKUIConfigButtonOrder.LEFT_TO_RIGHT;
                cy.mount(FConfirmModalApiExample);
                cy.get("button").click();
                cy.get(".button-group").should(
                    "contain.text",
                    "Ja, ta bort Nej, behåll",
                );
                const modal = new FModalPageObject(".modal");
                modal.closeCross().click();
            });
        });

        describe("RIGHT_TO_LEFT", () => {
            it("should respect button order", () => {
                config.buttonOrder = FKUIConfigButtonOrder.RIGHT_TO_LEFT;
                cy.mount(FConfirmModalApiExample);
                cy.get("button").click();
                cy.get(".button-group").should(
                    "contain.text",
                    "Nej, behåll Ja, ta bort",
                );
                const modal = new FModalPageObject(".modal");
                modal.closeCross().click();
            });
        });
    });

    describe("FFormModal", () => {
        describe("LEFT_TO_RIGHT", () => {
            it("should always show buttons left to right", () => {
                config.buttonOrder = FKUIConfigButtonOrder.LEFT_TO_RIGHT;
                cy.mount(FFormModalApiExample);
                cy.get("button").click();
                cy.get(".button-group").should("contain.text", "Spara Avbryt");
                const modal = new FModalPageObject(".modal");
                modal.closeCross().click();
            });
        });

        describe("RIGHT_TO_LEFT", () => {
            it("should ignore button order", () => {
                config.buttonOrder = FKUIConfigButtonOrder.RIGHT_TO_LEFT;
                cy.mount(FFormModalApiExample);
                cy.get("button").click();
                cy.get(".button-group").should("contain.text", "Spara Avbryt");
                const modal = new FModalPageObject(".modal");
                modal.closeCross().click();
            });
        });
    });

    describe("FCrudDataset", () => {
        describe("Lägg till", () => {
            describe("LEFT_TO_RIGHT", () => {
                it("should always show buttons left to right", () => {
                    config.buttonOrder = FKUIConfigButtonOrder.LEFT_TO_RIGHT;
                    cy.mount(FCrudDatasetTableExample);
                    const crudDataset = new FCrudDatasetPageObject(
                        ".crud-dataset",
                    );
                    crudDataset.addButton().click();
                    const modal = new FModalPageObject(".modal");
                    modal
                        .el()
                        .get(".button-group")
                        .should("contain.text", "Lägg till Avbryt");
                    modal.closeCross().click();
                });
            });

            describe("RIGHT_TO_LEFT", () => {
                it("should ignore button order", () => {
                    config.buttonOrder = FKUIConfigButtonOrder.RIGHT_TO_LEFT;
                    cy.mount(FCrudDatasetTableExample);
                    const crudDataset = new FCrudDatasetPageObject(
                        ".crud-dataset",
                    );
                    crudDataset.addButton().click();
                    const modal = new FModalPageObject(".modal");
                    modal
                        .el()
                        .get(".button-group")
                        .should("contain.text", "Lägg till Avbryt");
                    modal.closeCross().click();
                });
            });
        });

        describe("Ändra", () => {
            describe("LEFT_TO_RIGHT", () => {
                it("should always show buttons left to right", () => {
                    config.buttonOrder = FKUIConfigButtonOrder.LEFT_TO_RIGHT;
                    cy.mount(FCrudDatasetTableExample);
                    cy.get(".f-icon-pen:nth(0)").click({ force: true });
                    const modal = new FModalPageObject(".modal");
                    modal
                        .el()
                        .get(".button-group")
                        .should("contain.text", "Spara Avbryt");
                    modal.closeCross().click();
                });
            });

            describe("RIGHT_TO_LEFT", () => {
                it("should ignore button order", () => {
                    config.buttonOrder = FKUIConfigButtonOrder.RIGHT_TO_LEFT;
                    cy.mount(FCrudDatasetTableExample);
                    cy.get(".f-icon-pen:nth(0)").click({ force: true });
                    const modal = new FModalPageObject(".modal");
                    modal
                        .el()
                        .get(".button-group")
                        .should("contain.text", "Spara Avbryt");
                    modal.closeCross().click();
                });
            });
        });

        describe("Ta bort", () => {
            describe("LEFT_TO_RIGHT", () => {
                it("should respect button order", () => {
                    config.buttonOrder = FKUIConfigButtonOrder.LEFT_TO_RIGHT;
                    cy.mount(FCrudDatasetTableExample);
                    cy.get(".f-icon-trashcan:nth(0)").click({ force: true });
                    const modal = new FModalPageObject(".modal");
                    modal
                        .el()
                        .get(".button-group")
                        .should("contain.text", "Ja, ta bort Nej, avbryt");
                    modal.closeCross().click();
                });
            });

            describe("RIGHT_TO_LEFT", () => {
                it("should respect button order", () => {
                    config.buttonOrder = FKUIConfigButtonOrder.RIGHT_TO_LEFT;
                    cy.mount(FCrudDatasetTableExample);
                    cy.get(".f-icon-trashcan:nth(0)").click({ force: true });
                    const modal = new FModalPageObject(".modal");
                    modal
                        .el()
                        .get(".button-group")
                        .should("contain.text", "Nej, avbryt Ja, ta bort");
                    modal.closeCross().click();
                });
            });
        });
    });
});
