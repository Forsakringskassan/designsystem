import { expect, it } from "vitest";
import { removeItem } from "./remove-item";

/* matching, nesting and reactivity are covered by `removeNestedItem` */

interface TestItem {
    id: string;
    nested?: TestItem[];
}

it("should return a new array without the item", () => {
    expect.assertions(2);
    const items: TestItem[] = [{ id: "a" }, { id: "b" }];
    const result = removeItem(items, items[1]);
    expect(result.map((it) => it.id)).toEqual(["a"]);
    expect(result).not.toBe(items);
});

it("should leave the original array untouched", () => {
    expect.assertions(1);
    const items: TestItem[] = [{ id: "a" }, { id: "b" }];
    removeItem(items, items[1]);
    expect(items.map((it) => it.id)).toEqual(["a", "b"]);
});

it("should remove nested item when nested key is given", () => {
    expect.assertions(1);
    const items: TestItem[] = [
        { id: "a", nested: [{ id: "a1" }, { id: "a2" }] },
    ];
    const result = removeItem(items, items[0].nested![1], "nested");
    expect(result[0].nested!.map((it) => it.id)).toEqual(["a1"]);
});
