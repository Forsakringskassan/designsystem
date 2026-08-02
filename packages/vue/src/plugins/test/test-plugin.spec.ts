import { defineComponent, h, resolveDirective, withDirectives } from "vue";
import { type VueWrapper, mount } from "@vue/test-utils";
import { expect, it, vi } from "vitest";
import { FTextField } from "../../components/FTextField";
import { TestPlugin } from "./test-plugin";

function createWrapper(vTestValue: string, isVisible = true): VueWrapper {
    const TestComponent = defineComponent({
        name: "TestComponent",
        components: { FTextField },
        props: {
            isVisible: Boolean,
        },
        render() {
            const test = resolveDirective("test");
            const data = { maxlength: 100 };
            const node = h(FTextField, data, () => "Testing v-test directive");
            return this.isVisible
                ? withDirectives(node, [[test, vTestValue]])
                : h("div", ["I am empty"]);
        },
    });

    return mount(TestComponent, {
        global: {
            plugins: [TestPlugin],
        },
        props: { isVisible },
    });
}

it("should add data-test attribute to the FTextField", () => {
    expect.assertions(2);
    const wrapper = createWrapper("test-0047");

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.attributes("data-test")).toBe("test-0047");
});

it("should throw an exception if no value is provided for the v-test directive", async () => {
    expect.assertions(1);
    vi.spyOn(console, "error").mockImplementation(() => {
        // Empty
    });

    expect(() => createWrapper("")).toThrowErrorMatchingInlineSnapshot(
        `[Error: Did you forgot to add a value to v-test?]`,
    );
});

it("should add data-test attribute if element is not in DOM from mount but toggled through v-if later on", async () => {
    expect.assertions(2);
    const wrapper = createWrapper("test-0047", false);

    expect(wrapper.element).toMatchInlineSnapshot(`
<div>
  I am empty
</div>
`);

    await wrapper.setProps({ isVisible: true });

    expect(wrapper.attributes("data-test")).toBe("test-0047");
});
