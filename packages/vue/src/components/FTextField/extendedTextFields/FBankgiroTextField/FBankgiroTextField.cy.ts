import { defineComponent } from "vue";
import FBankgiroTextField from "./FBankgiroTextField.vue";

const TestComponent = defineComponent({
    template: /* HTML */ `
        <f-bankgiro-text-field v-model="model"></f-bankgiro-text-field>
    `,
    components: {
        FBankgiroTextField,
    },
    data() {
        return {
            model: "",
        };
    },
});

describe("FBankgiroTextField", () => {
    it(`should mount with correct label `, () => {
        cy.mount(TestComponent);
        cy.viewport(400, 200);
        cy.toMatchScreenshot();
    });

    it(`should accept correct bankgiro numer `, () => {
        cy.mount(TestComponent);
        cy.get("input").should("be.visible");
        //These fake bankgiro values are as of this writing 2024-06-03 verified as non-existing,
        //but are not provided as official fake sample numbers by bankgirot.se
        cy.get("input").type("9999996");
        cy.get("input").blur();
        cy.get("input").should("have.value", "999-9996");
    });

    it(`should not accept incorrect bankgiro numer `, () => {
        cy.mount(TestComponent);
        cy.get("input").should("be.visible");
        cy.get("input").type("abc");
        cy.get("input").blur();
        cy.get(".label__message--error").should(
            "contain.text",
            "Fyll i bankgironumret med sju eller åtta siffror och bindestreck.",
        );
    });
});
