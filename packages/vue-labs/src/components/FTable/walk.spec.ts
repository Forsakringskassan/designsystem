import { walk } from "./walk";

interface NewTestItem {
    name: string;
    level: number;
}

const items = [
    { name: "A", nested: [{ name: "A1" }, { name: "A2" }] },
    { name: "B", nested: [{ name: "B1" }] },
    { name: "C" },
];

it("should run callback on each item", () => {
    const newItems: NewTestItem[] = [];
    walk(items, undefined, (item, level) => {
        const newItem = {
            name: item.name,
            level,
        };
        newItems.push(newItem);
        return true;
    });
    expect(newItems).toStrictEqual([
        { name: "A", level: 1 },
        { name: "B", level: 1 },
        { name: "C", level: 1 },
    ]);
});

it("should run callback on each nested item when `childKey` is provided", () => {
    const newItems: NewTestItem[] = [];
    walk(items, "nested", (item, level) => {
        const newItem = {
            name: item.name,
            level,
        };
        newItems.push(newItem);
        return true;
    });
    expect(newItems).toStrictEqual([
        { name: "A", level: 1 },
        { name: "A1", level: 2 },
        { name: "A2", level: 2 },
        { name: "B", level: 1 },
        { name: "B1", level: 2 },
        { name: "C", level: 1 },
    ]);
});
