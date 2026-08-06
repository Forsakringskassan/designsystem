import { type VueWrapper, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FExpand from "./FExpand.vue";

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
} = {}): VueWrapper {
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-return -- technical debt */
    return mount(FExpand, {
        attrs: { ...attrs },
        props: { ...props },
        slots: { ...slots },
    });
}

describe("snapshots", () => {
    it("should match snapshot with default slot content", () => {
        expect.assertions(1);
        const wrapper = createWrapper({
            slots: {
                default: /* HTML */ ` <p>Content</p> `,
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});
