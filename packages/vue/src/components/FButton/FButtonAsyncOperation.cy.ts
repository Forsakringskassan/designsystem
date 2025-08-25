import { type DefineComponent, defineComponent } from "vue";
import FButton from "./FButton.vue";

const VIEWPORT = {
    DESKTOP: { width: 700, height: 600 },
    MOBILE: { width: 450, height: 600 },
};

function createComponent(options?: {
    testName: string;
    iconLeft?: string;
    iconRight?: string;
    mobileFullWidth?: boolean;
    tertiaryStyle?: string;
    variant?: string;
}): DefineComponent {
    const {
        iconLeft,
        iconRight,
        mobileFullWidth,
        tertiaryStyle,
        testName,
        variant,
    } = options ?? {};

    return defineComponent({
        template: /* HTML */ `
            <div id="background" style="background-color: lightgray;">
                <span>${testName}</span>
                <p style="border: 1px dashed hotpink">
                    <f-button
                        id="button1"
                        :variant="variant"
                        size="small"
                        :icon-left="iconLeft"
                        :iconRight="iconRight"
                        :mobile-full-width="mobileFullWidth"
                        :tertiary-style="tertiaryStyle"
                        @click="asyncOperation"
                    >
                        Small
                    </f-button>
                </p>
                <p style="border: 1px dashed hotpink">
                    <f-button
                        id="button2"
                        :variant="variant"
                        :icon-left="iconLeft"
                        :icon-right="iconRight"
                        :mobile-full-width="mobileFullWidth"
                        :tertiary-style="tertiaryStyle"
                        @click="asyncOperation"
                    >
                        Medium
                    </f-button>
                </p>
                <p style="border: 1px dashed hotpink">
                    <f-button
                        id="button3"
                        :variant="variant"
                        size="large"
                        :icon-left="iconLeft"
                        :icon-right="iconRight"
                        :tertiary-style="tertiaryStyle"
                        @click="asyncOperation"
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
        methods: {
            async asyncOperation(): Promise<void> {
                await new Promise((resolve) => setTimeout(resolve, 300));
            },
        },
    });
}

describe("Primary with spinner", () => {
    beforeEach(() => {
        cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
        cy.clock();
    });

    afterEach(() => {
        cy.clock().then((clock) => {
            clock.restore();
        });
    });

    it("text only", () => {
        cy.mount(
            createComponent({
                testName: `${Cypress.currentTest.titlePath.join(" ")}`,
            }),
        );
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("icon left", () => {
        cy.mount(
            createComponent({
                testName: `${Cypress.currentTest.titlePath.join(" ")}`,
                iconLeft: "bell",
            }),
        );
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("icon right", () => {
        cy.mount(
            createComponent({
                testName: `${Cypress.currentTest.titlePath.join(" ")}`,
                iconRight: "bell",
            }),
        );
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("mobile full width", () => {
        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
        cy.mount(
            createComponent({
                testName: `${Cypress.currentTest.titlePath.join(" ")}`,
                mobileFullWidth: true,
            }),
        );
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });
});

describe("Secondary with spinner", () => {
    beforeEach(() => {
        cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
        cy.clock();
    });

    afterEach(() => {
        cy.clock().then((clock) => {
            clock.restore();
        });
    });

    it("text only", () => {
        cy.mount(
            createComponent({
                testName: `${Cypress.currentTest.titlePath.join(" ")}`,
                variant: "secondary",
            }),
        );
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("icon left", () => {
        cy.mount(
            createComponent({
                testName: `${Cypress.currentTest.titlePath.join(" ")}`,
                variant: "secondary",
                iconLeft: "bell",
            }),
        );
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("icon right", () => {
        cy.mount(
            createComponent({
                testName: `${Cypress.currentTest.titlePath.join(" ")}`,
                variant: "secondary",
                iconRight: "bell",
            }),
        );
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("mobile full width", () => {
        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
        cy.mount(
            createComponent({
                testName: `${Cypress.currentTest.titlePath.join(" ")}`,
                variant: "secondary",
                mobileFullWidth: true,
            }),
        );
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });
});

describe("Tertiary with spinner", () => {
    beforeEach(() => {
        cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
        cy.clock();
    });

    afterEach(() => {
        cy.clock().then((clock) => {
            clock.restore();
        });
    });

    it("text only", () => {
        cy.mount(
            createComponent({
                testName: `${Cypress.currentTest.titlePath.join(" ")}`,
                variant: "tertiary",
            }),
        );
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("icon left", () => {
        cy.mount(
            createComponent({
                testName: `${Cypress.currentTest.titlePath.join(" ")}`,
                variant: "tertiary",
                iconLeft: "bell",
            }),
        );
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("icon right", () => {
        cy.mount(
            createComponent({
                testName: `${Cypress.currentTest.titlePath.join(" ")}`,
                variant: "tertiary",
                iconRight: "bell",
            }),
        );
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("mobile full width", () => {
        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
        cy.mount(
            createComponent({
                testName: `${Cypress.currentTest.titlePath.join(" ")}`,
                variant: "tertiary",
                mobileFullWidth: true,
            }),
        );
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("black", () => {
        cy.mount(
            createComponent({
                testName: `${Cypress.currentTest.titlePath.join(" ")}`,
                variant: "tertiary",
                tertiaryStyle: "black",
            }),
        );
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("inverted", () => {
        cy.mount(
            createComponent({
                testName: `${Cypress.currentTest.titlePath.join(" ")}`,
                variant: "tertiary",
                tertiaryStyle: "inverted",
            }),
        );
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });
});
