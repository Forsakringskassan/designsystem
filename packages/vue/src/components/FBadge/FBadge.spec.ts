import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FBadge from "./FBadge.vue";
import { statuses } from "./statuses";
import "html-validate/vitest";

describe("should match correct class", () => {
    it.each(statuses)("%s", (status) => {
        expect.assertions(1);
        const wrapper = shallowMount(FBadge, { props: { status } });
        expect(wrapper.classes()).toContain(`badge--${status}`);
    });

    it.each(statuses)("%s (inverted)", (status) => {
        expect.assertions(1);
        const wrapper = shallowMount(FBadge, {
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
        await expect(markup).toBeValid();
    });

    it("should report error when status is invalid", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-badge status="conflict">
                <template #default> Badge text </template>
            </f-badge>
        `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: Attribute "status" has invalid value "conflict" (attribute-allowed-values)
            1 |
          > 2 |             <f-badge status="conflict">
              |                              ^^^^^^^^
            3 |                 <template #default> Badge text </template>
            4 |             </f-badge>
            5 |
          Selector: f-badge"
        `);
    });
});
