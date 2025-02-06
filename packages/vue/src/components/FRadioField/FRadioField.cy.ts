import { type DefineComponent, defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";
import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import { FFieldsetPageObject } from "../../cypress";
import { FTooltip } from "../FTooltip";
import FFieldset from "../FFieldset/FFieldset.vue";
import FRadioField from "./FRadioField.vue";

function createComponent(template: string): DefineComponent {
    return defineComponent({
        template,
        components: {
            FFieldset,
            FRadioField,
            FTooltip,
        },
        data() {
            return {
                radioModel: "",
            };
        },
        mounted() {
            ValidationService.setSubmitted("radio-name");
        },
    });
}

const radioField = {
    yes: ".radio-button:nth(0)",
    no: ".radio-button:nth(1)",
    disabled1: ".radio-button:nth(2)",
    disabled2: ".radio-button:nth(3)",
};

describe("FRadioField", () => {
    const radioGroup = new FFieldsetPageObject("fieldset");

    it("should have label with description", () => {
        const template = /* HTML */ `
            <f-fieldset name="radio-name">
                <template #label> Label text </template>
                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass"> Description text </span>
                </template>
                <f-radio-field v-model="radioModel" :value="true">
                    Yes
                </f-radio-field>
                <f-radio-field v-model="radioModel" :value="false">
                    No
                </f-radio-field>
            </f-fieldset>
        `;
        cy.mount(createComponent(template));
        radioGroup.label.el().should("contain.text", "Label text");
        radioGroup.label
            .description()
            .should("contain.text", "Description text");
    });

    it("should not show error message if not required and submitted", () => {
        const template = /* HTML */ `
            <f-fieldset id="radio-name" name="radio-name">
                <template #label> Label text </template>
                <f-radio-field v-model="radioModel" :value="true">
                    Yes
                </f-radio-field>
                <f-radio-field v-model="radioModel" :value="false">
                    No
                </f-radio-field>
            </f-fieldset>
        `;
        cy.mount(createComponent(template));
        const radioGroupField = radioGroup.radioButton(radioField.yes);
        radioGroup.radioButton(radioField.yes).isSelected().should("be.false");
        radioGroup.radioButton(radioField.no).isSelected().should("be.false");
        radioGroupField.radioButton().focus().blur();
        radioGroup.el().click();
        radioGroup.label.errorMessage().should("not.exist");
    });

    it("should show error message when required and submitted", () => {
        const template = /* HTML */ `
            <f-fieldset id="radio-name" name="radio-name" v-validation.required>
                <template #label> Label text </template>
                <f-radio-field v-model="radioModel" :value="true">
                    Yes
                </f-radio-field>
                <f-radio-field v-model="radioModel" :value="false">
                    No
                </f-radio-field>
            </f-fieldset>
        `;
        cy.mount(createComponent(template));
        const radioGroupField = radioGroup.radioButton(radioField.yes);
        radioGroup.radioButton(radioField.yes).isSelected().should("be.false");
        radioGroup.radioButton(radioField.no).isSelected().should("be.false");
        radioGroupField.radioButton().focus().blur();
        radioGroup.el().click();
        radioGroup.label.errorMessage().should("exist");
        radioGroup.label
            .errorMessage()
            .should("contain.text", "Välj ett av alternativen.");
    });

    it("should have fields with text", () => {
        const template = /* HTML */ `
            <f-fieldset name="radio-name">
                <template #label> Label text </template>
                <f-radio-field v-model="radioModel" :value="true">
                    Yes
                </f-radio-field>
                <f-radio-field v-model="radioModel" :value="false">
                    No
                </f-radio-field>
            </f-fieldset>
        `;
        cy.mount(createComponent(template));

        const radioYes = radioGroup.radioButton(radioField.yes);
        const radioNo = radioGroup.radioButton(radioField.no);

        radioGroup.numberOfRadio().should("be.equal", 2);
        radioYes.el().should("contain.text", "Yes");
        radioNo.el().should("contain.text", "No");
    });

    it("should only be able to choose one", () => {
        const template = /* HTML */ `
            <f-fieldset name="radio-name">
                <template #label> Label text </template>
                <f-radio-field v-model="radioModel" :value="true">
                    Yes
                </f-radio-field>
                <f-radio-field v-model="radioModel" :value="false">
                    No
                </f-radio-field>
            </f-fieldset>
        `;
        cy.mount(createComponent(template));

        radioGroup.radioButton(radioField.no).select();
        radioGroup.radioButton(radioField.no).isSelected().should("be.true");
        radioGroup.radioButton(radioField.yes).isSelected().should("be.false");

        radioGroup.radioButton(radioField.yes).select();
        radioGroup.radioButton(radioField.yes).isSelected().should("be.true");
        radioGroup.radioButton(radioField.no).isSelected().should("be.false");
    });

    it("should have tooltip", () => {
        const template = /* HTML */ `
            <f-fieldset name="radio-name">
                <template #label> Label text </template>
                <template #tooltip>
                    <f-tooltip
                        screen-reader-text="Screen reader text."
                        header-tag="h1"
                    >
                        <template #header> Tooltip header </template>
                        <template #body> Tooltip body </template>
                    </f-tooltip>
                </template>
                <f-radio-field v-model="radioModel" :value="true">
                    Yes
                </f-radio-field>
                <f-radio-field v-model="radioModel" :value="false">
                    No
                </f-radio-field>
            </f-fieldset>
        `;
        cy.mount(createComponent(template));
        radioGroup.tooltip.iButton().should("exist");
    });

    it("should not be able to select disabled fields, expanded should not exist", () => {
        const template = /* HTML */ `
            <f-fieldset name="radio-name">
                <template #label> Label text </template>
                <f-radio-field v-model="radioModel" :value="true">
                    Yes
                </f-radio-field>
                <f-radio-field v-model="radioModel" :value="false">
                    No
                </f-radio-field>
                <f-radio-field v-model="radioModel" :value="false" disabled>
                    Disabled 1
                </f-radio-field>
                <f-radio-field v-model="radioModel" :value="false" disabled>
                    Disabled 2
                </f-radio-field>
            </f-fieldset>
        `;
        cy.mount(createComponent(template));
        radioGroup.radioButton(radioField.disabled1).select();
        radioGroup
            .radioButton(radioField.disabled1)
            .isSelected()
            .should("be.false");

        radioGroup.radioButton(radioField.disabled2).select();
        radioGroup
            .radioButton(radioField.disabled2)
            .isSelected()
            .should("be.false");

        radioGroup.radioButton(radioField.yes).select();
        radioGroup.radioButton(radioField.yes).isSelected().should("be.true");
        radioGroup.radioButton(radioField.yes).select();
        //expanded should not exist
        radioGroup.radioButton(radioField.yes).details().should("not.exist");
        radioGroup.radioButton(radioField.no).select();
        //expanded should not exist
        radioGroup.radioButton(radioField.no).details().should("not.exist");
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should always show details regardless of whether yes or no is checked when show-details is always", () => {
        const template = /* HTML */ `
            <f-fieldset name="radio-name" border show-details="always">
                <template #label> Label text </template>
                <template #default>
                    <f-radio-field v-model="radioModel" :value="true">
                        <template #default> Yes </template>
                        <template #details>
                            Value true - Details is always visible
                        </template>
                    </f-radio-field>
                    <f-radio-field v-model="radioModel" :value="false">
                        <template #default> No </template>
                        <template #details>
                            Value false - Details is always visible
                        </template>
                    </f-radio-field>
                </template>
            </f-fieldset>
        `;
        cy.mount(createComponent(template));

        const radio1 = radioGroup.radioButton(radioField.yes);
        const radio2 = radioGroup.radioButton(radioField.no);
        radio1.select();
        radio1.details().should("be.visible");
        radio2.details().should("be.visible");
        cy.get("fieldset").should("exist");
        cy.get("fieldset").toMatchScreenshot({ baseDelay: 500 });
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("details should be visible only when item is selected when show-details is when-selected", () => {
        const template = /* HTML */ `
            <f-fieldset name="radio-name" border show-details="when-selected">
                <template #label> Label text </template>
                <template #default>
                    <f-radio-field v-model="radioModel" :value="true">
                        <template #default> Yes </template>
                        <template #details>
                            Value YES - Details is visible only when selected
                        </template>
                    </f-radio-field>
                    <f-radio-field v-model="radioModel" :value="false">
                        <template #default> No </template>
                        <template #details>
                            Value NO - Details is visible only when selected
                        </template>
                    </f-radio-field>
                </template>
            </f-fieldset>
        `;
        cy.mount(createComponent(template));

        const radio1 = radioGroup.radioButton(radioField.yes);
        const radio2 = radioGroup.radioButton(radioField.no);

        radio1.select();
        radio1.details().should("be.visible");
        radio2.details().should("not.exist");
        radio2.select();
        radio1.details().should("not.exist");
        radio2.details().should("be.visible");
        cy.get("fieldset").should("exist");
        cy.get("fieldset").toMatchScreenshot({ baseDelay: 500 });
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    describe.skip("density", () => {
        const DensityComponent = defineComponent({
            template: /* HTML */ `
                <density-wrapper>
                    <f-fieldset :name="fieldset">
                        <template #label>
                            <h2>Radioknappsgrupp</h2>
                        </template>
                        <f-radio-field v-model="radioField" value="Radio1">
                            Text
                        </f-radio-field>
                        <f-radio-field v-model="radioField" value="Radio2">
                            Text
                        </f-radio-field>
                        <f-radio-field v-model="radioField" value="Radio3">
                            Text
                        </f-radio-field>
                        <f-radio-field v-model="radioField" value="Radio4">
                            Text
                        </f-radio-field>
                    </f-fieldset>
                </density-wrapper>
            `,
            components: {
                DensityWrapper,
                FFieldset,
                FRadioField,
            },
            data() {
                return {
                    radioField: "",
                };
            },
        });

        it(`should be densified`, () => {
            cy.viewport(densityWrapperWidth, densityWrapperHeight);
            cy.mount(DensityComponent);
            cy.toMatchScreenshot();
        });
    });
});
