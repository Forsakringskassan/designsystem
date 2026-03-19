import { FFileItemPageObject } from "@fkui/vue/cypress";
import Example from "./FFileItemPageObject-fileName.vue";

it("el() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const fileItem = new FFileItemPageObject("[data-test=awesome-file]");
    fileItem.fileName().should("have.text", "myFile.doc");
    /* --- cut below --- */
});
