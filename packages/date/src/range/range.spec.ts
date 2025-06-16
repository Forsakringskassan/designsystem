import { FDate } from "../f-date";
import { FYear } from "../f-year";
import { range } from "./range";

it("should yield inclusive range", () => {
    expect.assertions(1);
    const begin = FDate.fromIso("2022-05-21");
    const end = FDate.fromIso("2022-05-23");
    const it = range(begin, end);
    expect(Array.from(it, (it) => it.toString())).toEqual([
        "2022-05-21",
        "2022-05-22",
        "2022-05-23",
    ]);
});

it("should handle when begin and end is the same", () => {
    expect.assertions(1);
    const begin = FDate.fromIso("2022-05-25");
    const end = FDate.fromIso("2022-05-25");
    const it = range(begin, end);
    expect(Array.from(it, (it) => it.toString())).toEqual(["2022-05-25"]);
});

it("should handle crossing month", () => {
    expect.assertions(1);
    const begin = FDate.fromIso("2022-02-28");
    const end = FDate.fromIso("2022-03-01");
    const it = range(begin, end);
    expect(Array.from(it, (it) => it.toString())).toEqual([
        "2022-02-28",
        "2022-03-01",
    ]);
});

it("should handle leap year", () => {
    expect.assertions(1);
    const begin = FDate.fromIso("2020-02-28");
    const end = FDate.fromIso("2020-03-01");
    const it = range(begin, end);
    expect(Array.from(it, (it) => it.toString())).toEqual([
        "2020-02-28",
        "2020-02-29",
        "2020-03-01",
    ]);
});

it("should throw error if begin is after end", () => {
    expect.assertions(1);
    const begin = FDate.fromIso("2022-05-25");
    const end = FDate.fromIso("2022-05-24");
    expect(() => Array.from(range(begin, end))).toThrow(
        "Begin (2022-05-25) must be earlier or equal to end (2022-05-24)",
    );
});

it("should handle FYear", () => {
    expect.assertions(1);
    const begin = FYear.fromYear(1999);
    const end = FYear.fromYear(2004);
    const it = range(begin, end);
    expect(Array.from(it, (it) => it.value)).toEqual([
        1999, 2000, 2001, 2002, 2003, 2004,
    ]);
});
