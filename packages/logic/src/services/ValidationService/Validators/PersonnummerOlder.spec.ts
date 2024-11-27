import { personnummerOlder } from "./PersonnummerOlder";

const element = document.createElement("input");

it("should handle empty string values and undefined", () => {
    expect.assertions(4);
    expect(
        personnummerOlder.validation("", element, {
            otherField: "1301012397",
        }),
    ).toBeTruthy();
    expect(
        personnummerOlder.validation("1301012397", element, {
            otherField: undefined,
        }),
    ).toBeTruthy();
    expect(
        personnummerOlder.validation("1301012397", element, {
            otherField: "",
        }),
    ).toBeTruthy();
    expect(
        personnummerOlder.validation("", element, {
            otherField: "",
        }),
    ).toBeTruthy();
});

it("should handle invalid values", () => {
    expect.assertions(2);
    expect(
        personnummerOlder.validation("abcd1234", element, {
            otherField: "1301012397",
        }),
    ).toBeTruthy();
    expect(
        personnummerOlder.validation("1301012397", element, {
            otherField: "abcd1234",
        }),
    ).toBeTruthy();
});

it("should return true when value is older", () => {
    expect.assertions(1);
    expect(
        personnummerOlder.validation("1111111111", element, {
            otherField: "1301012397",
        }),
    ).toBeTruthy();
});

it("should return false when value is younger", () => {
    expect.assertions(1);
    expect(
        personnummerOlder.validation("1301012397", element, {
            otherField: "1111111111",
        }),
    ).toBeFalsy();
});

it("should return true when value is the same", () => {
    expect.assertions(1);
    expect(
        personnummerOlder.validation("1301012397", element, {
            otherField: "1301012397",
        }),
    ).toBeTruthy();
});
