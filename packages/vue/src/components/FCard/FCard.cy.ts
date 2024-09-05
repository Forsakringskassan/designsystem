import { type DefineComponent, defineComponent } from "vue";
import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import { FTextField } from "../FTextField";
import FCard from "./FCard.vue";

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
                        <button
                            class="button button-group__item button--discrete"
                            type="button"
                        >
                            <span> Ta bort </span>
                        </button>

                        <button
                            class="button button-group__item button--discrete"
                            type="button"
                        >
                            <span> Ändra </span>
                        </button>
                    </div>
                </template>
            </f-card>
        `,
        components: {
            FCard,
            FTextField,
        },
    });
}

/* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
describe.skip("Screenshot", () => {
    beforeEach(() => {
        cy.viewport(1024, 600);
    });
    it("should match screenshot", () => {
        cy.mount(createComponent());
        cy.get(".card").toMatchScreenshot();
    });
});

/* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
describe.skip("density", () => {
    const DensityComponent = defineComponent({
        template: /* HTML */ `
            <density-wrapper>
                <f-card>
                    <template #header="{ headingSlotClass }">
                        <h3 :class="headingSlotClass">Rubrik</h3>
                    </template>
                    <template #default> Innehåll </template>
                    <template #footer>
                        <div class="button-group">
                            <button
                                class="button button-group__item button--tertiary button--medium button--align-text"
                                type="button"
                            >
                                <f-icon name="pen"></f-icon>
                                <span> Ändra </span>
                            </button>
                            <button
                                class="button button-group__item button--tertiary button--medium button--align-text"
                                type="button"
                            >
                                <f-icon name="trashcan"></f-icon>
                                <span> Ta bort </span>
                            </button>
                        </div>
                    </template>
                </f-card>
            </density-wrapper>
        `,
        components: {
            DensityWrapper,
            FCard,
        },
    });

    it(`should be densified`, () => {
        cy.viewport(densityWrapperWidth, densityWrapperHeight);
        cy.mount(DensityComponent);
        cy.toMatchScreenshot();
    });
});
