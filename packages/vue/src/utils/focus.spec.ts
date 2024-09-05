import "@fkui/test-utils/jest";
import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { focus } from "./focus";

it("should focus Vue component", () => {
    // Given
    expect.assertions(1);
    const TestComponent = defineComponent({
        template: /* HTML */ ` <p></p> `,
    });
    const wrapper = mount(TestComponent, {
        attachTo: createPlaceholderInDocument(),
    });

    // When
    focus(wrapper.vm, true);

    // Then
    expect(wrapper.element).toHaveFocus();
});

it("should focus $ref", () => {
    // Given
    expect.assertions(1);
    const TestComponent = defineComponent({
        template: /* HTML */ `
            <div>
                <p ref="foo"></p>
                <button type="button" @click="onClick">Focus</button>
            </div>
        `,
        methods: {
            onClick() {
                focus(this.$refs.foo, true);
            },
        },
    });
    const wrapper = mount(TestComponent, {
        attachTo: createPlaceholderInDocument(),
    });

    // When
    wrapper.get("button").trigger("click");

    // Then
    expect(wrapper.get("p").element).toHaveFocus();
});

it("should focus nested targetElement", () => {
    // Given
    expect.assertions(1);
    const DeepComponent = defineComponent({
        template: /* HTML */ ` <p data-test="expectedElement"></p> `,
    });
    const InnerWrapperComponent = defineComponent({
        components: { DeepComponent },
        template: /* HTML */ `
            <p>Content.</p>
            <deep-component ref="bar" />
        `,
        computed: {
            focusTarget() {
                return this.$refs.bar;
            },
        },
    });
    const OuterWrapperComponent = defineComponent({
        components: { InnerWrapperComponent },
        template: /* HTML */ `
            <h1>Heading</h1>
            <inner-wrapper-component ref="foo" />
            <button type="button" @click="onClick">Focus</button>
        `,
        computed: {
            focusTarget() {
                return this.$refs.foo;
            },
        },
        methods: {
            onClick() {
                focus(this, true);
            },
        },
    });
    const wrapper = mount(OuterWrapperComponent, {
        attachTo: createPlaceholderInDocument(),
    });

    wrapper.get("button").trigger("click");

    // Then
    expect(wrapper.get(`[data-test="expectedElement"]`).element).toHaveFocus();
});

it("should handle array", () => {
    expect.assertions(2);
    document.body.innerHTML = /* HTML */ `
        <div>
            <p id="first">1</p>
            <p id="second">2</p>
        </div>
    `;
    const elements = Array.from(document.querySelectorAll("p"));
    expect(() => focus(elements, true)).not.toThrow();
    expect(elements[0]).toHaveFocus();
});

it("should handle arbitrary value", () => {
    expect.assertions(1);
    expect(() => focus("Blurry", true)).not.toThrow();
});

it("should handle undefined", () => {
    expect.assertions(1);
    expect(() => focus(undefined, true)).not.toThrow();
});
