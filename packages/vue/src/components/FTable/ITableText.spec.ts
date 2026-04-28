import { type ComponentPublicInstance } from "vue";
import { flushPromises, mount } from "@vue/test-utils";
import ITableText from "./ITableText.vue";
import { normalizeTableColumn } from "./table-column";

interface Row {
    foo: string;
}

jest.mock("./start-stop-edit", () => ({
    useStartStopEdit: () => ({
        stopEdit: jest.fn(),
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
});
