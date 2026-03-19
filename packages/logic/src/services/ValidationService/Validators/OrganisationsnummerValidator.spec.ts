import { organisationsnummerValidator } from "./OrganisationsnummerValidator";

const element = document.createElement("input");
const validate = (value: string): boolean => {
    return organisationsnummerValidator.validation(value, element, {});
};

it("should return true for empty value", () => {
    expect.assertions(1);
    expect(validate("")).toBeTruthy();
});

it("should return true for valid organisationsnummer without hyphen", () => {
    expect.assertions(1);
    expect(validate("9999999999")).toBeTruthy();
});

it("should return true for valid organisationsnummer with hyphen", () => {
    expect.assertions(1);
    expect(validate("999999-9999")).toBeTruthy();
});

it("should return false for organisationsnummer with invalid characters", () => {
    expect.assertions(3);
    expect(validate("99x9999999")).toBeFalsy();
    expect(validate("99x999-9999")).toBeFalsy();
    expect(validate("999999-999x")).toBeFalsy();
});

it("should return false for organisationsnummer with invalid checksum", () => {
    expect.assertions(2);
    expect(validate("9999999991")).toBeFalsy();
    expect(validate("999999-9991")).toBeFalsy();
});

it("should return false for organisationsnummer with less than 10 digits", () => {
    expect.assertions(3);
    expect(validate("999999999")).toBeFalsy();
    expect(validate("99999-9999")).toBeFalsy();
    expect(validate("999999-999")).toBeFalsy();
});

it("should return false for organisationsnummer with more than 10 digits", () => {
    expect.assertions(3);
    expect(validate("99999999999")).toBeFalsy();
    expect(validate("9999999-9999")).toBeFalsy();
    expect(validate("999999-99999")).toBeFalsy();
});

it("should return false for organisationsnummer with hyphen in wrong location", () => {
    expect.assertions(2);
    expect(validate("99999-99999")).toBeFalsy();
    expect(validate("9999999-999")).toBeFalsy();
});
