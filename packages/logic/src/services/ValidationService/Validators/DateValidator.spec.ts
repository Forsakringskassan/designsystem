import { dateValidator } from "./DateValidator";

const element = document.createElement("input");

describe("validation", () => {
    it.each`
        value           | expected | description
        ${undefined}    | ${true}  | ${"undefined value should be valid"}
        ${null}         | ${true}  | ${"null value should be valid"}
        ${""}           | ${true}  | ${"empty value should be valid"}
        ${"2001-02-03"} | ${true}  | ${"value with format YYYY-MM-DD should be valid"}
        ${"20010203"}   | ${true}  | ${"value with format YYYYMMDD should be valid"}
        ${"2001/02/03"} | ${true}  | ${"value with format YYYY/MM/DD should be valid"}
        ${"2X01-02-03"} | ${false} | ${"value with bad format YYYY-MM-DD should be invalid"}
        ${"200X0203"}   | ${false} | ${"value with bad format YYYYMMDD should be invalid"}
        ${"2001/02XX3"} | ${false} | ${"value with bad format YYYY/MM/DD should be invalid"}
        ${" 200X0203"}  | ${false} | ${"value with leading space be invalid"}
        ${"200X0203 "}  | ${false} | ${"value with trailing space be invalid"}
        ${"2000-12-32"} | ${false} | ${"value with correct format but invalid day content should be invalid"}
        ${"2000-13-01"} | ${false} | ${"value with correct format but invalid month content should be invalid"}
        ${"2000-12-32"} | ${false} | ${"value with correct format but invalid day content should be invalid"}
        ${"20001301"}   | ${false} | ${"value with correct format but invalid month content should be invalid"}
        ${"2000/12/32"} | ${false} | ${"value with correct format but invalid day content should be invalid"}
        ${"2000/13/01"} | ${false} | ${"value with correct format but invalid month content should be invalid"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            const result = dateValidator.validation(value, element, {});
            expect(result).toEqual(expected);
        },
    );
});
