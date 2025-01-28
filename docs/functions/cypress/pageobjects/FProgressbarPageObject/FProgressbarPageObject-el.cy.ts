import { FProgressbarPageObject } from "@fkui/vue/cypress";
import Example from "./FProgressbarPageObject-el.vue";

it("FProgressbarPageObject.el() should return the element", () => {
    cy.mount(Example);

    /* --- cut above --- */

    const progressbar = new FProgressbarPageObject("[data-test=progressbar]");
    progressbar.el().should("exist");

    /* --- cut below --- */
});
