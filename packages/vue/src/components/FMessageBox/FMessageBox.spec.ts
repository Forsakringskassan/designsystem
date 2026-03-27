import { VueWrapper, mount } from "@vue/test-utils";
import FMessageBox from "./FMessageBox.vue";
import "html-validate/jest";

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
} = {}): VueWrapper {
    return mount(FMessageBox, {
        attrs: { ...attrs },
        props: { type: "", ...props },
        slots: { ...slots },
        global: {
            stubs: ["FIcon"],
        },
    });
}

describe("FMessageBox", () => {
    it.each`
        type
        ${"info"}
        ${"error"}
        ${"warning"}
        ${"success"}
    `("should match snapshot with correct type", ({ type }) => {
        const wrapper = createWrapper({ props: { type } });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with content", () => {
        const wrapper = createWrapper({
            props: { type: "success" },
            slots: { default: ` <p>content</p> ` },
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe("html-validate", () => {
    it("should not report error when used correctly", () => {
        const markup = /* HTML */ `
            <f-message-box type="warning">
                <template v-slot="{ headingClass }">
                    <h2 :class="headingClass">Lorem ipsum</h2>
                    <p>dolor sit amet</p>
                </template>
            </f-message-box>
        `;
        expect(markup).toHTMLValidate();
    });

    it("should report error when obsolete heading slot is used", () => {
        const markup = /* HTML */ `
            <f-message-box type="warning">
                <template v-slot:heading></template>
            </f-message-box>
        `;
        expect(markup).not.toHTMLValidate();
    });

    it("should report error when type is missing", () => {
        const markup = /* HTML */ ` <f-message-box></f-message-box> `;
        expect(markup).not.toHTMLValidate();
    });

    it("should report error when type is invalid", () => {
        const markup = /* HTML */ `
            <f-message-box type="foobar"></f-message-box>
        `;
        expect(markup).not.toHTMLValidate();
    });
});
