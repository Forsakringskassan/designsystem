import "html-validate/vitest";
import { VueWrapper, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { ValidationPlugin } from "../../../../plugins";
import FPercentTextField from "./FPercentTextField.vue";

function createWrapper(props = {}): VueWrapper {
    return mount(FPercentTextField, {
        props: { ...props },
        global: {
            plugins: [ValidationPlugin],
        },
    });
}

describe("inputmode", () => {
    it("should have numeric as inputmode", () => {
        const wrapper = createWrapper();
        expect(wrapper.get("input").attributes("inputmode")).toBe("numeric");
    });

    it("should have decimal as inputmode", () => {
        const wrapper = createWrapper({ decimals: 2 });
        expect(wrapper.get("input").attributes("inputmode")).toBe("decimal");
    });
});
