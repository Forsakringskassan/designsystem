import { defineComponent } from "vue";
import FIcon from "./FIcon.vue";

describe("Visual forcedColor", () => {
    const forcedColorModes = ["none", "dark", "light"] as const;
    afterEach(() => {
        cy.forcedColors("none");
    });
    for (const mode of Object.values(forcedColorModes)) {
        it(`rotation 90, 180 and 270 degrees for mode, ${mode} (visual)`, () => {
            cy.forcedColors(mode);
            const TestComponent = defineComponent({
                components: { FIcon },
                template: /* HTML */ `
                    <div>
                        <f-icon name="pic" rotate="90"></f-icon>
                        <f-icon name="pic" rotate="180"></f-icon>
                        <f-icon name="pic" rotate="270"></f-icon>
                    </div>
                `,
            });
            cy.mount(TestComponent);
            cy.viewport(100, 100);
            cy.toMatchScreenshot();
        });
    }
});
describe("FIcon screenshot", () => {
    it("stacked icons (visual)", () => {
        const TestComponent = defineComponent({
            components: { FIcon },
            template: /* HTML */ `
                <div class="icon-stack">
                    <f-icon name="pdf"></f-icon>
                    <f-icon name="success"></f-icon>
                </div>
            `,
        });
        cy.mount(TestComponent);
        cy.viewport(50, 50);
        cy.toMatchScreenshot();
    });

    it("horizontal and vertical flip (visual)", () => {
        const TestComponent = defineComponent({
            components: { FIcon },
            template: /* HTML */ `
                <div>
                    <f-icon name="pic" flip="horizontal"></f-icon>
                    <f-icon name="pic" flip="vertical"></f-icon>
                </div>
            `,
        });
        cy.mount(TestComponent);
        cy.viewport(100, 100);
        cy.toMatchScreenshot();
    });

    it("icon inside circle (visual)", () => {
        const TestComponent = defineComponent({
            components: { FIcon },
            template: /* HTML */ `
                <div>
                    <div>
                        <div class="icon-stack icon-stack--circle">
                            <f-icon name="circle"></f-icon>
                            <f-icon name="success"></f-icon>
                        </div>
                        <div class="icon-stack icon-stack--circle">
                            <f-icon name="circle"></f-icon>
                            <f-icon name="bell"></f-icon>
                        </div>
                    </div>
                    <div>
                        <div class="icon-stack icon-stack--circle-bottom">
                            <f-icon name="circle"></f-icon>
                            <f-icon name="success"></f-icon>
                        </div>
                        <div class="icon-stack icon-stack--circle-bottom">
                            <f-icon name="circle"></f-icon>
                            <f-icon name="bell"></f-icon>
                        </div>
                    </div>
                </div>
            `,
        });
        cy.mount(TestComponent);
        cy.viewport(170, 170);
        cy.toMatchScreenshot();
    });
});
