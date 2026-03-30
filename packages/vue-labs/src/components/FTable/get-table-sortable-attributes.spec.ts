import { getTableSortableAttributes } from "./get-table-sortable-attributes";
import { defineTableColumns } from "./table-column";

interface Row {
    name: string;
    age: number;
}

it("should return empty object when no columns are defined", () => {
    const columns = defineTableColumns<Row>([]);
    expect(getTableSortableAttributes(columns)).toEqual({});
});

it("should return mapping for all columns that have a key", () => {
    const columns = defineTableColumns<Row>([
        { type: "text", header: "Name", key: "name" },
        { type: "text", header: "Age", key: "age" },
    ]);
    expect(getTableSortableAttributes(columns)).toEqual({
        name: "Name",
        age: "Age",
    });
});

it("should only include columns that have a key when mixed", () => {
    const columns = defineTableColumns<Row>([
        { type: "text", header: "Name", key: "name" },
        { type: "text", header: "Age" },
    ]);
    expect(getTableSortableAttributes(columns)).toEqual({
        name: "Name",
    });
});

it("should include column with sort: true", () => {
    const columns = defineTableColumns<Row>([
        { type: "text", header: "Name", key: "name", sort: true },
    ]);
    expect(getTableSortableAttributes(columns)).toEqual({ name: "Name" });
});

it("should exclude column with sort: false", () => {
    const columns = defineTableColumns<Row>([
        { type: "text", header: "Name", key: "name", sort: false },
    ]);
    expect(getTableSortableAttributes(columns)).toEqual({});
});

it("should handle empty string", () => {
    const columns = defineTableColumns<{ "": string }>([
        { type: "text", header: "Empty string", key: "" },
    ]);
    expect(getTableSortableAttributes(columns)).toEqual({
        "": "Empty string",
    });
});

it("should handle numeric keys", () => {
    const columns = defineTableColumns<{ [0]: string }>([
        { type: "text", header: "Numeric", key: 0 },
    ]);
    expect(getTableSortableAttributes(columns)).toEqual({
        [0]: "Numeric",
    });
});

it("should handle symbols as keys", () => {
    const sym = Symbol("mock-symbol");
    const columns = defineTableColumns<{ [sym]: string }>([
        { type: "text", header: "Symbol", key: sym },
    ]);
    expect(getTableSortableAttributes(columns)).toEqual({
        [sym]: "Symbol",
    });
});
