import { DateFormat } from "./date-format";
import { FDate } from "./f-date";
import { Locale, setLocale } from "./locale";
import { Weekday } from "./weekday";

jest.useFakeTimers();

beforeEach(() => {
    setLocale(Locale.SWEDISH);
});

describe("now()", () => {
    it("should construct FDate using current time", () => {
        expect.assertions(1);
        jest.setSystemTime(new Date(1999, 11, 31));
        const date = FDate.now();
        expect(date.toString()).toBe("1999-12-31");
    });

    it("should still be now()", () => {
        expect.assertions(1);
        jest.setSystemTime(new Date(1999, 11, 31));
        const today = FDate.now();
        jest.advanceTimersByTime(61234);
        const alsoToday = FDate.now();
        expect(today.equals(alsoToday)).toBeTruthy();
    });

    it("should not be before now()", () => {
        expect.assertions(3);
        jest.setSystemTime(new Date(1999, 11, 31));
        const today = FDate.now();
        jest.advanceTimersByTime(61234);
        const alsoToday = FDate.now();
        expect(today.isBefore(today)).toBeFalsy();
        expect(today.isBefore(alsoToday)).toBeFalsy();
        expect(alsoToday.isBefore(today)).toBeFalsy();
    });

    it("should not be after now()", () => {
        expect.assertions(3);
        jest.setSystemTime(new Date(1999, 11, 31));
        const today = FDate.now();
        jest.advanceTimersByTime(61234);
        const alsoToday = FDate.now();
        expect(today.isAfter(today)).toBeFalsy();
        expect(today.isAfter(alsoToday)).toBeFalsy();
        expect(alsoToday.isAfter(today)).toBeFalsy();
    });

    it("should be equal to today Date with time", () => {
        expect.assertions(1);
        jest.setSystemTime(new Date(1999, 11, 31));
        const today = FDate.now();
        const alsoToday = FDate.fromDate(
            new Date(1999, 11, 31, 11, 22, 33, 44),
        );
        expect(today.equals(alsoToday)).toBeTruthy();
    });
});

describe("fromIso()", () => {
    it("should construct FDate from YYYY-MM-DD", () => {
        expect.assertions(1);
        const date = FDate.fromIso("1994-03-12");
        expect(date.toString()).toBe("1994-03-12");
    });

    it("should consider invalid days for given month as invalid date", () => {
        expect.assertions(2);
        const date = FDate.fromIso("1994-02-31");
        expect(date.isValid()).toBeFalsy();
        expect(date.toString()).toBe("");
    });

    it("should return invalid date for invalid value", () => {
        expect.assertions(2);
        const date = FDate.fromIso("invalid");
        expect(date.isValid()).toBeFalsy();
        expect(date.toString()).toBe("");
    });

    it("should return invalid date when year is not 4 digits", () => {
        expect.assertions(1);
        const date = FDate.fromIso("888-01-01");
        expect(date.isValid()).toBeFalsy();
    });
});

describe("fromDate()", () => {
    it("should construct FDate from native Date instance", () => {
        expect.assertions(1);
        const date = FDate.fromDate(new Date(2004, 0, 1));
        expect(date.toString()).toBe("2004-01-01");
    });
});

describe("fromYearMonthDay()", () => {
    it("should construct FDate from string parts", () => {
        expect.assertions(1);
        const date = FDate.fromYearMonthDay("1994", "03", "12");
        expect(date.toString()).toBe("1994-03-12");
    });

    it("should construct FDate from numeric parts", () => {
        expect.assertions(1);
        const date = FDate.fromYearMonthDay(1994, 3, 12);
        expect(date.toString()).toBe("1994-03-12");
    });

    it("should consider year without century as invalid date", () => {
        expect.assertions(1);
        const date = FDate.fromYearMonthDay("1", "1", "1");
        expect(date.isValid()).toBeFalsy();
    });

    it("should consider invalid days for given month as invalid date", () => {
        expect.assertions(2);
        const date = FDate.fromYearMonthDay(1994, 2, 31);
        expect(date.isValid()).toBeFalsy();
        expect(date.toString()).toBe("");
    });

    it("should return invalid date for invalid value", () => {
        expect.assertions(2);
        const date = FDate.fromYearMonthDay("inva", "li", "d");
        expect(date.isValid()).toBeFalsy();
        expect(date.toString()).toBe("");
    });
});

describe("year, month, week and day getters", () => {
    it("should return components from given date", () => {
        expect.assertions(4);
        const date = FDate.fromIso("2012-01-31");
        const { year, month, week, day } = date;
        expect(year).toBe(2012);
        expect(month).toBe(1);
        expect(week).toBe(5);
        expect(day).toBe(31);
    });

    it("should return NaN when date is invalid", () => {
        expect.assertions(4);
        const date = FDate.fromIso("invalid");
        const { year, month, week, day } = date;
        expect(year).toBeNaN();
        expect(month).toBeNaN();
        expect(week).toBeNaN();
        expect(day).toBeNaN();
    });
});

describe("monthName getter", () => {
    it("should return month name for given date", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2012-01-31");
        expect(date.monthName).toBe("januari");
    });

    it("should return empty string when date is invalid", () => {
        expect.assertions(1);
        const date = FDate.fromIso("invalid");
        expect(date.monthName).toBe("");
    });
});

describe("monthNameShort getter", () => {
    it("should return abbrevated month name for given date", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2012-02-01");
        expect(date.monthNameShort).toBe("feb");
    });

    it("should return empty string when date is invalid", () => {
        expect.assertions(1);
        const date = FDate.fromIso("invalid");
        expect(date.monthNameShort).toBe("");
    });
});

describe("dayName getter", () => {
    it("should return day name for given date", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2012-02-01");
        expect(date.dayName).toBe("onsdag");
    });

    it("should return empty string when date is invalid", () => {
        expect.assertions(1);
        const date = FDate.fromIso("invalid");
        expect(date.dayName).toBe("");
    });
});

describe("dayNameShort getter", () => {
    it("should return abbrevated day name for given date", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2012-02-01");
        expect(date.dayNameShort).toBe("ons");
    });

    it("should return empty string when date is invalid", () => {
        expect.assertions(1);
        const date = FDate.fromIso("invalid");
        expect(date.dayNameShort).toBe("");
    });
});

describe("weekDay getter", () => {
    it("should return day of the week", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2022-04-04");
        expect(date.weekDay).toBe(Weekday.MONDAY);
    });

    it("should return Weekday.SUNDAY (7) when day is Sunday", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2021-12-05");
        expect(date.weekDay).toBe(Weekday.SUNDAY);
    });

    it("should return 0 when invalid", () => {
        expect.assertions(1);
        const date = FDate.fromIso("invalid");
        expect(date.weekDay).toBe(0);
    });
});

describe("isValid()", () => {
    it("should return true if date is valid", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2012-02-01");
        expect(date.isValid()).toBeTruthy();
    });

    it("should return false if date is invalid", () => {
        expect.assertions(1);
        const date = FDate.fromIso("invalid");
        expect(date.isValid()).toBeFalsy();
    });
});

describe("startOfMonth()", () => {
    it("should return start of month", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2022-08-07");
        const updated = date.startOfMonth();
        expect(updated.toString()).toBe("2022-08-01");
    });

    it("should return invalid date if source date is invalid", () => {
        expect.assertions(2);
        const date = FDate.fromIso("invalid");
        const updated = date.startOfMonth();
        expect(updated.isValid()).toBeFalsy();
        expect(updated.toString()).toBe("");
    });
});

describe("endOfMonth()", () => {
    it("should return end of month", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2022-08-07");
        const updated = date.endOfMonth();
        expect(updated.toString()).toBe("2022-08-31");
    });

    it("should return end of month when leap year", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2028-02-01");
        const updated = date.endOfMonth();
        expect(updated.toString()).toBe("2028-02-29");
    });

    it("should return end of month when not leap year", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2026-02-01");
        const updated = date.endOfMonth();
        expect(updated.toString()).toBe("2026-02-28");
    });

    it("should return invalid date if source date is invalid", () => {
        expect.assertions(2);
        const date = FDate.fromIso("invalid");
        const updated = date.endOfMonth();
        expect(updated.isValid()).toBeFalsy();
        expect(updated.toString()).toBe("");
    });
});

describe("addDays()", () => {
    it("should add given amount of days to date", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2012-02-01");
        const updated = date.addDays(4);
        expect(updated.toString()).toBe("2012-02-05");
    });

    it("should handle negative values", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2012-02-04");
        const updated = date.addDays(-1);
        expect(updated.toString()).toBe("2012-02-03");
    });

    it("should handle leap year", () => {
        expect.assertions(2);
        const leapYear = FDate.fromIso("2012-02-28");
        const nonLeapYear = FDate.fromIso("2013-02-28");
        expect(leapYear.addDays(1).toString()).toBe("2012-02-29");
        expect(nonLeapYear.addDays(1).toString()).toBe("2013-03-01");
    });

    it("should wrap month and year", () => {
        expect.assertions(2);
        const date = FDate.fromIso("2012-01-31");
        const positive = date.addDays(1);
        const negative = date.addDays(-31);
        expect(positive.toString()).toBe("2012-02-01");
        expect(negative.toString()).toBe("2011-12-31");
    });

    it("should return invalid date if source date is invalid", () => {
        expect.assertions(2);
        const date = FDate.fromIso("invalid");
        const updated = date.addDays(1);
        expect(updated.isValid()).toBeFalsy();
        expect(updated.toString()).toBe("");
    });
});

describe("addMonths()", () => {
    it("should add given amount of months to date", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2012-02-12");
        const updated = date.addMonths(2);
        expect(updated.toString()).toBe("2012-04-12");
    });

    it("should handle leap years", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2012-01-31");
        const updated = date.addMonths(1);
        expect(updated.toString()).toBe("2012-02-29");
    });

    it("should handle negative values", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2012-02-04");
        const updated = date.addMonths(-1);
        expect(updated.toString()).toBe("2012-01-04");
    });

    it("should wrap year", () => {
        expect.assertions(2);
        const date = FDate.fromIso("2012-01-31");
        const positive = date.addMonths(1);
        const negative = date.addMonths(-1);
        expect(positive.toString()).toBe("2012-02-29");
        expect(negative.toString()).toBe("2011-12-31");
    });

    it("should return invalid date if source date is invalid", () => {
        expect.assertions(2);
        const date = FDate.fromIso("invalid");
        const updated = date.addMonths(1);
        expect(updated.isValid()).toBeFalsy();
        expect(updated.toString()).toBe("");
    });
});

describe("addYears()", () => {
    it("should add given amount of years to date", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2012-01-31");
        const updated = date.addYears(1);
        expect(updated.toString()).toBe("2013-01-31");
    });

    it("should handle negative values", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2012-02-04");
        const updated = date.addYears(-1);
        expect(updated.toString()).toBe("2011-02-04");
    });

    it("should handle leap years", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2012-02-29");
        const updated = date.addYears(1);
        expect(updated.toString()).toBe("2013-02-28");
    });

    it("should return invalid date if source date is invalid", () => {
        expect.assertions(2);
        const date = FDate.fromIso("invalid");
        const updated = date.addYears(1);
        expect(updated.isValid()).toBeFalsy();
        expect(updated.toString()).toBe("");
    });
});

describe("equals()", () => {
    it("should return true if the dates are the same", () => {
        expect.assertions(1);
        const a = FDate.fromIso("2004-10-11");
        const b = FDate.fromIso("2004-10-11");
        expect(a.equals(b)).toBeTruthy();
    });

    it("should return false if the dates are different", () => {
        expect.assertions(1);
        const a = FDate.fromIso("2004-10-11");
        const b = FDate.fromIso("2004-10-12");
        expect(a.equals(b)).toBeFalsy();
    });

    it("should return false if first date is invalid", () => {
        expect.assertions(1);
        const a = FDate.fromIso("invalid");
        const b = FDate.fromIso("2004-10-12");
        expect(a.equals(b)).toBeFalsy();
    });

    it("should return false if second date is invalid", () => {
        expect.assertions(1);
        const a = FDate.fromIso("2004-10-11");
        const b = FDate.fromIso("invalid");
        expect(a.equals(b)).toBeFalsy();
    });

    it("should handle passing string as argument", () => {
        expect.assertions(3);
        const date = FDate.fromIso("2004-10-11");
        expect(date.equals("2004-10-11")).toBeTruthy();
        expect(date.equals("2004-10-12")).toBeFalsy();
        expect(date.equals("invalid")).toBeFalsy();
    });
});

describe("isBefore()", () => {
    it("should return true if the first date is before the other", () => {
        expect.assertions(1);
        const a = FDate.fromIso("2004-10-11");
        const b = FDate.fromIso("2004-10-12");
        expect(a.isBefore(b)).toBeTruthy();
    });
    it("should return false if the dates are the same", () => {
        expect.assertions(1);
        const a = FDate.fromIso("2004-10-11");
        const b = FDate.fromIso("2004-10-11");
        expect(a.isBefore(b)).toBeFalsy();
    });
    it("should return false if the first date is after the other", () => {
        expect.assertions(1);
        const a = FDate.fromIso("2004-10-12");
        const b = FDate.fromIso("2004-10-11");
        expect(a.isBefore(b)).toBeFalsy();
    });
});

describe("isAfter()", () => {
    it("should return true if the first date is after the other", () => {
        expect.assertions(1);
        const a = FDate.fromIso("2004-10-12");
        const b = FDate.fromIso("2004-10-11");
        expect(a.isAfter(b)).toBeTruthy();
    });
    it("should return false if the dates are the same", () => {
        expect.assertions(1);
        const a = FDate.fromIso("2004-10-11");
        const b = FDate.fromIso("2004-10-11");
        expect(a.isAfter(b)).toBeFalsy();
    });
    it("should return false if the first date is before the other", () => {
        expect.assertions(1);
        const a = FDate.fromIso("2004-10-11");
        const b = FDate.fromIso("2004-10-12");
        expect(a.isAfter(b)).toBeFalsy();
    });
});

describe("compare()", () => {
    it("should return 0 if the dates are the same", () => {
        expect.assertions(1);
        const a = FDate.fromIso("2004-10-11");
        const b = FDate.fromIso("2004-10-11");
        expect(FDate.compare(a, b)).toBe(0);
    });

    it("should return -1 if the first date is before the second", () => {
        expect.assertions(1);
        const a = FDate.fromIso("2004-10-11");
        const b = FDate.fromIso("2004-10-12");
        expect(FDate.compare(a, b)).toBe(-1);
    });

    it("should return 1 if the first date is after the second", () => {
        expect.assertions(1);
        const a = FDate.fromIso("2004-10-12");
        const b = FDate.fromIso("2004-10-11");
        expect(FDate.compare(a, b)).toBe(1);
    });

    it("should return 0 if both dates are invalid", () => {
        expect.assertions(1);
        const a = FDate.fromIso("invalid1");
        const b = FDate.fromIso("invalid2");
        expect(FDate.compare(a, b)).toBe(0);
    });

    it("should return -1 if second date is invalid", () => {
        expect.assertions(1);
        const a = FDate.fromIso("2004-10-11");
        const b = FDate.fromIso("invalid");
        expect(FDate.compare(a, b)).toBe(-1);
    });

    it("should return 1 if first date is invalid", () => {
        expect.assertions(1);
        const a = FDate.fromIso("invalid");
        const b = FDate.fromIso("2004-10-12");
        expect(FDate.compare(a, b)).toBe(1);
    });

    it("should handle passing string as argument", () => {
        expect.assertions(6);
        const a = FDate.fromIso("2004-10-11");
        const b = FDate.fromIso("2004-10-11");
        expect(FDate.compare(a, "2004-10-11")).toBe(0);
        expect(FDate.compare(a, "2004-10-12")).toBe(-1);
        expect(FDate.compare("2004-10-12", b)).toBe(1);
        expect(FDate.compare("2004-10-11", b)).toBe(0);
        expect(FDate.compare("2004-10-11", "2004-10-11")).toBe(0);
        expect(FDate.compare("2004-10-11", "2004-10-12")).toBe(-1);
    });
});

describe("toString()", () => {
    it("should return default formatted date", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2012-02-29");
        expect(date.toString()).toBe("2012-02-29");
    });

    it("should return date formatted as full format", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2012-02-29");
        expect(date.toString(DateFormat.FULL)).toBe("onsdag 29 februari 2012");
    });

    it("should return date formatted as long format", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2012-02-29");
        expect(date.toString(DateFormat.LONG)).toBe("29 februari 2012");
    });

    it("should return date formatted as ISO-8601", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2012-02-29");
        expect(date.toString(DateFormat.ISO8601)).toBe("2012-02-29");
    });

    it("should return date formatted as YYYYMMDD", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2012-02-29");
        expect(date.toString(DateFormat.YYYYMMDD)).toBe("20120229");
    });

    it("should return empty string if date is invalid", () => {
        expect.assertions(1);
        const date = FDate.fromIso("invalid");
        expect(date.toString()).toBe("");
    });
});

describe("toJSON()", () => {
    it("should return date formatted as YYYY-MM-DD", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2012-02-29");
        expect(date.toJSON()).toBe("2012-02-29");
    });

    it("should return empty string if date is invalid", () => {
        expect.assertions(1);
        const date = FDate.fromIso("invalid");
        expect(date.toJSON()).toBe("");
    });
});

describe("should support locales", () => {
    it("swedish", () => {
        expect.assertions(1);
        setLocale(Locale.SWEDISH);
        const date = FDate.fromIso("2012-01-31");
        const result = {
            monthName: date.monthName,
            dayName: date.dayName,
            full: date.toString(DateFormat.FULL),
            long: date.toString(DateFormat.LONG),
        };
        expect(result).toMatchInlineSnapshot(`
            {
              "dayName": "tisdag",
              "full": "tisdag 31 januari 2012",
              "long": "31 januari 2012",
              "monthName": "januari",
            }
        `);
    });

    it("english", () => {
        expect.assertions(1);
        setLocale(Locale.ENGLISH);
        const date = FDate.fromIso("2012-01-31");
        const result = {
            monthName: date.monthName,
            dayName: date.dayName,
            full: date.toString(DateFormat.FULL),
            long: date.toString(DateFormat.LONG),
        };
        expect(result).toMatchInlineSnapshot(`
            {
              "dayName": "Tuesday",
              "full": "Tuesday, 31 January 2012",
              "long": "31 January 2012",
              "monthName": "January",
            }
        `);
    });
});
