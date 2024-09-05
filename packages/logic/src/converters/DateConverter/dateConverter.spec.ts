import { parseDate } from "./dateConverter";

describe("parse", () => {
    it.each`
        value           | expected        | description
        ${undefined}    | ${undefined}    | ${"undefined value should return undefined"}
        ${""}           | ${undefined}    | ${"empty value should return undefined"}
        ${"2001-02-03"} | ${"2001-02-03"} | ${"value with format YYYY-MM-DD should be formatted as YYYY-MM-DD"}
        ${"20010203"}   | ${"2001-02-03"} | ${"value with format YYYYMMDD should be formatted as YYYY-MM-DD"}
        ${"2001/02/03"} | ${"2001-02-03"} | ${"value with format YYYY/MM/DD should be formatted as YYYY-MM-DD"}
        ${"20010r03"}   | ${undefined}    | ${"faulty value with correct format should not be formatted"}
        ${"20200232"}   | ${undefined}    | ${"invalid value with correct format should not be formatted"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            expect.assertions(1);
            expect(parseDate(value)).toEqual(expected);
        },
    );
});
