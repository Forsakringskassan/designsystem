import { type ComponentPublicInstance, reactive } from "vue";
import { flushPromises, mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import ITableText from "./ITableText.vue";
import { normalizeTableColumn } from "./table-column";

interface Row {
    foo: string;
}

vi.mock(import("./start-stop-edit"), () => ({
    useStartStopEdit: () => ({
        stopEdit: vi.fn(),
    }),
}));

describe("ITableText", () => {
    it("should prevent default when Space is pressed on a non-editable cell", () => {
        expect.assertions(1);
        const row: Row = { foo: "Foo" };
        const column = normalizeTableColumn<Row, keyof Row>({
            type: "text",
            header: "Header",
            key: "foo",
            editable: false,
        });
        const wrapper = mount(
            ITableText as unknown as ComponentPublicInstance,
            {
                props: { column, row },
            },
        );

        const event = new KeyboardEvent("keydown", {
            bubbles: true,
            cancelable: true,
            key: " ",
            code: "Space",
        });

        wrapper.get("td").element.dispatchEvent(event);

        expect(event.defaultPrevented).toBe(true);
    });

    it("should not prevent default when another key is pressed on a non-editable cell", () => {
        expect.assertions(1);
        const row: Row = { foo: "Foo" };
        const column = normalizeTableColumn<Row, keyof Row>({
            type: "text",
            header: "Header",
            key: "foo",
            editable: false,
        });
        const wrapper = mount(
            ITableText as unknown as ComponentPublicInstance,
            {
                props: { column, row },
            },
        );

        const event = new KeyboardEvent("keydown", {
            bubbles: true,
            cancelable: true,
            key: "Enter",
            code: "Enter",
        });

        wrapper.get("td").element.dispatchEvent(event);

        expect(event.defaultPrevented).toBe(false);
    });

    it("should restore td tabstop on blur when exiting edit mode", async () => {
        expect.assertions(5);
        const row = { text: "Foo" };
        const column = normalizeTableColumn<typeof row>({
            type: "text",
            header: "Text",
            key: "text",
            editable: true,
            label: () => "Text",
        });

        const wrapper = mount(ITableText, {
            attachTo: document.body,
            props: {
                row,
                column,
            } as never,
            global: {
                stubs: {
                    IPopupError: true,
                },
            },
        });

        const td = wrapper.get("td");
        const input = wrapper.get("input");

        expect(td.element.tabIndex).toBe(-1);
        expect(input.element.tabIndex).toBe(-1);

        await td.trigger("click");
        await flushPromises();

        expect(input.element.tabIndex).toBe(0);

        await input.trigger("blur");
        await flushPromises();

        expect(input.element.tabIndex).toBe(-1);
        expect(td.element.tabIndex).toBe(0);
    });

    it.each([
        { key: "Tab", shiftKey: false },
        { key: "Shift+Tab", shiftKey: true },
    ])(
        "should save value and keep focus on cell then $key is pressed in edit mode",
        async ({ shiftKey }) => {
            expect.assertions(8);
            const row = { text: "Foo" };
            const column = normalizeTableColumn<typeof row>({
                type: "text",
                header: "Text",
                key: "text",
                editable: true,
                label: () => "Text",
            });

            const wrapper = mount(ITableText, {
                attachTo: document.body,
                props: {
                    row,
                    column,
                } as never,
                global: {
                    stubs: {
                        IPopupError: true,
                    },
                },
            });

            const td = wrapper.get("td");
            const input = wrapper.get("input");

            expect(td.element.tabIndex).toBe(-1);
            expect(input.element.tabIndex).toBe(-1);

            await td.trigger("click");
            await flushPromises();

            expect(input.element.tabIndex).toBe(0);

            await input.setValue("Mjauu");

            const event = new KeyboardEvent("keydown", {
                bubbles: true,
                cancelable: true,
                key: "Tab",
                code: "Tab",
                shiftKey,
            });

            input.element.dispatchEvent(event);
            await flushPromises();

            expect(event.defaultPrevented).toBe(true);
            expect(input.element.tabIndex).toBe(-1);
            expect(td.element.tabIndex).toBe(0);
            expect(document.activeElement).toBe(td.element);
            expect(row.text).toBe("Mjauu");
        },
    );

    it("should not set numeric class when tnum is disabled in editable cell", () => {
        expect.assertions(1);
        const row: Row = { foo: "Foo" };
        const column = normalizeTableColumn<Row, keyof Row>({
            type: "text",
            header: "Header",
            key: "foo",
            editable: true,
            tnum: false,
        });
        const wrapper = mount(
            ITableText as unknown as ComponentPublicInstance,
            {
                props: { column, row },
            },
        );

        expect(wrapper.get("td > div").classes()).not.toContain(
            "table-ng__editable__numeric",
        );
    });

    it("should set numeric class when tnum is enabled in editable cell", () => {
        expect.assertions(1);
        const row: Row = { foo: "Foo" };
        const column = normalizeTableColumn<Row, keyof Row>({
            type: "text",
            header: "Header",
            key: "foo",
            editable: true,
            tnum: true,
        });
        const wrapper = mount(
            ITableText as unknown as ComponentPublicInstance,
            {
                props: { column, row },
            },
        );

        expect(wrapper.get("td > div").classes()).toContain(
            "table-ng__editable__numeric",
        );
    });

    it("should not set numeric class when tnum is disabled in static cell", () => {
        expect.assertions(1);
        const row: Row = { foo: "Foo" };
        const column = normalizeTableColumn<Row, keyof Row>({
            type: "text",
            header: "Header",
            key: "foo",
            editable: false,
            tnum: false,
        });
        const wrapper = mount(
            ITableText as unknown as ComponentPublicInstance,
            {
                props: { column, row },
            },
        );

        expect(wrapper.get("td").classes()).not.toContain(
            "table-ng__cell--numeric",
        );
    });

    it("should set numeric class when tnum is enabled in static cell", () => {
        expect.assertions(1);
        const row: Row = { foo: "Foo" };
        const column = normalizeTableColumn<Row, keyof Row>({
            type: "text",
            header: "Header",
            key: "foo",
            editable: false,
            tnum: true,
        });
        const wrapper = mount(
            ITableText as unknown as ComponentPublicInstance,
            {
                props: { column, row },
            },
        );

        expect(wrapper.get("td").classes()).toContain(
            "table-ng__cell--numeric",
        );
    });

    it("should save value when cell becomes editable after mount", async () => {
        expect.assertions(3);
        const row = reactive({ unlocked: false, text: "" });
        const column = normalizeTableColumn<typeof row, keyof typeof row>({
            type: "text",
            header: "Text",
            key: "text",
            editable: (it) => it.unlocked,
            label: () => "Text",
        });

        const wrapper = mount(
            ITableText as unknown as ComponentPublicInstance,
            {
                attachTo: document.body,
                props: { row, column },
                global: { stubs: { IPopupError: true } },
            },
        );

        expect(wrapper.find("input").exists()).toBe(false);

        row.unlocked = true;
        await flushPromises();

        await wrapper.get("td").trigger("click");
        await wrapper.get("input").setValue("Mjauu");
        await wrapper.get("input").trigger("blur");
        await flushPromises();

        expect(row.text).toBe("Mjauu");
        expect(wrapper.get("td .table-ng__editable__text").text()).toBe(
            "Mjauu",
        );
    });

    it("should save value when cell becomes editable again", async () => {
        expect.assertions(1);
        const row = reactive({ unlocked: true, text: "" });
        const column = normalizeTableColumn<typeof row, keyof typeof row>({
            type: "text",
            header: "Text",
            key: "text",
            editable: (it) => it.unlocked,
            label: () => "Text",
        });

        const wrapper = mount(
            ITableText as unknown as ComponentPublicInstance,
            {
                attachTo: document.body,
                props: { row, column },
                global: { stubs: { IPopupError: true } },
            },
        );

        row.unlocked = false;
        await flushPromises();
        row.unlocked = true;
        await flushPromises();

        await wrapper.get("td").trigger("click");
        await wrapper.get("input").setValue("Mjauu");
        await wrapper.get("input").trigger("blur");
        await flushPromises();

        expect(row.text).toBe("Mjauu");
    });

    it("should remove event listeners from the input when it is removed", async () => {
        expect.assertions(2);
        const row = reactive({ unlocked: true, text: "" });
        const column = normalizeTableColumn<typeof row, keyof typeof row>({
            type: "text",
            header: "Text",
            key: "text",
            editable: (it) => it.unlocked,
            label: () => "Text",
        });

        const wrapper = mount(
            ITableText as unknown as ComponentPublicInstance,
            {
                attachTo: document.body,
                props: { row, column },
                global: { stubs: { IPopupError: true } },
            },
        );
        await flushPromises();
        const input = wrapper.get("input").element;
        const removeSpy = vi.spyOn(input, "removeEventListener");

        row.unlocked = false;
        await flushPromises();

        const removed = removeSpy.mock.calls.map(([type]) => type);
        expect(removed).toContain("blur");
        expect(removed).toContain("change");
    });

    it("should remove event listeners from the input when unmounted", async () => {
        expect.assertions(1);
        const row = reactive({ text: "" });
        const column = normalizeTableColumn<typeof row, keyof typeof row>({
            type: "text",
            header: "Text",
            key: "text",
            editable: true,
            label: () => "Text",
        });

        const wrapper = mount(
            ITableText as unknown as ComponentPublicInstance,
            {
                attachTo: document.body,
                props: { row, column },
                global: { stubs: { IPopupError: true } },
            },
        );
        await flushPromises();
        const removeSpy = vi.spyOn(
            wrapper.get("input").element,
            "removeEventListener",
        );

        wrapper.unmount();
        await flushPromises();

        expect(removeSpy).toHaveBeenCalledWith(
            "blur",
            expect.any(Function),
            undefined,
        );
    });

    it.each([
        { editable: false, wrap: undefined, expected: false },
        { editable: false, wrap: false, expected: false },
        { editable: false, wrap: true, expected: true },
        { editable: true, wrap: undefined, expected: false },
        { editable: true, wrap: false, expected: false },
        { editable: true, wrap: true, expected: true },
    ])(
        "should have wrap class=$expected when editable=$editable and wrap=$wrap",
        ({ editable, wrap, expected }) => {
            expect.assertions(1);

            const row: Row = { foo: "Some text that could wrap" };
            const column = normalizeTableColumn<Row, keyof Row>({
                type: "text",
                header: "Header",
                key: "foo",
                editable,
                wrap,
            });

            const wrapper = mount(
                ITableText as unknown as ComponentPublicInstance,
                {
                    props: { column, row },
                },
            );

            const selector = editable
                ? ".table-ng__editable__text"
                : ".table-ng__cell--static__text";

            const wrapClass = editable
                ? "table-ng__editable__text--wrap"
                : "table-ng__cell--static__text--wrap";

            const classes = wrapper.get(selector).classes();
            expect(classes.includes(wrapClass)).toBe(expected);
        },
    );
});
