import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { FMessageBox } from "../components";
import { FMessageBoxSelectors } from "./FMessageBox.selectors";

const FMessageBoxComponent = defineComponent({
    template: /* HTML */ `
        <f-message-box :type :layout>
            <template #default="{ headingSlotClass }">
                <h2 v-if="showHeading" :class="headingSlotClass">Rubrik</h2>
                <p v-else>Innehåll</p>
            </template>
        </f-message-box>
    `,
    props: {
        type: {
            type: String,
            required: true,
        },
        layout: {
            type: String,
            default: undefined,
        },
        showHeading: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        FMessageBox,
    },
});

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FMessageBoxComponent, {
        props: { type: "info" },
    });
    const { selector } = FMessageBoxSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".message-box");
    expect(root.classes()).toContain("message-box");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FMessageBoxComponent, {
        props: { type: "info" },
        attrs: { "data-test": "my-message" },
    });
    const { selector } = FMessageBoxSelectors('[data-test="my-message"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="my-message"]');
    expect(root.classes()).toContain("message-box");
});

it("content() should return the content area element", () => {
    expect.assertions(2);
    const wrapper = mount(FMessageBoxComponent, {
        props: { type: "success" },
    });
    const { content } = FMessageBoxSelectors();
    const el = wrapper.find(content());
    expect(el.exists()).toBeTruthy();
    expect(el.text()).toBe("Innehåll");
});

it("heading() should return the heading element", () => {
    expect.assertions(1);
    const wrapper = mount(FMessageBoxComponent, {
        props: { type: "warning", showHeading: true },
    });
    const { heading } = FMessageBoxSelectors();
    const el = wrapper.get(heading());
    expect(el.text()).toBe("Rubrik");
});

it("icon() should exist in short layout", () => {
    expect.assertions(1);
    const wrapper = mount(FMessageBoxComponent, {
        props: { type: "error", layout: "short" },
    });
    const { icon } = FMessageBoxSelectors();
    expect(wrapper.find(icon()).exists()).toBeTruthy();
});

it("icon() should not exist in standard layout", () => {
    expect.assertions(1);
    const wrapper = mount(FMessageBoxComponent, {
        props: { type: "error" },
    });
    const { icon } = FMessageBoxSelectors();
    expect(wrapper.find(icon()).exists()).toBeFalsy();
});
