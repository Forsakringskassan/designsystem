import "html-validate/vitest";
import { h } from "vue";
import {
    type ValidatableHTMLElement,
    type ValidityEvent,
    type ValidityMode,
} from "@fkui/logic";
import { config, flushPromises, mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import FSelectField from "./FSelectField.vue";

config.global.stubs = {
    FIcon: true,
};

describe("rendering", () => {
    it("should render with select and icon", () => {
        expect.assertions(12);
        const wrapper = mount(FSelectField, {
            attrs: { id: "select-field" },
            slots: {
                default: /* HTML */ `
                    <option>Apple</option>
                    <option>Banana</option>
                `,
            },
        });

        expect(wrapper.get(".select-field").isVisible()).toBeTruthy();

        // Make sure the select wrapper exists
        const selectWrapper = ".select-field__icon-wrapper";
        expect(wrapper.get(selectWrapper).isVisible()).toBeTruthy();
        expect(wrapper.get(selectWrapper).classes()).toContain("i-width-sm-12");
        expect(wrapper.get(selectWrapper).find("select").exists()).toBeTruthy();

        expect(wrapper.get("select").isVisible()).toBeTruthy();
        expect(wrapper.get("select").attributes("id")).toBe("select-field");
        expect(wrapper.get("select").classes()).toContain(
            "select-field__select",
        );

        const options = wrapper.get("select").findAll("option");
        expect(options).toHaveLength(2);
        expect(options[0].text()).toBe("Apple");
        expect(options[1].text()).toBe("Banana");

        expect(wrapper.find(".select-field__icon").isVisible()).toBeTruthy();
        expect(wrapper.find(".select-field__icon").attributes("name")).toBe(
            "arrow-down",
        );
    });

    it("should render select without options", () => {
        expect.assertions(3);
        const wrapper = mount(FSelectField);

        expect(wrapper.get("select").isVisible()).toBeTruthy();
        expect(wrapper.get("select").classes()).toContain(
            "select-field__select",
        );
        expect(wrapper.get("select").find("options").exists()).toBeFalsy();
    });

    it("should render with label", () => {
        expect.assertions(6);
        const wrapper = mount(FSelectField, {
            attrs: { id: "select-field" },
            slots: {
                label: "Fruit",
            },
        });

        const labelWrapper = ".i-width-sm-12";
        expect(wrapper.get(labelWrapper).isVisible()).toBeTruthy();
        expect(wrapper.get(labelWrapper).find("label").exists()).toBeTruthy();
        expect(wrapper.get("label").isVisible()).toBeTruthy();
        expect(wrapper.get("label").text()).toBe("Fruit");
        expect(wrapper.get("label").classes()).toContain("label");
        expect(wrapper.get("label").attributes("for")).toBe("select-field");
    });

    it("should render with error message", () => {
        expect.assertions(6);
        const wrapper = mount(FSelectField, {
            attrs: { "aria-invalid": true, id: "select-field" },
            slots: {
                label: "Fruit",
                "error-message": "ERROR_MESSAGE",
            },
        });

        expect(wrapper.get("select").isVisible()).toBeTruthy();
        expect(wrapper.get("select").attributes("aria-invalid")).toBe("true");

        expect(
            wrapper.get("label").find(".label__message--error").isVisible(),
        ).toBeTruthy();
        expect(wrapper.get(".label__message--error").text()).toContain(
            "ERROR_MESSAGE",
        );

        const errorIconElement = wrapper
            .get(".label__message--error")
            .find("f-icon-stub");
        expect(errorIconElement.isVisible()).toBeTruthy();
        expect(errorIconElement.attributes("name")).toBe("error");
    });

    it("should render label with tooltip and description", () => {
        expect.assertions(6);
        const wrapper = mount(FSelectField, {
            attrs: { id: "select-field" },
            slots: {
                label: "Fruit",
                description: "DESCRIPTION",
                tooltip: /* HTML */ ` <div id="tooltip">TOOLTIP</div> `,
            },
        });

        const labelWrapper = wrapper.get(".i-width-sm-12");
        expect(labelWrapper.findAll("label")).toHaveLength(2);

        const tooltipDiv = labelWrapper.get("#tooltip");
        expect(tooltipDiv.isVisible()).toBeTruthy();
        expect(tooltipDiv.text()).toBe("TOOLTIP");

        const descriptionLabel = labelWrapper.get(".label.sr-separator");
        expect(descriptionLabel.isVisible()).toBeTruthy();
        expect(descriptionLabel.text()).toBe("DESCRIPTION");
        expect(descriptionLabel.attributes("for")).toBe("select-field");
    });

    function createCustomEvent(
        target: ValidatableHTMLElement,
        elementId: string,
        validityMode: ValidityMode,
        isValid: boolean,
    ): CustomEvent {
        return new CustomEvent<ValidityEvent>("validity", {
            detail: {
                target,
                elementId,
                isValid,
                validityMode,
                validationMessage: "Something went wrong.",
                nativeEvent: "change",
            },
        });
    }

    it("should show errormessage if validityMode ERROR", async () => {
        expect.assertions(2);

        const id = "select-field";
        const wrapper = mount(FSelectField, {
            attrs: { id },
            slots: {
                label: "Fruit",
            },
        });

        /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
        wrapper.element.dispatchEvent(
            createCustomEvent(
                wrapper.element as ValidatableHTMLElement,
                id,
                "ERROR",
                false,
            ),
        );

        await flushPromises();
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- false positive */
        wrapper.vm.$forceUpdate();

        const errorMessage = wrapper.get(".label__message--error");
        expect(errorMessage.isVisible()).toBeTruthy();
        expect(errorMessage.text()).toBe("Something went wrong.");
    });

    it.each`
        validityMode | isValid
        ${"VALID"}   | ${true}
        ${"INITIAL"} | ${false}
        ${"FOOBAR"}  | ${true}
    `(
        "should not show errormessage if validityMode $validityMode and isValid $isValid",
        async ({ validityMode, isValid }) => {
            expect.assertions(1);

            const id = "select-field";
            const wrapper = mount(FSelectField, {
                attrs: { id },
                slots: {
                    label: "Fruit",
                },
            });

            /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
            wrapper.element.dispatchEvent(
                createCustomEvent(
                    wrapper.element as ValidatableHTMLElement,
                    id,
                    validityMode as ValidityMode,
                    isValid as boolean,
                ),
            );

            await flushPromises();
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- false positive */
            wrapper.vm.$forceUpdate();

            const errorMessage = wrapper.find(".label__message--error");
            expect(errorMessage.exists()).toBeFalsy();
        },
    );
});

describe("attributes", () => {
    it("should pass attributes", () => {
        expect.assertions(2);
        const wrapper = shallowMount(FSelectField, {
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
        expect.assertions(1);
        const wrapper = shallowMount(FSelectField);
        expect(wrapper.classes()).not.toContain("select-field--inline");
    });

    it("should set class when enabled", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FSelectField, {
            props: {
                inline: true,
            },
        });
        expect(wrapper.classes()).toContain("select-field--inline");
    });
});

describe("events", () => {
    it("should pass listeners", async () => {
        expect.assertions(1);
        const foobar = vi.fn();
        const wrapper = shallowMount(FSelectField, {
            attrs: { onFoobar: foobar },
        });
        const element = wrapper.get("select");
        await element.trigger("foobar");
        expect(foobar).toHaveBeenCalled();
    });

    it("should support v-model by emitting update:modelValue event with string", async () => {
        expect.assertions(3);
        const wrapper = mount(FSelectField, {
            slots: {
                default() {
                    return [
                        h("option", { value: "banana" }, "Banana"),
                        h("option", { value: "apple" }, "Apple"),
                    ];
                },
            },
            props: { modelValue: "banana" },
        });
        const select = wrapper.get("select");
        const htmlSelect = select.element;

        expect(htmlSelect.value).toBe("banana");
        await select.setValue("apple");
        expect(htmlSelect.value).toBe("apple");
        expect(
            wrapper
                .findComponent(FSelectField)
                .emitted("update:modelValue")![0][0],
        ).toMatchInlineSnapshot(`"apple"`);
    });

    it("should support v-model by emitting update:modelValue event with object", () => {
        expect.assertions(1);
        const wrapper = mount(FSelectField, {
            slots: {
                default() {
                    return [
                        h(
                            "option",
                            { value: { id: 1, fruit: "banana" } },
                            "Banana",
                        ),
                        h(
                            "option",
                            { value: { id: 2, fruit: "apple" } },
                            "Apple",
                        ),
                    ];
                },
            },
            props: { modelValue: { id: 1, fruit: "banana" } },
        });
        const vModelValue = wrapper
            .findComponent(FSelectField)
            .props("modelValue");
        expect(vModelValue).toEqual({ id: 1, fruit: "banana" });
    });

    it("should support v-model by emitting update:modelValue event with null", () => {
        expect.assertions(1);
        const wrapper = mount(FSelectField, {
            slots: {
                default() {
                    return [
                        h(
                            "option",
                            { value: { id: 1, fruit: "banana" } },
                            "Banana",
                        ),
                        h(
                            "option",
                            { value: { id: 2, fruit: "apple" } },
                            "Apple",
                        ),
                    ];
                },
            },
            props: { modelValue: null },
        });
        const vModelValue = wrapper
            .findComponent(FSelectField)
            .props("modelValue");
        expect(vModelValue).toBeNull();
    });

    it("should emit change event with when value changes", async () => {
        expect.assertions(1);
        const wrapper = mount(FSelectField, {
            slots: {
                default() {
                    return [
                        h("option", { value: "banana" }, "Banana"),
                        h("option", { value: "apple" }, "Apple"),
                    ];
                },
            },
            props: { modelValue: "banana" },
        });
        const select = wrapper.get("select");
        await select.setValue("apple");
        expect(
            wrapper.findComponent(FSelectField).emitted("change")![0][0],
        ).toMatchInlineSnapshot(`"apple"`);
    });
});

describe("html-validate", () => {
    it("should be valid", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-select-field>
                <template #label>label</template>
                <option>Apple</option>
            </f-select-field>
            <f-select-field>
                <template #label>label</template>
                <template #default>default</template>
                <option>Apple</option>
            </f-select-field>
            <f-select-field name="select-field">
                <template #label>label</template>
                <option>Apple</option>
            </f-select-field>
        `;
        await expect(markup).toBeValid();
    });

    it("should be invalid", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-select-field>
                <template #tooltip> <div></div> </template>
                <template #label> label </template>
            </f-select-field>
            <f-select-field>
                <template #label> label </template>
                <template #default> <div></div> </template>
                <option>Apple</option>
            </f-select-field>
            <f-select-field>
                <template #label> label </template>
                <div></div>
            </f-select-field>
        `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: <div> element is not permitted as content under slot "tooltip" (<f-select-field>) (element-permitted-content)
            1 |
            2 |             <f-select-field>
          > 3 |                 <template #tooltip> <div></div> </template>
              |                                      ^^^
            4 |                 <template #label> label </template>
            5 |             </f-select-field>
            6 |             <f-select-field>
          Selector: f-select-field:nth-child(1) > template:nth-child(1) > div
          error: <div> element is not permitted as content under slot "default" (<f-select-field>) (element-permitted-content)
             6 |             <f-select-field>
             7 |                 <template #label> label </template>
          >  8 |                 <template #default> <div></div> </template>
               |                                      ^^^
             9 |                 <option>Apple</option>
            10 |             </f-select-field>
            11 |             <f-select-field>
          Selector: f-select-field:nth-child(2) > template:nth-child(2) > div
          error: <div> element is not permitted as content under <f-select-field> (element-permitted-content)
            11 |             <f-select-field>
            12 |                 <template #label> label </template>
          > 13 |                 <div></div>
               |                  ^^^
            14 |             </f-select-field>
            15 |
          Selector: f-select-field:nth-child(3) > div"
        `);
    });
});
