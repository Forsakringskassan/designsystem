import { FDate } from "./f-date";
import { FYear } from "./f-year";

jest.useFakeTimers();

describe("now()", () => {
    it("should construct FYear using current time", () => {
        expect.assertions(1);
        jest.setSystemTime(new Date(1999, 11, 31));
        const year = FYear.now();
        expect(year.value).toBe(1999);
    });
});

describe("fromYear()", () => {
    it("should construct FYear from number", () => {
        expect.assertions(1);
        const year = FYear.fromYear(2025);
        expect(year.value).toBe(2025);
    });

    it("should construct FYear from string", () => {
        expect.assertions(1);
        const year = FYear.fromYear("2025");
        expect(year.value).toBe(2025);
    });

    it("should return invalid year for invalid value", () => {
        expect.assertions(2);
        const year = FYear.fromYear("invalid");
        expect(year.isValid()).toBeFalsy();
        expect(year.value).toBeNaN();
    });
});

describe("fromDate()", () => {
    it("should construct FYear from native Date instance", () => {
        expect.assertions(1);
        const date = new Date(2004, 0, 1);
        const year = FYear.fromDate(date);
        expect(year.value).toBe(2004);
    });

    it("should construct FYear from FDate instance", () => {
        expect.assertions(1);
        const date = FDate.fromIso("2004-01-01");
        const year = FYear.fromDate(date);
        expect(year.value).toBe(2004);
    });
});

describe("value getter", () => {
    it("should return numeric year from given year", () => {
        expect.assertions(1);
        const year = FYear.fromYear(2012);
        const { value } = year;
        expect(value).toBe(2012);
    });

    it("should return NaN if year is invalid", () => {
        expect.assertions(1);
        const year = FYear.fromYear("invalid");
        const { value } = year;
        expect(value).toBeNaN();
    });
});

describe("isValid()", () => {
    it("should return true if year is valid", () => {
        expect.assertions(1);
        const year = FYear.fromYear(1999);
        expect(year.isValid()).toBeTruthy();
    });

    it("should return false if year is invalid", () => {
        expect.assertions(2);
        expect(FYear.fromYear("invalid").isValid()).toBeFalsy();
        expect(FYear.fromYear(1999.5).isValid()).toBeFalsy();
    });
});

describe("addYears()", () => {
    it("should add given amount of years", () => {
        expect.assertions(1);
        const year = FYear.fromYear(2000);
        const updated = year.addYears(4);
        expect(updated.value).toBe(2004);
    });

    it("should handle negative values", () => {
        expect.assertions(1);
        const year = FYear.fromYear(2000);
        const updated = year.addYears(-1);
        expect(updated.value).toBe(1999);
    });

    it("should return invalid year if source year is invalid", () => {
        expect.assertions(2);
        const year = FYear.fromYear("invalid");
        const updated = year.addYears(1);
        expect(updated.isValid()).toBeFalsy();
        expect(updated.value).toBeNaN();
    });

    it("should return invalid year if adding fractions", () => {
        expect.assertions(3);
        const a = FYear.fromYear(1999);
        const b = a.addYears(0.5);
        const c = b.addYears(0.5);
        expect(a.isValid()).toBeTruthy();
        expect(b.isValid()).toBeFalsy();
        expect(c.isValid()).toBeFalsy();
    });
});

describe("previous()", () => {
    it("should get the year before the current", () => {
        expect.assertions(2);
        const year = FYear.fromYear(1999);
        const prev = year.previous();
        expect(prev.isValid()).toBeTruthy();
        expect(prev.value).toBe(1998);
    });

    it("should yield invalid valid when current is invalid", () => {
        expect.assertions(2);
        const year = FYear.fromYear("invalid");
        const prev = year.previous();
        expect(prev.isValid()).toBeFalsy();
        expect(prev.value).toBeNaN();
    });
});

describe("next()", () => {
    it("should get the year after the current", () => {
        expect.assertions(2);
        const year = FYear.fromYear(1999);
        const next = year.next();
        expect(next.isValid()).toBeTruthy();
        expect(next.value).toBe(2000);
    });

    it("should yield invalid valid when current is invalid", () => {
        expect.assertions(2);
        const year = FYear.fromYear("invalid");
        const next = year.next();
        expect(next.isValid()).toBeFalsy();
        expect(next.value).toBeNaN();
    });
});

describe("equals()", () => {
    it("should return true if the years are the same", () => {
        expect.assertions(1);
        const a = FYear.fromYear(2004);
        const b = FYear.fromYear(2004);
        expect(a.equals(b)).toBeTruthy();
    });

    it("should return false if the years are different", () => {
        expect.assertions(1);
        const a = FYear.fromYear(2004);
        const b = FYear.fromYear(2003);
        expect(a.equals(b)).toBeFalsy();
    });

    it("should return false if first year is invalid", () => {
        expect.assertions(1);
        const a = FYear.fromYear("invalid");
        const b = FYear.fromYear(2004);
        expect(a.equals(b)).toBeFalsy();
    });

    it("should return false if second year is invalid", () => {
        expect.assertions(1);
        const a = FYear.fromYear(2004);
        const b = FYear.fromYear("invalid");
        expect(a.equals(b)).toBeFalsy();
    });

    it("should handle passing string as argument", () => {
        expect.assertions(3);
        const year = FYear.fromYear(2004);
        expect(year.equals("2004")).toBeTruthy();
        expect(year.equals("2003")).toBeFalsy();
        expect(year.equals("invalid")).toBeFalsy();
    });

    it("should handle passing number as argument", () => {
        expect.assertions(2);
        const year = FYear.fromYear(2004);
        expect(year.equals(2004)).toBeTruthy();
        expect(year.equals(2003)).toBeFalsy();
    });
});

describe("isBefore()", () => {
    it("should return true if the first year is before the other", () => {
        expect.assertions(1);
        const a = FYear.fromYear(1998);
        const b = FYear.fromYear(1999);
        expect(a.isBefore(b)).toBeTruthy();
    });

    it("should return false if the years are the same", () => {
        expect.assertions(1);
        const a = FYear.fromYear(1999);
        const b = FYear.fromYear(1999);
        expect(a.isBefore(b)).toBeFalsy();
    });

    it("should return false if the first year is after the other", () => {
        expect.assertions(1);
        const a = FYear.fromYear(2000);
        const b = FYear.fromYear(1999);
        expect(a.isBefore(b)).toBeFalsy();
    });

    it("should handle passing string as argument", () => {
        expect.assertions(3);
        const year = FYear.fromYear(2004);
        expect(year.isBefore("2005")).toBeTruthy();
        expect(year.isBefore("2004")).toBeFalsy();
        expect(year.isBefore("invalid")).toBeFalsy();
    });

    it("should handle passing number as argument", () => {
        expect.assertions(2);
        const year = FYear.fromYear(2004);
        expect(year.isBefore(2005)).toBeTruthy();
        expect(year.isBefore(2004)).toBeFalsy();
    });
});

describe("isAfter()", () => {
    it("should return true if the first year is after the other", () => {
        expect.assertions(1);
        const a = FYear.fromYear(1999);
        const b = FYear.fromYear(1998);
        expect(a.isAfter(b)).toBeTruthy();
    });

    it("should return false if the years are the same", () => {
        expect.assertions(1);
        const a = FYear.fromYear(1999);
        const b = FYear.fromYear(1999);
        expect(a.isAfter(b)).toBeFalsy();
    });

    it("should return false if the first year is before the other", () => {
        expect.assertions(1);
        const a = FYear.fromYear(1999);
        const b = FYear.fromYear(2000);
        expect(a.isAfter(b)).toBeFalsy();
    });

    it("should handle passing string as argument", () => {
        expect.assertions(3);
        const year = FYear.fromYear(2004);
        expect(year.isAfter("2003")).toBeTruthy();
        expect(year.isAfter("2004")).toBeFalsy();
        expect(year.isAfter("invalid")).toBeFalsy();
    });

    it("should handle passing number as argument", () => {
        expect.assertions(2);
        const year = FYear.fromYear(2004);
        expect(year.isAfter(2003)).toBeTruthy();
        expect(year.isAfter(2004)).toBeFalsy();
    });
});

describe("compare()", () => {
    it("should return 0 if the years are the same", () => {
        expect.assertions(1);
        const a = FYear.fromYear(2004);
        const b = FYear.fromYear(2004);
        expect(FYear.compare(a, b)).toBe(0);
    });

    it("should return -1 if the first year is before the second", () => {
        expect.assertions(1);
        const a = FYear.fromYear(2004);
        const b = FYear.fromYear(2006);
        expect(FYear.compare(a, b)).toBe(-1);
    });

    it("should return 1 if the first year is after the second", () => {
        expect.assertions(1);
        const a = FYear.fromYear(2006);
        const b = FYear.fromYear(2004);
        expect(FYear.compare(a, b)).toBe(1);
    });

    it("should return 0 if both years are invalid", () => {
        expect.assertions(1);
        const a = FYear.fromYear("invalid1");
        const b = FYear.fromYear("invalid2");
        expect(FYear.compare(a, b)).toBe(0);
    });

    it("should return -1 if second year is invalid", () => {
        expect.assertions(1);
        const a = FYear.fromYear(1999);
        const b = FYear.fromYear("invalid");
        expect(FYear.compare(a, b)).toBe(-1);
    });

    it("should return 1 if first year is invalid", () => {
        expect.assertions(1);
        const a = FYear.fromYear("invalid");
        const b = FYear.fromYear(1999);
        expect(FYear.compare(a, b)).toBe(1);
    });

    it("should handle passing string as argument", () => {
        expect.assertions(6);
        const a = FYear.fromYear(2004);
        const b = FYear.fromYear(2004);
        expect(FYear.compare(a, "2004")).toBe(0);
        expect(FYear.compare(a, "2007")).toBe(-1);
        expect(FYear.compare("2007", b)).toBe(1);
        expect(FYear.compare("2004", b)).toBe(0);
        expect(FYear.compare("2004", "2004")).toBe(0);
        expect(FYear.compare("2004", "2007")).toBe(-1);
    });

    it("should handle passing number as argument", () => {
        expect.assertions(6);
        const a = FYear.fromYear(2004);
        const b = FYear.fromYear(2004);
        expect(FYear.compare(a, 2004)).toBe(0);
        expect(FYear.compare(a, 2007)).toBe(-1);
        expect(FYear.compare(2007, b)).toBe(1);
        expect(FYear.compare(2004, b)).toBe(0);
        expect(FYear.compare(2004, 2004)).toBe(0);
        expect(FYear.compare(2004, 2007)).toBe(-1);
    });
});

describe("toString()", () => {
    it("should return year formatted as string", () => {
        expect.assertions(1);
        const year = FYear.fromYear(1999);
        expect(year.toString()).toBe("1999");
    });

    it("should return empty string if year is invalid", () => {
        expect.assertions(1);
        const year = FYear.fromYear("invalid");
        expect(year.toString()).toBe("");
    });
});

describe("toJSON()", () => {
    it("should return year formatted as number", () => {
        expect.assertions(1);
        const year = FYear.fromYear(1999);
        expect(year.toJSON()).toBe(1999);
    });

    it("should return empty string if year is invalid", () => {
        expect.assertions(1);
        const year = FYear.fromYear("invalid");
        expect(year.toJSON()).toBeNull();
    });
});
