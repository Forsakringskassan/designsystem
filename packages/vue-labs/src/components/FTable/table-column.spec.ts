import { defineTableColumn, normalizeTableColumn } from "./table-column";

interface Item {
    value: string;
}

const foo: Item = {
    value: "foo",
};

const bar: Item = {
    value: "bar",
};

describe("text", () => {
    it("should default to not editable", () => {
        expect.assertions(1);
        const column = defineTableColumn<Item>({
            type: "text",
        });
        const result = normalizeTableColumn(column);
        expect(result.editable(foo)).toBeFalsy();
    });

    it("should accept editable boolean property", () => {
        expect.assertions(1);
        const column = defineTableColumn<Item>({
            type: "text",
            editable: true,
        });
        const result = normalizeTableColumn(column);
        expect(result.editable(foo)).toBeTruthy();
    });

    it("should accept editable callback property", () => {
        expect.assertions(2);
        const column = defineTableColumn<Item>({
            type: "text",
            editable(item) {
                return item.value === "bar";
            },
        });
        const result = normalizeTableColumn(column);
        expect(result.editable(foo)).toBeFalsy();
        expect(result.editable(bar)).toBeTruthy();
    });
});
