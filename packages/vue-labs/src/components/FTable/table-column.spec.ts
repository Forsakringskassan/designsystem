import { ref } from "vue";
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
    describe("header property", () => {
        it("should default to empty text", () => {
            expect.assertions(1);
            const column = defineTableColumn<Item>({
                type: "text",
            });
            const result = normalizeTableColumn(column);
            expect(result.header.value).toBe("");
        });

        it("should accept string", () => {
            expect.assertions(1);
            const column = defineTableColumn<Item>({
                type: "text",
                header: "lorem ipsum",
            });
            const result = normalizeTableColumn(column);
            expect(result.header.value).toBe("lorem ipsum");
        });

        it("should accept ref", () => {
            expect.assertions(1);
            const header = ref("");
            const column = defineTableColumn<Item>({
                type: "text",
                header,
            });
            header.value = "lorem ipsum";
            const result = normalizeTableColumn(column);
            expect(result.header.value).toBe("lorem ipsum");
        });
    });

    describe("description property", () => {
        it("should default to empty text", () => {
            expect.assertions(1);
            const column = defineTableColumn<Item>({
                type: "text",
            });
            const result = normalizeTableColumn(column);
            expect(result.description.value).toBe("");
        });

        it("should accept string", () => {
            expect.assertions(1);
            const column = defineTableColumn<Item>({
                type: "text",
                description: "lorem ipsum",
            });
            const result = normalizeTableColumn(column);
            expect(result.description.value).toBe("lorem ipsum");
        });

        it("should accept ref", () => {
            expect.assertions(1);
            const description = ref("");
            const column = defineTableColumn<Item>({
                type: "text",
                description,
            });
            description.value = "lorem ipsum";
            const result = normalizeTableColumn(column);
            expect(result.description.value).toBe("lorem ipsum");
        });
    });

    describe("editable property", () => {
        it("should default to false", () => {
            expect.assertions(1);
            const column = defineTableColumn<Item>({
                type: "text",
            });
            const result = normalizeTableColumn(column);
            expect(result.editable(foo)).toBeFalsy();
        });

        it("should accept boolean", () => {
            expect.assertions(1);
            const column = defineTableColumn<Item>({
                type: "text",
                editable: true,
            });
            const result = normalizeTableColumn(column);
            expect(result.editable(foo)).toBeTruthy();
        });

        it("should accept callback", () => {
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

    describe("key", () => {
        it("should generate value function", () => {
            expect.assertions(2);
            const column = defineTableColumn<Item>({
                type: "text",
                key: "value",
            });
            const result = normalizeTableColumn(column);
            expect(result.value(foo)).toBe("foo");
            expect(result.value(bar)).toBe("bar");
        });

        it("should generate update function", () => {
            expect.assertions(2);
            const column = defineTableColumn<Item>({
                type: "text",
                key: "value",
            });
            const result = normalizeTableColumn(column);
            result.update(foo, "updated", foo.value);
            expect(result.value(foo)).toBe("updated");
            expect(result.value(bar)).toBe("bar");
        });

        it("should define sorting", () => {
            expect.assertions(1);
            const column = defineTableColumn<Item>({
                type: "text",
                key: "value",
            });
            const result = normalizeTableColumn(column);
            expect(result.sortable).toBe("value");
        });
    });
});
