import { ref, shallowRef } from "vue";
import { FDate } from "@fkui/date";
import { config, shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { FormatPlugin } from "./format-plugin";

config.global.plugins = [FormatPlugin];

describe("Number", () => {
    it("should format number from string", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:number="'1234567890.1234'"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--number">1&nbsp;234&nbsp;567&nbsp;890,123</span>"`,
        );
    });

    it("should format number from number", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:number="1234567890.1234"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--number">1&nbsp;234&nbsp;567&nbsp;890,123</span>"`,
        );
    });

    it("should format number from NumberFormat", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span
                    v-format:number="{ number: 123456.7890123, decimals: 2 }"
                ></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--number">123&nbsp;456,79</span>"`,
        );
    });

    it("should format number as string from NumberFormat", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span
                    v-format:number="{number: '123456.7890123', decimals: 2}"
                ></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--number">123&nbsp;456,79</span>"`,
        );
    });

    it("should render empty element for invalid data", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:number="'ABC'"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--number"></span>"`,
        );
    });

    it("should render empty element for undefined", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:number="undefined"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--number"></span>"`,
        );
    });

    it("should render empty element for null", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:number="null"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--number"></span>"`,
        );
    });

    it("should be reactive", async () => {
        expect.assertions(2);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:number="value"></span>
                <button type="button" @click="value=0">Zero</button>
            `,
            setup() {
                return { value: ref(12_345) };
            },
        });
        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--number">12&nbsp;345</span>
          <button type="button">Zero</button>"
        `);
        const button = wrapper.get("button").element;
        button.click();
        await wrapper.vm.$nextTick();

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--number">0</span>
          <button type="button">Zero</button>"
        `);
    });
});

describe("Bankgiro", () => {
    it("should format from string", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:bankgiro="'1234566'"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--bankgiro">123-4566</span>"`,
        );
    });

    it("should render empty element from number", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:bankgiro="1234566"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--bankgiro"></span>"`,
        );
    });

    it("should render empty element for invalid data", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:bankgiro="'ABC'"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--bankgiro"></span>"`,
        );
    });

    it("should render empty element for undefined", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:bankgiro="undefined"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--bankgiro"></span>"`,
        );
    });

    it("should render empty element for null", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:bankgiro="null"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--bankgiro"></span>"`,
        );
    });

    it("should be reactive", async () => {
        expect.assertions(2);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:bankgiro="value"></span>
                <button type="button" @click="value='9999996'">Update</button>
            `,
            setup() {
                return { value: ref("1234566") };
            },
        });

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--bankgiro">123-4566</span>
          <button type="button">Update</button>"
        `);
        const button = wrapper.get("button").element;
        button.click();
        await wrapper.vm.$nextTick();

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--bankgiro">999-9996</span>
          <button type="button">Update</button>"
        `);
    });
});

describe("Date", () => {
    it("should format from string", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:date="'20250403'"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date">2025-04-03</span>"`,
        );
    });

    it("should format from FDate", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2025-04-15");
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:date="value"></span> `,
            setup() {
                return { value: shallowRef(date) };
            },
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date">2025-04-15</span>"`,
        );
    });

    it("should render empty element for invalid date", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:date="'20251333'"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date"></span>"`,
        );
    });

    it("should render empty element for invalid data", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:date="'ABC'"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date"></span>"`,
        );
    });

    it("should render empty element for undefined", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:date="undefined"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date"></span>"`,
        );
    });

    it("should render empty element for null", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:date="null"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date"></span>"`,
        );
    });

    it("should be reactive", async () => {
        expect.assertions(2);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:date="value"></span>
                <button type="button" @click="value='20200101'">Update</button>
            `,
            setup() {
                return { value: ref("20251231") };
            },
        });

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--date">2025-12-31</span>
          <button type="button">Update</button>"
        `);
        const button = wrapper.get("button").element;
        button.click();
        await wrapper.vm.$nextTick();

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--date">2020-01-01</span>
          <button type="button">Update</button>"
        `);
    });
});

describe("Date long", () => {
    it("should format from string", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:date-long="'20250403'"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-long">3 april 2025</span>"`,
        );
    });

    it("should format from FDate", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2025-04-15");
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:date-long="value"></span>`,
            setup() {
                return { value: shallowRef(date) };
            },
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-long">15 april 2025</span>"`,
        );
    });

    it("should render empty element for invalid date", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:date-long="'20251333'"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-long"></span>"`,
        );
    });

    it("should render empty element for invalid data", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:date-long="'ABC'"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-long"></span>"`,
        );
    });

    it("should render empty element for undefined", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:date-long="undefined"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-long"></span>"`,
        );
    });

    it("should render empty element for null", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:date-long="null"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-long"></span>"`,
        );
    });

    it("should be reactive", async () => {
        expect.assertions(2);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:date-long="value"></span>
                <button type="button" @click="value='20200101'">Update</button>
            `,
            setup() {
                return { value: ref("20251231") };
            },
        });

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--date-long">31 december 2025</span>
          <button type="button">Update</button>"
        `);
        const button = wrapper.get("button").element;
        button.click();
        await wrapper.vm.$nextTick();

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--date-long">1 januari 2020</span>
          <button type="button">Update</button>"
        `);
    });
});

describe("Date full", () => {
    it("should format from string", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:date-full="'20250403'"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-full">torsdag 3 april 2025</span>"`,
        );
    });

    it("should format from FDate", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2025-04-15");
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:date-full="value"></span>`,
            setup() {
                return { value: shallowRef(date) };
            },
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-full">tisdag 15 april 2025</span>"`,
        );
    });

    it("should render empty element for invalid date", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:date-full="'20251333'"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-full"></span>"`,
        );
    });

    it("should render empty element for invalid data", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:date-full="'ABC'"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-full"></span>"`,
        );
    });

    it("should render empty element for undefined", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:date-full="undefined"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-full"></span>"`,
        );
    });

    it("should render empty element for null", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:date-full="null"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-full"></span>"`,
        );
    });

    it("should be reactive", async () => {
        expect.assertions(2);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:date-full="value"></span>
                <button type="button" @click="value='20200101'">Update</button>
            `,
            setup() {
                return { value: ref("20251231") };
            },
        });

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--date-full">onsdag 31 december 2025</span>
          <button type="button">Update</button>"
        `);
        const button = wrapper.get("button").element;
        button.click();
        await wrapper.vm.$nextTick();

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--date-full">onsdag 1 januari 2020</span>
          <button type="button">Update</button>"
        `);
    });
});

describe("Date range", () => {
    it("should format range of string dates in iso format by default", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span
                    v-format:date-range='{
            from: "20201101",
            to: "20250403",
        }'
                ></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-range">2020-11-01 – 2025-04-03</span>"`,
        );
    });

    it("should format range of string dates in human format", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span
                    v-format:date-range='{
            from: "20201101",
            to: "20250403",
            format: "human",
        }'
                ></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-range">1 november 2020 – 3 april 2025</span>"`,
        );
    });

    it("should format range of FDate dates in human format", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2025-04-15");
        const wrapper = shallowMount({
            template: /* HTML */ ` <span
                v-format:date-range="{
            from: value,
            to: value.addDays(100),
            format: 'human',
        }"
            ></span>`,
            setup() {
                return { value: shallowRef(date) };
            },
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-range">15 april – 24 juli 2025</span>"`,
        );
    });

    it("should format date range in same month without repeating month", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span
                v-format:date-range='{
            from: "20000503",
            to: "20000505",
            format: "human",
        }'
            ></span>`,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-range">3 – 5 maj 2000</span>"`,
        );
    });

    it("should format date range in same year without repeating year", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span
                v-format:date-range='{
            from: "20000605",
            to: "20000705",
            format: "human",
        }'
            ></span>`,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-range">5 juni – 5 juli 2000</span>"`,
        );
    });

    it("should format date range across years", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span
                v-format:date-range='{
            from: "20000604",
            to: "20010216",
            format: "human",
        }'
            ></span>`,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-range">4 juni 2000 – 16 februari 2001</span>"`,
        );
    });

    it("should render empty element for invalid date", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span
                    v-format:date-range='{
            from: "20201400",
            to: "20251438",
        }'
                ></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-range"></span>"`,
        );
    });

    it("should render empty element for invalid data", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:date-range="'ABC'"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-range"></span>"`,
        );
    });

    it("should render empty element for undefined", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:date-range="undefined"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-range"></span>"`,
        );
    });

    it("should render empty element for null", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:date-range="null"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--date-range"></span>"`,
        );
    });

    it("should be reactive", async () => {
        expect.assertions(2);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span
                    v-format:date-range='{
                    from: value,
                    to: "20250403",
                    format: "human",
                }'
                ></span>
                <button type="button" @click="value='19990203'">Update</button>
            `,
            setup() {
                return { value: ref("20200101") };
            },
        });

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--date-range">1 januari 2020 – 3 april 2025</span>
          <button type="button">Update</button>"
        `);
        const button = wrapper.get("button").element;
        button.click();
        await wrapper.vm.$nextTick();

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--date-range">3 februari 1999 – 3 april 2025</span>
          <button type="button">Update</button>"
        `);
    });
});

describe("Organisationsnummer", () => {
    it("should format from string", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:orgnr="'9999999999'"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--orgnr">999999-9999</span>"`,
        );
    });

    it("should render empty element from number", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:orgnr="9999999999"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--orgnr"></span>"`,
        );
    });

    it("should render empty element for invalid data", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:orgnr="'ABC'"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--orgnr"></span>"`,
        );
    });

    it("should render empty element for undefined", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:orgnr="undefined"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--orgnr"></span>"`,
        );
    });

    it("should render empty element for null", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:orgnr="null"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--orgnr"></span>"`,
        );
    });

    it("should be reactive", async () => {
        expect.assertions(2);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:orgnr="value"></span>
                <button type="button" @click="value='9999999999'">
                    Update
                </button>
            `,
            setup() {
                return { value: ref("5555555555") };
            },
        });

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--orgnr">555555-5555</span>
          <button type="button"> Update </button>"
        `);
        const button = wrapper.get("button").element;
        button.click();
        await wrapper.vm.$nextTick();

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--orgnr">999999-9999</span>
          <button type="button"> Update </button>"
        `);
    });
});

describe("Personnummer", () => {
    it("should format from string", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:pnr="'189001079806'"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--pnr">18900107-9806</span>"`,
        );
    });

    it("should render empty element from number", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:pnr="191202119150"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--pnr"></span>"`,
        );
    });

    it("should render empty element for invalid data", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:pnr="'ABC'"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--pnr"></span>"`,
        );
    });

    it("should render empty element for undefined", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:pnr="undefined"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--pnr"></span>"`,
        );
    });

    it("should render empty element for null", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:pnr="null"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--pnr"></span>"`,
        );
    });

    it("should be reactive", async () => {
        expect.assertions(2);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:pnr="value"></span>
                <button type="button" @click="value='189001079806'">
                    Update
                </button>
            `,
            setup() {
                return { value: ref("191202119150") };
            },
        });

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--pnr">19120211-9150</span>
          <button type="button"> Update </button>"
        `);
        const button = wrapper.get("button").element;
        button.click();
        await wrapper.vm.$nextTick();

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--pnr">18900107-9806</span>
          <button type="button"> Update </button>"
        `);
    });
});

describe("Text", () => {
    it("should format from string", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:text="'Some random text'"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--text">Some random text</span>"`,
        );
    });

    it("should render empty element from number", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:text="1234"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--text"></span>"`,
        );
    });

    it("should render empty element for undefined", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:text="undefined"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--text"></span>"`,
        );
    });

    it("should render empty element for null", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:text="null"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--text"></span>"`,
        );
    });

    it("should be reactive", async () => {
        expect.assertions(2);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:text="value"></span>
                <button type="button" @click="value='Another random text'">
                    Update
                </button>
            `,
            setup() {
                return { value: ref("Some random text") };
            },
        });

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--text">Some random text</span>
          <button type="button"> Update </button>"
        `);
        const button = wrapper.get("button").element;
        button.click();
        await wrapper.vm.$nextTick();

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--text">Another random text</span>
          <button type="button"> Update </button>"
        `);
    });
});

describe("Plusgiro", () => {
    it("should format from string", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:plusgiro="'9999996'"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--plusgiro">99 99 99-6</span>"`,
        );
    });

    it("should render empty element from number", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:plusgiro="9999996"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--plusgiro"></span>"`,
        );
    });

    it("should render empty element for invalid data", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:plusgiro="'999AB96'"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--plusgiro"></span>"`,
        );
    });

    it("should render empty element for undefined", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:plusgiro="undefined"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--plusgiro"></span>"`,
        );
    });

    it("should render empty element for null", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:plusgiro="null"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--plusgiro"></span>"`,
        );
    });

    it("should be reactive", async () => {
        expect.assertions(2);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:plusgiro="value"></span>
                <button type="button" @click="value='1 1111-2'">Update</button>
            `,
            setup() {
                return { value: ref("9999996") };
            },
        });

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--plusgiro">99 99 99-6</span>
          <button type="button">Update</button>"
        `);
        const button = wrapper.get("button").element;
        button.click();
        await wrapper.vm.$nextTick();

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--plusgiro">1 11 11-2</span>
          <button type="button">Update</button>"
        `);
    });
});

describe("Postnummer", () => {
    it("should format from string", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:postnummer="'93222'"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--postnummer">932 22</span>"`,
        );
    });

    it("should render empty element from number", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:postnummer="93222"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--postnummer"></span>"`,
        );
    });

    it("should render empty element for invalid data", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:postnummer="'932BC'"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--postnummer"></span>"`,
        );
    });

    it("should render empty element for undefined", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:postnummer="undefined"></span>
            `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--postnummer"></span>"`,
        );
    });

    it("should render empty element for null", () => {
        expect.assertions(1);
        const wrapper = shallowMount({
            template: /* HTML */ ` <span v-format:postnummer="null"></span> `,
        });
        expect(wrapper.html()).toMatchInlineSnapshot(
            `"<span class="formatter--postnummer"></span>"`,
        );
    });

    it("should be reactive", async () => {
        expect.assertions(2);
        const wrapper = shallowMount({
            template: /* HTML */ `
                <span v-format:postnummer="value"></span>
                <button type="button" @click="value='37224'">Update</button>
            `,
            setup() {
                return { value: ref("93222") };
            },
        });

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--postnummer">932 22</span>
          <button type="button">Update</button>"
        `);
        const button = wrapper.get("button").element;
        button.click();
        await wrapper.vm.$nextTick();

        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<span class="formatter--postnummer">372 24</span>
          <button type="button">Update</button>"
        `);
    });
});
