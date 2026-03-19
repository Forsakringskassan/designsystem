import { defineComponent } from "vue";
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
}): {
    ButtonComponent: ReturnType<typeof defineComponent>;
    resolve(): void;
    reject(): void;
} {
    const { iconLeft, iconRight, mobileFullWidth, tertiaryStyle, variant } =
        options ?? {};

    const testName = Cypress.currentTest.titlePath.join(" ");
    let resolve: () => void, reject: () => void;
    const promise = new Promise<void>((res, rej) => {
        resolve = res;
        reject = rej;
    });
    const ButtonComponent = defineComponent({
        template: /* HTML */ `
            <div id="background" style="background-color: lightgray;">
                <h1 class="heading--h5">${testName}</h1>
                <span>Size small, no spinner.</span>
                <p style="border: 1px dashed hotpink">
                    <f-button
                        id="sync-operation"
                        :variant="variant"
                        size="small"
                        :icon-left="iconLeft"
                        :iconRight="iconRight"
                        :mobile-full-width="mobileFullWidth"
                        :tertiary-style="tertiaryStyle"
                        @click="syncOperation"
                    >
                        {{buttonText}}
                    </f-button>
                </p>
                <span>Size small, with spinner.</span>
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
                <span>Size medium, no spinner.</span>
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
                <span>Size medium, with spinner.</span>
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
                <span>Size large, no spinner.</span>
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
                <span>Size large, with spinner.</span>
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
                buttonText: "Small",
            };
        },
        components: {
            FButton,
        },
        methods: {
            asyncOperation(): Promise<void> {
                return promise;
            },
            syncOperation(): void {
                this.buttonText = "OK";
            },
        },
    });

    return { ButtonComponent, resolve: resolve!, reject: reject! };
}

describe("Primary with spinner", () => {
    beforeEach(() => {
        cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
    });

    it("no icon", () => {
        const { ButtonComponent, resolve } = createComponent();
        cy.mount(ButtonComponent);
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.get("#background").toMatchScreenshot();
        cy.get("#button1 .button__spinner")
            .should("be.visible")
            .then(() => {
                resolve();
            });
    });

    it("icon left", () => {
        const { ButtonComponent, resolve } = createComponent({
            iconLeft: "bell",
        });
        cy.mount(ButtonComponent);
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.get("#background").toMatchScreenshot();
        cy.get("#button1 .button__spinner")
            .should("be.visible")
            .then(() => {
                resolve();
            });
    });

    it("icon right", () => {
        const { ButtonComponent, resolve } = createComponent({
            iconRight: "bell",
        });
        cy.mount(ButtonComponent);
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.get("#background").toMatchScreenshot();
        cy.get("#button1 .button__spinner")
            .should("be.visible")
            .then(() => {
                resolve();
            });
    });

    it("mobile full width", () => {
        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
        const { ButtonComponent, resolve } = createComponent({
            mobileFullWidth: true,
        });
        cy.mount(ButtonComponent);
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.get("#background").toMatchScreenshot();
        cy.get("#button1 .button__spinner")
            .should("be.visible")
            .then(() => {
                resolve();
            });
    });
});

describe("Secondary with spinner", () => {
    beforeEach(() => {
        cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
    });

    it("no icon", () => {
        const { ButtonComponent, resolve } = createComponent({
            variant: "secondary",
        });
        cy.mount(ButtonComponent);
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.get("#background").toMatchScreenshot();
        cy.get("#button1 .button__spinner")
            .should("be.visible")
            .then(() => {
                resolve();
            });
    });

    it("icon left", () => {
        const { ButtonComponent, resolve } = createComponent({
            variant: "secondary",
            iconLeft: "bell",
        });
        cy.mount(ButtonComponent);
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.get("#background").toMatchScreenshot();
        cy.get("#button1 .button__spinner")
            .should("be.visible")
            .then(() => {
                resolve();
            });
    });

    it("icon right", () => {
        const { ButtonComponent, resolve } = createComponent({
            variant: "secondary",
            iconRight: "bell",
        });
        cy.mount(ButtonComponent);
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.get("#background").toMatchScreenshot();
        cy.get("#button1 .button__spinner")
            .should("be.visible")
            .then(() => {
                resolve();
            });
    });

    it("mobile full width", () => {
        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
        const { ButtonComponent, resolve } = createComponent({
            variant: "secondary",
            mobileFullWidth: true,
        });
        cy.mount(ButtonComponent);
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.get("#background").toMatchScreenshot();
        cy.get("#button1 .button__spinner")
            .should("be.visible")
            .then(() => {
                resolve();
            });
    });
});

describe("Tertiary with spinner", () => {
    beforeEach(() => {
        cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
    });

    it("no icon", () => {
        const { ButtonComponent, resolve } = createComponent({
            variant: "tertiary",
        });
        cy.mount(ButtonComponent);
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.get("#background").toMatchScreenshot();
        cy.get("#button1 .button__spinner")
            .should("be.visible")
            .then(() => {
                resolve();
            });
    });

    it("icon left", () => {
        const { ButtonComponent, resolve } = createComponent({
            variant: "tertiary",
            iconLeft: "bell",
        });
        cy.mount(ButtonComponent);
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.get("#background").toMatchScreenshot();
        cy.get("#button1 .button__spinner")
            .should("be.visible")
            .then(() => {
                resolve();
            });
    });

    it("icon right", () => {
        const { ButtonComponent, resolve } = createComponent({
            variant: "tertiary",
            iconRight: "bell",
        });
        cy.mount(ButtonComponent);
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.get("#background").toMatchScreenshot();
        cy.get("#button1 .button__spinner")
            .should("be.visible")
            .then(() => {
                resolve();
            });
    });

    it("mobile full width", () => {
        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
        const { ButtonComponent, resolve } = createComponent({
            variant: "tertiary",
            mobileFullWidth: true,
        });
        cy.mount(ButtonComponent);
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.get("#background").toMatchScreenshot();
        cy.get("#button1 .button__spinner")
            .should("be.visible")
            .then(() => {
                resolve();
            });
    });

    it("black", () => {
        const { ButtonComponent, resolve } = createComponent({
            variant: "tertiary",
            tertiaryStyle: "black",
        });
        cy.mount(ButtonComponent);
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.get("#background").toMatchScreenshot();
        cy.get("#button1 .button__spinner")
            .should("be.visible")
            .then(() => {
                resolve();
            });
    });

    it("inverted", () => {
        const { ButtonComponent, resolve } = createComponent({
            variant: "tertiary",
            tertiaryStyle: "inverted",
        });
        cy.mount(ButtonComponent);
        cy.get("#button1").click();
        cy.get("#button2").click();
        cy.get("#button3").click();
        cy.get("#background").toMatchScreenshot();
        cy.get("#button1 .button__spinner")
            .should("be.visible")
            .then(() => {
                resolve();
            });
    });
});

describe("Promises", () => {
    it("should remove spinner when resolved", () => {
        const { ButtonComponent, resolve } = createComponent();
        cy.mount(ButtonComponent);

        cy.get("#button1 .button__spinner").should("not.exist");
        cy.get("#button1").click();
        cy.get("#button1 .button__spinner")
            .should("be.visible")
            .then(() => {
                resolve();
            });
        cy.get("#button1 .button__spinner").should("not.exist");
    });

    it("should remove spinner when rejected", () => {
        cy.on("uncaught:exception", (err, _runnable) => {
            if (
                err.message.includes(
                    "It was caused by an unhandled promise rejection.",
                )
            ) {
                return false;
            }
        });

        const { ButtonComponent, reject } = createComponent();
        cy.mount(ButtonComponent);

        cy.get("#button1 .button__spinner").should("not.exist");
        cy.get("#button1").click();
        cy.get("#button1 .button__spinner")
            .should("be.visible")
            .then(() => {
                reject();
            });
        cy.get("#button1 .button__spinner").should("not.exist");
    });

    it("should handle synchronous operation without promise", () => {
        const { ButtonComponent } = createComponent();
        cy.mount(ButtonComponent);

        cy.get("#sync-operation .button__spinner").should("not.exist");
        cy.get("#sync-operation").click();
        cy.get("#sync-operation .button__spinner").should("not.exist");
        cy.get("#sync-operation").should("contain.text", "OK");
    });
});
