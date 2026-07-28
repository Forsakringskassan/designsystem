import { defineComponent } from "vue";
import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";

import FMessageBox from "./FMessageBox.vue";

function getShortTemplate(type: string): string {
    return /* HTML */ `
        <density-wrapper>
            <f-message-box type="${type}" layout="short">
                Kort text
            </f-message-box>
        </density-wrapper>
    `;
}

function getDefaultTemplate(type: string): string {
    return /* HTML */ `
        <density-wrapper>
            <f-message-box type="${type}">
                <template #default="{ headingSlotClass }">
                    <h2 :class="headingSlotClass">Rubrik</h2>
                    <p>Brödtext</p>
                </template>
            </f-message-box>
        </density-wrapper>
    `;
}

describe("default layout", () => {
    const DensityComponent = defineComponent({
        template: getDefaultTemplate("info"),
        components: {
            DensityWrapper,
            FMessageBox,
        },
    });

    it(`should be densified`, () => {
        cy.viewport(densityWrapperWidth, densityWrapperHeight);
        cy.mount(DensityComponent);
        cy.toMatchScreenshot();
    });
});

describe("short layout", () => {
    const DensityComponent = defineComponent({
        template: getShortTemplate("info"),
        components: {
            DensityWrapper,
            FMessageBox,
        },
    });

    it(`should be densified`, () => {
        cy.viewport(densityWrapperWidth, densityWrapperHeight);
        cy.mount(DensityComponent);
        cy.toMatchScreenshot();
    });
});

it("should have approved default design", () => {
    const ScreenshotComponent = defineComponent({
        template: /* HTML */ `
            <div>
                <f-message-box type="success">
                    <template #default="{ headingSlotClass }">
                        <h2 :class="headingSlotClass">Rubrik</h2>
                        <p>Brödtext</p>
                    </template>
                </f-message-box>

                <f-message-box type="warning">
                    <template #default="{ headingSlotClass }">
                        <h2 :class="headingSlotClass">Rubrik</h2>
                        <p>Brödtext</p>
                    </template>
                </f-message-box>

                <f-message-box type="error">
                    <template #default="{ headingSlotClass }">
                        <h2 :class="headingSlotClass">Rubrik</h2>
                        <p>Brödtext</p>
                    </template>
                </f-message-box>

                <f-message-box type="info">
                    <template #default="{ headingSlotClass }">
                        <h2 :class="headingSlotClass">Rubrik</h2>
                        <p>Brödtext</p>
                    </template>
                </f-message-box>
            </div>
        `,
        components: {
            FMessageBox,
        },
    });

    cy.mount(ScreenshotComponent);
    cy.viewport(200, 400);
    cy.toMatchScreenshot();
});

describe("Visual forcedColor", () => {
    const forcedColorModes = ["none", "dark", "light"] as const;

    afterEach(() => {
        cy.forcedColors("none");
    });

    for (const mode of Object.values(forcedColorModes)) {
        it(`Should render short design correct forced color, ${mode} (visual)`, () => {
            cy.forcedColors(mode);
            const ScreenshotComponent = defineComponent({
                template: /* HTML */ `
                    <div>
                        <f-message-box type="success">
                            <template #default="{ headingSlotClass }">
                                <h2 :class="headingSlotClass">Rubrik</h2>
                                <p>Brödtext</p>
                            </template>
                        </f-message-box>

                        <f-message-box type="warning">
                            <template #default="{ headingSlotClass }">
                                <h2 :class="headingSlotClass">Rubrik</h2>
                                <p>Brödtext</p>
                            </template>
                        </f-message-box>

                        <f-message-box type="error">
                            <template #default="{ headingSlotClass }">
                                <h2 :class="headingSlotClass">Rubrik</h2>
                                <p>Brödtext</p>
                            </template>
                        </f-message-box>

                        <f-message-box type="info">
                            <template #default="{ headingSlotClass }">
                                <h2 :class="headingSlotClass">Rubrik</h2>
                                <p>Brödtext</p>
                            </template>
                        </f-message-box>
                    </div>
                `,
                components: {
                    FMessageBox,
                },
            });

            cy.mount(ScreenshotComponent);
            cy.viewport(200, 400);
            cy.toMatchScreenshot();
        });
    }
});
