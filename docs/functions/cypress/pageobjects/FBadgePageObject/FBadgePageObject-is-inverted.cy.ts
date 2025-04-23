import { FBadgePageObject } from "@fkui/vue/cypress";
import Example from "./FBadgePageObject-is-inverted.vue";

it("should check if the badge is inverted or not ", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const myBadgeNotIverted = new FBadgePageObject(
        "[data-test=my-badge-not-inverted]",
    );
    myBadgeNotIverted.isInverted().should("be.equal", false);

    const myBadgeInverted = new FBadgePageObject(
        "[data-test=my-badge-inverted]",
    );
    myBadgeInverted.isInverted().should("be.equal", true);
    /* --- cut below --- */
});
