import { h, ref } from "vue";
import { FTablePageObject } from "../../cypress";
import { FValidationForm } from "../FValidationForm";
import FTable from "./FTable.vue";
import { defineTableColumns } from "./table-column";

it("should not submit the form when Enter starts or ends editing a text cell", () => {
    interface Row {
        text: string;
    }

    const rows = ref<Row[]>([{ text: "Foo" }, { text: "Bar" }]);
    const columns = defineTableColumns<Row>([
        {
            type: "text",
            header: "Text",
            key: "text",
            editable: true,
            label: () => "Text",
            validation: { required: {} },
        },
    ]);
    const table = new FTablePageObject();
    const onSubmit = cy.spy().as("onSubmit");
    const nativeSubmit = cy.spy().as("nativeSubmit");

    cy.mount(() =>
        h(FValidationForm, { useErrorList: false, onSubmit }, () => [
            h(FTable<Row>, { rows: rows.value, columns }),
            h("button", { type: "submit" }, "Submit"),
        ]),
    );
    cy.get("form").then(($form) => {
        $form[0].addEventListener("submit", nativeSubmit);
    });

    table.cell({ row: 1, col: 1 }).focus();
    cy.focused().press(Cypress.Keyboard.Keys.ENTER);
    table.cell({ row: 1, col: 1 }).find("input").should("have.focus");
    cy.get("@nativeSubmit").should("not.have.been.called");

    cy.focused().clear();
    cy.focused().type("Updated");
    cy.focused().press(Cypress.Keyboard.Keys.ENTER);
    table.cell({ row: 2, col: 1 }).should("have.focus");
    table.cell({ row: 1, col: 1 }).should("contain.text", "Updated");
    cy.get("@nativeSubmit").should("not.have.been.called");
    cy.get("@onSubmit").should("not.have.been.called");

    cy.get('button[type="submit"]').click();
    cy.get("@onSubmit").should("have.been.calledOnce");
});
