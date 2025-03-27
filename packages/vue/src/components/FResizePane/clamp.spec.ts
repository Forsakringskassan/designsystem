import { clamp } from "./clamp";

const min = 20;
const max = 25;

it("should return value when value is in range", () => {
    expect.assertions(3);
    expect(clamp(23, min, max)).toBe(23);
    expect(clamp(20, min, max)).toBe(20);
    expect(clamp(25, min, max)).toBe(25);
});

it("should return upper limit if value is above", () => {
    expect.assertions(3);
    expect(clamp(24, min, max)).toBe(24);
    expect(clamp(25, min, max)).toBe(25);
    expect(clamp(26, min, max)).toBe(25);
});

it("should return lower limit if value is below", () => {
    expect.assertions(3);
    expect(clamp(21, min, max)).toBe(21);
    expect(clamp(20, min, max)).toBe(20);
    expect(clamp(19, min, max)).toBe(20);
});
