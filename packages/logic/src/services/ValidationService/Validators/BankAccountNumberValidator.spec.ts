import { bankAccountNumberValidator } from "./BankAccountNumberValidator";

//The bankaccount numbers we use is for testpurpose only.

const element = document.createElement("input");
const validate = (value: string): boolean => {
    return bankAccountNumberValidator.validation(value, element, {});
};

it("should return true for empty values", () => {
    expect.assertions(3);
    expect(validate("")).toBeTruthy();
    /* @ts-expect-error -- either the prototype of the validator is wrong or this should never happen */
    expect(validate(null)).toBeTruthy();
    /* @ts-expect-error -- either the prototype of the validator is wrong or this should never happen */
    expect(validate(undefined)).toBeTruthy();
});

it("should true for valid bank account", () => {
    expect.assertions(1);
    expect(validate("123456789")).toBeTruthy();
});

it("should handle valid delimiters", () => {
    expect.assertions(1);
    expect(validate("1-234 567 89")).toBeTruthy();
});

it("should return false for invalid delimiters", () => {
    expect.assertions(1);
    expect(validate("1+23456789")).toBeFalsy();
});

it("should return false for non-digits", () => {
    expect.assertions(1);
    expect(validate("abc-123-abc")).toBeFalsy();
});

it("should handle leading zeroes", () => {
    expect.assertions(1);
    expect(validate("000123456789")).toBeTruthy();
});

it("should handle leading delimiter", () => {
    expect.assertions(1);
    expect(validate("-123456789")).toBeTruthy();
});

it("should require at least 3 digits", () => {
    expect.assertions(4);
    expect(validate("123")).toBeTruthy();
    expect(validate("012")).toBeTruthy();
    expect(validate("12")).toBeFalsy();
    expect(validate("01")).toBeFalsy();
});

it("should allow up to 16 digits", () => {
    expect.assertions(4);
    expect(validate("1234567890123456")).toBeTruthy();
    expect(validate("1234-5678-9012-3456")).toBeTruthy();
    expect(validate("12345678901234567")).toBeFalsy();
    expect(validate("1234-5678-9012-3456-7")).toBeFalsy();
});
