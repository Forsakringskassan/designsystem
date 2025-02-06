import { FModalPageObject } from "../../../cypress";
import FConfirmModalApiExample from "../examples/FConfirmModalApiExample.vue";
import FConfirmModalCustomButtons from "../examples/FConfirmModalCustomButtons.vue";

describe("Examples", () => {
    describe("FConfirmModalApiExample", () => {
        it("should be able to open and close modal", () => {
            cy.mount(FConfirmModalApiExample);
            cy.get("button").click();
            const modal = new FModalPageObject(".modal");
            modal.el().should("exist");
            modal.primaryButton().click();
            modal.el().should("not.exist");
        });
    });

    describe("FConfirmModalCustomButtons", () => {
        it("should be able to open and close modal", () => {
            cy.mount(FConfirmModalCustomButtons);
            cy.get("button").click();
            const modal = new FModalPageObject(".modal");
            modal.el().should("exist");
            modal.primaryButton().click();
            modal.el().should("not.exist");
        });
    });
});
