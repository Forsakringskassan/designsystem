import FTableExample from "./FTableExample.vue";
import { FModalPageObject, FTablePageObject } from "@fkui/vue/cypress";

const table = new FTablePageObject();
const modal = new FModalPageObject(".modal");

it("should show data in table", () => {
    cy.mount(FTableExample);
    table.rows().should("have.length", 3);
});
