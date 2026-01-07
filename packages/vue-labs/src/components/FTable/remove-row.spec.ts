import { removeRow } from "./remove-row";

describe("removeRow", () => {
    interface Row {
        id: number;
        expandableRows?: Row[];
    }
    let rows: Row[];

    beforeEach(() => {
        rows = [
            { id: 1 },
            {
                id: 2,
                expandableRows: [{ id: 21 }, { id: 22 }],
            },
            { id: 3 },
        ];
    });

    it("should remove a row from the root level", () => {
        expect.assertions(3);
        const rowToRemove = rows[1];
        const updatedRows = removeRow(rows, rowToRemove, "expandableRows");

        expect(rows).toHaveLength(3);
        expect(updatedRows).toHaveLength(2);
        expect(updatedRows.find((r) => r.id === 2)).toBeUndefined();
    });

    it("should remove a row from expandable rows", () => {
        expect.assertions(2);
        const rowToRemove = rows[1].expandableRows![0];
        const updatedRows = removeRow(rows, rowToRemove, "expandableRows");
        expect(rows[1].expandableRows).toEqual([{ id: 21 }, { id: 22 }]);
        expect(updatedRows[1].expandableRows).toEqual([{ id: 22 }]);
    });

    it("should do nothing if the row is not found", () => {
        expect.assertions(1);
        const rowToRemove: Row = { id: 999 };
        const updatedRows = removeRow(rows, rowToRemove, "expandableRows");
        expect(updatedRows).toEqual(rows);
    });

    it("should do nothing if `expandableAttribute` is undefined and row is not found at root", () => {
        expect.assertions(1);
        const rowToRemove = rows[1].expandableRows![0];
        const updatedRows = removeRow(rows, rowToRemove);
        expect(updatedRows).toEqual(rows);
    });
});
