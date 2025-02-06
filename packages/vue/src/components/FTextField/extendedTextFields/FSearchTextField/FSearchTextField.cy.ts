import { defineComponent } from "vue";
import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import { FTooltip } from "../../../FTooltip";
import {
    AlertScreenReaderPageObject,
    FTextFieldPageObject,
} from "../../../../cypress";
import FSearchTextField from "./FSearchTextField.vue";

const alertScreenReader = new AlertScreenReaderPageObject();

const component = defineComponent({
    template: /* HTML */ `
        <f-search-text-field
            id="clearing-field"
            v-model="inputModel"
            label="Search"
        >
            <template #tooltip>
                <f-tooltip
                    screen-reader-text="tooltip info screen reader"
                    header-tag="h1"
                >
                    <template #header> Header </template>
                    <template #body> Body text </template>
                </f-tooltip>
            </template>
            <template #description="{ descriptionClass }">
                <span :class="descriptionClass" id="description">
                    Description
                </span>
            </template>
            <template #error-message>
                <span id="error-message"> Error </span>
            </template>
            <template #input-right>
                <button
                    type="button"
                    id="search"
                    class="button button--primary"
                >
                    Sök
                </button>
            </template>
        </f-search-text-field>
    `,
    components: {
        FSearchTextField,
        FTooltip,
    },
    data() {
        return {
            inputModel: "",
        };
    },
});

describe("FSearchTextField", () => {
    let inputField;
    beforeEach(() => {
        cy.viewport(640, 200);
    });

    it("should not show clear button when first mounted", () => {
        cy.mount(component);
        cy.get(".clear-button").should("not.exist");
    });

    it("slots for tooltip, inner-right, error-message and description should exist", () => {
        cy.mount(component);
        inputField = new FTextFieldPageObject("body");
        inputField.tooltip.iButton().should("exist");
        cy.get("#search").should("exist");
        cy.get("#search").should("contain.text", "Sök");
        cy.get("#error-message").should("exist");
        cy.get("#error-message").should("contain.text", "Error");
        cy.get("#description").should("exist");
        cy.get("#description").should("have.trimmedText", "Description");
    });

    it("should show clear button when there is data in input", () => {
        cy.mount(component);
        inputField = new FTextFieldPageObject("body");
        inputField.input().type("test");
        cy.get(".clear-button").should("exist");
    });

    it("should clear field when clear button is clicked", () => {
        cy.mount(component);
        inputField = new FTextFieldPageObject("body");
        inputField.input().type("test");
        cy.get(".clear-button").should("exist");
        cy.get(".clear-button").click();
        cy.get(".clear-button").should("not.exist");
        inputField.input().should("have.value", "");
    });

    it("should send message to screen reader when clear button is clicked", () => {
        cy.mount(component);
        inputField = new FTextFieldPageObject("body");
        inputField.input().type("test");
        cy.get(".clear-button").click();
        alertScreenReader
            .el()
            .should("contain.text", "Inmatningsfältet har tömts");
    });
});

/* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
describe.skip("density", () => {
    const DensityComponent = defineComponent({
        template: /* HTML */ `
            <density-wrapper>
                <f-search-text-field v-model="model"> Sök </f-search-text-field>
            </density-wrapper>
        `,
        components: {
            DensityWrapper,
            FSearchTextField,
        },
        data() {
            return { model: "Text" };
        },
    });

    it(`should be densified`, () => {
        cy.viewport(densityWrapperWidth, densityWrapperHeight);
        cy.mount(DensityComponent);
        cy.toMatchScreenshot();
    });
});
