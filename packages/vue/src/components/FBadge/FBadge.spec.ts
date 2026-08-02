import { type VueWrapper, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FBadge from "./FBadge.vue";
import { statuses } from "./statuses";
import "html-validate/vitest";

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
        expect.assertions(1);
        const wrapper = createWrapper({ props: { status } });
        expect(wrapper.classes()).toContain(`badge--${status}`);
    });

    it.each(statuses)("%s (inverted)", (status) => {
        expect.assertions(1);
        const wrapper = createWrapper({
            props: { status, inverted: true },
        });
        expect(wrapper.classes()).toContain(`badge--${status}-inverted`);
    });
});

describe("html-validate", () => {
    it("should not report error when used correctly", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-badge status="info">
                <template #default> Badge text </template>
            </f-badge>
        `;
        /* eslint-disable-next-line @typescript-eslint/await-thenable -- upstream typings are wrong */
        await expect(markup).toHTMLValidate();
    });

    it("should report error when status is invalid", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-badge status="conflict">
                <template #default> Badge text </template>
            </f-badge>
        `;
        /* eslint-disable-next-line @typescript-eslint/await-thenable -- upstream typings are wrong */
        await expect(markup).not.toHTMLValidate();
    });
});
