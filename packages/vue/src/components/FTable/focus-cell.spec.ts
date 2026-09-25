import { describe, expect, it } from "vitest";
import { focusCell } from "./focus-cell";

describe("focusCell", () => {
    it("should throw if row does not exist", () => {
        expect.assertions(1);
        const table = document.createElement("table");

        expect(() => {
            focusCell(table, 9, 9);
        }).toThrow("Row with index 9 does not exist.");
    });

    it("should throw if cell does not exist", () => {
        expect.assertions(1);
        const table = document.createElement("table");
        const row = table.insertRow();

        row.insertCell();

        expect(() => {
            focusCell(table, 0, 9);
        }).toThrow("Cell with index 9 does not exist in row 0.");
    });
});
