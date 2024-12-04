import { defineComponent } from "vue";
import { SizeWrapper } from "@fkui/test-utils/vue";
import { FIcon } from "../../components/FIcon";

const Viewport = {
    DESKTOP: [1024, 600] as const,
    MOBILE: [639, 600] as const,
};

const TestComponent = defineComponent({
    template: /* HTML */ `
        <div id="wrapper" style="padding: 1rem">
            <div style="border: 1px dashed hotpink;">
                <a class="entrypoint" href="#">
                    Ansök om hundbidrag<span class="sr-only">
                        Till e-tjänsten</span
                    >
                    <f-icon name="arrow-right"></f-icon>
                </a>
            </div>
        </div>
    `,
    components: {
        FIcon,
        SizeWrapper,
    },
});

it("should match visual regression (desktop)", () => {
    cy.viewport(...Viewport.DESKTOP);
    cy.mount(TestComponent);
    cy.get("#wrapper").toMatchScreenshot();
});

it("should match visual regression (mobile)", () => {
    cy.viewport(...Viewport.MOBILE);
    cy.mount(TestComponent);
    cy.get("#wrapper").toMatchScreenshot();
});
