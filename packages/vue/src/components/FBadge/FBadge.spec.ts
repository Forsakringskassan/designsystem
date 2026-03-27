import { VueWrapper, mount } from "@vue/test-utils";
import FBadge from "./FBadge.vue";
import { statuses } from "./statuses";
import "html-validate/jest";

function createWrapper({ props = {}, attrs = {} } = {}): VueWrapper {
    return mount(FBadge, {
        attrs: { ...attrs },
        props: { ...props },
        slots: {
            default: "Badge text",
        },
    });
}

describe("should match correct class", () => {
    it.each(statuses)("%s", (status) => {
        const wrapper = createWrapper({ props: { status } });
        expect(wrapper.classes()).toContain(`badge--${status}`);
    });
    it.each(statuses)("%s (inverted)", (status) => {
        const wrapper = createWrapper({
            props: { status, inverted: true },
        });
        expect(wrapper.classes()).toContain(`badge--${status}-inverted`);
    });
});

describe("html-validate", () => {
    it("should not report error when used correctly", () => {
        const markup = /* HTML */ `
            <f-badge status="info">
                <template #default> Badge text </template>
            </f-badge>
        `;
        expect(markup).toHTMLValidate();
    });

    it("should report error when status is invalid", () => {
        const markup = /* HTML */ `
            <f-badge status="conflict">
                <template #default> Badge text </template>
            </f-badge>
        `;
        expect(markup).not.toHTMLValidate();
    });
});
