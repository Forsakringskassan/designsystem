import { getLocale, isLocale, Locale, resetLocale, setLocale } from "./locale";

beforeEach(() => {
    resetLocale();
});

it("isLocale should return false for empty value", () => {
    expect(isLocale()).toBe(false);
});

it("isLocale should return boolean value for string", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("sv")).toBe(true);
    expect(isLocale("SV")).toBe(false);
    expect(isLocale("invalidLocale")).toBe(false);
});

it("isLocale should return true for locale enum", () => {
    expect(isLocale(Locale.SWEDISH)).toBe(true);
    expect(isLocale(Locale.ENGLISH)).toBe(true);
});

it("setLocale should set current locale", () => {
    expect(getLocale()).toEqual(Locale.SWEDISH);
    setLocale(Locale.ENGLISH);
    expect(getLocale()).toEqual(Locale.ENGLISH);
});
