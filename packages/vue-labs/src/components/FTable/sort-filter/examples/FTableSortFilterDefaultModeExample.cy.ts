import { FSortFilterDatasetPageObject } from "@fkui/vue/cypress";
import { FTablePageObject } from "../../../../cypress";
import Example from "./FTableSortFilterDefaultModeExample.vue";

const table = new FTablePageObject();
const sorter = new FSortFilterDatasetPageObject('[data-test="filter"]');

describe("FTableSortFilterDefaultModeExample", () => {
    it("re-sorts rows after inline edit in standard mode", () => {
        cy.mount(Example);

        table.header(2).click();
        sorter.selectField.dropdown().should("contain.text", "Text (stigande)");

        table.cell({ row: 2, col: 2 }).click();
        cy.focused().clear().type("Aardvark{enter}");

        table.cell({ row: 1, col: 2 }).should("contain.text", "Aardvark");
    });
});
