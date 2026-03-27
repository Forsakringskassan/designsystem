import { FFileItemPageObject } from "@fkui/vue/cypress";
import Example from "./FFileItemPageObject.vue";

it("el() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const fileItem = new FFileItemPageObject("[data-test=file-item]");
    fileItem.fileName().should("have.text", "myFile.pdf");
    fileItem.typeOfFile().should("be.equal", "pdf");
    /* --- cut below --- */
});
