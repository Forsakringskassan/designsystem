import "html-validate/jest";
import { mount, VueWrapper } from "@vue/test-utils";
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
