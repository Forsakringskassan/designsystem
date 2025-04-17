import { defineComponent } from "vue";
import { VueWrapper, mount } from "@vue/test-utils";
import { ValidationPlugin } from "@fkui/vue";
import XTimeTextField from "./XTimeTextField.vue";

function createWrapper(
    template: string,
    myModel: string | number,
): VueWrapper<InstanceType<typeof TestComponent>> {
    const TestComponent = defineComponent({
        name: "TestComponent",
        components: {
            XTimeTextField,
        },
        data() {
            return {
                myModel,
            };
        },
        template,
    });

    return mount(TestComponent, {
        global: {
            plugins: [ValidationPlugin],
        },
    });
}

describe("snapshots", () => {
    it("should match snapshot with label and input", () => {
        const wrapper = createWrapper(
            /* HTML */ `
                <x-time-text-field id="myField" v-model="myModel">
                    My hours minutes field
                </x-time-text-field>
            `,
            "",
        );
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe("v-model", () => {
    it("should update model with correct parse number value from time value input", async () => {
        const wrapper = createWrapper(
            /* HTML */ `
                <x-time-text-field id="myField" v-model="myModel">
                    My hours minutes field
                </x-time-text-field>
            `,
            "",
        );

        const input = wrapper.get("input");
        input.setValue("12:00");
        await input.trigger("blur");

        expect(wrapper.vm.$data.myModel).toBe(720);
    });
});

describe("format", () => {
    it("should format to correct time value", async () => {
        const wrapper = createWrapper(
            /* HTML */ `
                <x-time-text-field id="myField" v-model="myModel">
                    My hours minutes field
                </x-time-text-field>
            `,
            "",
        );

        const input = wrapper.get("input");
        const inputElement = input.element as HTMLInputElement;

        input.setValue("1 2:35");
        await input.trigger("blur");
        await wrapper.vm.$nextTick();

        expect(inputElement.value).toBe("12:35");
    });
});
