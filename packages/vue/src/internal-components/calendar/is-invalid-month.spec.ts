import { FDate } from "@fkui/date";
import {
    isInvalidMonth,
    isMonthBefore,
    isMonthAfter,
} from "./is-invalid-month";

describe("isInvalidMonth", () => {
    it("should return false when passed date is within allowed bounds", () => {
        const currentDate = FDate.fromIso("2023-01-01");
        const minDate = currentDate.addMonths(-1);
        const maxDate = currentDate.addMonths(12);
        expect(isInvalidMonth(currentDate, minDate, maxDate)).toBeFalsy();
    });

    it("should return true when passed date is higher than the maximum allowed date", () => {
        const currentDate = FDate.fromIso("2023-01-15");
        const minDate = currentDate.addMonths(-2);
        const maxDate = currentDate.addMonths(-1);
        expect(isInvalidMonth(currentDate, minDate, maxDate)).toBeTruthy();
    });

    it("should return false when passed date is lower than the minimum allowed date", () => {
        const currentDate = FDate.fromIso("2022-12-15");
        const minDate = currentDate.addMonths(1);
        const maxDate = currentDate.addMonths(12);
        expect(isInvalidMonth(currentDate, minDate, maxDate)).toBeTruthy();
    });

    it("should return false when min-date and max-date is missing", () => {
        const currentDate = FDate.fromIso("2022-12-15");
        expect(isInvalidMonth(currentDate)).toBeFalsy();
    });
});

function callMonthBefore(date: string, minDate: string): boolean {
    return isMonthBefore(FDate.fromIso(date), FDate.fromIso(minDate));
}

function callMonthAfter(date: string, minDate: string): boolean {
    return isMonthAfter(FDate.fromIso(date), FDate.fromIso(minDate));
}

describe("isMonthBefore", () => {
    it("should return true when given date is before month", () => {
        expect(callMonthBefore("2023-01-31", "2023-02-15")).toBeTruthy();
        expect(callMonthBefore("2022-02-16", "2023-02-15")).toBeTruthy();
        expect(callMonthBefore("2022-01-31", "2023-02-01")).toBeTruthy();
        expect(callMonthBefore("2022-02-28", "2023-03-31")).toBeTruthy();
    });

    it("should return false when given date is after month", () => {
        expect(callMonthBefore("2023-03-01", "2023-02-15")).toBeFalsy();
        expect(callMonthBefore("2023-02-01", "2023-02-15")).toBeFalsy();
        expect(callMonthBefore("2023-02-01", "2023-02-01")).toBeFalsy();
        expect(callMonthBefore("2022-03-01", "2023-03-31")).toBeTruthy();
    });
});

describe("isMonthAfter", () => {
    it("should return true when given date is after month", () => {
        expect(callMonthAfter("2023-03-01", "2023-02-15")).toBeTruthy();
        expect(callMonthAfter("2024-02-01", "2023-02-15")).toBeTruthy();
        expect(callMonthAfter("2024-05-01", "2023-04-01")).toBeTruthy();
        expect(callMonthAfter("2024-05-01", "2023-04-30")).toBeTruthy();
    });

    it("should return false when given date is before month", () => {
        expect(callMonthAfter("2023-01-31", "2023-02-15")).toBeFalsy();
        expect(callMonthAfter("2023-02-01", "2023-02-15")).toBeFalsy();
        expect(callMonthAfter("2022-02-16", "2023-02-15")).toBeFalsy();
        expect(callMonthAfter("2022-03-31", "2023-04-01")).toBeFalsy();
        expect(callMonthAfter("2022-03-31", "2023-04-30")).toBeFalsy();
    });
});
