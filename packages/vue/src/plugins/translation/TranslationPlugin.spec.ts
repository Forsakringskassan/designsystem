import { defineComponent, h } from "vue";
import flushPromises from "flush-promises";
import { mount } from "@vue/test-utils";
import { TranslationPlugin } from "./TranslationPlugin";

const TestComponent = defineComponent({
    name: "TestComponent",
    render() {
        return h("div");
    },
});

it("should inject global method $t() when plugin is used", async () => {
    expect.assertions(2);

    const wrapper = mount(TestComponent, {
        global: {
            plugins: [TranslationPlugin],
        },
    });
    await flushPromises();

    expect(wrapper.vm.$t).toBeDefined();
    expect(wrapper.vm.$t("testKey", "Test default")).toBe("Test default");
});
