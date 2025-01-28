import { FProgressbarPageObject } from "@fkui/vue/cypress";
import Example from "./FProgressbarPageObject-progress-status.vue";

it("FProgressbarPageObject.progressStatus() should give us the correct classname pending/inprogress/finished", () => {
    cy.mount(Example);

    /* --- cut above --- */

    const progressbar = new FProgressbarPageObject("[data-test=progressbar]");
    progressbar.progressStatus().should("equal", "inprogress");

    /* --- cut below --- */
});
