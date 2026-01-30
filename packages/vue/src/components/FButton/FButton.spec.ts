import { shallowMount } from "@vue/test-utils";
import { FIcon } from "../FIcon";
import FButton from "./FButton.vue";

describe("props", () => {
    describe("disabled", () => {
        it("should disable the button when true", () => {
            expect.assertions(1);
            const wrapper = shallowMount(FButton, {
                props: {
                    disabled: true,
                },
            });
            const button = wrapper.get("button");
            expect(button.attributes("disabled")).toBeDefined();
        });

        it("should not disable the button as default", () => {
            expect.assertions(1);
            const wrapper = shallowMount(FButton);
            const button = wrapper.get("button");
            expect(button.attributes("disabled")).toBeUndefined();
        });
    });

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

    it("iconLibrary should be passed to FIcon", () => {
        const wrapper = shallowMount(FButton, {
            props: {
                iconLeft: "foo",
                iconLibrary: "bar",
            },
        });
        const icon = wrapper.getComponent(FIcon);
        expect(icon.attributes("name")).toBe("foo");
        expect(icon.attributes("library")).toBe("bar");
    });
});
