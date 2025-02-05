import { FBadgePageObject } from "@fkui/vue/cypress";
import Example from "./FBadgePageObject-status.vue";

it("Should match the status warning in the badge", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const myBadge = new FBadgePageObject("[data-test=my-badge-warning]");
    myBadge.status().should("be.equal", "warning");
    /* --- cut below --- */
});
