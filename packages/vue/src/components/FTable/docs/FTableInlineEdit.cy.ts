import FTableInlineEdit from "./FTableInlineEdit.vue";
import { FTablePageObject } from "@fkui/vue/cypress";

const table = new FTablePageObject();

it("should show data in table", () => {
    cy.mount(FTableInlineEdit);
    table.rows().should("have.length", 3);
});
