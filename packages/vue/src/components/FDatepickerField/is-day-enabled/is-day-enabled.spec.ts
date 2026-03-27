import { FDate } from "@fkui/date";
import { isDayEnabled } from "./is-day-enabled";

describe("isDayEnabled", () => {
    const valConf = {
        date: {},
        dateFormat: {},
        minDate: {
            limit: "2020-01-01",
        },
        maxDate: {
            limit: "2029-01-30",
        },
        invalidWeekdays: {
            days: [6, 7],
        },
        invalidDates: {
            dates: ["2020-01-06", "2020-01-05"],
        },
    };
    it("should return true when day is enabled", () => {
        const day = FDate.fromIso("2022-12-02");

        expect(isDayEnabled(day, valConf)).toBeTruthy();
    });

    it("should return false when day is not enabled", () => {
        const day = FDate.fromIso("2020-01-05");

        expect(isDayEnabled(day, valConf)).toBeFalsy();
    });
});
