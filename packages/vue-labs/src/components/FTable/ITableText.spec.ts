import { type ComponentPublicInstance } from "vue";
import { mount } from "@vue/test-utils";
import ITableText from "./ITableText.vue";
import { normalizeTableColumn } from "./table-column";

interface Row {
    foo: string;
}

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
});
