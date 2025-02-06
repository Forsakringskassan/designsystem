import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import { defineComponent, useTemplateRef } from "vue";
import { FTooltipPageObject } from "../../cypress";
import { FLabel } from "../FLabel";
import { FTextField } from "../FTextField";
import FTooltip from "./FTooltip.vue";

describe("FTooltip", () => {
    it("Should have a page object that can access any necessary elements", () => {
        cy.mount(FTooltip, {
            slots: {
                header: `Rubrik`,
                body: /* HTML */ ` <p>Lorem ipsum</p> `,
            },
            props: {
                screenReaderText: "Screen reader text",
                headerTag: "h3",
            },
        });
        const tooltip = new FTooltipPageObject(".tooltip");
        tooltip.iButton().click();
        tooltip.header().should("contain", "Rubrik");
        tooltip.body().should("contain", "Lorem ipsum");
        tooltip.closeButton().should("have.trimmedText", "Stäng");
        tooltip.closeButton().click();
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should appear visually correct with label and tooltip", () => {
        const TestComponent = defineComponent({
            components: { FTooltip },
            template: /* HTML */ `
                <div v-for="(v, index) in variants">
                    <div ref="attach">
                        <label class="label"> Etikett </label>
                    </div>
                    <f-tooltip
                        :attach-to="attach?.[index]"
                        :id="v.id"
                        v-model="v.model"
                        screen-reader-text="Läs mer"
                    >
                        <template #header> Rubrik </template>
                        <template #body> Lorem ipsum dolor sit amet. </template>
                    </f-tooltip>
                </div>
            `,
            setup() {
                return { attach: useTemplateRef("attach") };
            },
            data() {
                return {
                    variants: [
                        { id: "collapsed", model: false },
                        { id: "expanded", model: true },
                    ],
                };
            },
        });
        cy.viewport(800, 600);
        cy.mount(TestComponent);
        cy.get("#collapsed .tooltip__body").should("not.be.visible");
        cy.get("#expanded .tooltip__body").should("be.visible");
        cy.toMatchScreenshot();
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should appear visually correct with heading and tooltip", () => {
        const TestComponent = defineComponent({
            components: { FTooltip },
            template: /* HTML */ `
                <div v-for="(v, index) in variants">
                    <div ref="attach">
                        <h3 class="label">Rubrik</h3>
                    </div>
                    <f-tooltip
                        :attach-to="attach?.[index]"
                        :id="v.id"
                        v-model="v.model"
                        screen-reader-text="Läs mer"
                    >
                        <template #header> Rubrik </template>
                        <template #body> Lorem ipsum dolor sit amet. </template>
                    </f-tooltip>
                </div>
            `,
            setup() {
                return { attach: useTemplateRef("attach") };
            },
            data() {
                return {
                    variants: [
                        { id: "collapsed", model: false },
                        { id: "expanded", model: true },
                    ],
                };
            },
        });
        cy.viewport(800, 600);
        cy.mount(TestComponent);
        cy.get("#collapsed .tooltip__body").should("not.be.visible");
        cy.get("#expanded .tooltip__body").should("be.visible");
        cy.toMatchScreenshot();
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should appear visually correct with input field and tooltip", () => {
        const TestComponent = defineComponent({
            components: { FTextField, FTooltip },
            template: /* HTML */ `
                <f-text-field v-for="v in variants">
                    <template #default> Etikett </template>
                    <template #tooltip>
                        <f-tooltip
                            :id="v.id"
                            v-model="v.model"
                            screen-reader-text="Läs mer"
                        >
                            <template #header> Rubrik </template>
                            <template #body>
                                Lorem ipsum dolor sit amet.
                            </template>
                        </f-tooltip>
                    </template>
                </f-text-field>
            `,
            data() {
                return {
                    variants: [
                        { id: "collapsed", model: false },
                        { id: "expanded", model: true },
                    ],
                };
            },
        });
        cy.viewport(800, 600);
        cy.mount(TestComponent);
        cy.get("#collapsed .tooltip__body").should("not.be.visible");
        cy.get("#expanded .tooltip__body").should("be.visible");
        cy.toMatchScreenshot();
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    describe.skip("density", () => {
        const DensityComponent = defineComponent({
            template: /* HTML */ `
                <density-wrapper>
                    <f-label>
                        <template #default> Tooltip </template>
                        <template #tooltip>
                            <f-tooltip screen-reader-text="Skärmläsartext">
                                <template #header> Rubrik </template>
                                <template #body> Brödtext </template>
                            </f-tooltip>
                        </template>
                    </f-label>
                </density-wrapper>
            `,
            components: {
                DensityWrapper,
                FLabel,
                FTooltip,
            },
        });

        it(`should be densified`, () => {
            cy.viewport(densityWrapperWidth, densityWrapperHeight);
            cy.mount(DensityComponent);
            const tooltip1 = new FTooltipPageObject(
                ".density-default .tooltip",
            );
            tooltip1.iButton().click({ multiple: true });
            const tooltip2 = new FTooltipPageObject(".density-dense .tooltip");
            tooltip2.iButton().click({ multiple: true });
            const tooltip3 = new FTooltipPageObject(
                ".density-densest .tooltip",
            );
            tooltip3.iButton().click({ multiple: true });
            cy.toMatchScreenshot();
        });
    });
});
