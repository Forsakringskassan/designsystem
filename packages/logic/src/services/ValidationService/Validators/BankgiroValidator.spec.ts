import { bankgiroValidator } from "./BankgiroValidator";

const element = document.createElement("input");

describe("validation", () => {
    it.each`
        value          | expected | description
        ${undefined}   | ${true}  | ${"undefined value should be valid"}
        ${null}        | ${true}  | ${"null value should be valid"}
        ${""}          | ${true}  | ${"empty value should be valid"}
        ${"9999996"}   | ${true}  | ${"bankgiro number with 7 digits and valid checksum should be valid"}
        ${"999-9996"}  | ${true}  | ${"bankgiro number with 7 digits, hyphen and valid checksum should be valid"}
        ${"999-9999"}  | ${false} | ${"wrong checksum should be invalid"}
        ${"99-99996"}  | ${false} | ${"hyphen in the wrong place should be invalid"}
        ${"999999999"} | ${false} | ${"too long string should be invalid"}
        ${" 9999996"}  | ${false} | ${"value with leading space should be invalid"}
        ${"9999996 "}  | ${false} | ${"value with trailing space should be invalid"}
        ${"999-999b"}  | ${false} | ${"value with letters should be invalid"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            const result = bankgiroValidator.validation(value, element, {});
            expect(result).toEqual(expected);
        },
    );
});
