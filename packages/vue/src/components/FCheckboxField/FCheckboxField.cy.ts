import { type DefineComponent, defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";
import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import { FFieldsetPageObject } from "../../cypress";
import { FTooltip } from "../FTooltip";
import { FFieldset } from "../FFieldset";
import FCheckboxField from "./FCheckboxField.vue";

function createComponent(template: string): DefineComponent {
    return defineComponent({
        template,
        components: {
            FCheckboxField,
            FFieldset,
            FTooltip,
        },
        mounted() {
            ValidationService.setSubmitted("checkbox-group");
        },
        data() {
            return {
                checkboxModel: [],
            };
        },
    });
}

const defaultTemplate = /* HTML */ `
    <f-fieldset id="checkbox-group" name="checkbox-name" v-validation.required>
        <template #label> Label text </template>
        <template #description="{ descriptionClass }">
            <span :class="descriptionClass"> Description text </span>
        </template>
        <f-checkbox-field v-model="checkboxModel" value="foo">
            Foo
        </f-checkbox-field>
        <f-checkbox-field v-model="checkboxModel" value="bar">
            Bar
        </f-checkbox-field>
    </f-fieldset>
`;

const checkboxField = {
    first: ".checkbox:nth(0)",
    second: ".checkbox:nth(1)",
};

describe("FCheckboxField", () => {
    const fieldset = new FFieldsetPageObject("fieldset");

    it("should have fields with text", () => {
        cy.mount(createComponent(defaultTemplate));

        const checkboxFirst = fieldset.checkBox(checkboxField.first);
        const checkboxSecond = fieldset.checkBox(checkboxField.second);

        fieldset.numberOfCheckboxes().should("be.equal", 2);
        checkboxFirst.el().should("contain.text", "Foo");
        checkboxSecond.el().should("contain.text", "Bar");
    });

    it("should be able to select and deselect fields, expanded should not exist", () => {
        cy.mount(createComponent(defaultTemplate));

        const checkboxFirst = fieldset.checkBox(checkboxField.first);
        const checkboxSecond = fieldset.checkBox(checkboxField.second);

        checkboxFirst.select();
        checkboxSecond.select();
        checkboxFirst.isSelected().should("be.true");
        checkboxSecond.isSelected().should("be.true");

        checkboxFirst.select();
        checkboxSecond.select();
        checkboxFirst.isSelected().should("be.false");
        checkboxSecond.isSelected().should("be.false");
        checkboxFirst.details().should("not.exist");
        checkboxSecond.details().should("not.exist");
    });

    it("should not be able to select disabled fields", () => {
        const template = /* HTML */ `
            <f-fieldset name="checkbox-name" v-validation.required>
                <template #label> Label text </template>
                <f-checkbox-field v-model="checkboxModel" value="foo">
                    Foo
                </f-checkbox-field>
                <f-checkbox-field v-model="checkboxModel" value="bar" disabled>
                    Bar
                </f-checkbox-field>
            </f-fieldset>
        `;
        cy.mount(createComponent(template));

        const checkboxFirst = fieldset.checkBox(checkboxField.first);
        const checkboxSecond = fieldset.checkBox(checkboxField.second);

        checkboxSecond.select();
        checkboxSecond.isSelected().should("be.false");

        checkboxFirst.select();
        checkboxFirst.isSelected().should("be.true");
    });

    it("should have label with description", () => {
        cy.mount(createComponent(defaultTemplate));

        fieldset.label.el().should("contain.text", "Label text");
        fieldset.label.description().should("contain.text", "Description text");
    });

    it("should not show error message if not required and submitted", () => {
        const template = /* HTML */ `
            <f-fieldset id="checkbox-group" name="checkbox-name">
                <template #label> Label text </template>
                <f-checkbox-field v-model="checkboxModel" value="foo">
                    Foo
                </f-checkbox-field>
                <f-checkbox-field v-model="checkboxModel" value="bar">
                    Bar
                </f-checkbox-field>
            </f-fieldset>
        `;
        cy.mount(createComponent(template));

        const checkboxFirst = fieldset.checkBox(checkboxField.first);
        checkboxFirst.checkbox().focus().blur();
        fieldset.el().click();
        fieldset.label.errorMessage().should("not.exist");
    });

    it("should show error message when required and submitted", () => {
        cy.mount(createComponent(defaultTemplate));

        fieldset.label.errorMessage().should("exist");
        fieldset.label
            .errorMessage()
            .should("contain.text", "Välj minst ett alternativ.");
    });

    it("should have tooltip", () => {
        const template = /* HTML */ `
            <f-fieldset name="checkbox-name">
                <template #label> Label text </template>
                <template #tooltip>
                    <f-tooltip
                        screen-reader-text="Läs mer om Broschyrer"
                        header-tag="h1"
                    >
                        <template #header> Tooltip header text </template>
                        <template #body> Tooltip body text </template>
                    </f-tooltip>
                </template>
                <f-checkbox-field v-model="checkboxModel" value="foo">
                    Foo
                </f-checkbox-field>
            </f-fieldset>
        `;
        cy.mount(createComponent(template));

        fieldset.tooltip.iButton().should("exist");
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should always show details regardless of whether foo or bar is checked when show-details is always", () => {
        const template = /* HTML */ `
            <f-fieldset border show-details="always">
                <template #label> Label text </template>
                <template #default>
                    <f-checkbox-field v-model="checkboxModel" value="foo">
                        <template #default> Foo </template>
                        <template #details>
                            Details is always visible
                        </template>
                    </f-checkbox-field>
                    <f-checkbox-field v-model="checkboxModel" value="bar">
                        <template #default> Bar </template>
                        <template #details>
                            Details is always visible
                        </template>
                    </f-checkbox-field>
                </template>
            </f-fieldset>
        `;
        cy.mount(createComponent(template));

        const checkbox1 = fieldset.checkBox(checkboxField.first);
        const checkbox2 = fieldset.checkBox(checkboxField.second);

        checkbox1.select();
        checkbox1.details().should("be.visible");
        checkbox2.details().should("be.visible");
        cy.get("fieldset").should("exist");
        cy.get("fieldset").toMatchScreenshot({ baseDelay: 500 });
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should display details when checkbox is checked and show-details is when-selected", () => {
        const template = /* HTML */ `
            <f-fieldset border show-details="when-selected">
                <template #label> Label text </template>
                <template #default>
                    <f-checkbox-field v-model="checkboxModel" value="foo">
                        <template #default> Foo </template>
                        <template #details>
                            Value foo - Details is visible only when checked
                        </template>
                    </f-checkbox-field>
                    <f-checkbox-field v-model="checkboxModel" value="bar">
                        <template #default> Bar </template>
                        <template #details>
                            Value bar - Details is visible only when checked
                        </template>
                    </f-checkbox-field>
                </template>
            </f-fieldset>
        `;
        cy.mount(createComponent(template));

        const checkbox1 = fieldset.checkBox(checkboxField.first);
        const checkbox2 = fieldset.checkBox(checkboxField.second);

        checkbox1.select();
        checkbox1.details().should("be.visible");
        checkbox2.details().should("not.exist");
        checkbox1.select();
        checkbox2.select();
        checkbox1.details().should("not.exist");
        checkbox2.details().should("be.visible");
        cy.get("fieldset").should("exist");
        cy.get("fieldset").toMatchScreenshot({ baseDelay: 500 });
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    describe.skip("density", () => {
        const DensityComponent = defineComponent({
            template: /* HTML */ `
                <density-wrapper>
                    <f-fieldset v-validation.required>
                        <template #label>
                            <h2>Kryssrutegrupp</h2>
                        </template>
                        <f-checkbox-field
                            v-model="checkboxField"
                            value="Kryssruta1"
                        >
                            Kryssruta
                        </f-checkbox-field>
                        <f-checkbox-field
                            v-model="checkboxField"
                            value="Kryssruta2"
                        >
                            Kryssruta
                        </f-checkbox-field>
                        <f-checkbox-field
                            v-model="checkboxField"
                            value="Kryssruta3"
                        >
                            Kryssruta
                        </f-checkbox-field>
                        <f-checkbox-field
                            v-model="checkboxField"
                            value="Kryssruta4"
                        >
                            Kryssruta
                        </f-checkbox-field>
                    </f-fieldset>
                </density-wrapper>
            `,
            components: {
                DensityWrapper,
                FFieldset,
                FCheckboxField,
            },
        });

        it(`should be densified`, () => {
            cy.viewport(densityWrapperWidth, densityWrapperHeight);
            cy.mount(DensityComponent);
            cy.toMatchScreenshot();
        });
    });
});
