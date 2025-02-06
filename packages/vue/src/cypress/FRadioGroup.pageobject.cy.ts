import { type DefineComponent, defineComponent } from "vue";
import { FFieldset, FRadioField, FTooltip } from "../components";
import { FRadioGroupPageObject } from "./FRadioGroup.pageobject";

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
    });
}

const OPTIONS = {
    yes: ".radio-button:nth(0)",
    no: ".radio-button:nth(1)",
    maybe: ".radio-button:nth(2)",
};

describe("FRadioGroupPageObject", () => {
    const radioGroup = new FRadioGroupPageObject(".radio-button-group");

    describe("Without tooltip", () => {
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
                <f-radio-field v-model="radioModel" :value="true" disabled>
                    Maybe
                </f-radio-field>
            </f-fieldset>
        `;

        beforeEach(() => {
            cy.mount(createComponent(template));
        });

        it("should return FLabelPageObject", () => {
            radioGroup.label.el().should("contain.text", "Label text");
            radioGroup.label
                .description()
                .should("contain.text", "Description text");
        });

        it("should not return FTooltipPageObject", () => {
            radioGroup.tooltip.iButton().should("not.exist");
        });

        it("should return FRadioGroupFieldPageObject", () => {
            radioGroup
                .radioButton(OPTIONS.yes)
                .label()
                .should("contain.text", "Yes");
            radioGroup
                .radioButton(OPTIONS.no)
                .label()
                .should("contain.text", "No");
            radioGroup
                .radioButton(OPTIONS.maybe)
                .label()
                .should("contain.text", "Maybe");
        });

        it("should have 3 options", () => {
            radioGroup.numberOfOptions().should("equal", 3);
        });

        it("should return content with 3 labels", () => {
            radioGroup
                .content()
                .get(".radio-button__label")
                .should("have.length", 3);
        });
    });

    describe("With tooltip", () => {
        const template = /* HTML */ `
            <f-fieldset name="radio-name">
                <template #label> Label text </template>
                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass"> Description text </span>
                </template>
                <template #tooltip>
                    <f-tooltip
                        screen-reader-text="Screen reader text"
                        header-tag="h1"
                    >
                        <template #header> Header </template>
                        <template #body> Body </template>
                    </f-tooltip>
                </template>
                <f-radio-field v-model="radioModel" :value="true">
                    Yes
                </f-radio-field>
                <f-radio-field v-model="radioModel" :value="false">
                    No
                </f-radio-field>
                <f-radio-field v-model="radioModel" :value="true" disabled>
                    Maybe
                </f-radio-field>
            </f-fieldset>
        `;

        beforeEach(() => {
            cy.mount(createComponent(template));
        });

        it("should return FLabelPageObject", () => {
            radioGroup.label.el().should("contain.text", "Label text");
            radioGroup.label
                .description()
                .should("contain.text", "Description text");
        });

        it("should return FTooltipPageObject", () => {
            radioGroup.tooltip.iButton().should("exist");
        });

        it("should return FRadioGroupFieldPageObject", () => {
            radioGroup
                .radioButton(OPTIONS.yes)
                .label()
                .should("contain.text", "Yes");
            radioGroup
                .radioButton(OPTIONS.no)
                .label()
                .should("contain.text", "No");
            radioGroup
                .radioButton(OPTIONS.maybe)
                .label()
                .should("contain.text", "Maybe");
        });

        it("should return correct nuber of options", () => {
            radioGroup.numberOfOptions().should("equal", 3);
        });

        it("should return content with 3 labels", () => {
            radioGroup
                .content()
                .get(".radio-button__label")
                .should("have.length", 3);
        });
    });
});
