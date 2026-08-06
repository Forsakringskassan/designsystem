import "html-validate/vitest";
import { defineComponent } from "vue";
import { type VueWrapper, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { ValidationPlugin } from "../../../../plugins";
import FNumericTextField from "./FNumericTextField.vue";

const TestComponent = defineComponent({
    name: "TestComponent",
    components: {
        FNumericTextField,
    },
    data() {
        return {
            /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion -- technical debt */
            myModel: "" as string | number,
        };
    },
    template: "",
});

function createWrapper(
    template: string,
    myModel: string | number,
): VueWrapper<InstanceType<typeof TestComponent>> {
    return mount(TestComponent, {
        template,
        data() {
            return {
                myModel,
            };
        },
        global: {
            plugins: [ValidationPlugin],
        },
    });
}

describe("snapshots", () => {
    it("should match snapshot with label and input", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-numeric-text-field id="myField" v-model="myModel">
                My numeric field
            </f-numeric-text-field>
        `;
        const wrapper = createWrapper(markup, "");
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe("v-model", () => {
    it("should update model with number value", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-numeric-text-field
                id="myField"
                v-model="myModel"
                v-validation.decimal
            >
                My numeric field
            </f-numeric-text-field>
        `;
        const wrapper = createWrapper(markup, "");

        const input = wrapper.get("input");
        await input.setValue("1,23");
        await input.trigger("blur");

        expect(wrapper.vm.$data.myModel).toBeCloseTo(1.23);
    });

    it("should be able to handle zero value", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-numeric-text-field id="myField" v-model="myModel">
                My numeric field
            </f-numeric-text-field>
        `;
        const wrapper = createWrapper(markup, "");

        const input = wrapper.get("input");
        await input.setValue("0");
        await input.trigger("blur");

        expect(wrapper.vm.$data.myModel).toBe(0);
    });
});

describe("format", () => {
    it("should format with decimals when having decimal prop", async () => {
        expect.assertions(2);
        const markup = /* HTML */ `
            <f-numeric-text-field
                id="myField"
                v-model="myModel"
                :decimals="2"
                v-validation.decimal
            >
                My numeric field
            </f-numeric-text-field>
        `;
        const wrapper = createWrapper(markup, 3);

        const input = wrapper.get("input");
        const inputElement = input.element;

        expect(inputElement.value).toBe("3,00");

        await input.setValue("4,1");
        await input.trigger("blur");
        await wrapper.vm.$nextTick();

        expect(inputElement.value).toBe("4,10");
    });
});
