import "html-validate/jest";
import { mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import { FDate } from "@fkui/date";
import { ValidationPlugin } from "../../plugins";
import FDatepickerField from "./FDatepickerField.vue";

beforeEach(() => {
    global.ResizeObserver = jest.fn().mockImplementation(() => ({
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
    }));
});

describe("transparency", () => {
    it("should pass attributes to textfield", () => {
        const wrapper = mount(FDatepickerField, {
            attrs: {
                title: "foo",
            },
            global: {
                plugins: [ValidationPlugin],
            },
        });

        expect(wrapper.get("input").attributes("title")).toBe("foo");
    });

    it("should pass listeners to textfield", async () => {
        expect.assertions(1);
        const keyup = jest.fn();
        const wrapper = mount(FDatepickerField, {
            attrs: { onKeyup: keyup },
        });
        const input = wrapper.get("input");
        await input.trigger("keyup");
        expect(keyup).toHaveBeenCalled();
    });
});

describe("textfield", () => {
    it("should be assigned id when specified", () => {
        const wrapper = mount(FDatepickerField, {
            attrs: {
                id: "foo",
            },
            global: {
                plugins: [ValidationPlugin],
            },
        });

        expect(wrapper.get("input").attributes("id")).toBe("foo");
    });

    it("should be assigned a generated id when unspecified", () => {
        const wrapper = mount(FDatepickerField);

        expect(wrapper.get("input").attributes("id")).toContain(
            "fkui-vue-element-",
        );
    });

    it("`2.1` should emit v-model event on change", async () => {
        expect.assertions(2);
        const wrapper = mount(FDatepickerField);

        const input = wrapper.get("input");
        input.setValue("2022-02-02");
        await flushPromises();

        const updateEvent = wrapper.emitted("update:modelValue")!;
        expect(updateEvent).toHaveLength(1);
        expect(updateEvent[0]).toEqual(["2022-02-02"]);
    });

    it("`2.1` should emit change event on change", async () => {
        expect.assertions(2);
        const wrapper = mount(FDatepickerField);

        const input = wrapper.get("input");
        input.setValue("2022-02-02");
        await flushPromises();

        const changeEvent = wrapper.emitted("change")!;
        expect(changeEvent).toHaveLength(1);
        expect(changeEvent[0]).toEqual(["2022-02-02"]);
    });
});

describe("calendar", () => {
    it("should emit v-model and change event when selecting day", async () => {
        expect.assertions(2);

        jest.spyOn(window, "scrollTo").mockReturnValue();

        const wrapper = mount(FDatepickerField, {
            global: {
                stubs: ["teleport"],
            },
        });

        const toggleCalendarButton = wrapper.get(
            "[data-test='calendar-button']",
        );
        await toggleCalendarButton.trigger("click");
        await flushPromises();

        const now = FDate.now().toString();
        const todayButton = wrapper.get(`[data-date='${now}']`);
        await todayButton.trigger("click");
        await flushPromises();

        expect(wrapper.emitted("update:modelValue")![0][0]).toBe(now);
        expect(wrapper.emitted("change")![0][0]).toBe(now);
    });
});

describe("html-validate", () => {
    describe("attributes", () => {
        it("disabled", () => {
            expect.assertions(2);
            const valid = /* HTML */ `
                <f-datepicker-field></f-datepicker-field>
                <f-datepicker-field disabled></f-datepicker-field>
                <f-datepicker-field :disabled="false"></f-datepicker-field>
                <f-datepicker-field :disabled="true"></f-datepicker-field>
            `;
            const invalid = /* HTML */ `
                <f-datepicker-field disabled="foobar"></f-datepicker-field>
            `;
            expect(valid).toMatchInlineCodeframe(`""`);
            expect(invalid).toMatchInlineCodeframe(`
                "error: Attribute "disabled" should omit value (attribute-boolean-style) at inline:2:37:
                  1 |
                > 2 |                 <f-datepicker-field disabled="foobar"></f-datepicker-field>
                    |                                     ^^^^^^^^
                  3 |
                Selector: f-datepicker-field
                error: Attribute "disabled" has invalid value "foobar" (attribute-allowed-values) at inline:2:47:
                  1 |
                > 2 |                 <f-datepicker-field disabled="foobar"></f-datepicker-field>
                    |                                               ^^^^^^
                  3 |
                Selector: f-datepicker-field"
            `);
        });

        it("initial-month", () => {
            expect.assertions(1);
            const valid = /* HTML */ `
                <f-datepicker-field></f-datepicker-field>
                <f-datepicker-field :initial-month="myInitialDate">
                </f-datepicker-field>
            `;
            expect(valid).toMatchInlineCodeframe(`""`);
        });

        it("highlight-today", () => {
            expect.assertions(2);
            const valid = /* HTML */ `
                <f-datepicker-field></f-datepicker-field>
                <f-datepicker-field highlight-today></f-datepicker-field>
                <f-datepicker-field :highlight-today="false">
                </f-datepicker-field>
                <f-datepicker-field :highlight-today="true">
                </f-datepicker-field>
            `;
            const invalid = /* HTML */ `
                <f-datepicker-field highlight-today="foobar">
                </f-datepicker-field>
            `;
            expect(valid).toMatchInlineCodeframe(`""`);
            expect(invalid).toMatchInlineCodeframe(`
                "error: Attribute "highlight-today" should omit value (attribute-boolean-style) at inline:2:37:
                  1 |
                > 2 |                 <f-datepicker-field highlight-today="foobar">
                    |                                     ^^^^^^^^^^^^^^^
                  3 |                 </f-datepicker-field>
                  4 |
                Selector: f-datepicker-field
                error: Attribute "highlight-today" has invalid value "foobar" (attribute-allowed-values) at inline:2:54:
                  1 |
                > 2 |                 <f-datepicker-field highlight-today="foobar">
                    |                                                      ^^^^^^
                  3 |                 </f-datepicker-field>
                  4 |
                Selector: f-datepicker-field"
            `);
        });

        it("always-inline", () => {
            expect.assertions(2);
            const valid = /* HTML */ `
                <f-datepicker-field></f-datepicker-field>
                <f-datepicker-field always-inline></f-datepicker-field>
                <f-datepicker-field :always-inline="false"></f-datepicker-field>
                <f-datepicker-field :always-inline="true"></f-datepicker-field>
            `;
            const invalid = /* HTML */ `
                <f-datepicker-field always-inline="foobar"></f-datepicker-field>
            `;
            expect(valid).toMatchInlineCodeframe(`""`);
            expect(invalid).toMatchInlineCodeframe(`
                "error: Attribute "always-inline" should omit value (attribute-boolean-style) at inline:2:37:
                  1 |
                > 2 |                 <f-datepicker-field always-inline="foobar"></f-datepicker-field>
                    |                                     ^^^^^^^^^^^^^
                  3 |
                Selector: f-datepicker-field
                error: Attribute "always-inline" has invalid value "foobar" (attribute-allowed-values) at inline:2:52:
                  1 |
                > 2 |                 <f-datepicker-field always-inline="foobar"></f-datepicker-field>
                    |                                                    ^^^^^^
                  3 |
                Selector: f-datepicker-field"
            `);
        });
    });

    describe("slots", () => {
        it("should allow phrasing content in #default slot", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-datepicker-field>
                    <template #default>
                        <span></span>
                    </template>
                </f-datepicker-field>
            `;
            expect(markup).toHTMLValidate();
        });

        it("should not allow block content in #default slot", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-datepicker-field>
                    <template #default>
                        <div></div>
                    </template>
                </f-datepicker-field>
            `;
            expect(markup).toMatchInlineCodeframe(`
                "error: <div> element is not permitted as content under slot "default" (<f-datepicker-field>) (element-permitted-content) at inline:4:26:
                  2 |                 <f-datepicker-field>
                  3 |                     <template #default>
                > 4 |                         <div></div>
                    |                          ^^^
                  5 |                     </template>
                  6 |                 </f-datepicker-field>
                  7 |
                Selector: f-datepicker-field > template > div"
            `);
        });

        it("should only allow <f-tooltip> in #tooltip slot", () => {
            expect.assertions(2);
            const valid = /* HTML */ `
                <f-datepicker-field>
                    <template #tooltip>
                        <f-tooltip screen-reader-text="bar"> foo </f-tooltip>
                    </template>
                </f-datepicker-field>
            `;
            const invalid = /* HTML */ `
                <f-datepicker-field>
                    <template #tooltip>
                        <div>foo</div>
                        <span> bar </span>
                        <button type="button">baz</button>
                    </template>
                </f-datepicker-field>
            `;
            expect(valid).toMatchInlineCodeframe(`""`);
            expect(invalid).toMatchInlineCodeframe(`
                "error: <div> element is not permitted as content under slot "tooltip" (<f-datepicker-field>) (element-permitted-content) at inline:4:26:
                  2 |                 <f-datepicker-field>
                  3 |                     <template #tooltip>
                > 4 |                         <div>foo</div>
                    |                          ^^^
                  5 |                         <span> bar </span>
                  6 |                         <button type="button">baz</button>
                  7 |                     </template>
                Selector: f-datepicker-field > template > div
                error: <span> element is not permitted as content under slot "tooltip" (<f-datepicker-field>) (element-permitted-content) at inline:5:26:
                  3 |                     <template #tooltip>
                  4 |                         <div>foo</div>
                > 5 |                         <span> bar </span>
                    |                          ^^^^
                  6 |                         <button type="button">baz</button>
                  7 |                     </template>
                  8 |                 </f-datepicker-field>
                Selector: f-datepicker-field > template > span
                error: <button> element is not permitted as content under slot "tooltip" (<f-datepicker-field>) (element-permitted-content) at inline:6:26:
                  4 |                         <div>foo</div>
                  5 |                         <span> bar </span>
                > 6 |                         <button type="button">baz</button>
                    |                          ^^^^^^
                  7 |                     </template>
                  8 |                 </f-datepicker-field>
                  9 |
                Selector: f-datepicker-field > template > button"
            `);
        });

        it("should allow phrasing content in #error-message slot", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-datepicker-field>
                    <template #error-message>
                        <span> foo </span>
                    </template>
                </f-datepicker-field>
            `;
            expect(markup).toHTMLValidate();
        });

        it("should not allow block content in #error-message slot", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-datepicker-field>
                    <template #error-message>
                        <div>foo</div>
                    </template>
                </f-datepicker-field>
            `;
            expect(markup).toMatchInlineCodeframe(`
                "error: <div> element is not permitted as content under slot "error-message" (<f-datepicker-field>) (element-permitted-content) at inline:4:26:
                  2 |                 <f-datepicker-field>
                  3 |                     <template #error-message>
                > 4 |                         <div>foo</div>
                    |                          ^^^
                  5 |                     </template>
                  6 |                 </f-datepicker-field>
                  7 |
                Selector: f-datepicker-field > template > div"
            `);
        });

        it("should allow phrasing content in #description slot", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-datepicker-field>
                    <template #description>
                        <span> foo </span>
                    </template>
                </f-datepicker-field>
            `;
            expect(markup).toHTMLValidate();
        });

        it("should not allow block content in #description slot", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-datepicker-field>
                    <template #description>
                        <div>foo</div>
                    </template>
                </f-datepicker-field>
            `;
            expect(markup).toMatchInlineCodeframe(`
                "error: <div> element is not permitted as content under slot "description" (<f-datepicker-field>) (element-permitted-content) at inline:4:26:
                  2 |                 <f-datepicker-field>
                  3 |                     <template #description>
                > 4 |                         <div>foo</div>
                    |                          ^^^
                  5 |                     </template>
                  6 |                 </f-datepicker-field>
                  7 |
                Selector: f-datepicker-field > template > div"
            `);
        });
    });
});
