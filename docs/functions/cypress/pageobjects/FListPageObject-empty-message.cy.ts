import { FListPageObject } from "@fkui/vue/cypress";
import FListPageObjectExample from "./FListPageObject.vue";

/* eslint-disable-next-line mocha/no-pending-tests -- technical debt, see #1192 */
it.skip("emptyMessage() should return element with empty message", () => {
    cy.mount(FListPageObjectExample);
    /* --- cut above --- */
    const list = new FListPageObject();
    list.emptyMessage().should("exist").and("have.text", "Listan är tom");
    /* --- cut below --- */
});
