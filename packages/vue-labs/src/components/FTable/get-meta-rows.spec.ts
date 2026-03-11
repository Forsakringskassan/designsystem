import { setItemIdentifiers } from "@fkui/vue";
import { getMetaRows } from "./get-meta-rows";

const rows = [
    {
        name: "A",
    },
    {
        name: "B",
        expandable: [],
    },
    {
        name: "C",
        expandable: [
            {
                name: "C1",
            },
        ],
    },
];

it("should only mark rows with non-empty children as expandable", () => {
    const keyedRows = setItemIdentifiers(rows, "name", "expandable");
    const result = getMetaRows(keyedRows, new Set(), "expandable");

    expect(result).toHaveLength(3);

    expect(result[0].isExpandable).toBe(false);

    expect(result[1].isExpandable).toBe(false);

    expect(result[2].isExpandable).toBe(true);
});
