import { type PropType, defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { XExampleSelectors } from "./XExample.selectors";

/* Fictive XExample component for testing purposes */
const XExample = defineComponent({
    props: {
        items: {
            type: Array as PropType<string[]>,
            default: () => ["foo", "bar"],
        },
    },
    template: /* HTML */ `
        <div class="example">
            <span class="example__label">Example label</span>
            <div v-for="item in items" :key="item" :data-item="item">
                {{ item }}
            </div>
            <div class="example__secret">top-secret</div>
        </div>
    `,
});

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(XExample);
    const { selector } = XExampleSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".example");
    expect(root.classes()).toContain("example");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(XExample);
    const { selector } = XExampleSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".example");
    expect(root.classes()).toContain("example");
});

it("label() should return the label element", () => {
    expect.assertions(1);
    const wrapper = mount(XExample);
    const { label } = XExampleSelectors();
    const el = wrapper.get(label());
    expect(el.text()).toBe("Example label");
});

it("itemByName() should return the item with the given name", () => {
    expect.assertions(1);
    const wrapper = mount(XExample, { props: { items: ["fred", "barney"] } });
    const { itemByName } = XExampleSelectors();
    const el = wrapper.get(itemByName("barney"));
    expect(el.text()).toBe("barney");
});

it("secret() should return the internal secret element", () => {
    expect.assertions(1);
    const wrapper = mount(XExample);
    const { secret } = XExampleSelectors();
    const el = wrapper.get(secret());
    expect(el.text()).toBe("top-secret");
});
