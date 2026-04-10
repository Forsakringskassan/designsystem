import { type DefineComponent, defineComponent } from "vue";
import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import { FExpandableParagraphPageObject } from "../../cypress";
import FExpandableParagraph from "./FExpandableParagraph.vue";

function createComponent(template: string): DefineComponent {
    return defineComponent({
        template,
        components: { FExpandableParagraph },
        data() {
            return {
                expanded: false,
                type: Boolean,
            };
        },
        methods: {
            onToggle() {
                this.expanded = !this.expanded;
            },
        },
    });
}

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

describe("FExpandableParagraph", () => {
    const defaultTemplate = /* HTML */ `
        <f-expandable-paragraph
            :expanded
            header-tag="span"
            @toggle="onToggle"
            data-test="expandable-paragraph"
            id="expandable-paragraph-id"
        >
            <template #title> Titel </template>
            <template #related> 2026-01-01 </template>
            <template #default>
                <span> Innehåll </span>
            </template>
        </f-expandable-paragraph>
    `;

    beforeEach(() => {
        cy.clearLocalStorage();
    });

    it("The root element should be visible", () => {
        cy.mount(createComponent(defaultTemplate));
        const paragraph = new FExpandableParagraphPageObject();
        paragraph.el().should("be.visible");
    });

    it("The expandable paragraph sohuld be able to be opened and closed", () => {
        cy.mount(createComponent(defaultTemplate));
        const paragraph = new FExpandableParagraphPageObject();
        paragraph.isOpen().should("be.false");
        paragraph.expandCollapseIcon().click();
        paragraph.isOpen().should("be.true");
    });

    it("Related info inside the expandable paragraph should be visible", () => {
        cy.mount(createComponent(defaultTemplate));
        const paragraph = new FExpandableParagraphPageObject();
        paragraph.relatedInfo().should("have.trimmedText", "2026-01-01");
    });

    it("The expandable paragraph should have a visible header", () => {
        cy.mount(createComponent(defaultTemplate));
        const paragraph = new FExpandableParagraphPageObject();
        paragraph.header().should("have.trimmedText", "Titel");
    });

    it("The expandable paragraph body should be visible when expanded", () => {
        cy.mount(createComponent(defaultTemplate));
        const paragraph = new FExpandableParagraphPageObject();
        paragraph.expandCollapseIcon().click();
        paragraph.body().should("have.trimmedText", "Innehåll");
    });
});
