import { plusgiroValidator } from "./PlusgiroValidator";

const element = document.createElement("input");

//these fake plusgiro values are as of this writing 2024-05-27 verified as non-existing,
//but are not provided as official fake sample numbers by plusgirot.se
describe("validation", () => {
    it.each`
        value           | expected | description
        ${undefined}    | ${true}  | ${"undefined value should be valid"}
        ${null}         | ${true}  | ${"null value should be valid"}
        ${""}           | ${true}  | ${"empty value should be valid"}
        ${"1-8"}        | ${true}  | ${"fake plusgiro number with 2 digits should be valid"}
        ${"11-7"}       | ${true}  | ${"fake plusgiro number with 3 digits should be valid"}
        ${"111-5"}      | ${true}  | ${"fake plusgiro number with 4 digits should be valid"}
        ${"1111-4"}     | ${true}  | ${"fake plusgiro number with 5 digits should be valid"}
        ${"11111-2"}    | ${true}  | ${"fake plusgiro number with 6 digits should be valid"}
        ${"999999-6"}   | ${true}  | ${"fake plusgiro number with 7 digits should be valid"}
        ${"1111111-9"}  | ${true}  | ${"fake plusgiro number with 8 digits should be valid"}
        ${"1111 111-9"} | ${true}  | ${"fake plusgiro number with 8 digits and a space somewhere should be valid"}
        ${" 1-8"}       | ${true}  | ${"value with leading space be valid"}
        ${"1-8 "}       | ${true}  | ${"value with trailing space be valid"}
        ${"18"}         | ${true}  | ${"value without hyphen before last character should be valid"}
        ${"1-1"}        | ${false} | ${"wrong checksum should be invalid"}
        ${"1-b"}        | ${false} | ${"value with letter should be invalid"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            const result = plusgiroValidator.validation(value, element, {});
            expect(result).toEqual(expected);
        },
    );
});
