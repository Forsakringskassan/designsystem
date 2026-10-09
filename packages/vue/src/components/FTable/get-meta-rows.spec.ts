import { describe, expect, it } from "vitest";
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
    expect.assertions(3);
    const dataset = useDatasetRef(rows);
    const keyedRows = setItemIdentifiers(dataset.value, "name");
    const result = getMetaRows(keyedRows, new Set());

    expect(result[0].level).toBeUndefined();
    expect(result[0].setsize).toBeUndefined();
    expect(result[0].posinset).toBeUndefined();
});

it("should add nested metadata when expandable", () => {
    expect.assertions(3);
    const dataset = useDatasetRef(rows, "expandable");
    const keyedRows = setItemIdentifiers(dataset.value, "name", "expandable");
    const result = getMetaRows(keyedRows, new Set(), "expandable");

    expect(result[0].level).toBe(1);
    expect(result[0].setsize).toBe(3);
    expect(result[0].posinset).toBe(1);
});

it("should only mark rows with non-empty children as expandable", () => {
    expect.assertions(4);
    const keyedRows = setItemIdentifiers(rows, "name", "expandable");
    const result = getMetaRows(keyedRows, new Set(), "expandable");

    expect(result).toHaveLength(3);

    expect(result[0].isExpandable).toBe(false);

    expect(result[1].isExpandable).toBe(false);

    expect(result[2].isExpandable).toBe(true);
});

describe("rowindex", () => {
    const nested = [
        {
            name: "A",
            expandable: [
                { name: "A1", expandable: [{ name: "A1a" }] },
                { name: "A2" },
            ],
        },
        { name: "B" },
        { name: "C", expandable: [{ name: "C1" }] },
    ];

    it("should be 1-based index when not expandable", () => {
        expect.assertions(1);
        const keyedRows = setItemIdentifiers(rows, "name");
        const result = getMetaRows(keyedRows, new Set());

        expect(result.map((it) => it.rowindex)).toEqual([1, 2, 3]);
    });

    it("should count collapsed nested rows", () => {
        expect.assertions(1);
        const keyedRows = setItemIdentifiers(nested, "name", "expandable");
        const result = getMetaRows(keyedRows, new Set(), "expandable");

        /* A (1) has 3 nested rows, B = 5, C = 6 */
        expect(result.map((it) => it.rowindex)).toEqual([1, 5, 6]);
    });

    it("should count nested rows when partially expanded", () => {
        expect.assertions(1);
        const keyedRows = setItemIdentifiers(nested, "name", "expandable");
        const result = getMetaRows(
            keyedRows,
            new Set(["A", "C"]),
            "expandable",
        );

        expect(result.map((it) => [it.row.name, it.rowindex])).toEqual([
            ["A", 1],
            ["A1", 2],
            ["A2", 4],
            ["B", 5],
            ["C", 6],
            ["C1", 7],
        ]);
    });
});
