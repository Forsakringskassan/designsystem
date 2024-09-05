import "html-validate/jest";
import { VueWrapper, mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import FCheckboxGroup from "./FCheckboxGroup.vue";

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
} = {}): VueWrapper {
    return mount(FCheckboxGroup, {
        attrs: { ...attrs },
        props: { id: "someId", name: "someName", ...props },
        slots: { ...slots },
    });
}

describe("snapshots", () => {
    it("should match snapshot with default classes and filled slots", async () => {
        const wrapper = mount({
            components: { FCheckboxGroup },
            template: /* HTML */ `
                <f-checkbox-group name="someName">
                    <template #label> Label </template>
                    <template #tooltip> Tooltip </template>
                    <template #description> Description </template>
                    <template #error-message> Error message </template>
                    <input type="checkbox" />
                    <input type="checkbox" />
                </f-checkbox-group>
            `,
        });

        await flushPromises();
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe("props", () => {
    it("should generate id when unset", () => {
        const wrapper = createWrapper({ props: { id: undefined } });
        expect(wrapper.element.id).toBe("fkui-vue-element-0001");
    });
});

describe("attributes", () => {
    it("should pass attributes", () => {
        const wrapper = createWrapper({
            attrs: {
                disabled: true,
                required: true,
            },
        });
        const input = wrapper.get("fieldset");

        expect(input.attributes("disabled")).toBeDefined();
        expect(input.attributes("required")).toBeDefined();
    });
});

describe("events", () => {
    it("should pass listeners", async () => {
        const foobar = jest.fn();
        const wrapper = createWrapper({
            attrs: { onFoobar: foobar },
        });
        const element = wrapper.get("fieldset");
        await element.trigger("foobar");
        expect(foobar).toHaveBeenCalled();
    });
});
