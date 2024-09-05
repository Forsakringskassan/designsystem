import { VueWrapper, mount } from "@vue/test-utils";
import FExpand from "./FExpand.vue";

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
} = {}): VueWrapper {
    return mount(FExpand, {
        attrs: { ...attrs },
        props: { ...props },
        slots: { ...slots },
    });
}

describe("snapshots", () => {
    it("should match snapshot with default slot content", () => {
        const wrapper = createWrapper({
            slots: {
                default: /* HTML */ ` <p>Content</p> `,
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});
