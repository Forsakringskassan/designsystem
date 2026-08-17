import FTableButtonFocus from "./FTableButtonFocus.vue";
import { FFormModalPageObject, FTablePageObject } from "@fkui/vue/cypress";

describe("FTable button column – focus handling with confirm modal", () => {
    const table = new FTablePageObject();
    const modal = new FFormModalPageObject(".modal");

    beforeEach(() => {
        cy.mount(FTableButtonFocus);
    });

    it("should focus the modal title on open and restore focus to the triggering button when the row deletion is cancelled", () => {
        table.cell({ row: 2, col: 2 }).realClick();

        modal.title().should("have.focus");
        table.cell({ row: 2, col: 2 }).get("button").should("not.have.focus");

        modal.secondaryButton().click();
        modal.el().should("not.exist");

        table.cell({ row: 3, col: 2 }).get("button").should("have.focus");
    });

    it("should focus the modal title on open and move focus to the next row's button when the row deletion is confirmed", () => {
        table.cell({ row: 3, col: 2 }).realClick();

        modal.title().should("have.focus");
        table.cell({ row: 3, col: 2 }).get("button").should("not.have.focus");

        modal.primaryButton().click();
        modal.el().should("not.exist");

        table.cell({ row: 2, col: 2 }).get("button").should("have.focus");
    });
});
