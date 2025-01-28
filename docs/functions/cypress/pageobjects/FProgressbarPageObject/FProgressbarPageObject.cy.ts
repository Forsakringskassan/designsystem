import { FProgressbarPageObject } from "@fkui/vue/cypress";
import Example from "./FProgressbarPageObject.vue";

it("FProgressbarPageObject.el() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */

    const progressbar = new FProgressbarPageObject("[data-test=progressbar]");
    progressbar.progressStatus().should("equal", "inprogress");
    progressbar.value().should("be.equal", 40);

    /* --- cut below --- */
});
