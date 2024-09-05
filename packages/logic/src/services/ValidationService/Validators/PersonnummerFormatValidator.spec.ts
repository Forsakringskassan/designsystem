import { personnummerFormatValidator } from "./PersonnummerFormatValidator";

//The test social security numbers(personnummer) used is approved by Skatteverket.
const element = document.createElement("input");

it.each`
    value                | expected | description
    ${""}                | ${true}  | ${"empty value should be valid"}
    ${"191202119150"}    | ${true}  | ${"a 12-digit personnummer  is valid"}
    ${"19120211-9150"}   | ${true}  | ${"with hyphen that is valid"}
    ${"199701312390"}    | ${true}  | ${"another 12-digit personnummer (refs SFKUI-811)"}
    ${"19970131-2390"}   | ${true}  | ${"another with hyphen that is valid (refs SFKUI-811)"}
    ${"19701063-2391"}   | ${true}  | ${"test with samordningsnummer"}
    ${"19701060-2394"}   | ${true}  | ${"test with special samordningsnummer 60 (refs DS-1964)"}
    ${"201812312385"}    | ${true}  | ${"test with limits, december 31th"}
    ${"19120AAAA211915"} | ${false} | ${"characters is not valid"}
    ${"101812312385"}    | ${false} | ${"test with invalid year is not valid"}
    ${"201813312385"}    | ${false} | ${"test with invalid month is not valid"}
    ${"201812322385"}    | ${false} | ${"test with invalid day is not valid"}
`(
    'should return $expected with value "$value" because of $description',
    ({ value, expected }) => {
        const result = personnummerFormatValidator.validation(
            value,
            element,
            {},
        );
        expect(result).toEqual(expected);
    },
);
