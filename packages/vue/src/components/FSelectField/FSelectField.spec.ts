import "html-validate/jest";
import { defineComponent, h } from "vue";
import { VueWrapper, mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import { type ValidityEvent, type ValidatableHTMLElement } from "@fkui/logic";
import FSelectField from "./FSelectField.vue";

function createTestComponentWithOptions(
    options: Array<{ text: string; value: unknown }> = [],
): ReturnType<typeof defineComponent> {
    return defineComponent({
        components: { FSelectField },
        render() {
            const children = options.map((option) => {
                const data = { value: option.value };
                return h("option", data, option.text);
            });
            return h(FSelectField, this.$attrs, () => children);
        },
    });
}

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
} = {}): VueWrapper {
    return mount(FSelectField, {
        attrs: { ...attrs, id: "select-field" },
        props: { ...props },
        slots: {
            default: /* HTML */ `
                <option>Apple</option>
                <option>Banana</option>
            `,
            label: "Fruit",
            ...slots,
        },
        global: {
            stubs: ["f-icon"],
        },
    });
}

describe("snapshots", () => {
    it("should match snapshot with label and select", () => {
        const wrapper = createWrapper();

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with label, select and error message", () => {
        const wrapper = createWrapper({
            attrs: { "aria-invalid": true },
            slots: { "error-message": "ERROR_MESSAGE" },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with label, tooltip, description, error message and select", () => {
        const wrapper = createWrapper({
            slots: {
                description: "DESCRIPTION",
                tooltip: "TOOLTIP",
                "error-message": "ERROR_MESSAGE",
            },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it.each`
        validityMode | isValid
        ${"VALID"}   | ${true}
        ${"ERROR"}   | ${false}
        ${"INTIAL"}  | ${true}
        ${"INITIAL"} | ${false}
    `(
        "should match snapshot when validityMode is $validityMode and isValid is $isValid",
        async ({ validityMode, isValid }) => {
            const wrapper = createWrapper({
                attrs: { id: "elementId" },
            });

            wrapper.element.dispatchEvent(
                new CustomEvent<ValidityEvent>("validity", {
                    detail: {
                        target: wrapper.element as ValidatableHTMLElement,
                        elementId: "elementId",
                        isValid,
                        validityMode,
                        validationMessage: "Something went wrong.",
                        nativeEvent: "change",
                    },
                }),
            );
            await flushPromises();
            wrapper.vm.$forceUpdate();

            expect(wrapper.element).toMatchSnapshot();
        },
    );
});

describe("attributes", () => {
    it("should pass attributes", () => {
        const wrapper = createWrapper({
            attrs: {
                disabled: true,
                required: true,
            },
        });
        const select = wrapper.get("select");

        expect(select.attributes("disabled")).toBeDefined();
        expect(select.attributes("required")).toBeDefined();
    });
});

describe("inline", () => {
    it("should not set class by default", () => {
        const wrapper = createWrapper();
        expect(wrapper.classes()).not.toContain("select-field--inline");
    });

    it("should set class when enabled", () => {
        const wrapper = createWrapper({
            props: {
                inline: true,
            },
        });

        expect(wrapper.classes()).toContain("select-field--inline");
    });
});

describe("events", () => {
    it("should pass listeners", async () => {
        const foobar = jest.fn();
        const wrapper = createWrapper({
            attrs: { onFoobar: foobar },
        });
        const element = wrapper.get("select");
        await element.trigger("foobar");
        expect(foobar).toHaveBeenCalled();
    });

    it("should support v-model by emitting update:modelValue event with string", () => {
        const wrapper = mount(
            createTestComponentWithOptions([
                { text: "Banana", value: "banana" },
                { text: "Apple", value: "apple" },
            ]),
            { props: { modelValue: "banana" } },
        );
        const select = wrapper.get("select");
        const htmlSelect = select.element;

        expect(htmlSelect.value).toBe("banana");
        select.setValue("apple");
        expect(htmlSelect.value).toBe("apple");
        expect(
            wrapper
                .findComponent(FSelectField)
                .emitted("update:modelValue")![0][0],
        ).toMatchInlineSnapshot(`"apple"`);
    });

    it("should support v-model by emitting update:modelValue event with object", async () => {
        const wrapper = mount(
            createTestComponentWithOptions([
                { text: "BananaObject", value: { id: 1, fruit: "banana" } },
                { text: "AppleObject", value: { id: 2, fruit: "apple" } },
            ]),
            { props: { modelValue: { id: 1, fruit: "banana" } } },
        );
        await wrapper.vm.$nextTick();
        const vModelValue = wrapper
            .findComponent(FSelectField)
            .props("modelValue");

        expect(vModelValue).toEqual({ id: 1, fruit: "banana" });
    });

    it("should emit change event with when value changes", () => {
        const wrapper = mount(
            createTestComponentWithOptions([
                { text: "Banana", value: "banana" },
                { text: "Apple", value: "apple" },
            ]),
            { props: { modelValue: "banana" } },
        );
        const select = wrapper.get("select");
        select.setValue("apple");
        expect(
            wrapper.findComponent(FSelectField).emitted("change")![0][0],
        ).toMatchInlineSnapshot(`"apple"`);
    });
});

describe("html-validate", () => {
    it.each`
        html
        ${"<f-select-field><template #label>label</template><option>Apple</option></f-select-field>"}
        ${"<f-select-field><template #label>label</template><template #default>default</template><option>Apple</option></f-select-field>"}
        ${'<f-select-field name="select-field"><template #label>label</template><option>Apple</option></f-select-field>'}
    `("$html should be valid", ({ html }) => {
        expect.assertions(1);

        expect(html).toHTMLValidate();
    });

    it.each`
        html
        ${"<f-select-field><template #tooltip><div /></template><template #label>label</template></f-select-field>"}
        ${"<f-select-field><template #label>label</template><template #default><div></div></template><option>Apple</option></f-select-field>"}
        ${"<f-select-field><template #label>label</template><div></div></f-select-field>"}
    `("$html should be invalid", ({ html }) => {
        expect.assertions(3);
        let catchedError;

        try {
            expect(html).toHTMLValidate();
        } catch (error) {
            catchedError = error;
        } finally {
            expect(catchedError).toBeDefined();
            expect(catchedError).toMatchSnapshot();
        }
    });
});
