import { defineComponent, type DefineComponent } from "vue";
import FDefinitionList from "./FDefinitionList.vue";

function createComponent(template: string): DefineComponent {
    return defineComponent({
        template,
        components: {
            FDefinitionList,
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
            <f-definition-list :definitions="definitions" />
        `;
        cy.mount(createComponent(template));
        cy.toMatchScreenshot();
    });

    it("should match with aligned layout", () => {
        const template = /* HTML */ `
            <f-definition-list :definitions="definitions" aligned />
        `;
        cy.mount(createComponent(template));
        cy.toMatchScreenshot();
    });
});
