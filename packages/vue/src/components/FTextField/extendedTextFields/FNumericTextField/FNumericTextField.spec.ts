import "html-validate/vitest";
import { reactive } from "vue";
import { config, mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { ValidationPlugin } from "../../../../plugins";
import FNumericTextField from "./FNumericTextField.vue";

config.global.plugins = [ValidationPlugin];
config.global.stubs = { FLabel: false, FTextField: false };

describe("snapshots", () => {
    it("should match snapshot with label and input", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FNumericTextField, {
            props: { id: "myField" },
            slots: {
                default: "My numeric field",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe("v-model", () => {
    it("should update model with number value", async () => {
        expect.assertions(1);
        const data = reactive<{ myModel: string | number }>({ myModel: "" });
        const wrapper = mount({
            components: { FNumericTextField },
            template: /* HTML */ `
                <f-numeric-text-field
                    v-model="myModel"
                    v-validation.decimal
                ></f-numeric-text-field>
            `,
            data() {
                return data;
            },
        });

        const input = wrapper.get("input");
        await input.setValue("1,23");
        await input.trigger("blur");

        expect(data.myModel).toBeCloseTo(1.23);
    });

    it("should be able to handle zero value", async () => {
        expect.assertions(1);
        const data = reactive<{ myModel: string | number }>({ myModel: "" });
        const wrapper = mount({
            components: { FNumericTextField },
            template: /* HTML */ `
                <f-numeric-text-field v-model="myModel"></f-numeric-text-field>
            `,
            data() {
                return data;
            },
        });

        const input = wrapper.get("input");
        await input.setValue("0");
        await input.trigger("blur");

        expect(data.myModel).toBe(0);
    });
});

describe("format", () => {
    it("should format with decimals when having decimal prop", async () => {
        expect.assertions(2);
        const data = reactive<{ myModel: string | number }>({ myModel: 3 });
        const wrapper = mount({
            components: { FNumericTextField },
            template: /* HTML */ `
                <f-numeric-text-field
                    :decimals="2"
                    v-model="myModel"
                    v-validation.decimal
                ></f-numeric-text-field>
            `,
            data() {
                return data;
            },
        });

        const input = wrapper.get("input");
        const inputElement = input.element;

        expect(inputElement.value).toBe("3,00");

        await input.setValue("4,1");
        await input.trigger("blur");
        await wrapper.vm.$nextTick();

        expect(inputElement.value).toBe("4,10");
    });
});
