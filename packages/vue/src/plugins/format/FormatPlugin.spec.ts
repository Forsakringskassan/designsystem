import { mount, VueWrapper } from "@vue/test-utils";
import { defineComponent } from "vue";
import { FormatPlugin } from "./FormatPlugin";

function createWrapper(template: string): VueWrapper {
    const TestComponent = defineComponent({
        name: "TestComponent",
        template,
    });

    return mount(TestComponent, {
        global: {
            plugins: [FormatPlugin],
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

    it("should format number from textContent", async () => {
        const wrapper = createWrapper(
            `<span v-format:number> 1234567890.1234 </span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--number">1&nbsp;234&nbsp;567&nbsp;890,123</span>`,
        );
    });

    it("should render empty element", async () => {
        const wrapper = createWrapper(
            `<span v-format:number> <h1>Test</h1> </span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--number"></span>`,
        );
    });
});
