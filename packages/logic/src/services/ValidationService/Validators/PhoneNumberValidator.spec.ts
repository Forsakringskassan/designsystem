import { phoneNumberValidator } from "./PhoneNumberValidator";

const element = document.createElement("input");
const validate = (value: string): boolean => {
    return phoneNumberValidator.validation(value, element, {});
};

it("should return true for empty values", () => {
    expect.assertions(3);
    expect(validate("")).toBeTruthy();
    /* @ts-expect-error -- either the prototype of the validator is wrong or this should never happen */
    expect(validate(null)).toBeTruthy();
    /* @ts-expect-error -- either the prototype of the validator is wrong or this should never happen */
    expect(validate(undefined)).toBeTruthy();
});

it("should return true for valid phone number", () => {
    expect.assertions(1);
    expect(validate("123456789")).toBeTruthy();
});

it("should handle valid delimiters", () => {
    expect.assertions(1);
    expect(validate("12 3-45_6/(789)")).toBeTruthy();
});

it("should return false for invalid delimiters", () => {
    expect.assertions(2);
    expect(validate("1234=56789")).toBeFalsy();
    expect(validate("1234#56789")).toBeFalsy();
});

it("should return false for letters", () => {
    expect.assertions(1);
    expect(validate("1234foo89")).toBeFalsy();
});

it("should allow leading plus", () => {
    expect.assertions(3);
    expect(validate("+1234")).toBeTruthy();
    expect(validate("1+234")).toBeFalsy();
    expect(validate("1234+")).toBeFalsy();
});

it("should require 3 or more digits", () => {
    expect.assertions(4);
    expect(validate("12")).toBeFalsy();
    expect(validate("12-")).toBeFalsy();
    expect(validate("123")).toBeTruthy();
    expect(validate("12 3")).toBeTruthy();
});

it("should require 17 or less digits", () => {
    expect.assertions(2);
    expect(validate("123456789012345678")).toBeFalsy();
    expect(validate("12345678901234567")).toBeTruthy();
});

it("should return strings longer than 21 characters", () => {
    expect.assertions(2);
    expect(validate("1234-5678-9012-3456-7")).toBeTruthy();
    expect(validate("1234-5678-9012-3456-78")).toBeFalsy();
});
