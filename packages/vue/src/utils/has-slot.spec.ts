import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { hasSlot } from "./has-slot";

const InnerComponent = defineComponent({
    template: /* HTML */ ` <div></div> `,
});

describe("hasSlot", () => {
    it("should return true if slot is provided", () => {
        expect.assertions(1);
        const TestComponent = defineComponent({
            components: { InnerComponent },
            template: /* HTML */ `
                <InnerComponent>
                    <template #foo> lorem ipsum </template>
                </InnerComponent>
            `,
        });
        const wrapper = mount(TestComponent);
        const { vm } = wrapper.getComponent(InnerComponent);
        expect(hasSlot(vm, "foo")).toBeTruthy();
    });

    it("should return false if slot is not provided", () => {
        expect.assertions(1);
        const TestComponent = defineComponent({
            components: { InnerComponent },
            template: /* HTML */ `
                <InnerComponent>
                    <template #foo></template>
                </InnerComponent>
            `,
        });
        const wrapper = mount(TestComponent);
        const { vm } = wrapper.getComponent(InnerComponent);
        expect(hasSlot(vm, "foo")).toBeFalsy();
    });

    it("should return false if slot contains whitespace only", () => {
        expect.assertions(2);
        const TestComponent = defineComponent({
            components: { InnerComponent },
            template: /* HTML */ `
                <InnerComponent>
                    <template #foo></template>
                    <template #bar> </template>
                </InnerComponent>
            `,
        });
        const wrapper = mount(TestComponent);
        const { vm } = wrapper.getComponent(InnerComponent);
        expect(hasSlot(vm, "foo")).toBeFalsy();
        expect(hasSlot(vm, "bar")).toBeFalsy();
    });

    it("should handle scoped slots with object", () => {
        expect.assertions(2);
        const TestComponent = defineComponent({
            components: { InnerComponent },
            template: /* HTML */ `
                <InnerComponent>
                    <template #foo="{ person }">
                        Hello {{ person.name }}!
                    </template>
                </InnerComponent>
            `,
        });
        const wrapper = mount(TestComponent);
        const { vm } = wrapper.getComponent(InnerComponent);
        const scope = { person: { name: "World" } };
        expect(hasSlot(vm, "foo", scope)).toBeTruthy();
        expect(hasSlot(vm, "bar", scope)).toBeFalsy();
    });
});
