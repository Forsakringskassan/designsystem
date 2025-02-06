import { type DefineComponent, defineComponent } from "vue";
import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import { FBadgePageObject } from "../../cypress";
import FBadge from "./FBadge.vue";

function createComponent(inverted: boolean): DefineComponent {
    return defineComponent({
        template: /* HTML */ `
            <div data-test="badges">
                <f-badge data-test="badge-default" :inverted="${inverted}">
                    Lorem ipsum dolor sit amet
                </f-badge>

                <f-badge status="warning" :inverted="${inverted}">
                    Lorem ipsum dolor sit amet
                </f-badge>

                <f-badge status="error" :inverted="${inverted}">
                    Lorem ipsum dolor sit amet
                </f-badge>

                <f-badge status="success" :inverted="${inverted}">
                    Lorem ipsum dolor sit amet
                </f-badge>

                <f-badge status="info" :inverted="${inverted}">
                    Lorem ipsum dolor sit amet
                </f-badge>
            </div>
        `,
        components: {
            FBadge,
        },
    });
}

describe("FBadge", () => {
    it("should provide a page object that can access any necessary elements", () => {
        cy.mount(createComponent(false));
        const badge = new FBadgePageObject('[data-test="badge-default"]');
        badge.el().should("contain.text", "Lorem ipsum dolor sit amet");
        badge.status().should("be.equal", "default");
        badge.isInverted().should("be.equal", false);
    });

    it("should provide a page object that can access any necessary inverted elements", () => {
        cy.mount(createComponent(true));
        const badge = new FBadgePageObject('[data-test="badge-default"]');
        badge.el().should("contain.text", "Lorem ipsum dolor sit amet");
        badge.status().should("be.equal", "default");
        badge.isInverted().should("be.equal", true);
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    describe.skip("screenshots normal viewport", () => {
        beforeEach(() => {
            cy.viewport(1024, 600);
        });

        it("Badges", () => {
            cy.mount(createComponent(false));
            cy.get('[data-test="badges"]').scrollIntoView();
            cy.get('[data-test="badges"]').toMatchScreenshot(0.05);
        });

        it("Badges inverted", () => {
            cy.mount(createComponent(true));
            cy.get('[data-test="badges"]').scrollIntoView();
            cy.get('[data-test="badges"]').toMatchScreenshot(0.05);
        });
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    describe.skip("screenshots narrow viewport", () => {
        beforeEach(() => {
            cy.viewport(200, 700);
        });

        it("Badges text on multiple lines", () => {
            cy.mount(createComponent(false));
            cy.get('[data-test="badges"]').scrollIntoView();
            cy.get('[data-test="badges"]').toMatchScreenshot(0.05);
        });

        it("Badges inverted text on multiple lines", () => {
            cy.mount(createComponent(true));
            cy.get('[data-test="badges"]').scrollIntoView();
            cy.get('[data-test="badges"]').toMatchScreenshot(0.05);
        });
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    describe.skip("density", () => {
        const DensityComponent = defineComponent({
            template: /* HTML */ `
                <density-wrapper>
                    <f-badge> Text </f-badge>
                    <f-badge status="info"> Text </f-badge>
                </density-wrapper>
            `,
            components: {
                DensityWrapper,
                FBadge,
            },
        });

        it(`should be densified`, () => {
            cy.viewport(densityWrapperWidth, densityWrapperHeight);
            cy.mount(DensityComponent);
            cy.toMatchScreenshot();
        });
    });
});
