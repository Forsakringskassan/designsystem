import { FDate } from "@fkui/date";
import {
    parsePersonnummer,
    parsePersonnummerLuhn,
    isValidDate,
    formatPersonnummerToDate,
} from "./personnummerConverter";

//The test social security numbers(personnummer) used is approved by Skatteverket.
describe("parsePersonnummer", () => {
    describe("invalid formats", () => {
        it.each`
            value                | expected     | description
            ${undefined}         | ${undefined} | ${"undefined value should return undefined"}
            ${""}                | ${undefined} | ${"empty value should return undefined"}
            ${"19120AAAA211915"} | ${undefined} | ${"invalid characters should return undefined"}
        `(
            'should return "$expected" for "$value" because of $description',
            ({ value, expected }) => {
                expect.assertions(1);
                expect(parsePersonnummer(value)).toEqual(expected);
            },
        );
    });

    describe("12-digit", () => {
        it.each`
            value                | expected           | description
            ${"19120211-9151"}   | ${"19120211-9151"} | ${"a 12-digit personnummer with wrong checksum is valid"}
            ${"191202119150"}    | ${"19120211-9150"} | ${"a 12-digit personnummer is valid"}
            ${"19120211-9150"}   | ${"19120211-9150"} | ${"with hyphen that is valid"}
            ${"199701312390"}    | ${"19970131-2390"} | ${"another 12-digit personnummer (refs SFKUI-811)"}
            ${"19970131-2390"}   | ${"19970131-2390"} | ${"another with hyphen that is valid (refs SFKUI-811)"}
            ${"19701063-2391"}   | ${"19701063-2391"} | ${"test with samordningsnummer"}
            ${"19701060-2394"}   | ${"19701060-2394"} | ${"test with special samordningsnummer 60 (refs DS-1964)"}
            ${"201812312385"}    | ${"20181231-2385"} | ${"test with limits, december 31th"}
            ${"101812312385"}    | ${undefined}       | ${"test with invalid year should return undefined"}
            ${"201813312385"}    | ${undefined}       | ${"test with invalid month should return undefined"}
            ${"201812322385"}    | ${undefined}       | ${"test with invalid day should return undefined"}
            ${"1912 02 11 9150"} | ${"19120211-9150"} | ${"test with whitespaces is valid"}
        `(
            'should return "$expected" for "$value" because of $description',
            ({ value, expected }) => {
                expect.assertions(1);
                expect(parsePersonnummer(value)).toEqual(expected);
            },
        );
    });

    describe("10-digit", () => {
        it.each`
            value              | expected           | description
            ${"120211+9151"}   | ${"19120211-9151"} | ${"a 10-digit personnummer with wrong checksum is valid"}
            ${"1201292388"}    | ${"20120129-2388"} | ${"a 10-digit personnummer is valid"}
            ${"120129-2388"}   | ${"20120129-2388"} | ${"with hyphen that is valid"}
            ${"9701312390"}    | ${"19970131-2390"} | ${"another 10-digit personnummer (refs SFKUI-811)"}
            ${"970131-2390"}   | ${"19970131-2390"} | ${"another with hyphen that is valid (refs SFKUI-811)"}
            ${"701063-2391"}   | ${"19701063-2391"} | ${"test with samordningsnummer"}
            ${"701060-2394"}   | ${"19701060-2394"} | ${"test with special samordningsnummer 60 (refs DS-1964)"}
            ${"1812312385"}    | ${"20181231-2385"} | ${"test with limits, december 31th"}
            ${"1813312385"}    | ${undefined}       | ${"test with invalid month should return undefined"}
            ${"1812322385"}    | ${undefined}       | ${"test with invalid day should return undefined"}
            ${"12 01 29 2388"} | ${"20120129-2388"} | ${"test with whitespaces is valid"}
        `(
            'should return "$expected" for "$value" because of $description',
            ({ value, expected }) => {
                expect.assertions(1);
                expect(parsePersonnummer(value)).toEqual(expected);
            },
        );
    });
});

//The test social security numbers(personnummer) used is approved by Skatteverket.
describe("parsePersonnummerLuhn", () => {
    it.each`
        value                | expected           | description
        ${undefined}         | ${undefined}       | ${"undefined value should return undefined"}
        ${""}                | ${undefined}       | ${"empty value should return undefined"}
        ${"19120211-9151"}   | ${undefined}       | ${"a 12-digit personnummer with wrong check num returns undefined"}
        ${"19120AAAA211915"} | ${undefined}       | ${"invalid characters should return undefined"}
        ${"191202119150"}    | ${"19120211-9150"} | ${"a 12-digit personnummer is valid"}
        ${"19120211-9150"}   | ${"19120211-9150"} | ${"with hyphen that is valid"}
        ${"199701312390"}    | ${"19970131-2390"} | ${"another 12-digit personnummer (refs SFKUI-811)"}
        ${"19970131-2390"}   | ${"19970131-2390"} | ${"another with hyphen that is valid (refs SFKUI-811)"}
        ${"19701063-2391"}   | ${"19701063-2391"} | ${"test with samordningsnummer"}
        ${"19701060-2394"}   | ${"19701060-2394"} | ${"test with special samordningsnummer 60 (refs DS-1964)"}
        ${"201812312385"}    | ${"20181231-2385"} | ${"test with limits, december 31th"}
        ${"101812312385"}    | ${undefined}       | ${"test with invalid year should return undefined"}
        ${"201813312385"}    | ${undefined}       | ${"test with invalid month should return undefined"}
        ${"201812322385"}    | ${undefined}       | ${"test with invalid day should return undefined"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            expect.assertions(1);
            expect(parsePersonnummerLuhn(value)).toEqual(expected);
        },
    );
});

describe("isValidDate", () => {
    const now = FDate.fromIso("2023-12-08");

    it("should be falsy when date is invalid", () => {
        expect.assertions(1);
        expect(isValidDate(FDate.fromIso("2023-02-29"), now)).toBeFalsy();
    });

    it("should be truthy when date is within period", () => {
        expect.assertions(2);
        expect(isValidDate(FDate.fromIso("1840-05-06"), now)).toBeTruthy();
        expect(isValidDate(FDate.fromIso("2023-12-08"), now)).toBeTruthy();
    });

    it("should be falsy when date is outside period", () => {
        expect.assertions(2);
        expect(isValidDate(FDate.fromIso("1840-05-05"), now)).toBeFalsy();
        expect(isValidDate(FDate.fromIso("2023-12-09"), now)).toBeFalsy();
    });
});

describe("formatPersonnummerToDate", () => {
    it.each`
        personnummer      | expectedDate    | description
        ${"199001011234"} | ${"1990-01-01"} | ${"valid personnummer with date 1990-01-01"}
        ${"198506059876"} | ${"1985-06-05"} | ${"valid personnummer with date 1985-06-05"}
        ${"202312319876"} | ${"2023-12-31"} | ${"valid personnummer with date 2023-12-31"}
    `(
        "should return FDate $expectedDate for $description",
        ({ personnummer, expectedDate }) => {
            const result = formatPersonnummerToDate(personnummer);
            expect(result?.toString()).toEqual(expectedDate);
        },
    );

    it.each`
        personnummer       | description
        ${"invalidstring"} | ${"invalid personnummer string"}
        ${"123456789012"}  | ${"personnummer string with incorrect date"}
        ${""}              | ${"empty personnummer string"}
    `("should return undefined for $description", ({ personnummer }) => {
        const result = formatPersonnummerToDate(personnummer);
        expect(result).toBeUndefined();
    });

    it("should return undefined for undefined input", () => {
        const result = formatPersonnummerToDate(undefined);
        expect(result).toBeUndefined();
    });
});
