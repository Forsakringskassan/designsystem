import { defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";
import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import { FSelectFieldPageObject } from "../../cypress";
import FTooltip from "../FTooltip/FTooltip.vue";
import FSelectField from "./FSelectField.vue";
import FSelectFieldVisualExample from "./examples/FSelectFieldVisualExample.vue";

describe("FSelectField", () => {
    it("should provide a page object that can access any necessary elements", () => {
        const TestComponent = defineComponent({
            template: /* HTML */ `
                <f-select-field
                    id="select-field"
                    v-model="model"
                    v-validation.required
                >
                    <template #label> Dropplista </template>
                    <template #tooltip>
                        <f-tooltip screen-reader-text="sr-text" header-tag="h1">
                            <template #header> Tooltip header </template>
                            <template #body> Tooltip body </template>
                        </f-tooltip>
                    </template>
                    <template #description="$scope">
                        <span :class="$scope.descriptionClass">
                            Hjälptext
                        </span>
                        <span :class="$scope.formatDescriptionClass">
                            Formatbeskrivning
                        </span>
                    </template>
                    <option disabled hidden value="">Gör ett val</option>
                    <option
                        v-for="option in options"
                        :key="option.value"
                        :value="option.value"
                    >
                        {{ option.label }}
                    </option>
                </f-select-field>
            `,
            components: {
                FSelectField,
                FTooltip,
            },
            data() {
                return {
                    model: "",
                    options: [
                        { value: "foo-value", label: "Foo label" },
                        { value: "bar-value", label: "Bar label" },
                    ],
                };
            },
            mounted() {
                ValidationService.setSubmitted("select-field");
            },
        });

        cy.mount(TestComponent);
        const selectField = new FSelectFieldPageObject(".select-field");
        selectField.label.el().should("contain.text", "Dropplista");
        selectField.label.description().should("contain.text", "Hjälptext");
        selectField.label
            .formatDescription()
            .should("contain.text", "Formatbeskrivning");
        selectField.arrowIcon().should("exist");

        selectField.dropdown().focus().blur();
        selectField.el().click();
        selectField.label
            .errorMessage()
            .should("exist")
            .should("contain.text", "Välj ett av alternativen.");

        selectField
            .dropdown()
            .should("have.value", null)
            .select("foo-value")
            .focus()
            .should("have.focus")
            .should("contain", "Foo label");

        selectField.label.errorMessage().should("not.exist");
        selectField.selectedOption().should("have.text", "Foo label");
        selectField.selectedValue().should("be.equal", "foo-value");
        selectField.numberOfOptions().should("be.equal", 2);

        selectField.tooltip.iButton().should("be.visible");
        selectField.tooltip.iButton().click();
    });

    it("should render inline layout correctly at 639px viewport (visual)", () => {
        cy.viewport(639, 180);
        cy.mount({
            components: { FSelectField, FTooltip },
            template: /* HTML */ `
                <f-select-field id="dropplista" v-model="selectField" inline>
                    <template #label> Etikett </template>

                    <option disabled hidden value="">Välj…</option>
                    <option value="1">Alternativ 1</option>
                    <option value="2">Alternativ 2</option>
                </f-select-field>
                <f-select-field id="dropplista2" v-model="selectField" inline>
                    <template #label> Etikett </template>

                    <template #tooltip>
                        <f-tooltip
                            screen-reader-text="Läs mer här"
                            header-tag="h1"
                        >
                            <template #header> Header </template>
                            <template #body> Body </template>
                        </f-tooltip>
                    </template>

                    <option disabled hidden value="">Välj…</option>
                    <option value="1">Alternativ 1</option>
                    <option value="2">Alternativ 2</option>
                </f-select-field>
            `,
            data() {
                return { selectField: "" };
            },
        });
        cy.toMatchScreenshot();
    });

    it("should render inline layout correctly at 640px viewport (visual)", () => {
        cy.viewport(640, 120);
        cy.mount({
            components: { FSelectField, FTooltip },
            template: /* HTML */ `
                <f-select-field id="dropplista" v-model="selectField" inline>
                    <template #label> Etikett </template>

                    <option disabled hidden value="">Välj…</option>
                    <option value="1">Alternativ 1</option>
                    <option value="2">Alternativ 2</option>
                </f-select-field>
                <f-select-field id="dropplista2" v-model="selectField" inline>
                    <template #label> Etikett </template>

                    <template #tooltip>
                        <f-tooltip
                            screen-reader-text="Läs mer här"
                            header-tag="h1"
                        >
                            <template #header> Header </template>
                            <template #body> Body </template>
                        </f-tooltip>
                    </template>

                    <option disabled hidden value="">Välj…</option>
                    <option value="1">Alternativ 1</option>
                    <option value="2">Alternativ 2</option>
                </f-select-field>
            `,
            data() {
                return { selectField: "" };
            },
        });
        cy.toMatchScreenshot({
            clip: { x: 0, y: 0, height: 120, width: 250 },
        });
    });

    it("should render help and format description and display an error message (visual)", () => {
        cy.viewport(250, 180);
        cy.mount({
            components: { FSelectField },
            template: /* HTML */ `
                <f-select-field
                    id="dropplista"
                    v-model="selectField"
                    v-validation.required
                >
                    <template #label> Etikett </template>
                    <template #description="$scope">
                        <span :class="$scope.descriptionClass">
                            Hjälptext
                        </span>
                        <span :class="$scope.formatDescriptionClass">
                            Formatbeskrivning
                        </span>
                    </template>
                    <option disabled hidden value="">Gör ett val</option>
                    <option value="1">Alternativ 1</option>
                    <option value="2">Alternativ 2</option>
                </f-select-field>
            `,
            data() {
                return { selectField: "" };
            },
            mounted() {
                ValidationService.setSubmitted("dropplista");
            },
        });
        const selectField = new FSelectFieldPageObject(".select-field");

        // Trigger required validation error.
        selectField.dropdown().focus().blur();

        cy.toMatchScreenshot({});
    });

    describe("density", () => {
        const DensityComponent = defineComponent({
            template: /* HTML */ `
                <density-wrapper>
                    <f-select-field v-model="selectField">
                        <template #label> Dropplista </template>
                        <option value="Text">Text</option>
                        <option value="Text2">Text 2</option>
                        <option value="Text3">Text 3</option>
                    </f-select-field>
                </density-wrapper>
            `,
            components: {
                DensityWrapper,
                FSelectField,
            },
            data() {
                return { selectField: "Text" };
            },
        });

        it(`should be densified`, () => {
            cy.viewport(densityWrapperWidth, densityWrapperHeight);
            cy.mount(DensityComponent);
            cy.toMatchScreenshot();
        });
    });

    describe("Visual", () => {
        const forcedColorModes = ["none", "dark", "light"] as const;

        afterEach(() => {
            cy.forcedColors("none");
        });
        for (const mode of forcedColorModes) {
            it(`should render correct styling for forced color mode '${mode}'`, () => {
                cy.viewport(300, 300);
                cy.forcedColors(mode);
                cy.mount(FSelectFieldVisualExample);
                cy.toMatchScreenshot();
            });
        }
    });
});
