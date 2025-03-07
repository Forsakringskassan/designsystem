import { aggregateCssValue } from "./aggregate-css-value";

it("should select single value from list", () => {
    expect.assertions(2);
    const value = "20px 10px 30px 40px";
    expect(aggregateCssValue(value, 0, 0, Math.min)).toBe(10);
    expect(aggregateCssValue(value, 0, 0, Math.max)).toBe(40);
});

it("should handle when only single value exists", () => {
    expect.assertions(2);
    const value = "20px";
    expect(aggregateCssValue(value, 0, 0, Math.min)).toBe(20);
    expect(aggregateCssValue(value, 0, 0, Math.max)).toBe(20);
});

it("should handle excessive whitespace", () => {
    expect.assertions(2);
    const value = "20px   10px\t30px\n40px";
    expect(aggregateCssValue(value, 0, 0, Math.min)).toBe(10);
    expect(aggregateCssValue(value, 0, 0, Math.max)).toBe(40);
});

it("should throw error when value cannot be parsed", () => {
    expect.assertions(1);
    expect(() => aggregateCssValue("foobar", 0, 0, Math.min)).toThrow(
        `Cant parse size from "foobar"`,
    );
});
