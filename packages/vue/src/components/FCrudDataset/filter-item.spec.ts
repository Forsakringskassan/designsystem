import { filterItem } from "./filter-item";

interface TestItem {
    id: string;
    nested?: TestItem[];
}

it("should remove matching item", () => {
    const items: TestItem[] = [{ id: "a" }, { id: "b" }];
    const target = items[1];
    const filtered = filterItem(items, target);
    expect(filtered).toMatchInlineSnapshot(`
        [
          {
            "id": "a",
          },
        ]
    `);
});

it("should remove matching nested item", () => {
    const items: TestItem[] = [
        { id: "a", nested: [{ id: "a1" }, { id: "a2" }] },
    ];
    const target = items[0].nested![1];
    const filtered = filterItem(items, target, "nested");
    expect(filtered[0].nested).toMatchInlineSnapshot(`
        [
          {
            "id": "a1",
          },
        ]
    `);
});

it("should not remove if not matching reference", () => {
    const items: TestItem[] = [{ id: "a" }, { id: "b" }];
    const target: TestItem = { id: "b" };
    const filtered = filterItem(items, target);
    expect(filtered).toMatchInlineSnapshot(`
        [
          {
            "id": "a",
          },
          {
            "id": "b",
          },
        ]
    `);
});
