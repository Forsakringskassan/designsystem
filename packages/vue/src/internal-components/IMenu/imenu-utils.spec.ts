import { findOverflowIndex } from "./imenu-utils";

const testElements1 = [
    { offsetWidth: 50 }, // index 0 - total width 50
    { offsetWidth: 30 }, // index 1 - total width 80
    { offsetWidth: 40 }, // index 2 - total width 120
];

const testElements2 = [
    { offsetWidth: 50 }, // index 0 - total width 50
    { offsetWidth: 30 }, // index 1 - total width 80
    { offsetWidth: 41 }, // index 2 - total width 121
];

it("should find overflowing element", () => {
    expect.assertions(1);
    const totalWidth = 100;
    // totalWidth (100) < sum of offsetWidth in testElements1 (120)
    const index = findOverflowIndex(totalWidth, testElements1);
    expect(index).toBe(2);
});

it("should not overflow when sum exactly equals total width", () => {
    expect.assertions(1);
    const totalWidth = 120;
    // totalWidth (120) = sum of offsetWidth in testElements1 (120)
    const index = findOverflowIndex(totalWidth, testElements1);
    expect(index).toBe(-1);
});

it("should overflow when sum is 1px over the total width", () => {
    expect.assertions(1);
    // totalWidth (120) = sum of offsetWidth in testElements2 (121)
    const totalWidth = 120;
    const index = findOverflowIndex(totalWidth, testElements2);
    expect(index).toBe(2);
});
