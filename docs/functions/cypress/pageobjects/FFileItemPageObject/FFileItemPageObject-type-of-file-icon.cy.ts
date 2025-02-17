import { FFileItemPageObject } from "@fkui/vue/pageobject";
import Example from "./FFileItemPageObject-type-of-file-icon.vue";

it("el() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const fileItemPdf = new FFileItemPageObject("[data-test=file-item-pdf]");
    fileItemPdf.typeOfFileIcon().should("be.equal", "pdf");

    const fileItemDoc = new FFileItemPageObject("[data-test=file-item-doc]");
    fileItemDoc.typeOfFileIcon().should("be.equal", "doc");

    const fileItemImage = new FFileItemPageObject(
        "[data-test=file-item-image]",
    );
    fileItemImage.typeOfFileIcon().should("be.equal", "pic");
    /* --- cut below --- */
});
