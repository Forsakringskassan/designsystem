import { expect, it } from "vitest";
import { replaceItem } from "./replace-item";

interface TestItem {
    id: string;
    name?: string;
    description?: string;
}

it("should keep object identity", () => {
    expect.assertions(1);
    const target: TestItem = { id: "a" };
    const items = [target];
    replaceItem(target, { id: "b" });
    expect(items[0]).toBe(target);
});

it("should update existing properties", () => {
    expect.assertions(1);
    const target: TestItem = { id: "a", name: "foo" };
    replaceItem(target, { id: "a", name: "bar" });
    expect(target).toEqual({ id: "a", name: "bar" });
});

it("should add new properties", () => {
    expect.assertions(1);
    const target: TestItem = { id: "a" };
    replaceItem(target, { id: "a", name: "bar" });
    expect(target).toEqual({ id: "a", name: "bar" });
});

it("should remove properties missing in source", () => {
    expect.assertions(2);
    const target: TestItem = { id: "a", name: "foo", description: "lorem" };
    replaceItem(target, { id: "a", name: "foo" });
    expect(target).toEqual({ id: "a", name: "foo" });
    expect(Object.keys(target)).not.toContain("description");
});

it("should handle source being the same object as target", () => {
    expect.assertions(1);
    const target: TestItem = { id: "a", name: "foo" };
    replaceItem(target, target);
    expect(target).toEqual({ id: "a", name: "foo" });
});
