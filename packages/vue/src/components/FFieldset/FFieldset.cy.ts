import { defineComponent } from "vue";
import { FFieldsetPageObject } from "../../cypress";
import { FCheckboxField } from "../FCheckboxField";
import { FRadioField } from "../FRadioField";
import FFieldset from "./FFieldset.vue";

const fieldSetRadio = new FFieldsetPageObject(".radio-button-group");
const fieldSetCheckbox = new FFieldsetPageObject(".checkbox-group");

const options = {
    first: ".radio-button:nth(0)",
    second: ".radio-button:nth(1)",
    third: ".radio-button:nth(1)",
    fourth: ".radio-button:nth(1)",
};

const checkBoxOptions = {
    first: ".checkbox:nth(0)",
    second: ".checkbox:nth(1)",
    third: ".checkbox:nth(2)",
    fourth: ".checkbox:nth(3)",
    fifth: ".checkbox:nth(4)",
};

describe("radiobuttons", () => {
    beforeEach(() => {
        const TestComponent = defineComponent({
            components: { FFieldset, FRadioField },
            template: /* HTML */ `
                <f-fieldset horizontal="true">
                    <template #label> Arbetar du deltid? </template>
                    <f-radio-field :value="'test'"> Ja </f-radio-field>
                    <f-radio-field :value="'test2'"> Nej </f-radio-field>
                </f-fieldset>
            `,
        });
        cy.mount(TestComponent);
    });

    it("should mount ffieldset", () => {
        fieldSetRadio.el().should("exist");
    });

    it("should have 2 radiobuttons", () => {
        fieldSetRadio.numberOfRadio().should("equal", 2);
    });

    it("should have labels", () => {
        fieldSetRadio
            .radioButton(options.first)
            .label()
            .should("have.trimmedText", "Ja");
        fieldSetRadio
            .radioButton(options.second)
            .label()
            .should("have.trimmedText", "Nej");
    });

    it("should be able to select first option", () => {
        fieldSetRadio.radioButton(options.first).select();
        fieldSetRadio.radioButton(options.first).isSelected().should("be.true");
        fieldSetRadio
            .radioButton(options.second)
            .isSelected()
            .should("be.false");
    });

    it("should be able to select second option", () => {
        fieldSetRadio.radioButton(options.second).select();
        fieldSetRadio
            .radioButton(options.first)
            .isSelected()
            .should("be.false");
        fieldSetRadio
            .radioButton(options.second)
            .isSelected()
            .should("be.true");
    });
});

describe("chip and horizontal styling", () => {
    it("should contain chip class when chip prop is enabled", () => {
        const TestComponent = defineComponent({
            components: { FFieldset, FRadioField },
            template: /* HTML */ `
                <f-fieldset chip>
                    <template #label> Arbetar du deltid? </template>
                    <f-radio-field :value="'test'"> Ja </f-radio-field>
                    <f-radio-field :value="'test2'"> Nej </f-radio-field>
                </f-fieldset>
            `,
        });
        cy.mount(TestComponent);

        fieldSetRadio.el().should("have.class", "radio-button-group--chip");
    });

    it("should contain horizontal class when horizontal is set to true", () => {
        // Need to have width >= 640px, to be displayed horizontal.
        cy.viewport(1024, 600);
        const TestComponent = defineComponent({
            components: { FFieldset, FRadioField },
            template: /* HTML */ `
                <f-fieldset :horizontal="true">
                    <template #label> Arbetar du deltid? </template>
                    <f-radio-field :value="'test'"> Ja </f-radio-field>
                    <f-radio-field :value="'test2'"> Nej </f-radio-field>
                </f-fieldset>
            `,
        });
        cy.mount(TestComponent);
        fieldSetRadio
            .el()
            .should("have.class", "radio-button-group--horizontal");
    });

    it("should contain horizontal class and chip class when horizontal is set to true and chip prop is enabled", () => {
        // Need to have width >= 640px, to be displayed horizontal.
        cy.viewport(1024, 600);
        const TestComponent = defineComponent({
            components: { FFieldset, FRadioField },
            template: /* HTML */ `
                <f-fieldset horizontal chip>
                    <template #label> Arbetar du deltid? </template>
                    <f-radio-field :value="'test'"> Ja </f-radio-field>
                    <f-radio-field :value="'test2'"> Nej </f-radio-field>
                </f-fieldset>
            `,
        });
        cy.mount(TestComponent);
        fieldSetRadio
            .el()
            .should("have.class", "radio-button-group--horizontal");
        fieldSetRadio.el().should("have.class", "radio-button-group--chip");
    });

    it("should not contain horizontal class or chip class when horizontal is not set to true and chip prop is not enabled", () => {
        const TestComponent = defineComponent({
            components: { FFieldset, FRadioField },
            template: /* HTML */ `
                <f-fieldset>
                    <template #label> Arbetar du deltid? </template>
                    <f-radio-field :value="'test'"> Ja </f-radio-field>
                    <f-radio-field :value="'test2'"> Nej </f-radio-field>
                </f-fieldset>
            `,
        });
        cy.mount(TestComponent);
        fieldSetRadio
            .el()
            .should("not.have.class", "radio-button-group--horizontal");
        fieldSetRadio
            .el()
            .children()
            .should("not.have.class", "radio-button--chip");
    });
});

describe("checkbox", () => {
    beforeEach(() => {
        const TestComponent = defineComponent({
            components: { FFieldset, FCheckboxField },
            template: /* HTML */ `
                <div>
                    <f-fieldset>
                        <template #label>
                            Markera de dagar du har arbetat?
                        </template>
                        <f-checkbox-field value="test1">
                            Måndag
                        </f-checkbox-field>
                        <f-checkbox-field value="test2">
                            Tisdag
                        </f-checkbox-field>
                        <f-checkbox-field value="test3">
                            Onsdag
                        </f-checkbox-field>
                        <f-checkbox-field value="test4">
                            Torsdag
                        </f-checkbox-field>
                        <f-checkbox-field value="test5">
                            Fredag
                        </f-checkbox-field>
                    </f-fieldset>
                </div>
            `,
        });

        cy.mount(TestComponent);
    });

    it("should mount ffieldset", () => {
        fieldSetCheckbox.el().should("exist");
    });

    it("should have 5 radiobuttons", () => {
        fieldSetCheckbox.numberOfCheckboxes().should("equal", 5);
    });

    it("should have labels", () => {
        fieldSetCheckbox
            .checkBox(checkBoxOptions.first)
            .label()
            .should("have.trimmedText", "Måndag");
        fieldSetCheckbox
            .checkBox(checkBoxOptions.second)
            .label()
            .should("have.trimmedText", "Tisdag");
    });

    it("should be able to select and deselect first option", () => {
        fieldSetCheckbox.checkBox(checkBoxOptions.first).select();
        fieldSetCheckbox
            .checkBox(checkBoxOptions.first)
            .isSelected()
            .should("be.true");
        fieldSetCheckbox.checkBox(checkBoxOptions.first).select();
        fieldSetCheckbox
            .checkBox(checkBoxOptions.first)
            .isSelected()
            .should("be.false");
    });

    it("should be able to select and deselect second option", () => {
        fieldSetCheckbox.radioButton(checkBoxOptions.second).select();
        fieldSetCheckbox
            .radioButton(checkBoxOptions.second)
            .isSelected()
            .should("be.true");
        fieldSetCheckbox.radioButton(checkBoxOptions.second).select();
        fieldSetCheckbox
            .radioButton(checkBoxOptions.second)
            .isSelected()
            .should("be.false");
    });

    it("should be able to select and deselect fifth option", () => {
        fieldSetCheckbox.radioButton(checkBoxOptions.fifth).select();
        fieldSetCheckbox
            .radioButton(checkBoxOptions.fifth)
            .isSelected()
            .should("be.true");
        fieldSetCheckbox.radioButton(checkBoxOptions.fifth).select();
        fieldSetCheckbox
            .radioButton(checkBoxOptions.fifth)
            .isSelected()
            .should("be.false");
    });
});
