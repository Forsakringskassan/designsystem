import {
    FSelectFieldPageObject,
    FTablePageObject,
} from "../../../cypress/index.ts";
import Example from "./FTableNavigationExample.vue";

const table = new FTablePageObject();
const selectField = new FSelectFieldPageObject(".select-field");

describe("FTableNavigation", () => {
    it("should focus expanded row above when deleting expanded row underneath", () => {
        cy.mount(Example);

        // Make expandable
        selectField.dropdown().select(1);

        // Open 2 expands
        table.expandButton(2).realClick();
        table.rows().should("have.length", 4);

        cy.focused()
            .realPress("ArrowDown")
            .realPress("ArrowDown")
            .realPress("Enter");
        table.rows().should("have.length", 5);

        // Delete last expanded row
        cy.focused()
            .realPress("ArrowRight")
            .realPress("ArrowRight")
            .realPress("ArrowRight")
            .realPress("ArrowRight")
            .realPress("Enter");

        // Should give focus to expanded row above
        table.rows().should("have.length", 3);
        cy.focused().should(
            "have.text",
            "Anledning: Gå ut och gå med hundarna",
        );
    });
});
