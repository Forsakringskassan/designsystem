import { type DefineComponent, defineComponent, provide } from "vue";
import { ValidationService } from "@fkui/logic";
import {
    FBankAccountNumberTextField,
    FClearingnumberTextField,
    FCurrencyTextField,
    FDatepickerField,
    FNumericTextField,
    FOrganisationsnummerTextField,
    FPercentTextField,
    FPersonnummerTextField,
    FPlusgiroTextField,
    FPostalCodeTextField,
    FSelectField,
    FTextField,
} from "../../components";

function createComponent(
    template: string,
    columnHeading: string,
): DefineComponent {
    return defineComponent({
        template: /* HTML */ `
            <div style="height: 200px; width: 580px">
                <table id="table">
                    <caption>
                        IPopupError
                    </caption>
                    <thead>
                        <tr>
                            <th scope="col">${columnHeading}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${template}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        components: {
            FBankAccountNumberTextField,
            FClearingnumberTextField,
            FCurrencyTextField,
            FDatepickerField,
            FNumericTextField,
            FOrganisationsnummerTextField,
            FPercentTextField,
            FPersonnummerTextField,
            FPlusgiroTextField,
            FPostalCodeTextField,
            FSelectField,
            FTextField,
        },
        data() {
            return { model: "" };
        },
        setup() {
            provide("textFieldTableMode", true);
        },
        mounted() {
            ValidationService.setSubmitted("input");
            ValidationService.validateAllElements("table");
        },
    });
}

describe("PopupError", () => {
    beforeEach(() => {
        cy.viewport(600, 300);
    });

    it("should be visible for `FClearingnumberTextField`", () => {
        const template = /* HTML */ `
            <f-clearingnumber-text-field
                v-validation.required
                v-model="model"
                id="input"
            >
            </f-clearingnumber-text-field>
        `;
        const component = createComponent(template, "FClearingnumberTextField");
        cy.mount(component);
        cy.get("#input").click();
        cy.toMatchScreenshot();
    });

    it("should be visible for `FBankAccountNumberTextField`", () => {
        const template = /* HTML */ `
            <f-bank-account-number-text-field
                v-model="model"
                v-validation.required
                id="input"
            >
            </f-bank-account-number-text-field>
        `;
        const component = createComponent(
            template,
            "FBankAccountNumberTextField",
        );
        cy.mount(component);
        cy.get("#input").click();
        cy.toMatchScreenshot();
    });

    it("should be visible for `FCurrencyTextField`", () => {
        const template = /* HTML */ `
            <f-currency-text-field
                v-model="model"
                v-validation.required
                id="input"
            >
            </f-currency-text-field>
        `;
        const component = createComponent(template, "FCurrencyTextField");
        cy.mount(component);
        cy.get("#input").click();
        cy.toMatchScreenshot();
    });

    it("should be visible for `FDatepickerField`", () => {
        const template = /* HTML */ `
            <f-datepicker-field
                v-model="model"
                v-validation.required
                id="input"
            >
            </f-datepicker-field>
        `;
        const component = createComponent(template, "FDatepickerField");
        cy.mount(component);
        cy.get("#input").click();
        cy.toMatchScreenshot();
    });

    it("should be visible for `FNumericTextField`", () => {
        const template = /* HTML */ `
            <f-numeric-text-field
                v-model="model"
                v-validation.required
                id="input"
            >
            </f-numeric-text-field>
        `;
        const component = createComponent(template, "FNumericTextField");
        cy.mount(component);
        cy.get("#input").click();
        cy.toMatchScreenshot();
    });

    it("should be visible for `FOrganisationsnummerTextField`", () => {
        const template = /* HTML */ `
            <f-organisationsnummer-text-field
                v-model="model"
                v-validation.required
                id="input"
            >
            </f-organisationsnummer-text-field>
        `;
        const component = createComponent(
            template,
            "FOrganisationsnummerTextField",
        );
        cy.mount(component);
        cy.get("#input").click();
        cy.toMatchScreenshot();
    });

    it("should be visible for `FPercentTextField`", () => {
        const template = /* HTML */ `
            <f-percent-text-field
                v-model="model"
                v-validation.required
                id="input"
            >
            </f-percent-text-field>
        `;
        const component = createComponent(template, "FPercentTextField");
        cy.mount(component);
        cy.get("#input").click();
        cy.toMatchScreenshot();
    });

    it("should be visible for `FPersonnummerTextField`", () => {
        const template = /* HTML */ `
            <f-personnummer-text-field
                v-model="model"
                v-validation.required
                id="input"
            >
            </f-personnummer-text-field>
        `;
        const component = createComponent(template, "FPersonnummerTextField");
        cy.mount(component);
        cy.get("#input").click();
        cy.toMatchScreenshot();
    });

    it("should be visible for `FPlusgiroTextField`", () => {
        const template = /* HTML */ `
            <f-plusgiro-text-field
                v-model="model"
                v-validation.required
                id="input"
            >
            </f-plusgiro-text-field>
        `;
        const component = createComponent(template, "FPlusgiroTextField");
        cy.mount(component);
        cy.get("#input").click();
        cy.toMatchScreenshot();
    });

    it("should be visible for `FPostalCodeTextField`", () => {
        const template = /* HTML */ `
            <f-postal-code-text-field
                v-model="model"
                v-validation.required
                id="input"
            >
            </f-postal-code-text-field>
        `;
        const component = createComponent(template, "FPostalCodeTextField");
        cy.mount(component);
        cy.get("#input").click();
        cy.toMatchScreenshot();
    });

    it("should only show error-icon for `FSelectField`", () => {
        const template = /* HTML */ `
            <f-select-field id="input" v-model="model" v-validation.required>
                <template #label> Etikett </template>
                <option disabled hidden value="">Välj…</option>
                <option value="A">A</option>
                <option value="A">A</option>
                <option value="B">B</option>
            </f-select-field>
        `;
        const component = createComponent(template, "FSelectField");
        cy.mount(component);
        cy.get("select").focus();
        cy.toMatchScreenshot();
    });

    it("should be visible for `FTextField`", () => {
        const template = /* HTML */ `
            <f-text-field v-model="model" v-validation.required id="input">
            </f-text-field>
        `;
        const component = createComponent(template, "FTextField");
        cy.mount(component);
        cy.get("#input").click();
        cy.toMatchScreenshot();
    });
});
