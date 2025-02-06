import { type DefineComponent, defineComponent } from "vue";
import {
    FCheckboxField,
    FFieldset,
    FRadioField,
    FTextField,
    FTooltip,
} from "../components";
import { FFieldsetPageObject } from "./FFieldset.pageobject";

function createComponent(template: string): DefineComponent {
    return defineComponent({
        template,
        components: {
            FCheckboxField,
            FFieldset,
            FRadioField,
            FTextField,
            FTooltip,
        },
        data() {
            return {
                radioModel: "",
                textModel: "",
                checkboxModel: "",
            };
        },
    });
}

const CHECKBOX_OPTIONS = {
    hund: ".checkbox:nth(0)",
    katt: ".checkbox:nth(1)",
    fisk: ".checkbox:nth(2)",
};

const RADIO_OPTIONS = {
    yes: ".radio-button:nth(0)",
    no: ".radio-button:nth(1)",
    maybe: ".radio-button:nth(2)",
};

describe("FFieldsetPageObject", () => {
    describe("With tooltip", () => {
        describe("Radio", () => {
            const template = /* HTML */ `
                <f-fieldset name="group-name-default">
                    <template #label> Label text </template>
                    <template #description="{ descriptionClass }">
                        <span :class="descriptionClass">
                            Description text
                        </span>
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

            const fieldset = new FFieldsetPageObject(".radio-button-group");

            beforeEach(() => {
                cy.mount(createComponent(template));
            });

            it("should return FLabelPageObject", () => {
                fieldset.label.el().should("contain.text", "Label text");
                fieldset.label
                    .description()
                    .should("contain.text", "Description text");
            });

            it("should return FTooltipPageObject", () => {
                fieldset.tooltip.iButton().should("exist");
            });

            it("should return FRadioGroupFieldPageObject", () => {
                fieldset
                    .radioButton(RADIO_OPTIONS.yes)
                    .label()
                    .should("contain.text", "Yes");
                fieldset
                    .radioButton(RADIO_OPTIONS.no)
                    .label()
                    .should("contain.text", "No");
                fieldset
                    .radioButton(RADIO_OPTIONS.maybe)
                    .label()
                    .should("contain.text", "Maybe");
            });

            it("should have 3 options", () => {
                fieldset.numberOfRadio().should("equal", 3);
            });

            it("should return content with 3 labels", () => {
                fieldset
                    .content()
                    .get(".radio-button__label")
                    .should("have.length", 3);
            });
        });

        describe("Checkbox", () => {
            const template = /* HTML */ `
                <f-fieldset name="djur">
                    <template #label> Label text </template>

                    <template #tooltip>
                        <f-tooltip
                            screen-reader-text="Screen reader text"
                            header-tag="h1"
                        >
                            <template #header> Header </template>
                            <template #body> Body </template>
                        </f-tooltip>
                    </template>

                    <template #description="{ descriptionClass }">
                        <span :class="descriptionClass"> Description </span>
                    </template>

                    <f-checkbox-field v-model="checkboxModel" value="Hund">
                        Hund
                    </f-checkbox-field>

                    <f-checkbox-field v-model="checkboxModel" value="Katt">
                        Katt
                    </f-checkbox-field>

                    <f-checkbox-field
                        v-model="checkboxModel"
                        value="Fisk"
                        disabled
                    >
                        Fisk
                    </f-checkbox-field>
                </f-fieldset>
            `;

            const checkboxField = new FFieldsetPageObject("fieldset");

            beforeEach(() => {
                cy.mount(createComponent(template));
            });

            it("should return FLabelPageObject", () => {
                checkboxField.label.el().should("contain.text", "Label text");
                checkboxField.label
                    .description()
                    .should("contain.text", "Description");
            });

            it("should return FTooltipPageObject", () => {
                checkboxField.tooltip.iButton().should("exist");
            });

            it("should return FCheckboxGroupFieldPageObject", () => {
                checkboxField
                    .checkBox(CHECKBOX_OPTIONS.hund)
                    .label()
                    .should("contain.text", "Hund");
                checkboxField
                    .checkBox(CHECKBOX_OPTIONS.katt)
                    .label()
                    .should("contain.text", "Katt");
                checkboxField
                    .checkBox(CHECKBOX_OPTIONS.fisk)
                    .label()
                    .should("contain.text", "Fisk");
            });

            it("should return correct nuber of options", () => {
                checkboxField.numberOfCheckboxes().should("equal", 3);
            });

            it("should return content with 3 labels", () => {
                checkboxField
                    .content()
                    .get(".checkbox__label")
                    .should("have.length", 3);
            });
        });

        describe("TextField", () => {
            const template = /* HTML */ `
                <f-text-field v-model="textModel">
                    <template #default> Etikett </template>

                    <template #tooltip>
                        <f-tooltip
                            screen-reader-text="Läs mer här"
                            header-tag="h1"
                        >
                            <template #header> Header </template>
                            <template #body> Body </template>
                        </f-tooltip>
                    </template>

                    <template
                        #description="{ descriptionClass, formatDescriptionClass }"
                    >
                        <span :class="formatDescriptionClass">
                            Formatbeskrivning
                        </span>
                    </template>
                </f-text-field>
            `;

            const textFieldFieldset = new FFieldsetPageObject(".text-field");

            beforeEach(() => {
                cy.mount(createComponent(template));
            });

            it("should return FLabelPageObject", () => {
                textFieldFieldset.label.el().should("contain.text", "Etikett");
                textFieldFieldset.label
                    .description()
                    .should("contain.text", "Formatbeskrivning");
            });

            it("should return FTooltipPageObject", () => {
                textFieldFieldset.tooltip.iButton().should("exist");
            });
        });
    });
    describe("Without tooltip", () => {
        describe("Radio", () => {
            const template = /* HTML */ `
                <f-fieldset name="group-name-default">
                    <template #label> Label text </template>
                    <template #description="{ descriptionClass }">
                        <span :class="descriptionClass">
                            Description text
                        </span>
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

            const fieldset = new FFieldsetPageObject(".radio-button-group");
            beforeEach(() => {
                cy.mount(createComponent(template));
            });

            it("should return FLabelPageObject", () => {
                fieldset.label.el().should("contain.text", "Label text");
                fieldset.label
                    .description()
                    .should("contain.text", "Description text");
            });

            it("should not return FTooltipPageObject", () => {
                fieldset.tooltip.iButton().should("not.exist");
            });

            it("should return FRadioGroupFieldPageObject", () => {
                fieldset
                    .radioButton(RADIO_OPTIONS.yes)
                    .label()
                    .should("contain.text", "Yes");
                fieldset
                    .radioButton(RADIO_OPTIONS.no)
                    .label()
                    .should("contain.text", "No");
                fieldset
                    .radioButton(RADIO_OPTIONS.maybe)
                    .label()
                    .should("contain.text", "Maybe");
            });

            it("should have 3 options", () => {
                fieldset.numberOfRadio().should("equal", 3);
            });

            it("should return content with 3 labels", () => {
                fieldset
                    .content()
                    .get(".radio-button__label")
                    .should("have.length", 3);
            });
        });

        describe("Checkbox", () => {
            const template = /* HTML */ `
                <f-fieldset name="djur">
                    <template #label> Label text </template>

                    <template #description="{ descriptionClass }">
                        <span :class="descriptionClass"> Description </span>
                    </template>

                    <f-checkbox-field v-model="checkboxModel" value="Hund">
                        Hund
                    </f-checkbox-field>

                    <f-checkbox-field v-model="checkboxModel" value="Katt">
                        Katt
                    </f-checkbox-field>

                    <f-checkbox-field
                        v-model="checkboxModel"
                        value="Fisk"
                        disabled
                    >
                        Fisk
                    </f-checkbox-field>
                </f-fieldset>
            `;
            const checkboxField = new FFieldsetPageObject("fieldset");

            beforeEach(() => {
                cy.mount(createComponent(template));
            });

            it("should return FLabelPageObject", () => {
                checkboxField.label.el().should("contain.text", "Label text");
                checkboxField.label
                    .description()
                    .should("contain.text", "Description");
            });

            it("should not return FTooltipPageObject", () => {
                checkboxField.tooltip.iButton().should("not.exist");
            });

            it("should return FCheckboxGroupFieldPageObject", () => {
                checkboxField
                    .checkBox(CHECKBOX_OPTIONS.hund)
                    .label()
                    .should("contain.text", "Hund");
                checkboxField
                    .checkBox(CHECKBOX_OPTIONS.katt)
                    .label()
                    .should("contain.text", "Katt");
                checkboxField
                    .checkBox(CHECKBOX_OPTIONS.fisk)
                    .label()
                    .should("contain.text", "Fisk");
            });

            it("should have 3 options", () => {
                checkboxField.numberOfCheckboxes().should("equal", 3);
            });

            it("should return content with 3 labels", () => {
                checkboxField
                    .content()
                    .get(".checkbox__label")
                    .should("have.length", 3);
            });
        });

        describe("TextField", () => {
            const template = /* HTML */ `
                <f-text-field v-model="textModel">
                    <template #default> Etikett </template>
                    <template
                        #description="{ descriptionClass, formatDescriptionClass }"
                    >
                        <span :class="formatDescriptionClass">
                            Formatbeskrivning
                        </span>
                    </template>
                </f-text-field>
            `;

            const textFieldFieldset = new FFieldsetPageObject(".text-field");
            beforeEach(() => {
                cy.mount(createComponent(template));
            });

            it("should return FLabelPageObject", () => {
                textFieldFieldset.label.el().should("contain.text", "Etikett");
                textFieldFieldset.label
                    .description()
                    .should("contain.text", "Formatbeskrivning");
            });

            it("should not return FTooltipPageObject", () => {
                textFieldFieldset.tooltip.iButton().should("not.exist");
            });
        });
    });
});
