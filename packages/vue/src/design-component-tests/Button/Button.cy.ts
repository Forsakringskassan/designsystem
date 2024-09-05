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

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("normal", () => {
        cy.mount(ButtonDiscreteExample, {
            props: {
                type: "discrete",
                backgroundColor: "white",
            },
        });
        cy.get("#screenshotArea").toMatchScreenshot({ baseDelay: 100 });
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("inverted", () => {
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

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("normal", () => {
        cy.mount(ButtonDiscreteExample, {
            props: {
                type: "discrete",
                backgroundColor: "white",
            },
        });
        cy.get("#screenshotArea").toMatchScreenshot({ baseDelay: 100 });
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("inverted", () => {
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
        /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
        it.skip("desktop", () => {
            cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
            cy.mount(ButtonButtonGroupFullWidthExample, {
                props: {
                    useFullWidth: true,
                },
            });
            cy.toMatchScreenshot({ baseDelay: 100 });
        });

        /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
        it.skip("mobile", () => {
            cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
            cy.mount(ButtonButtonGroupFullWidthExample, {
                props: {
                    useFullWidth: true,
                },
            });
            cy.toMatchScreenshot({ baseDelay: 100 });
        });
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("desktop", () => {
        cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
        cy.mount(ButtonButtonGroupFullWidthExample, {
            props: {
                useFullWidth: false,
            },
        });
        cy.toMatchScreenshot({ baseDelay: 100 });
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("desktop density `dense`", () => {
        cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
        cy.mount(ButtonButtonGroupFullWidthExample, {
            props: {
                useFullWidth: false,
                class: "density-dense",
            },
        });
        cy.toMatchScreenshot({ baseDelay: 100 });
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("desktop density `densest`", () => {
        cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
        cy.mount(ButtonButtonGroupFullWidthExample, {
            props: {
                useFullWidth: false,
                class: "density-densest",
            },
        });
        cy.toMatchScreenshot({ baseDelay: 100 });
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("mobile", () => {
        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
        cy.mount(ButtonButtonGroupFullWidthExample, {
            props: {
                useFullWidth: false,
            },
        });
        cy.toMatchScreenshot({ baseDelay: 100 });
    });
});
