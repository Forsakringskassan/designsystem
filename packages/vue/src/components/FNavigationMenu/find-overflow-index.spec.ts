import { findOverflowIndex } from "./find-overflow-index";

const testElements = [
    { offsetWidth: 50 }, // index 0 - total width 50
    { offsetWidth: 30 }, // index 1 - total width 80
    { offsetWidth: 40 }, // index 2 - total width 120
];

it("should find overflowing element", () => {
    expect.assertions(1);
    const totalWidth = 100;
    const index = findOverflowIndex(totalWidth, testElements);
    expect(index).toBe(1);
});

it("should not overflow when sum exactly equals total width", () => {
    expect.assertions(1);
    const totalWidth = 120;
    const index = findOverflowIndex(totalWidth, testElements);
    expect(index).toBe(-1);
});

it("should overflow when sum is 1px over the total width", () => {
    expect.assertions(1);
    const totalWidth = 119;
    const index = findOverflowIndex(totalWidth, testElements);
    expect(index).toBe(1);
});
