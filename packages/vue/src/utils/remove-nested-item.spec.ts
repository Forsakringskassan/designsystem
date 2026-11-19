import { reactive, toRaw } from "vue";
import { expect, it } from "vitest";
import { removeNestedItem } from "./remove-nested-item";

interface TestItem {
    id: string;
    nested?: TestItem[];
}

function ids(items: TestItem[] | undefined): string[] {
    return (items ?? []).map((it) => it.id);
}

it("should remove matching item in place", () => {
    expect.assertions(2);
    const items: TestItem[] = [{ id: "a" }, { id: "b" }];
    const removed = removeNestedItem(items, items[1]);
    expect(removed).toBe(true);
    expect(ids(items)).toEqual(["a"]);
});

it("should not remove item with equal content but other reference", () => {
    expect.assertions(2);
    const items: TestItem[] = [{ id: "a" }, { id: "b" }];
    const removed = removeNestedItem(items, { id: "b" });
    expect(removed).toBe(false);
    expect(ids(items)).toEqual(["a", "b"]);
});

it("should remove nested item", () => {
    expect.assertions(2);
    const items: TestItem[] = [
        { id: "a", nested: [{ id: "a1" }, { id: "a2" }] },
    ];
    const removed = removeNestedItem(items, items[0].nested![1], "nested");
    expect(removed).toBe(true);
    expect(ids(items[0].nested)).toEqual(["a1"]);
});

it("should remove nested item at any depth", () => {
    expect.assertions(2);
    const items: TestItem[] = [
        {
            id: "a",
            nested: [{ id: "a1", nested: [{ id: "a1x" }, { id: "a1y" }] }],
        },
        { id: "b" },
    ];
    removeNestedItem(items, items[0].nested![0].nested![1], "nested");
    expect(ids(items[0].nested![0].nested)).toEqual(["a1x"]);
    expect(ids(items)).toEqual(["a", "b"]);
});

it("should keep identity of parent item when removing nested item", () => {
    expect.assertions(2);
    const items: TestItem[] = [
        { id: "a", nested: [{ id: "a1" }, { id: "a2" }] },
    ];
    const parent = items[0];
    const nested = parent.nested;
    removeNestedItem(items, parent.nested![0], "nested");
    expect(items[0]).toBe(parent);
    expect(items[0].nested).toBe(nested);
});

it("should not search nested items without nested key", () => {
    expect.assertions(2);
    const items: TestItem[] = [{ id: "a", nested: [{ id: "a1" }] }];
    const removed = removeNestedItem(items, items[0].nested![0]);
    expect(removed).toBe(false);
    expect(ids(items[0].nested)).toEqual(["a1"]);
});

it("should remove proxied item when target is raw", () => {
    expect.assertions(1);
    const items = reactive<TestItem[]>([{ id: "a" }, { id: "b" }]);
    removeNestedItem(items, toRaw(items[1]));
    expect(ids(items)).toEqual(["a"]);
});

it("should remove raw item when target is proxied", () => {
    expect.assertions(1);
    const items: TestItem[] = [{ id: "a" }, { id: "b" }];
    removeNestedItem(items, reactive(items[1]));
    expect(ids(items)).toEqual(["a"]);
});

it("should remove proxied nested item when target is raw", () => {
    expect.assertions(1);
    const items = reactive<TestItem[]>([
        { id: "a", nested: [{ id: "a1" }, { id: "a2" }] },
    ]);
    removeNestedItem(items, toRaw(items[0].nested![1]), "nested");
    expect(ids(items[0].nested)).toEqual(["a1"]);
});
