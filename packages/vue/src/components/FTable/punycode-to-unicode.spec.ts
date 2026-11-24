import { expect, it } from "vitest";
import { punycodeToUnicode } from "./punycode-to-unicode";

it("should convert a punycode label in the domain to unicode", () => {
    expect.assertions(1);
    expect(punycodeToUnicode("a@xn--5ca.example")).toBe("a@å.example");
});

it("should convert each punycode label in a domain with subdomains", () => {
    expect.assertions(1);
    expect(punycodeToUnicode("a@sub.xn--5ca.xn--4ca.example")).toBe(
        "a@sub.å.ä.example",
    );
});

it("should convert punycode labels that contain ascii characters", () => {
    expect.assertions(1);
    expect(punycodeToUnicode("a@xn--bcher-kva.example")).toBe(
        "a@bücher.example",
    );
});

it("should convert punycode labels with non-latin characters", () => {
    expect.assertions(1);
    expect(punycodeToUnicode("a@xn--r8jz45g.example")).toBe("a@例え.example");
});

it("should not change a domain without punycode labels", () => {
    expect.assertions(1);
    expect(punycodeToUnicode("a@example.com")).toBe("a@example.com");
});

it("should not convert the local part (before the @)", () => {
    expect.assertions(1);
    expect(punycodeToUnicode("xn--5ca@example.com")).toBe(
        "xn--5ca@example.com",
    );
});

it("should not change a string without @ as there is no domain to convert", () => {
    expect.assertions(1);
    expect(punycodeToUnicode("xn--5ca.example")).toBe("xn--5ca.example");
});

it("should leave labels untouched when the punycode is invalid and cannot be decoded", () => {
    expect.assertions(1);
    expect(punycodeToUnicode("a@xn--!.example")).toBe("a@xn--!.example");
});

it("should return an empty string when input is empty", () => {
    expect.assertions(1);
    expect(punycodeToUnicode("")).toBe("");
});

it("should not change a string consisting of only @ (no local part and no domain)", () => {
    expect.assertions(1);
    expect(punycodeToUnicode("@")).toBe("@");
});

it("should not change a domain with a leading dot as it is not valid (empty label)", () => {
    expect.assertions(1);
    expect(punycodeToUnicode("foo@.example.net")).toBe("foo@.example.net");
});

it("should not change a domain with a trailing dot as it is not valid (empty label)", () => {
    expect.assertions(1);
    expect(punycodeToUnicode("foo@example.net.")).toBe("foo@example.net.");
});
