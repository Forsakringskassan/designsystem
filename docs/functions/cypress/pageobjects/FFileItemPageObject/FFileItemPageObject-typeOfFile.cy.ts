import { FFileItemPageObject } from "@fkui/vue/cypress";
import Example from "./FFileItemPageObject-typeOfFile.vue";

it("el() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const fileItemPdf = new FFileItemPageObject("[data-test=file-item-pdf]");
    fileItemPdf.typeOfFile().should("be.equal", "pdf");

    const fileItemDoc = new FFileItemPageObject("[data-test=file-item-doc]");
    fileItemDoc.typeOfFile().should("be.equal", "doc");

    const fileItemImage = new FFileItemPageObject("[data-test=file-item-img]");
    fileItemImage.typeOfFile().should("be.equal", "pic");
    /* --- cut below --- */
});
