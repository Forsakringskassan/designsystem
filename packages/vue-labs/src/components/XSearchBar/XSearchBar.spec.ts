import { mount, VueWrapper } from "@vue/test-utils";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import XSearchBar from "./XSearchBar.vue";

function createWrapper(
    model: string = "",
): VueWrapper<InstanceType<typeof XSearchBar>> {
    return mount(XSearchBar, {
        props: { modelValue: model },
        attachTo: createPlaceholderInDocument(),
        global: {
            mocks: {
                $t: (key: string) => key,
            },
        },
    });
}

describe("XSearchBar", () => {
    it("should emit event for updating model", async () => {
        const wrapper = createWrapper();
        const input = wrapper.get("input");
        input.setValue("foo");
        await input.trigger("change");
        expect(wrapper.emitted("update:modelValue")![0][0]).toBe("foo");
    });

    it("should not emit changedValue event if value is not changed", async () => {
        const wrapper = createWrapper("foo");
        const input = wrapper.get(".x-search-bar");
        wrapper.get("input").setValue("foo");
        await input.trigger("change");
        expect(wrapper.emitted("changedValue")).toBeUndefined();
    });

    it("should emit changedValue when value is changed", async () => {
        const wrapper = createWrapper("foo");
        const input = wrapper.get(".x-search-bar");
        wrapper.get("input").setValue("bar");
        await input.trigger("change");
        expect(wrapper.emitted("changedValue")).toBeTruthy();
    });
});
