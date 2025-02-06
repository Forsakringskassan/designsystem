import { type DefineComponent, defineComponent } from "vue";
import { FCheckboxField, FFieldset, FTooltip } from "../components";
import { FCheckboxGroupPageObject } from "./FCheckboxGroup.pageobject";

function createComponent(template: string): DefineComponent {
    return defineComponent({
        template,
        components: {
            FCheckboxField,
            FFieldset,
            FTooltip,
        },
        data() {
            return {
                checkboxModel: "",
            };
        },
    });
}

const OPTIONS = {
    hund: ".checkbox:nth(0)",
    katt: ".checkbox:nth(1)",
    fisk: ".checkbox:nth(2)",
};

describe("FCheckboxGroupPageObject", () => {
    const checkboxGroup = new FCheckboxGroupPageObject(".checkbox-group");

    describe("Without tooltip", () => {
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

                <f-checkbox-field v-model="checkboxModel" value="Fisk" disabled>
                    Fisk
                </f-checkbox-field>
            </f-fieldset>
        `;

        beforeEach(() => {
            cy.mount(createComponent(template));
        });

        it("should return FLabelPageObject", () => {
            checkboxGroup.label.el().should("contain.text", "Label text");
            checkboxGroup.label
                .description()
                .should("contain.text", "Description");
        });

        it("should not return FTooltipPageObject", () => {
            checkboxGroup.tooltip.iButton().should("not.exist");
        });

        it("should return FCheckboxGroupFieldPageObject", () => {
            checkboxGroup
                .checkBox(OPTIONS.hund)
                .label()
                .should("contain.text", "Hund");
            checkboxGroup
                .checkBox(OPTIONS.katt)
                .label()
                .should("contain.text", "Katt");
            checkboxGroup
                .checkBox(OPTIONS.fisk)
                .label()
                .should("contain.text", "Fisk");
        });

        it("should have 3 options", () => {
            checkboxGroup.numberOfCheckboxes().should("equal", 3);
        });

        it("should return content with 3 labels", () => {
            checkboxGroup
                .content()
                .get(".checkbox__label")
                .should("have.length", 3);
        });
    });

    describe("With tooltip", () => {
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

                <f-checkbox-field v-model="checkboxModel" value="Fisk" disabled>
                    Fisk
                </f-checkbox-field>
            </f-fieldset>
        `;

        beforeEach(() => {
            cy.mount(createComponent(template));
        });

        it("should return FLabelPageObject", () => {
            checkboxGroup.label.el().should("contain.text", "Label text");
            checkboxGroup.label
                .description()
                .should("contain.text", "Description");
        });

        it("should return FTooltipPageObject", () => {
            checkboxGroup.tooltip.iButton().should("exist");
        });

        it("should return FCheckboxGroupFieldPageObject", () => {
            checkboxGroup
                .checkBox(OPTIONS.hund)
                .label()
                .should("contain.text", "Hund");
            checkboxGroup
                .checkBox(OPTIONS.katt)
                .label()
                .should("contain.text", "Katt");
            checkboxGroup
                .checkBox(OPTIONS.fisk)
                .label()
                .should("contain.text", "Fisk");
        });

        it("should return correct nuber of options", () => {
            checkboxGroup.numberOfCheckboxes().should("equal", 3);
        });

        it("should return content with 3 labels", () => {
            checkboxGroup
                .content()
                .get(".checkbox__label")
                .should("have.length", 3);
        });
    });
});
