import { defineComponent } from "vue";
import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import FExpandableParagraph from "./FExpandableParagraph.vue";

const TestComponent = defineComponent({
    template: /* HTML */ `
        <f-expandable-paragraph :expanded>
            <template #title> Rubrik </template>
            <template #default> Innehåll </template>
        </f-expandable-paragraph>
    `,
    props: {
        expanded: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        FExpandableParagraph,
    },
});

describe("density", () => {
    const DensityComponent = defineComponent({
        template: /* HTML */ `
            <density-wrapper>
            <test-component expanded></test-component
            </density-wrapper>
        `,
        components: {
            DensityWrapper,
            TestComponent,
        },
    });

    it(`should be densified`, () => {
        cy.viewport(densityWrapperWidth, densityWrapperHeight);
        cy.mount(DensityComponent);
        cy.toMatchScreenshot();
    });
});

it("should match visual regression when collapsed", () => {
    cy.mount({
        template: /* HTML */ `
            <div id="wrapper" style="padding: 1rem">
                <div style="border: 1px dashed hotpink">
                    <test-component></test-component>
                </div>
            </div>
        `,
        components: {
            TestComponent,
        },
    });
    cy.get("#wrapper").toMatchScreenshot();
});

it("should match visual regression when expanded", () => {
    cy.mount({
        template: /* HTML */ `
            <div id="wrapper" style="padding: 1rem">
                <div style="border: 1px dashed hotpink">
                    <test-component expanded></test-component>
                </div>
            </div>
        `,
        components: {
            TestComponent,
        },
    });
    cy.get("#wrapper").toMatchScreenshot();
});
