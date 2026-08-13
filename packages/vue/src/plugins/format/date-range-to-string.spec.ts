import { FDate } from "@fkui/date";
import { describe, expect, it } from "vitest";
import { type DateRange } from "./date-range";
import { dateRangeToString } from "./date-range-to-string";

describe("formatDateRange", () => {
    it("should format same month period without repeated month and year", () => {
        expect.assertions(1);
        const range: DateRange = {
            from: "2000-05-03",
            to: "2000-05-05",
            format: "human",
        };
        expect(dateRangeToString(range)).toBe("3 – 5 maj 2000");
    });

    it("should format same year period without repeated year", () => {
        expect.assertions(1);
        const range: DateRange = {
            from: "2000-06-05",
            to: "2000-07-05",
            format: "human",
        };
        expect(dateRangeToString(range)).toBe("5 juni – 5 juli 2000");
    });

    it("should format different years with full long dates", () => {
        expect.assertions(1);
        const range: DateRange = {
            from: "2000-06-04",
            to: "2001-02-16",
            format: "human",
        };
        expect(dateRangeToString(range)).toBe("4 juni 2000 – 16 februari 2001");
    });

    it("should format single-day period using repeated day and month", () => {
        expect.assertions(1);
        const range: DateRange = {
            from: "2000-01-02",
            to: "2000-01-02",
            format: "human",
        };
        expect(dateRangeToString(range)).toBe("2 – 2 januari 2000");
    });

    it("should return empty string for invalid dates", () => {
        expect.assertions(1);
        const range: DateRange = {
            from: "2000-13-40",
            to: "2000-01-02",
            format: "human",
        };
        expect(dateRangeToString(range)).toBe("");
    });

    it("should format dates in ISO format by default", () => {
        expect.assertions(1);
        const range: DateRange = { from: "2000-05-03", to: "2000-05-05" };
        // No format argument – should use default "iso"
        expect(dateRangeToString(range)).toBe("2000-05-03 – 2000-05-05");
    });

    it("should format dates in ISO format when explicitly requested", () => {
        expect.assertions(1);
        const range: DateRange = {
            from: "2000-06-04",
            to: "2001-02-16",
            format: "iso",
        };
        expect(dateRangeToString(range)).toBe("2000-06-04 – 2001-02-16");
    });

    // New test to ensure function works with FDate instances as well
    it("should still work when arguments are FDate instances", () => {
        expect.assertions(1);
        const range: DateRange = {
            from: FDate.fromIso("2000-09-10"),
            to: FDate.fromIso("2000-09-12"),
            format: "human",
        };
        expect(dateRangeToString(range)).toBe("10 – 12 september 2000");
    });
});
