import { mount, VueWrapper } from "@vue/test-utils";
import { defineComponent } from "vue";
import { FormatPlugin } from "./FormatPlugin";

function createWrapper(
    template: string,
    value?: string | number | FDate,
): VueWrapper {
    const TestComponent = defineComponent({
        name: "TestComponent",
        template,
    });

    return mount(TestComponent, {
        global: {
            plugins: [FormatPlugin],
        },
        data() {
            return {
                value,
            };
        },
    });
}

describe("Number", () => {
    it("should format number from string", async () => {
        const wrapper = createWrapper(
            `<span v-format:number="'1234567890.1234'"></span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--number">1&nbsp;234&nbsp;567&nbsp;890,123</span>`,
        );
    });

    it("should format number from number", async () => {
        const wrapper = createWrapper(
            `<span v-format:number="1234567890.1234"></span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--number">1&nbsp;234&nbsp;567&nbsp;890,123</span>`,
        );
    });

    it("should format number from NumberFormat", async () => {
        const wrapper = createWrapper(
            `<span v-format:number="{number: 123456.7890123, decimals: 2}"></span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--number">123&nbsp;456,79</span>`,
        );
    });

    it("should format number as string from NumberFormat", async () => {
        const wrapper = createWrapper(
            `<span v-format:number="{number: '123456.7890123', decimals: 2}"></span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--number">123&nbsp;456,79</span>`,
        );
    });

    it("should render empty element for invalid data", async () => {
        const wrapper = createWrapper(`<span v-format:number="'ABC'"></span>`);
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--number"></span>`,
        );
    });

    it("should render empty element for undefined", async () => {
        const wrapper = createWrapper(
            `<span v-format:number="undefined"></span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--number"></span>`,
        );
    });

    it("should render empty element for null", async () => {
        const wrapper = createWrapper(`<span v-format:number="null"></span>`);
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--number"></span>`,
        );
    });

    it("should be reactive", async () => {
        const wrapper = createWrapper(
            /* HTML */ `
                <span v-format:number="value"></span>
                <button type="button" @click="value=0">Zero</button>
            `,
            12345,
        );

        expect(wrapper).toMatchInlineSnapshot(`
            <span class="formatter--number">12&nbsp;345</span>
            <button type="button">Zero</button>
        `);
        const button = wrapper.get("button").element;
        button.click();
        await wrapper.vm.$nextTick();

        expect(wrapper).toMatchInlineSnapshot(`
            <span class="formatter--number">0</span>
            <button type="button">Zero</button>
        `);
    });
});
