import { testLuhnChecksum } from "./test-luhn-checksum";

it("should throw exception when attempted on letter strings", () => {
    expect(() => {
        testLuhnChecksum("aaaa");
    }).toThrow("Luhn Checksum test only works on strings containing numbers");
});

it("should return true for a correct checksum", () => {
    expect(testLuhnChecksum("9999996")).toBeTruthy();
});

it("should return false for an incorrect checksum", () => {
    expect(testLuhnChecksum("9999999")).toBeFalsy();
});
