import ButtonButtonGroupFullWidthExample from "./examples/ButtonButtonGroupFullWidthExample.vue";
import ButtonDiscreteExample from "./examples/ButtonDiscreteExample.vue";

const VIEWPORT = {
    DESKTOP: { width: 700, height: 600 },
    MOBILE: { width: 450, height: 600 },
};

describe("discrete desktop", () => {
    beforeEach(() => {
        cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
    });

    it("normal", () => {
        cy.mount(ButtonDiscreteExample, {
            props: {
                type: "discrete",
                backgroundColor: "white",
            },
        });
        cy.get("#screenshotArea").toMatchScreenshot({ baseDelay: 100 });
    });

    it("inverted", () => {
        cy.mount(ButtonDiscreteExample, {
            props: {
                type: "discrete-inverted",
                backgroundColor: "grey",
            },
        });
        cy.get("#screenshotArea").toMatchScreenshot({ baseDelay: 100 });
    });
});

describe("discrete mobile", () => {
    beforeEach(() => {
        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
    });

    it("normal", () => {
        cy.mount(ButtonDiscreteExample, {
            props: {
                type: "discrete",
                backgroundColor: "white",
            },
        });
        cy.get("#screenshotArea").toMatchScreenshot({ baseDelay: 100 });
    });

    it("inverted", () => {
        cy.mount(ButtonDiscreteExample, {
            props: {
                type: "discrete-inverted",
                backgroundColor: "grey",
            },
        });
        cy.get("#screenshotArea").toMatchScreenshot({ baseDelay: 100 });
    });
});

describe("button-group ", () => {
    describe("button--full-width", () => {
        it("desktop", () => {
            cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
            cy.mount(ButtonButtonGroupFullWidthExample, {
                props: {
                    useFullWidth: true,
                },
            });
            cy.toMatchScreenshot({ baseDelay: 100 });
        });

        it("mobile", () => {
            cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
            cy.mount(ButtonButtonGroupFullWidthExample, {
                props: {
                    useFullWidth: true,
                },
            });
            cy.toMatchScreenshot({ baseDelay: 100 });
        });
    });

    it("desktop", () => {
        cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
        cy.mount(ButtonButtonGroupFullWidthExample, {
            props: {
                useFullWidth: false,
            },
        });
        cy.toMatchScreenshot({ baseDelay: 100 });
    });

    it("desktop density `dense`", () => {
        cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
        cy.mount(ButtonButtonGroupFullWidthExample, {
            props: {
                useFullWidth: false,
                class: "density-dense",
            },
        });
        cy.toMatchScreenshot({ baseDelay: 100 });
    });

    it("desktop density `densest`", () => {
        cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
        cy.mount(ButtonButtonGroupFullWidthExample, {
            props: {
                useFullWidth: false,
                class: "density-densest",
            },
        });
        cy.toMatchScreenshot({ baseDelay: 100 });
    });

    it("mobile", () => {
        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
        cy.mount(ButtonButtonGroupFullWidthExample, {
            props: {
                useFullWidth: false,
            },
        });
        cy.toMatchScreenshot({ baseDelay: 100 });
    });
});
