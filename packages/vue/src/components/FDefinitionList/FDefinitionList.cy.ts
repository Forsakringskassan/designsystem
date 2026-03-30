import { type DefineComponent, defineComponent } from "vue";
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
                    { term: "Skulle ha jobbat", definition: "8 timmar" },
                    { term: "Vabbade", definition: "8 timmar" },
                    { term: "Omfattning", definition: "100 procent" },
                ],
            };
        },
    });
}

describe("screenshots", () => {
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
                <f-definition-list :definitions="definitions" />
            </size-wrapper>
        `;
        cy.viewport(sizeWrapperWidth, sizeWrapperHeight);
        cy.mount(createComponent(template));
        cy.toMatchScreenshot();
    });
});
