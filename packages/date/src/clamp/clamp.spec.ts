import { FDate } from "../f-date";
import { FYear } from "../f-year";
import { type Clampable, clamp } from "./clamp";

class Value implements Clampable<Value> {
    public readonly value: number;

    public constructor(value: number) {
        this.value = value;
    }

    public isBefore(rhs: Value): boolean {
        return this.value < rhs.value;
    }

    public isAfter(rhs: Value): boolean {
        return this.value > rhs.value;
    }
}

it("should return value if value is between min and max", () => {
    expect.assertions(3);
    const min = new Value(1);
    const max = new Value(10);
    expect(clamp(new Value(1), min, max).value).toBe(1);
    expect(clamp(new Value(3), min, max).value).toBe(3);
    expect(clamp(new Value(10), min, max).value).toBe(10);
});

it("should return lower bound if value is less than min", () => {
    expect.assertions(2);
    const min = new Value(1);
    const max = new Value(10);
    expect(clamp(new Value(0), min, max).value).toBe(min.value);
    expect(clamp(new Value(-17), min, max).value).toBe(min.value);
});

it("should return upper bound if value is greater than max", () => {
    expect.assertions(2);
    const min = new Value(1);
    const max = new Value(10);
    expect(clamp(new Value(11), min, max).value).toBe(max.value);
    expect(clamp(new Value(42), min, max).value).toBe(max.value);
});

it("should work with FDate", () => {
    expect.assertions(3);
    const min = FDate.fromIso("2004-08-01");
    const max = FDate.fromIso("2007-05-31");
    const a = FDate.fromIso("2005-12-31");
    const b = FDate.fromIso("2004-07-31");
    const c = FDate.fromIso("2007-06-01");
    expect(clamp(a, min, max).toString()).toBe(a.toString());
    expect(clamp(b, min, max).toString()).toBe(min.toString());
    expect(clamp(c, min, max).toString()).toBe(max.toString());
});

it("should work with FYear", () => {
    expect.assertions(3);
    const min = FYear.fromYear("2004");
    const max = FYear.fromYear("2007");
    const a = FYear.fromYear("2005");
    const b = FYear.fromYear("2003");
    const c = FYear.fromYear("2008");
    expect(clamp(a, min, max).toString()).toBe(a.toString());
    expect(clamp(b, min, max).toString()).toBe(min.toString());
    expect(clamp(c, min, max).toString()).toBe(max.toString());
});
