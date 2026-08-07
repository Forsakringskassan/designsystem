import { defineComponent, h } from "vue";
import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import { TranslationPlugin } from "./translation-plugin";

const TestComponent = defineComponent({
    name: "TestComponent",
    render() {
        return h("div");
    },
});

it("should inject global method $t() when plugin is used", () => {
    expect.assertions(2);

    const wrapper = mount(TestComponent, {
        global: {
            plugins: [TranslationPlugin],
        },
    });

    expect(wrapper.vm.$t).toBeDefined();
    expect(wrapper.vm.$t("testKey", "Test default")).toBe("Test default");
});
