import { expect, it } from "vitest";
import { getBodyRowCount } from "./get-body-row-count";

const rows = [
    { name: "A", nested: [{ name: "A1" }, { name: "A2" }] },
    { name: "B", nested: [{ name: "B1" }] },
    { name: "C" },
];

it("should return correct number of rows without `childKey`", () => {
    expect.assertions(1);
    expect(getBodyRowCount(rows)).toBe(3);
});

it("should return correct number of rows with `childKey`", () => {
    expect.assertions(1);
    expect(getBodyRowCount(rows, "nested")).toBe(6);
});
