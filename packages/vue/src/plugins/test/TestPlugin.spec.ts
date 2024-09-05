import { mount, VueWrapper } from "@vue/test-utils";
import { defineComponent, h, resolveDirective, withDirectives } from "vue";
import { FTextField } from "../../components/FTextField";
import { TestPlugin } from "./TestPlugin";

function createWrapper(vTestValue: string, isVisible = true): VueWrapper {
    const TestComponent = defineComponent({
        name: "TestComponent",
        components: { FTextField },
        props: {
            isVisible: Boolean,
        },
        render() {
            if (this.isVisible) {
                const test = resolveDirective("test");
                const data = { maxlength: 100 };
                const node = h(
                    FTextField,
                    data,
                    () => "Testing v-test directive",
                );
                return withDirectives(node, [[test, vTestValue]]);
            }
            {
                return h("div", ["I am empty"]);
            }
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
    const wrapper = createWrapper("test-0047");

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.attributes("data-test")).toBe("test-0047");
});

it("should throw an exception if no value is provided for the v-test directive", async () => {
    /* eslint-disable-next-line no-console -- prevent vue from polluting output */
    console.error = jest.fn();
    expect.assertions(1);
    expect(() => createWrapper("")).toThrowErrorMatchingInlineSnapshot(
        `"Did you forgot to add a value to v-test?"`,
    );
});

it("should add data-test attribute if element is not in DOM from mount but toggled through v-if later on", async () => {
    const wrapper = createWrapper("test-0047", false);

    expect(wrapper.element).toMatchInlineSnapshot(`
<div>
  I am empty
</div>
`);

    await wrapper.setProps({ isVisible: true });

    expect(wrapper.attributes("data-test")).toBe("test-0047");
});
