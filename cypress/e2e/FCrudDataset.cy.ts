import {
    FCrudDatasetPageObject,
    FListPageObject,
    FModalPageObject,
    FTextareaFieldPageObject,
} from "@fkui/vue/cypress";

describe("FCrudDataset", () => {
    beforeEach(() => {
        cy.visit("/components/table-and-list/fcruddataset.html");
    });

    it("should provide a page object that can access add button", () => {
        const crudDataset = new FCrudDatasetPageObject(
            '[data-test="f-crud-dataset-list-example"]',
        );
        crudDataset.addButton().should("contain.text", "Lägg till");
    });

    it("should open modal with form objects when adding", () => {
        const crudDataset = new FCrudDatasetPageObject(
            '[data-test="f-crud-dataset-list-example"]',
        );
        const modal = new FModalPageObject(".modal");

        crudDataset.addButton().click();

        const textarea = new FTextareaFieldPageObject(
            `${modal.selector} .textarea-field`,
        );

        textarea.label.el().should("contain.text", "Beskrivning");
    });

    it("should open modal with cancel button when adding", () => {
        const crudDataset = new FCrudDatasetPageObject(
            '[data-test="f-crud-dataset-list-example"]',
        );
        const modal = new FModalPageObject(".modal");

        crudDataset.addButton().click();
        modal.secondaryButton().should("contain.text", "Avbryt");
    });

    it("should open modal with confirm button when adding", () => {
        const crudDataset = new FCrudDatasetPageObject(
            '[data-test="f-crud-dataset-list-example"]',
        );
        const modal = new FModalPageObject(".modal");

        crudDataset.addButton().click();
        modal.primaryButton().should("contain.text", "Lägg till");
    });

    it("should delete items", () => {
        const crudDataset = new FCrudDatasetPageObject(
            '[data-test="f-crud-dataset-list-example"]',
        );
        const modal = new FModalPageObject(".modal");

        const list = new FListPageObject(`${crudDataset.selector} .list`);
        list.listItems().should("have.length", 4);
        const deleteButton = list.listItem(0).el().find("button").eq(1);
        deleteButton.click();
        modal.primaryButton().click();
        list.listItems().should("have.length", 3);
    });
});
