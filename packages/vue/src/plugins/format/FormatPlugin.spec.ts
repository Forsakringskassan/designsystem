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

describe("Bankgiro", () => {
    it("should format from string", async () => {
        const wrapper = createWrapper(
            `<span v-format:bankgiro="'1234566'"></span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--bankgiro">123-4566</span>`,
        );
    });

    it("should format from textContent", async () => {
        const wrapper = createWrapper(
            `<span v-format:bankgiro> 1234566 </span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--bankgiro">123-4566</span>`,
        );
    });
});

describe("Date", () => {
    it("should format from string", async () => {
        const wrapper = createWrapper(
            `<span v-format:date="'20250403'"></span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--date">2025-04-03</span>`,
        );
    });

    it("should format from textContent", async () => {
        const wrapper = createWrapper(`<span v-format:date> 20250403 </span>`);
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--date">2025-04-03</span>`,
        );
    });
});

describe("Date long", () => {
    it("should format from string", async () => {
        const wrapper = createWrapper(
            `<span v-format:date-long="'20250403'"></span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--date-long">3 april 2025</span>`,
        );
    });

    it("should format from textContent", async () => {
        const wrapper = createWrapper(
            `<span v-format:date-long> 20250403 </span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--date-long">3 april 2025</span>`,
        );
    });
});

describe("Date full", () => {
    it("should format from string", async () => {
        const wrapper = createWrapper(
            `<span v-format:date-full="'20250403'"></span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--date-full">torsdag 3 april 2025</span>`,
        );
    });

    it("should format from textContent", async () => {
        const wrapper = createWrapper(
            `<span v-format:date-full> 20250403 </span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--date-full">torsdag 3 april 2025</span>`,
        );
    });
});

describe("Date range", () => {
    it("should format range of dates", async () => {
        const wrapper = createWrapper(`<span v-format:date-range='{
            from: "20201101",
            to: "20250403",
        }'></span>`);
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--date-range">2020-11-01 – 2025-04-03</span>`,
        );
    });
});

describe("Organisationsnummer", () => {
    it("should format from string", async () => {
        const wrapper = createWrapper(
            `<span v-format:orgnr="'9999999999'"></span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--orgnr">999999-9999</span>`,
        );
    });

    it("should format from textContent", async () => {
        const wrapper = createWrapper(
            `<span v-format:orgnr> 9999999999 </span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--orgnr">999999-9999</span>`,
        );
    });
});

describe("Personnummer", () => {
    it("should format from string", async () => {
        const wrapper = createWrapper(
            `<span v-format:pnr="'189001079806'"></span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--pnr">18900107-9806</span>`,
        );
    });

    it("should format from textContent", async () => {
        const wrapper = createWrapper(
            `<span v-format:pnr> 189001079806 </span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--pnr">18900107-9806</span>`,
        );
    });
});

describe("Text", () => {
    it("should format from string", async () => {
        const wrapper = createWrapper(
            `<span v-format:text="'Some random text'"></span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--text">Some random text</span>`,
        );
    });

    it("should format from textContent", async () => {
        const wrapper = createWrapper(
            `<span v-format:text> Some random text. <span style="color: red"> Some red text </span> </span>`,
        );
        expect(wrapper).toMatchInlineSnapshot(
            `<span class="formatter--text"> Some random text. <span style="color: red;"> Some red text </span></span>`,
        );
    });
});
