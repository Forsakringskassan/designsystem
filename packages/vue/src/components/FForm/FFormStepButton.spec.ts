import { VueWrapper, mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import FFormStepButton from "./FFormStepButton.vue";
import "html-validate/jest";

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
    options = {},
} = {}): VueWrapper {
    return mount(FFormStepButton, {
        attrs: { ...attrs },
        props: { ...props },
        slots: { ...slots },
        ...options,
        global: {
            stubs: [],
        },
    });
}

describe("snapshots", () => {
    it("should match snapshot when pristine", async () => {
        const wrapper = createWrapper();
        await flushPromises();

        expect(wrapper.element).toMatchSnapshot();
    });

    it.each`
        isOpen   | isAnyFieldTouched | buttonText  | iconName
        ${false} | ${false}          | ${"Fyll i"} | ${"pen"}
        ${false} | ${true}           | ${"Ändra"}  | ${"pen"}
        ${true}  | ${true}           | ${"OK"}     | ${"success"}
        ${true}  | ${false}          | ${"OK"}     | ${"success"}
    `(
        'should have the text "$buttonText" and icon name "$iconName" if the formStep is open "$isOpen" and is edited "$isAnyFieldTouched"',
        async ({ isOpen, isAnyFieldTouched, buttonText, iconName }) => {
            const wrapper = createWrapper({
                props: {
                    isOpen,
                    isAnyFieldTouched,
                },
            });
            await flushPromises();

            //            wrapper.vm.$props.isOpen = isOpen;
            //            wrapper.vm.$props.isAnyFieldTouched = isAnyFieldTouched;
            await wrapper.vm.$nextTick();

            expect(wrapper.get("button").text()).toBe(buttonText);
            expect(wrapper.get("svg").classes()).toContain("button__icon");
            expect(wrapper.get("svg").classes()).toContain(
                `f-icon-${iconName}`,
            );
        },
    );
});
