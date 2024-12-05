import { defineComponent } from "vue";
import FBankgiroTextField from "./FBankgiroTextField.vue";

function mountBankgiro(template: string): void {
    cy.mount(
        defineComponent({
            template,
            components: {
                FBankgiroTextField,
            },
            data() {
                return {
                    model: "",
                };
            },
        }),
    );
}

describe("FBankgiroTextField", () => {
    it(`should mount with correct label `, () => {
        mountBankgiro(
            `<f-bankgiro-text-field v-model="model"></f-bankgiro-text-field>`,
        );
        cy.viewport(400, 200);
        cy.get(".text-field").should("be.visible");
        cy.toMatchScreenshot();
    });

    it(`should accept correct bankgiro numer `, () => {
        mountBankgiro(
            `<f-bankgiro-text-field v-model="model"></f-bankgiro-text-field>`,
        );
        cy.get("input").should("be.visible");
        //These fake bankgiro values are as of this writing 2024-06-03 verified as non-existing,
        //but are not provided as official fake sample numbers by bankgirot.se
        cy.get("input").type("9999996");
        cy.get("input").blur();
        cy.get("input").should("have.value", "999-9996");
    });

    it(`should not accept incorrect bankgiro numer `, () => {
        mountBankgiro(
            `<f-bankgiro-text-field v-model="model"></f-bankgiro-text-field>`,
        );
        cy.get("input").should("be.visible");
        cy.get("input").type("abc");
        cy.get("input").blur();
        cy.get(".label__message--error").should(
            "contain.text",
            "Skriv bankgironumret med sju eller åtta siffror och bindestreck.",
        );
    });
});
