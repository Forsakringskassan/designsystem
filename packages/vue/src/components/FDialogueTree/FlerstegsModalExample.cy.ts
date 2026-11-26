import {
    FDialogueTreePageObject,
    FModalPageObject,
    FTextFieldPageObject,
} from "../../cypress";
import FlerstegsModalExample from "./examples/FlerstegsModalExample.vue";

const modal = new FModalPageObject("body");
const textField = new FTextFieldPageObject('[data-test="organisationsnummer"]');
const dialogueTree = new FDialogueTreePageObject("body");

describe("FlerstegsModalApiExample", () => {
    it("should display modal with dialog tree", () => {
        cy.mount(FlerstegsModalExample);
        cy.get("button").click();
        modal.el().should("be.visible");
        dialogueTree.option(1).button().click();
        dialogueTree.option(0).button().click();
        dialogueTree.option(0).button().click();
        textField.el().should("be.visible");
    });
});
