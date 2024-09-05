import { type DefineComponent, defineComponent } from "vue";
import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import { FLabelPageObject } from "../../pageobject";
import FLabel from "./FLabel.vue";

function createComponent(template: string): DefineComponent {
    return defineComponent({
        template,
        components: {
            FLabel,
        },
    });
}

const defaultTemplate = /* HTML */ `
    <f-label id="label" for="input-field">
        Etikett
        <template #description="{ descriptionClass, discreteDescriptionClass }">
            <span :class="descriptionClass"> Hjälptext </span>
            <span :class="discreteDescriptionClass"> Formatbeskrivning </span>
        </template>
        <template #error-message> Felmeddelande </template>
    </f-label>
    <input id="input-field" type="text" class="text-field__input" />
`;

describe("FLabel", () => {
    beforeEach(() => {
        cy.mount(createComponent(defaultTemplate));
    });

    it("should provide a page object that can access any necessary elements", () => {
        const label = new FLabelPageObject("#label");
        label.el().should("contain.text", "Etikett");
        label.description().should("contain.text", "Hjälptext");
        label.discreteDescription().should("contain.text", "Formatbeskrivning");
        label.errorMessage().should("contain.text", "Felmeddelande");
    });

    describe("density", () => {
        const DensityComponent = defineComponent({
            template: /* HTML */ `
                <density-wrapper>
                    <template #default="{ density }">
                        <f-label
                            :id="'label-' + density"
                            :for="'input-' + density"
                        >
                            Etikett
                            <template
                                #description="{ descriptionClass, discreteDescriptionClass }"
                            >
                                <span :class="descriptionClass">
                                    Hjälptext
                                </span>
                                <span :class="discreteDescriptionClass">
                                    Formatbeskrivning
                                </span>
                            </template>
                            <template #error-message> Felmeddelande </template>
                        </f-label>
                        <input
                            :id="'input-' + density"
                            type="text"
                            class="text-field__input"
                        />
                    </template>
                </density-wrapper>
            `,
            components: {
                DensityWrapper,
                FLabel,
            },
        });

        it(`should be densified`, () => {
            cy.viewport(densityWrapperWidth, densityWrapperHeight);
            cy.mount(DensityComponent);
            cy.toMatchScreenshot();
        });
    });
});