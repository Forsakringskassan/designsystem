import { FDate } from "@fkui/date";
import { isDateRange } from "./is-date-range";

describe("isDateRAnge", () => {
    it("should return false for unset values", () => {
        expect.assertions(8);
        expect(isDateRange("")).toBeFalsy();
        expect(isDateRange(undefined)).toBeFalsy();
        expect(isDateRange(null)).toBeFalsy();
        expect(isDateRange(0)).toBeFalsy();
        expect(isDateRange("test")).toBeFalsy();
        expect(isDateRange(true)).toBeFalsy();
        expect(isDateRange(42)).toBeFalsy();
        expect(isDateRange({})).toBeFalsy();
    });

    it("should return false when mixing FDate with string", () => {
        expect.assertions(2);
        expect(
            isDateRange({
                from: "20200101",
                to: FDate.fromIso("2020-01-02"),
            }),
        ).toBeFalsy();
        expect(
            isDateRange({
                from: FDate.fromIso("2020-01-01"),
                to: "20200101",
            }),
        ).toBeFalsy();
    });

    it("should return true when range of strings", () => {
        expect.assertions(4);
        expect(isDateRange({ from: "", to: "" })).toBeTruthy();
        expect(isDateRange({ from: "abc", to: "abc" })).toBeTruthy();
        expect(isDateRange({ from: "20200101", to: "20200102" })).toBeTruthy();
        expect(
            isDateRange({
                from: "2020-01-01",
                to: "2020-01-02",
            }),
        ).toBeTruthy();
    });

    it("should return true when range of fdate", () => {
        expect.assertions(1);
        expect(
            isDateRange({
                from: FDate.fromIso("2020-01-01"),
                to: FDate.fromIso("2020-01-02"),
            }),
        ).toBeTruthy();
    });
});
