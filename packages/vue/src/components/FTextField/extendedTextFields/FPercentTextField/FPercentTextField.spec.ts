import "html-validate/vitest";
import { config, shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { ValidationPlugin } from "../../../../plugins";
import FPercentTextField from "./FPercentTextField.vue";

config.global.plugins = [ValidationPlugin];

describe("inputmode", () => {
    it("should have numeric as inputmode", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FPercentTextField);
        expect(wrapper.get("input").attributes("inputmode")).toBe("numeric");
    });

    it("should have decimal as inputmode", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FPercentTextField, {
            props: { decimals: 2 },
        });
        expect(wrapper.get("input").attributes("inputmode")).toBe("decimal");
    });
});
