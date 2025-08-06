import { type DefineComponent, defineComponent } from "vue";
import FButton from "./FButton.vue";

const VIEWPORT = {
    DESKTOP: { width: 700, height: 600 },
    MOBILE: { width: 450, height: 600 },
};

function createComponent(options?: {
    variant?: string;
    iconLeft?: string;
    iconRight?: string;
    mobileFullWidth?: boolean;
    tertiaryStyle?: string;
}): DefineComponent {
    const { variant, iconLeft, iconRight, mobileFullWidth, tertiaryStyle } =
        options ?? {};

    return defineComponent({
        template: /* HTML */ `
            <div id="background" style="background-color: lightgray;">
                <p>
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
                        Text
                    </f-button>
                </p>
                <p>
                    <f-button
                        id="button2"
                        :variant="variant"
                        :icon-left="iconLeft"
                        :icon-right="iconRight"
                        :mobile-full-width="mobileFullWidth"
                        :tertiary-style="tertiaryStyle"
                        @click="asyncOperation"
                    >
                        Text
                    </f-button>
                </p>
                <p>
                    <f-button
                        id="button3"
                        :variant="variant"
                        size="large"
                        :icon-left="iconLeft"
                        :icon-right="iconRight"
                        :tertiary-style="tertiaryStyle"
                        @click="asyncOperation"
                    >
                        Text
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
        cy.mount(createComponent());
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("icon left", () => {
        cy.mount(createComponent({ iconLeft: "bell" }));
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("icon right", () => {
        cy.mount(createComponent({ iconRight: "bell" }));
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("mobile full width", () => {
        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
        cy.mount(createComponent({ mobileFullWidth: true }));
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
        cy.mount(createComponent({ variant: "secondary" }));
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("icon left", () => {
        cy.mount(createComponent({ variant: "secondary", iconLeft: "bell" }));
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("icon right", () => {
        cy.mount(createComponent({ variant: "secondary", iconRight: "bell" }));
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("mobile full width", () => {
        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
        cy.mount(
            createComponent({ variant: "secondary", mobileFullWidth: true }),
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
        cy.mount(createComponent({ variant: "tertiary" }));
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("icon left", () => {
        cy.mount(createComponent({ variant: "tertiary", iconLeft: "bell" }));
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("icon right", () => {
        cy.mount(createComponent({ variant: "tertiary", iconRight: "bell" }));
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("mobile full width", () => {
        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
        cy.mount(
            createComponent({ variant: "tertiary", mobileFullWidth: true }),
        );
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("black", () => {
        cy.mount(
            createComponent({ variant: "tertiary", tertiaryStyle: "black" }),
        );
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });

    it("inverted", () => {
        cy.mount(
            createComponent({ variant: "tertiary", tertiaryStyle: "inverted" }),
        );
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.tick(250);
        cy.get("#background").toMatchScreenshot();
    });
});
