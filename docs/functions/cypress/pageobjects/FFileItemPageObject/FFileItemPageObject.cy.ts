import { FFileItemPageObject } from "@fkui/vue/pageobject";
import Example from "./FFileItemPageObject.vue";

it("el() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const fileItem = new FFileItemPageObject("[data-test=file-item]");
    fileItem.fileName().should("contain.text", ".pdf");
    fileItem.typeOfFileIcon().should("be.equal", "pdf");

    /* --- cut below --- */
});
