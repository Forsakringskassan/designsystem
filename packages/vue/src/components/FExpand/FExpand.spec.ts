import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FExpand from "./FExpand.vue";

describe("snapshots", () => {
    it("should match snapshot with default slot content", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FExpand, {
            slots: {
                default: /* HTML */ ` <p>Content</p> `,
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});
