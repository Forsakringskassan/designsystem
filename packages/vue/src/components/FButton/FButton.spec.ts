import { shallowMount } from "@vue/test-utils";
import FButton from "./FButton.vue";

describe("props", () => {
    it("type prop should set type attribute on button element", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FButton, {
            props: {
                type: "submit",
            },
        });
        const button = wrapper.get("button");
        expect(button.attributes("type")).toBe("submit");
    });
});
