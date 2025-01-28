import { FProgressbarPageObject } from "@fkui/vue/cypress";
import Example from "./FProgressbarPageObject-value.vue";

it("FProgressbarPageObject.value() should give us the correct value of progressbar class", () => {
    cy.mount(Example);

    /* --- cut above --- */

    const progressbar = new FProgressbarPageObject("[data-test=progressbar]");
    progressbar.value().should("be.equal", 40);
    progressbar.value().should("be.greaterThan", 0);

    /* --- cut below --- */
});
