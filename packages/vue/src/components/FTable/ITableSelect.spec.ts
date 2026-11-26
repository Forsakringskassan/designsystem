import { nextTick, reactive } from "vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ITableSelect from "./ITableSelect.vue";
import { normalizeTableColumn } from "./table-column";

describe("ITableSelect", () => {
    it("should update displayed value when row value changes externally", async () => {
        expect.assertions(2);

        const row = reactive({ value: "foo" });
        const column = normalizeTableColumn<typeof row>({
            type: "select",
            header: "Value",
            key: "value",
            options: ["foo", "bar", "baz"],
        });

        const wrapper = mount(ITableSelect<typeof row, "value">, {
            props: { column, row },
        });

        const displayedValue = (): string =>
            wrapper.get(".table-ng__editable__text").text();

        expect(displayedValue()).toBe("foo");

        row.value = "bar";
        await nextTick();

        expect(displayedValue()).toBe("bar");
    });
});
