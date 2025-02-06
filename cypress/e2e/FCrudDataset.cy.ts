import {
    FCrudDatasetPageObject,
    FTextareaFieldPageObject,
    FListPageObject,
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

    it("should provide a page object that can access form objects", () => {
        const crudDataset = new FCrudDatasetPageObject(
            '[data-test="f-crud-dataset-list-example"]',
        );

        crudDataset.addButton().click();

        const textarea = new FTextareaFieldPageObject(
            `${crudDataset.form.selector} .textarea-field`,
        );

        textarea.label.el().should("contain.text", "Beskrivning");
    });

    it("should provide a page object that can access cancel button", () => {
        const crudDataset = new FCrudDatasetPageObject(
            '[data-test="f-crud-dataset-list-example"]',
        );

        crudDataset.addButton().click();
        crudDataset.cancelButton().should("contain.text", "Avbryt");
    });

    it("should provide a page object that can access confirm button", () => {
        const crudDataset = new FCrudDatasetPageObject(
            '[data-test="f-crud-dataset-list-example"]',
        );

        crudDataset.addButton().click();
        crudDataset.confirmButton().should("contain.text", "Lägg till");
    });

    it("should delete items", () => {
        const crudDataset = new FCrudDatasetPageObject(
            '[data-test="f-crud-dataset-list-example"]',
        );

        const list = new FListPageObject(`${crudDataset.selector} .list`);
        list.listItems().should("have.length", 4);
        const deleteButton = list.listItem(0).el().find("button").eq(1);
        deleteButton.click();
        crudDataset.confirmButton().click();
        list.listItems().should("have.length", 3);
    });
});
