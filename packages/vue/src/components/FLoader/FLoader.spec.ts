import "html-validate/vitest";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { config } from "../../config";
import FLoader from "./FLoader.vue";

describe("FLoader", () => {
    it("should not have overlay by default", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FLoader, {
            props: { overlay: false, show: false },
            global: {
                stubs: ["teleport"],
            },
        });
        expect(wrapper.find(".loader--overlay").exists()).toBeFalsy();
    });

    it("should show overlay", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FLoader, {
            props: { overlay: true, show: false },
            global: {
                stubs: ["teleport"],
            },
        });

        expect(wrapper.get(".loader--overlay")).toBeTruthy();
    });

    it("should show delay", () => {
        expect.assertions(2);
        const wrapper = shallowMount(FLoader, {
            props: { delay: true },
            global: {
                stubs: ["teleport"],
            },
        });

        expect(wrapper.get(".loader.loader--delay")).toBeTruthy();
        expect(wrapper.get(".loader__wait-text.loader--delay")).toBeTruthy();
    });

    it("should have text by default", () => {
        expect.assertions(3);
        const wrapper = shallowMount(FLoader, {
            props: { show: true },
            global: {
                stubs: ["teleport"],
            },
        });

        expect(wrapper.get(".loader__wait-text")).toBeTruthy();
        expect(wrapper.get(".loader__wait-text").isVisible()).toBeTruthy();
        expect(wrapper.get(".loader__wait-text").text()).toBe("Vänligen vänta");
    });

    it("should be able to specify text", () => {
        expect.assertions(3);
        const wrapper = shallowMount(FLoader, {
            props: { show: false },
            slots: { default: `Loading...` },
            global: {
                stubs: ["teleport"],
            },
        });

        expect(wrapper.get(".loader__wait-text")).toBeTruthy();
        expect(wrapper.get(".loader__wait-text").text()).toBe("Loading...");
        expect(wrapper.get(".loader").isVisible()).toBeFalsy();
    });

    it("should show the specified text", () => {
        expect.assertions(3);
        const wrapper = shallowMount(FLoader, {
            props: { show: true },
            slots: { default: `Loading...` },
            global: {
                stubs: ["teleport"],
            },
        });

        expect(wrapper.get(".loader__wait-text")).toBeTruthy();
        expect(wrapper.get(".loader__wait-text").text()).toBe("Loading...");
        expect(wrapper.get(".loader").isVisible()).toBeTruthy();
    });

    it("should show loading text in english", () => {
        expect.assertions(1);
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
    it("should be valid", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-loader></f-loader>
            <f-loader>Loader</f-loader>
            <f-loader>
                <template> Read more about FLoader </template>
            </f-loader>
        `;
        await expect(markup).toBeValid();
    });

    it("should be invalid", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-loader> <div></div> </f-loader>
            <f-loader> <p></p> </f-loader>
            <f-loader> <button type="button">button</button> </f-loader>
        `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: <div> element is not permitted as content under <f-loader> (element-permitted-content)
            1 |
          > 2 |             <f-loader> <div></div> </f-loader>
              |                         ^^^
            3 |             <f-loader> <p></p> </f-loader>
            4 |             <f-loader> <button type="button">button</button> </f-loader>
            5 |
          Selector: f-loader:nth-child(1) > div
          error: <p> element is not permitted as content under <f-loader> (element-permitted-content)
            1 |
            2 |             <f-loader> <div></div> </f-loader>
          > 3 |             <f-loader> <p></p> </f-loader>
              |                         ^
            4 |             <f-loader> <button type="button">button</button> </f-loader>
            5 |
          Selector: f-loader:nth-child(2) > p"
        `);
    });
});
