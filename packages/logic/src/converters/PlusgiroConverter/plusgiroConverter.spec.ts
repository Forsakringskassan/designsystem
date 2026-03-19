import { parsePlusgiro } from "./plusgiroConverter";

//these fake plusgiro values are as of this writing 2024-05-27 verified as non-existing,
//but are not provided as official fake sample numbers by plusgirot.se
describe("parse", () => {
    it.each`
        value            | expected         | description
        ${undefined}     | ${undefined}     | ${"undefined value should return undefined"}
        ${""}            | ${undefined}     | ${"empty value should return undefined"}
        ${"18"}          | ${"1-8"}         | ${"value with 2 digits should be formatted as X-X"}
        ${"117"}         | ${"11-7"}        | ${"value with 3 digits should be formatted as XX-X"}
        ${"1115"}        | ${"1 11-5"}      | ${"value with 4 digits should be formatted as X XX-X"}
        ${"11114"}       | ${"11 11-4"}     | ${"value with 5 digits should be formatted as XX XX-X"}
        ${"111112"}      | ${"1 11 11-2"}   | ${"value with 6 digits should be formatted as X XX XX-X"}
        ${"9999996"}     | ${"99 99 99-6"}  | ${"value with 7 digits should be formatted as XX XX XX-X"}
        ${"11111119"}    | ${"111 11 11-9"} | ${"value with 8 digits should be formatted as XXX XX XX-X"}
        ${"1111111-9"}   | ${"111 11 11-9"} | ${"value with 8 digits and hyphen should be formatted as XXX XX XX-X"}
        ${"111 11 11-9"} | ${"111 11 11-9"} | ${"value already formatted with 8 digits should be formatted as XXX XX XX-X"}
        ${"1 11 11-2"}   | ${"1 11 11-2"}   | ${"value already formatted with 6 digits should be formatted as X XX XX-X"}
        ${"1 AA 11-2"}   | ${undefined}     | ${"value can't be validated, formatter should return undefined"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            expect(parsePlusgiro(value)).toEqual(expected);
        },
    );
});
