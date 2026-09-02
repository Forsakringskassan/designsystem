import { type DefineComponent, defineComponent } from "vue";
import FButton from "./FButton.vue";
import FButtonFocusVisualTest from "./examples/FButtonFocusVisualTest.vue";

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
    const { iconLeft, iconRight, mobileFullWidth, tertiaryStyle } =
        options ?? {};

    const variant = options?.variant ?? "primary";

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
                        size="medium"
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

    it("should have correct focus style (visual)", () => {
        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
        cy.mount(FButtonFocusVisualTest, { props: { variant: "primary" } });
        cy.get("button").eq(0).realClick();
        cy.focused().realPress("Tab");
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

    it("should have correct focus style (visual)", () => {
        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
        cy.mount(FButtonFocusVisualTest, { props: { variant: "secondary" } });
        cy.get("button").eq(0).realClick();
        cy.focused().realPress("Tab");
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

    it("should have correct focus style (visual)", () => {
        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
        cy.mount(FButtonFocusVisualTest, { props: { variant: "tertiary" } });
        cy.get("button").eq(0).realClick();
        cy.focused().realPress("Tab");
        cy.get("#background").toMatchScreenshot();
    });

    describe("muted", () => {
        it("no icon", () => {
            cy.mount(
                createComponent({
                    variant: "tertiary",
                    tertiaryStyle: "muted",
                }),
            );
            cy.get("#background").toMatchScreenshot();
        });

        it("should have correct focus style (visual)", () => {
            cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
            cy.mount(FButtonFocusVisualTest, {
                props: { variant: "tertiary", tertiaryStyle: "muted" },
            });
            cy.get("button").eq(0).realClick();
            cy.focused().realPress("Tab");
            cy.get("#background").toMatchScreenshot();
        });
    });

    // `tertiary-style="black"` is deprecated since v6.49.0, replaced by `muted`.
    it("black", () => {
        cy.mount(
            createComponent({ variant: "tertiary", tertiaryStyle: "black" }),
        );
        cy.get("#background").toMatchScreenshot();
    });

    describe("inverted", () => {
        it("no icon", () => {
            cy.mount(
                createComponent({
                    variant: "tertiary",
                    tertiaryStyle: "inverted",
                }),
            );
            cy.get("#background").toMatchScreenshot();
        });

        it("should have correct focus style (visual)", () => {
            cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
            cy.mount(FButtonFocusVisualTest, {
                props: { variant: "tertiary", tertiaryStyle: "inverted" },
            });
            cy.get("button").eq(0).realClick();
            cy.focused().realPress("Tab");
            cy.get("#background").toMatchScreenshot();
        });
    });
});

it("FButton should not show focus style on click (visual)", () => {
    cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
    cy.mount(FButtonFocusVisualTest, { props: { variant: "primary" } });
    cy.get("button").eq(1).realClick();
    cy.get("#background").toMatchScreenshot();
});
