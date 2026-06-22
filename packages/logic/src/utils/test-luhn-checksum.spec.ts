import { expect, it } from "vitest";
import { testLuhnChecksum } from "./test-luhn-checksum";

it("should throw exception when attempted on letter strings", () => {
    expect.assertions(1);
    expect(() => {
        testLuhnChecksum("aaaa");
    }).toThrow("Luhn Checksum test only works on strings containing numbers");
});

it("should return true for a correct checksum", () => {
    expect.assertions(1);
    expect(testLuhnChecksum("9999996")).toBeTruthy();
});

it("should return false for an incorrect checksum", () => {
    expect.assertions(1);
    expect(testLuhnChecksum("9999999")).toBeFalsy();
});
