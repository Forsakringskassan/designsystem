import { type DefineComponent, defineComponent } from "vue";
import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import { FButton } from "../FButton";
import { FTextField } from "../FTextField";
import FCard from "./FCard.vue";
import FCardValidationExample from "./examples/FCardValidationExample.vue";

function createComponent(): DefineComponent {
    return defineComponent({
        template: /* HTML */ `
            <f-card>
                <template #header="{ headingSlotClass }">
                    <h3 :class="headingSlotClass">Rubrik</h3>
                </template>
                <template #default>
                    <f-text-field
                        v-validation.maxLength="{ maxLength: { length: 100 } }"
                    >
                        Förnamn
                    </f-text-field>
                    <f-text-field
                        v-validation.maxLength="{ maxLength: { length: 100 } }"
                    >
                        Efternamn
                    </f-text-field>
                </template>
                <template #footer>
                    <div class="button-group">
                        <f-button class="button-group__item" variant="tertiary">
                            <span> Ta bort </span>
                        </f-button>

                        <f-button class="button-group__item" variant="tertiary">
                            <span> Ändra </span>
                        </f-button>
                    </div>
                </template>
            </f-card>
        `,
        components: {
            FButton,
            FCard,
            FTextField,
        },
    });
}

describe("validation", () => {
    it("should show error when invalid", () => {
        cy.mount(FCardValidationExample);
        cy.get(`[data-test="set-invalid"]`).click();
        cy.get(".card").should("contain.text", "Uppgifter saknas");
    });

    it("should set focus at submit", () => {
        cy.mount(FCardValidationExample);
        cy.get(`[data-test="set-invalid"]`).click();
        cy.get(`[type="submit"]`).click();
        cy.get(`#focus`).should("have.focus");
    });

    it("should not throw error when child component is validated", () => {
        cy.mount(
            defineComponent({
                template: /* HTML */ `
                    <f-card>
                        <template #default>
                            <f-text-field
                                v-validation.maxLength="{ maxLength: { length: 100 } }"
                            >
                                Etikett
                            </f-text-field>
                        </template>
                    </f-card>
                `,
                components: {
                    FCard,
                    FTextField,
                },
            }),
        );
        cy.get("input").focus();
        cy.get("input").blur();

        // eslint-disable-next-line cypress/no-unnecessary-waiting -- required for potential error to be thrown and fail test
        cy.wait(1);
    });
});

describe("Screenshot", () => {
    beforeEach(() => {
        cy.viewport(1024, 600);
    });

    it("should match screenshot", () => {
        cy.mount(createComponent());
        cy.get(".card").toMatchScreenshot();
    });
});

describe("density", () => {
    const DensityComponent = defineComponent({
        template: /* HTML */ `
            <density-wrapper>
                <template #default="{ density }">
                    <f-card>
                        <template #header="{ headingSlotClass }">
                            <h3 :class="headingSlotClass">Rubrik</h3>
                        </template>
                        <template #default>
                            Kort med densitet "{{ density }}"
                        </template>
                        <template #footer>
                            <div class="button-group">
                                <f-button
                                    class="button-group__item"
                                    align-text
                                    icon-left="pen"
                                    variant="tertiary"
                                >
                                    <span> Ändra </span>
                                </f-button>
                                <f-button
                                    class="button-group__item"
                                    align-text
                                    icon-left="trashcan"
                                    variant="tertiary"
                                >
                                    <span> Ta bort </span>
                                </f-button>
                            </div>
                        </template>
                    </f-card>
                </template>
            </density-wrapper>
        `,
        components: {
            DensityWrapper,
            FButton,
            FCard,
        },
    });

    it(`should be densified`, () => {
        cy.viewport(densityWrapperWidth, densityWrapperHeight);
        cy.mount(DensityComponent);
        cy.toMatchScreenshot();
    });
});
