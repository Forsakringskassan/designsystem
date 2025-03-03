import { computeCssValue } from "./compute-css-value";

it("should handle literal 0", () => {
    expect.assertions(1);
    const result = computeCssValue("0", 0, 0);
    expect(result).toBe(0);
});

it("should handle px", () => {
    expect.assertions(1);
    const result = computeCssValue("14px", 0, 0);
    expect(result).toBe(14);
});

it("should handle %", () => {
    expect.assertions(1);
    const result = computeCssValue("50%", 24, 0);
    expect(result).toBe(24 * 0.5);
});

it("should parse auto", () => {
    expect.assertions(1);
    const result = computeCssValue("auto", 0, 12);
    expect(result).toBe(12);
});

it("should throw error when value cannot be parsed", () => {
    expect.assertions(1);
    expect(() => computeCssValue("foobar", 0, 0)).toThrow(
        `Cant parse size from "foobar"`,
    );
});
