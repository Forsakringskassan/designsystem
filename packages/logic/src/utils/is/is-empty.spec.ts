import { isEmpty } from "./is-empty";

it("should return true for undefined", () => {
    expect.assertions(1);
    expect(isEmpty(undefined)).toBeTruthy();
});

it("should return true for null", () => {
    expect.assertions(1);
    expect(isEmpty(null)).toBeTruthy();
});

it("should return true for empty string", () => {
    expect.assertions(1);
    expect(isEmpty("")).toBeTruthy();
});

it("should return false for non-empty string", () => {
    expect.assertions(1);
    expect(isEmpty("foo")).toBeFalsy();
});

it("should return false for 0 as string", () => {
    expect.assertions(1);
    expect(isEmpty("0")).toBeFalsy();
});

it("should return false for whitespace", () => {
    expect.assertions(1);
    expect(isEmpty(" ")).toBeFalsy();
});
