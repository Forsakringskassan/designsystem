import { formatPostalCode } from "./postalCodeConverter";

//The test data is randomly selected.
describe("formatPostalCode()", () => {
    it.each`
        value       | expected     | description
        ${"93222"}  | ${"932 22"}  | ${"value without whitespace should be formatted with added whitespace"}
        ${"932 22"} | ${"932 22"}  | ${"value whitespace should be kept as is"}
        ${"371 BB"} | ${undefined} | ${"should not format an incorrect postal code and instead return undefined"}
        ${"371BB"}  | ${undefined} | ${"should not format an incorrect postal code and instead return undefined"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            expect(formatPostalCode(value)).toEqual(expected);
        },
    );

    it("should return undefined for empty value", () => {
        expect.assertions(3);
        expect(formatPostalCode(undefined)).toBeUndefined();
        expect(formatPostalCode(null)).toBeUndefined();
        expect(formatPostalCode("")).toBeUndefined();
    });

    it("should return undefined for unparsable value", () => {
        expect.assertions(1);
        expect(formatPostalCode("xxx")).toBeUndefined();
    });
});
