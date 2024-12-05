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
        cy.get(".message-box").should("be.visible");
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
        cy.get(".message-box").should("be.visible");
        cy.toMatchScreenshot();
    });
});

it("should have approved design", () => {
    const ScreenshotComponent = defineComponent({
        template: /* HTML */ `
            <div class="row">
                <div class="col col--sm-6">
                    ${getDefaultTemplate("success")}
                    ${getDefaultTemplate("warning")}
                    ${getDefaultTemplate("error")} ${getDefaultTemplate("info")}
                </div>
                <div class="col col--sm-6">
                    ${getShortTemplate("success")}
                    ${getShortTemplate("warning")} ${getShortTemplate("error")}
                    ${getShortTemplate("info")}
                </div>
            </div>
        `,
        components: {
            FMessageBox,
        },
    });

    cy.mount(ScreenshotComponent);
    cy.get(".message-box").should("be.visible");
    cy.toMatchScreenshot();
});
