import { FDate } from "@fkui/date";
import { type TranslateFunction } from "@fkui/logic";
import { getCalendarDaySrText } from "./get-calendar-day-sr-text";

const t: TranslateFunction = (key, defaultValueOrArgs) => {
    if (typeof defaultValueOrArgs !== "string") {
        throw new Error("default translation missing");
    }

    return defaultValueOrArgs;
};

jest.useFakeTimers();

describe("yesterday, today, tomorrow", () => {
    beforeEach(() => {
        jest.setSystemTime(new Date("2022-12-24"));
    });

    it("should return today text when date is today", () => {
        expect(getCalendarDaySrText(FDate.now(), true, false, t)).toBe(
            "idag lördag 24 december 2022",
        );
    });

    it("should return yesterday text when date is yesterday", () => {
        expect(
            getCalendarDaySrText(FDate.now().addDays(-1), true, false, t),
        ).toBe("igår fredag 23 december 2022");
    });

    it("should return tomorrow text when date is tomorrow", () => {
        expect(
            getCalendarDaySrText(FDate.now().addDays(1), true, false, t),
        ).toBe("imorgon söndag 25 december 2022");
    });

    it("should not return extra text when date differs from yesterday, today, tomorrow", () => {
        expect(
            getCalendarDaySrText(FDate.now().addDays(-2), true, false, t),
        ).toBe("torsdag 22 december 2022");

        expect(
            getCalendarDaySrText(FDate.now().addDays(2), true, false, t),
        ).toBe("måndag 26 december 2022");
    });
});

describe("selected", () => {
    it("should return selected text when date is selected", () => {
        expect(
            getCalendarDaySrText(FDate.fromIso("2022-06-22"), true, true, t),
        ).toBe("vald dag onsdag 22 juni 2022");
    });

    it("should not return selected text when date is not selected", () => {
        expect(
            getCalendarDaySrText(FDate.fromIso("2022-06-22"), true, false, t),
        ).toBe("onsdag 22 juni 2022");
    });
});

describe("enabled", () => {
    it("should not return disabled text when date is enabled", () =>
        expect(
            getCalendarDaySrText(FDate.fromIso("2022-06-22"), true, false, t),
        ).toBe("onsdag 22 juni 2022"));

    it("should return disabled text when date is disabled", () =>
        expect(
            getCalendarDaySrText(FDate.fromIso("2022-06-22"), false, false, t),
        ).toBe("inte valbar onsdag 22 juni 2022"));
});

describe("mixed today, selected, enabled", () => {
    it("should return text in correct order when date is today, selected and enabled", () => {
        jest.setSystemTime(new Date("2022-08-08"));

        expect(
            getCalendarDaySrText(FDate.fromIso("2022-08-08"), true, true, t),
        ).toBe("vald dag idag måndag 8 augusti 2022");
    });
});
