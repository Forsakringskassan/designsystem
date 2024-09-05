import "html-validate/jest";
import { defineComponent, h } from "vue";
import { VueWrapper, mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import { FRadioGroup, FRadioGroupField } from ".";

const defaultSlots = { label: "Label", default: "Content" };

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
} = {}): VueWrapper {
    return mount(FRadioGroup, {
        attrs: { ...attrs },
        props: { id: "someId", name: "someName", ...props },
        slots: { ...slots },
    });
}

describe("snapshots", () => {
    it("should match snapshot with default classes and filled slots", () => {
        const wrapper = createWrapper({
            slots: {
                tooltip: "Tooltip",
                description: "Description",
                "error-message": "Error message",
                ...defaultSlots,
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with horizontal layout", () => {
        const wrapper = createWrapper({ props: { isHorizontal: true } });
        expect(wrapper).toMatchSnapshot();
    });

    it("should match snapshot with indentation", async () => {
        const wrapper = mount({
            components: { FRadioGroup, FRadioGroupField },
            template: /* HTML */ `
                <f-radio-group name="foo">
                    <template #default="{ indentClass }">
                        <div :class="indentClass">
                            <f-radio-group-field value="bar" />
                        </div>
                    </template>
                </f-radio-group>
            `,
        });

        await flushPromises();
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with child input element having same name as provided", () => {
        const wrapper = mount(
            defineComponent({
                components: {
                    FRadioGroup,
                    FRadioGroupField,
                },
                render() {
                    return h(FRadioGroup, { name: "sameName" }, () => [
                        h(FRadioGroupField, {
                            value: "some value",
                        }),
                    ]);
                },
            }),
        );
        expect(wrapper).toMatchSnapshot();
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
