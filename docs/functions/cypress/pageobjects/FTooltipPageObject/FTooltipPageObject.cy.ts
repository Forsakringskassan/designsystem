import { FTooltipPageObject } from "@fkui/vue/pageobject";
import Example from "./FTooltipPageObject.vue";

it("el() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const fileItem = new FTooltipPageObject("data-test=file-item");
    fileItem.el().should("include", ".pdf");
    /* --- cut below --- */
});
