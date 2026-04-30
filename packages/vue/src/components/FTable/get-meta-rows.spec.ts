import { setItemIdentifiers, useDatasetRef } from "../../utils";
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

it("should not add nested metadata when not expandable", () => {
    const dataset = useDatasetRef(rows);
    const keyedRows = setItemIdentifiers(dataset.value, "name");
    const result = getMetaRows(keyedRows, new Set());

    expect(result[0].rowIndex).toBe(2);
    expect(result[0].level).toBeUndefined();
    expect(result[0].setsize).toBeUndefined();
    expect(result[0].posinset).toBeUndefined();
});

it("should add nested metadata when expandable", () => {
    const dataset = useDatasetRef(rows, "expandable");
    const keyedRows = setItemIdentifiers(dataset.value, "name", "expandable");
    const result = getMetaRows(keyedRows, new Set(), "expandable");

    expect(result[0].rowIndex).toBe(2);
    expect(result[0].level).toBe(1);
    expect(result[0].setsize).toBe(3);
    expect(result[0].posinset).toBe(1);
});

it("should only mark rows with non-empty children as expandable", () => {
    const keyedRows = setItemIdentifiers(rows, "name", "expandable");
    const result = getMetaRows(keyedRows, new Set(), "expandable");

    expect(result).toHaveLength(3);

    expect(result[0].isExpandable).toBe(false);

    expect(result[1].isExpandable).toBe(false);

    expect(result[2].isExpandable).toBe(true);
});
