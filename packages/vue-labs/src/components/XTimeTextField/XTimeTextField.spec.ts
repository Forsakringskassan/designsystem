import { ValidationPlugin } from "@fkui/vue";
import { config, mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import XTimeTextField from "./XTimeTextField.vue";

config.global.plugins = [ValidationPlugin];

describe("snapshots", () => {
    it("should match snapshot with label and input", () => {
        expect.assertions(1);
        const wrapper = mount(XTimeTextField, {
            attrs: {
                id: "myField",
            },
            slots: {
                default: "My hours minutes field",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe("v-model", () => {
    it("should update model with correct parse number value from time value input", async () => {
        expect.assertions(1);
        const onUpdate = vi.fn();
        const wrapper = mount(XTimeTextField, {
            props: {
                "onUpdate:modelValue": onUpdate,
            },
        });
        const input = wrapper.get("input");
        await input.setValue("12:00");
        await input.trigger("blur");
        expect(onUpdate).toHaveBeenCalledWith(720);
    });
});

describe("format", () => {
    it("should format to correct time value", async () => {
        expect.assertions(1);
        const wrapper = mount(XTimeTextField);
        const input = wrapper.get("input");
        await input.setValue("1 2:35");
        await input.trigger("blur");
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
        await wrapper.vm.$nextTick();
        expect(input.element.value).toBe("12:35");
    });
});
