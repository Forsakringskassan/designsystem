import { defineComponent } from "vue";
import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import FExpandablePanel from "./FExpandablePanel.vue";

describe("density", () => {
    const DensityComponent = defineComponent({
        template: /* HTML */ `
            <density-wrapper>
                <f-expandable-panel :expanded="true">
                    <template #title> Rubrik </template>
                    <template #default> Innehåll </template>
                </f-expandable-panel>
            </density-wrapper>
        `,
        components: {
            DensityWrapper,
            FExpandablePanel,
        },
    });

    it(`should be densified`, () => {
        cy.viewport(densityWrapperWidth, densityWrapperHeight);
        cy.mount(DensityComponent);
        cy.toMatchScreenshot();
    });
});
