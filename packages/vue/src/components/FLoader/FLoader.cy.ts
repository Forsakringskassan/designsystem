import { defineComponent } from "vue";
import { FLoaderPageObject } from "../../cypress";
import FLoader from "./FLoader.vue";

const loader = new FLoaderPageObject();

describe("FLoader", () => {
    it("should have a page object that can access any necessary elements", () => {
        cy.mount(FLoader, { props: { show: true } });
        loader.el().should("be.visible");
        loader.waitText().should("have.trimmedText", "Vänligen vänta");
    });

    it("should use custom text if provided", () => {
        cy.mount(FLoader, {
            props: {
                show: true,
            },
            slots: {
                default: "Lorem ipsum dolor sit amet",
            },
        });
        loader.el().should("be.visible");
        loader.waitText().should("contain.text", "Lorem ipsum dolor sit amet");
    });

    it("should be displayed after a 1s when delay is enabled", () => {
        cy.mount(FLoader, {
            props: {
                show: true,
                overlay: true,
                delay: true,
            },
        });
        // eslint-disable-next-line cypress/no-unnecessary-waiting -- needed to acually wait. cy.clock() does not work with css-animations.
        cy.wait(500);
        loader.wrapper().should("not.be.visible");
        // eslint-disable-next-line cypress/no-unnecessary-waiting -- needed to acually wait. cy.clock() does not work with css-animations.
        cy.wait(1000);
        loader.wrapper().should("be.visible");
        loader.waitText().should("have.focus");
    });

    describe("Overlay Mode", () => {
        it("should have focus on loading text when opened", () => {
            cy.mount(FLoader, {
                props: {
                    show: true,
                    overlay: true,
                },
            });
            loader.wrapper().should("be.visible");
            loader.waitText().should("have.focus");
        });

        it("should restore focus after tooltip is closed", () => {
            const TestComponent = defineComponent({
                components: { FLoader },
                template: /* HTML */ `
                    <button type="button" @click="onClick">enable</button>
                    <f-loader :show overlay></f-loader>
                `,
                data() {
                    return {
                        show: false,
                    };
                },
                methods: {
                    onClick() {
                        this.show = true;
                        setTimeout(() => {
                            this.show = false;
                        }, 2000);
                    },
                },
            });
            cy.mount(TestComponent);
            cy.get("button").click();
            loader.wrapper().should("be.visible");
            loader.waitText().should("have.focus");
            cy.get("button").should("have.focus");
        });
    });

    describe("teleport", () => {
        // A teleported loader should be a direct child of element given in `config.teleportTarget`.
        const teleportedLoader = new FLoaderPageObject("#teleport > .loader");

        it("should use teleport if using `overlay`", () => {
            cy.mount(FLoader, {
                props: {
                    show: true,
                    overlay: true,
                },
            });
            teleportedLoader.el().should("exist");
        });

        it("should not use teleport if not using `overlay`", () => {
            cy.mount(FLoader, {
                props: {
                    show: true,
                },
            });
            teleportedLoader.el().should("not.exist");
        });
    });
});
