import "html-validate/jest";
import { shallowMount } from "@vue/test-utils";
import { config } from "../../config";
import FLoader from "./FLoader.vue";

describe("FLoader", () => {
    it("should not have overlay by default", () => {
        const wrapper = shallowMount(FLoader, {
            props: { overlay: false, show: false },
            global: {
                stubs: ["teleport"],
            },
        });
        expect(wrapper.find(".loader--overlay").exists()).toBeFalsy();
    });

    it("should show overlay", () => {
        const wrapper = shallowMount(FLoader, {
            props: { overlay: true, show: false },
            global: {
                stubs: ["teleport"],
            },
        });
        expect(wrapper.get(".loader--overlay")).toBeTruthy();
    });

    it("should have text by default", () => {
        const wrapper = shallowMount(FLoader, {
            props: { overlay: true, show: false },
            global: {
                stubs: ["teleport"],
            },
        });
        expect(wrapper.html()).toMatchSnapshot();
    });

    it("should be able to specify text", () => {
        const wrapper = shallowMount(FLoader, {
            props: { show: false },
            slots: { default: `Loading...` },
            global: {
                stubs: ["teleport"],
            },
        });
        expect(wrapper.get(".loader__wait-text")).toBeTruthy();
    });

    it("should show the specified text", () => {
        const wrapper = shallowMount(FLoader, {
            props: { show: true },
            slots: { default: `Loading...` },
            global: {
                stubs: ["teleport"],
            },
        });
        expect(wrapper.get(".loader__wait-text")).toBeTruthy();
    });

    it("should show loading text in english", () => {
        const wrapper = shallowMount(FLoader, {
            props: { show: true, language: "en" },
            global: {
                stubs: ["teleport"],
            },
        });
        expect(wrapper.get(".loader__wait-text").text()).toBe("Please wait");
    });
});

describe("props", () => {
    describe("teleport", () => {
        it("should teleport config.teleportTarget by default", () => {
            expect.assertions(1);
            config.teleportTarget = "#selector";
            const wrapper = shallowMount(FLoader, {
                props: { show: true },
                global: {
                    stubs: {
                        teleport: {
                            props: ["to", "disabled"],
                            template: "{{ to }}",
                        },
                    },
                },
            });
            expect(wrapper.text()).toBe("#selector");
        });

        it("should teleport to target set by prop", () => {
            expect.assertions(1);
            config.teleportTarget = "#selector";
            const wrapper = shallowMount(FLoader, {
                props: { show: true, teleport: "#overriden" },
                global: {
                    stubs: {
                        teleport: {
                            props: ["to", "disabled"],
                            template: "{{ to }}",
                        },
                    },
                },
            });
            expect(wrapper.text()).toBe("#overriden");
        });
    });
});

describe("html-validate", () => {
    it.each`
        html
        ${"<f-loader></f-loader>"}
        ${"<f-loader>Loader</f-loader>"}
        ${"<f-loader><template> Read more about FLoader</template></f-loader>"}
    `("$html should be valid", ({ html }) => {
        expect.assertions(1);

        expect(html).toHTMLValidate();
    });

    it.each`
        html
        ${"<f-loader><div></div></f-loader>"}
        ${"<f-loader><p></p></f-loader>"}
        ${"<f-loader><button></button></f-loader>"}
    `("$html should be invalid", ({ html }) => {
        expect.assertions(3);
        let catchedError;

        try {
            expect(html).toHTMLValidate();
        } catch (error) {
            catchedError = error;
        } finally {
            expect(catchedError).toBeDefined();
            expect(catchedError).toMatchSnapshot();
        }
    });
});
