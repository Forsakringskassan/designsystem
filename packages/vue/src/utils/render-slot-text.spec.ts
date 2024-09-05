import { defineComponent } from "vue";
import { mount, VueWrapper } from "@vue/test-utils";
import { type RenderSlotOptions, renderSlotText } from "./render-slot-text";

interface Props {
    scopeData?: Record<string, unknown>;
    options?: RenderSlotOptions;
}

const InnerComponent = defineComponent({
    template: /* HTML */ ` <p>{{ rendered }}</p> `,
    props: {
        scopeData: {
            type: Object,
            required: false,
        },
        options: {
            type: Object,
            required: false,
        },
    },
    computed: {
        rendered(): string | undefined {
            const slot = this.$slots["source"];
            return renderSlotText(slot, this.scopeData, this.options);
        },
    },
});

async function createWrapper(
    template: string,
    props?: Props,
): Promise<VueWrapper> {
    const Component = defineComponent({
        components: { InnerComponent },
        template,
    });
    const wrapper = mount(Component, {
        props,
    });
    await wrapper.vm.$nextTick();
    return wrapper;
}

describe("renderSlotText()", () => {
    it("should render slot", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <InnerComponent>
                <template #source>foo</template>
            </InnerComponent>
        `;
        const wrapper = await createWrapper(markup);
        expect(wrapper.text()).toBe("foo");
    });

    it("should handle missing slot", async () => {
        expect.assertions(1);
        const markup = /* HTML */ ` <InnerComponent> </InnerComponent> `;
        const wrapper = await createWrapper(markup);
        expect(wrapper.text()).toBe("");
    });

    it("should handle empty slot", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <InnerComponent>
                <template #source></template>
            </InnerComponent>
        `;
        const wrapper = await createWrapper(markup);
        expect(wrapper.text()).toBe("");
    });

    it("should handle HTML comments", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <InnerComponent>
                <template #source>
                    foo
                    <!-- bar -->
                    baz
                </template>
            </InnerComponent>
        `;
        const wrapper = await createWrapper(markup);
        expect(wrapper.text()).toBe("foo baz");
    });

    it("should handle falsy v-if", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <InnerComponent>
                <template #source>
                    foo
                    <span v-if="false">bar</span>
                    baz
                </template>
            </InnerComponent>
        `;
        const wrapper = await createWrapper(markup);
        expect(wrapper.text()).toBe("foo baz");
    });

    it("should handle truthy v-if", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <InnerComponent>
                <template #source>
                    foo
                    <span v-if="true">bar</span>
                    baz
                </template>
            </InnerComponent>
        `;
        const wrapper = await createWrapper(markup);
        expect(wrapper.text()).toBe("foo bar baz");
    });

    it("should handle scoped slot", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <InnerComponent :scope-data="{ name: 'World' }">
                <template #source="{ name }"> Hello {{ name }}! </template>
            </InnerComponent>
        `;
        const wrapper = await createWrapper(markup);
        expect(wrapper.text()).toBe("Hello World!");
    });

    it("should handle nested content", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <InnerComponent>
                <template #source> 1<span>2</span>3 </template>
            </InnerComponent>
        `;
        const wrapper = await createWrapper(markup);
        expect(wrapper.text()).toBe("123");
    });

    it("should collapse interelement whitespace", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <InnerComponent>
                <template #source> 1 <span> 2 </span> 3 </template>
            </InnerComponent>
        `;
        const wrapper = await createWrapper(markup);
        expect(wrapper.text()).toBe("1 2 3");
    });

    it("should trim leading and trailing whitespace", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <InnerComponent>
                <template #source> 1 </template>
            </InnerComponent>
        `;
        const wrapper = await createWrapper(markup);
        expect(wrapper.text()).toBe("1");
    });

    it("should handle deep nested content", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <InnerComponent>
                <template #source>
                    1
                    <span>
                        2
                        <span>3</span>
                        4
                    </span>
                    5
                </template>
            </InnerComponent>
        `;
        const wrapper = await createWrapper(markup);
        expect(wrapper.text()).toBe("1 2 3 4 5");
    });

    it("should ignore screenreader text by default", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <InnerComponent>
                <template #source>
                    foo
                    <span class="sr-only">bar</span>
                    baz
                </template>
            </InnerComponent>
        `;
        const wrapper = await createWrapper(markup);
        expect(wrapper.text()).toBe("foo baz");
    });

    it("should not ignore screenreader text if disabled by option", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <InnerComponent v-bind="$attrs">
                <template #source>
                    foo
                    <span class="sr-only">bar</span>
                    baz
                </template>
            </InnerComponent>
        `;
        const wrapper = await createWrapper(markup, {
            options: {
                stripClasses: [],
            },
        });
        expect(wrapper.text()).toBe("foo bar baz");
    });

    it("should ignore custom classes", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <InnerComponent v-bind="$attrs">
                <template #source>
                    foo
                    <span class="bar">bar</span>
                    baz
                </template>
            </InnerComponent>
        `;
        const wrapper = await createWrapper(markup, {
            options: {
                stripClasses: ["bar"],
            },
        });
        expect(wrapper.text()).toBe("foo baz");
    });
});
