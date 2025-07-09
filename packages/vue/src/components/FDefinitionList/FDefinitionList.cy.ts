import { defineComponent, type DefineComponent } from "vue";
import {
    SizeWrapper,
    sizeWrapperHeight,
    sizeWrapperWidth,
} from "@fkui/test-utils/vue";
import FDefinitionList from "./FDefinitionList.vue";

function createComponent(template: string): DefineComponent {
    return defineComponent({
        template,
        components: {
            FDefinitionList,
            SizeWrapper,
        },
        data() {
            return {
                definitions: [
                    { term: "Skulle ha jobbat", description: "8 timmar" },
                    { term: "Vabbade", description: "8 timmar" },
                    { term: "Omfattning", description: "100 procent" },
                ],
            };
        },
    });
}

// eslint-disable-next-line mocha/no-skipped-tests -- Screenshot tests
describe.skip("screenshots", () => {
    it("should match default", () => {
        const template = /* HTML */ `
            <size-wrapper>
                <h1>FDefinitionList</h1>
                <h2>Default</h2>
                <f-definition-list :definitions="definitions" />
            </size-wrapper>
        `;
        cy.viewport(sizeWrapperWidth, sizeWrapperHeight);
        cy.mount(createComponent(template));
        cy.toMatchScreenshot();
    });

    it("should match with justified layout", () => {
        const template = /* HTML */ `
            <size-wrapper>
                <h1>FDefinitionList</h1>
                <h2>Justified layout</h2>
                <f-definition-list :definitions="definitions" justified />
            </size-wrapper>
        `;
        cy.viewport(sizeWrapperWidth, sizeWrapperHeight);
        cy.mount(createComponent(template));
        cy.toMatchScreenshot();
    });
});
