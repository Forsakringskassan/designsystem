import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import FFieldset from "./FFieldset.vue";
import { useFieldset } from "./use-fieldset";

describe("useFieldset()", () => {
    describe("sharedName", () => {
        const TestComponent = defineComponent({
            template: /* HTML */ `
                <p>{{ typeof sharedName }}:{{ sharedName }}</p>
            `,
            setup() {
                return useFieldset();
            },
        });

        it("should get fieldset name prop", () => {
            expect.assertions(1);
            const wrapper = mount({
                template: /* HTML */ `
                    <f-fieldset name="foobar">
                        <test-component></test-component>
                    </f-fieldset>
                `,
                components: { FFieldset, TestComponent },
            });
            expect(wrapper.get("p").text()).toBe("string:foobar");
        });

        it("should return undefined if name property isn't set on fieldset", () => {
            expect.assertions(1);
            const wrapper = mount({
                template: /* HTML */ `
                    <f-fieldset>
                        <test-component></test-component>
                    </f-fieldset>
                `,
                components: { FFieldset, TestComponent },
            });
            expect(wrapper.get("p").text()).toBe("undefined:");
        });

        it("should return undefined if no fieldset ancestor exists", () => {
            expect.assertions(1);
            const wrapper = mount({
                template: /* HTML */ ` <test-component></test-component> `,
                components: { FFieldset, TestComponent },
            });
            expect(wrapper.get("p").text()).toBe("undefined:");
        });
    });

    describe("showDetails", () => {
        const TestComponent = defineComponent({
            template: /* HTML */ `
                <p>{{ typeof showDetails }}:{{ showDetails }}</p>
            `,
            setup() {
                return useFieldset();
            },
        });

        it("should get fieldset showDetails prop", () => {
            expect.assertions(1);
            const wrapper = mount({
                template: /* HTML */ `
                    <f-fieldset show-details="always">
                        <test-component></test-component>
                    </f-fieldset>
                `,
                components: { FFieldset, TestComponent },
            });
            expect(wrapper.get("p").text()).toBe("string:always");
        });

        it("should return never if name property isn't set on fieldset", () => {
            expect.assertions(1);
            const wrapper = mount({
                template: /* HTML */ `
                    <f-fieldset>
                        <test-component></test-component>
                    </f-fieldset>
                `,
                components: { FFieldset, TestComponent },
            });
            expect(wrapper.get("p").text()).toBe("string:never");
        });

        it("should return never if no fieldset ancestor exists", () => {
            expect.assertions(1);
            const wrapper = mount({
                template: /* HTML */ ` <test-component></test-component> `,
                components: { FFieldset, TestComponent },
            });
            expect(wrapper.get("p").text()).toBe("string:never");
        });
    });

    describe("getFieldsetLabelText", () => {
        const TestComponent = defineComponent({
            template: /* HTML */ `
                <p>{{ typeof fieldsetLabelText }}:{{ fieldsetLabelText }}</p>
            `,
            setup() {
                return useFieldset();
            },
            computed: {
                fieldsetLabelText() {
                    return this.getFieldsetLabelText()?.trim();
                },
            },
        });

        it("should get label from fieldset slot", () => {
            expect.assertions(1);
            const wrapper = mount({
                template: /* HTML */ `
                    <f-fieldset>
                        <template #label> lorem ipsum dolor sit amet </template>
                        <template #default>
                            <test-component></test-component>
                        </template>
                    </f-fieldset>
                `,
                components: { FFieldset, TestComponent },
            });
            expect(wrapper.get("p").text()).toBe(
                "string:lorem ipsum dolor sit amet",
            );
        });

        it("should return undefined if fieldset has no label", () => {
            expect.assertions(1);
            const wrapper = mount({
                template: /* HTML */ `
                    <f-fieldset>
                        <test-component></test-component>
                    </f-fieldset>
                `,
                components: { FFieldset, TestComponent },
            });
            expect(wrapper.get("p").text()).toBe("undefined:");
        });

        it("should return undefined if no fieldset ancestor exists", () => {
            expect.assertions(1);
            const wrapper = mount({
                template: /* HTML */ ` <test-component></test-component> `,
                components: { FFieldset, TestComponent },
            });
            expect(wrapper.get("p").text()).toBe("undefined:");
        });
    });
});
