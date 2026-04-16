import { FSortFilterDatasetPageObject } from "@fkui/vue/cypress";
import { FTablePageObject } from "../../../../cypress";
import Example from "./FTableSortFilterLazyModeExample.vue";

const table = new FTablePageObject();
const sorter = new FSortFilterDatasetPageObject('[data-test="filter"]');

describe("FTableSortFilterLazyModeExample", () => {
    it("keeps row position after inline edit in lazy mode", () => {
        cy.mount(Example);

        table.header(2).click();
        sorter.selectField.dropdown().should("contain.text", "Text (stigande)");

        table.cell({ row: 2, col: 2 }).click();
        cy.focused().clear().type("Aardvark{enter}");

        table.cell({ row: 2, col: 2 }).should("contain.text", "Aardvark");
    });

    it("recomputes ordering when user explicitly sorts again", () => {
        cy.mount(Example);

        table.header(2).click();
        table.cell({ row: 2, col: 2 }).click();
        cy.focused().clear().type("Aardvark{enter}");

        sorter.selectField.dropdown().select("Text (fallande)");
        sorter.selectField.dropdown().select("Text (stigande)");

        table.cell({ row: 1, col: 2 }).should("contain.text", "Aardvark");
    });
});
