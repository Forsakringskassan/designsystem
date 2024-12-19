import { FTextField } from "@fkui/vue";
import { defineComponent } from "vue";
import { FTextFieldPageObject } from "./pageobject";

it("should have correct label", () => {
    cy.mount(
        defineComponent({
            template: `<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>`,
            components: { FTextField },
        }),
    );

    const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

    awesomeInput.label.el().should("contain.text", "My Awesome Input");
});
