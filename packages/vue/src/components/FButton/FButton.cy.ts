import { type DefineComponent, defineComponent } from "vue";
import FButton from "./FButton.vue";

const VIEWPORT = {
    DESKTOP: { width: 700, height: 600 },
    MOBILE: { width: 450, height: 600 },
};

function createComponent(options?: {
    iconLeft?: string;
    iconRight?: string;
    mobileFullWidth?: boolean;
    tertiaryStyle?: string;
    variant?: string;
}): DefineComponent {
    const { iconLeft, iconRight, mobileFullWidth, tertiaryStyle, variant } =
        options ?? {};

    const testName = Cypress.currentTest.titlePath.join(" ");
    return defineComponent({
        template: /* HTML */ `
            <div id="background" style="background-color: lightgray;">
                <span>${testName}</span>
                <p style="border: 1px dashed hotpink">
                    <f-button
                        :variant="variant"
                        size="small"
                        :icon-left="iconLeft"
                        :iconRight="iconRight"
                        :mobile-full-width="mobileFullWidth"
                        :tertiary-style="tertiaryStyle"
                    >
                        Small
                    </f-button>
                </p>
                <p style="border: 1px dashed hotpink">
                    <f-button
                        :variant="variant"
                        :icon-left="iconLeft"
                        :icon-right="iconRight"
                        :mobile-full-width="mobileFullWidth"
                        :tertiary-style="tertiaryStyle"
                    >
                        Medium
                    </f-button>
                </p>
                <p style="border: 1px dashed hotpink">
                    <f-button
                        :variant="variant"
                        size="large"
                        :icon-left="iconLeft"
                        :icon-right="iconRight"
                        :tertiary-style="tertiaryStyle"
                    >
                        Large
                    </f-button>
                </p>
            </div>
        `,
        data() {
            return {
                variant,
                iconLeft,
                iconRight,
                mobileFullWidth,
                tertiaryStyle,
            };
        },
        components: {
            FButton,
        },
    });
}

describe("Primary", () => {
    beforeEach(() => {
        cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
    });

    it("no icon", () => {
        cy.mount(createComponent());
        cy.get("#background").toMatchScreenshot();
    });

    it("icon left", () => {
        cy.mount(createComponent({ iconLeft: "bell" }));
        cy.get("#background").toMatchScreenshot();
    });

    it("icon right", () => {
        cy.mount(createComponent({ iconRight: "bell" }));
        cy.get("#background").toMatchScreenshot();
    });

    it("mobile full width", () => {
        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
        cy.mount(createComponent({ mobileFullWidth: true }));
        cy.get("#background").toMatchScreenshot();
    });
});

describe("Secondary", () => {
    beforeEach(() => {
        cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
    });

    it("no icon", () => {
        cy.mount(createComponent({ variant: "secondary" }));
        cy.get("#background").toMatchScreenshot();
    });

    it("icon left", () => {
        cy.mount(createComponent({ variant: "secondary", iconLeft: "bell" }));
        cy.get("#background").toMatchScreenshot();
    });

    it("icon right", () => {
        cy.mount(createComponent({ variant: "secondary", iconRight: "bell" }));
        cy.get("#background").toMatchScreenshot();
    });

    it("mobile full width", () => {
        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
        cy.mount(
            createComponent({ variant: "secondary", mobileFullWidth: true }),
        );
        cy.get("#background").toMatchScreenshot();
    });
});

describe("Tertiary", () => {
    beforeEach(() => {
        cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
    });

    it("no icon", () => {
        cy.mount(createComponent({ variant: "tertiary" }));
        cy.get("#background").toMatchScreenshot();
    });

    it("icon left", () => {
        cy.mount(createComponent({ variant: "tertiary", iconLeft: "bell" }));
        cy.get("#background").toMatchScreenshot();
    });

    it("icon right", () => {
        cy.mount(createComponent({ variant: "tertiary", iconRight: "bell" }));
        cy.get("#background").toMatchScreenshot();
    });

    it("mobile full width", () => {
        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
        cy.mount(
            createComponent({ variant: "tertiary", mobileFullWidth: true }),
        );
        cy.get("#background").toMatchScreenshot();
    });

    it("black", () => {
        cy.mount(
            createComponent({ variant: "tertiary", tertiaryStyle: "black" }),
        );
        cy.get("#background").toMatchScreenshot();
    });

    it("inverted", () => {
        cy.mount(
            createComponent({ variant: "tertiary", tertiaryStyle: "inverted" }),
        );
        cy.get("#background").toMatchScreenshot();
    });
});
