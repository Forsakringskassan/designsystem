import { FBadgePageObject } from "@fkui/vue/cypress";
import Example from "./FBadgePageObject.vue";

it("Should show the status default and that the badge is not inverted", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const myBadge = new FBadgePageObject("[data-test=my-badge]");
    myBadge.status().should("be.equal", "default");
    myBadge.isInverted().should("be.equal", false);
    /* --- cut below --- */
});
