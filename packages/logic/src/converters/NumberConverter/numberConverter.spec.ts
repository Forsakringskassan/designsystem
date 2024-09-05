import { parseNumber, formatNumber } from "./numberConverter";

describe("formatting", () => {
    it.each`
        value       | expected             | type
        ${"0"}      | ${"0"}               | ${"string"}
        ${"18.5"}   | ${"18,5"}            | ${"string"}
        ${"18,5"}   | ${"18,5"}            | ${"string"}
        ${"123456"} | ${"123\xa0456"}      | ${"string"}
        ${0}        | ${"0"}               | ${"number"}
        ${18}       | ${"18"}              | ${"number"}
        ${18.5}     | ${"18,5"}            | ${"number"}
        ${123}      | ${"123"}             | ${"number"}
        ${1234}     | ${"1\xa0234"}        | ${"number"}
        ${123456}   | ${"123\xa0456"}      | ${"number"}
        ${-123456}  | ${"−123\xa0456"}     | ${"number"}
        ${1234.25}  | ${"1\xa0234,25"}     | ${"number"}
        ${1000000}  | ${"1\xa0000\xa0000"} | ${"number"}
    `(
        'should format "$value" ($type) as "$expected"',
        ({ value, expected }) => {
            expect(formatNumber(value)).toBe(expected);
        },
    );

    it("should return undefined for empty value", () => {
        expect.assertions(3);
        expect(formatNumber(undefined)).toBeUndefined();
        expect(formatNumber(null)).toBeUndefined();
        expect(formatNumber("")).toBeUndefined();
    });

    it("should return undefined for unparsable value", () => {
        expect.assertions(1);
        expect(formatNumber("xxx")).toBeUndefined();
    });

    it("should return undefined for NaN", () => {
        expect.assertions(1);
        expect(formatNumber(NaN)).toBeUndefined();
    });
});

describe("formatting decimals", () => {
    it.each`
        value        | expected
        ${0}         | ${"0,00"}
        ${18}        | ${"18,00"}
        ${123}       | ${"123,00"}
        ${1234}      | ${"1\xa0234,00"}
        ${123456}    | ${"123\xa0456,00"}
        ${-123456}   | ${"−123\xa0456,00"}
        ${1234.2}    | ${"1\xa0234,20"}
        ${1234.25}   | ${"1\xa0234,25"}
        ${1234.254}  | ${"1\xa0234,25"}
        ${1234.255}  | ${"1\xa0234,26"}
        ${1000000.5} | ${"1\xa0000\xa0000,50"}
    `('should format "$value" as "$expected"', ({ value, expected }) => {
        expect(formatNumber(value, 2)).toEqual(expected);
    });
});

describe("parse", () => {
    it.each`
        value                | expected     | description
        ${"0"}               | ${0}         | ${"0 string value should should be formatted as '0'"}
        ${"18"}              | ${18}        | ${"18 number value should should be formatted as '18'"}
        ${"18,5"}            | ${18.5}      | ${"18.5 string value should should be formatted as '18,5'"}
        ${"18.5"}            | ${18.5}      | ${"18.5 string value should should be formatted as '18,5'"}
        ${" 18.5 "}          | ${18.5}      | ${"18.5 string value should should be formatted as '18,5'"}
        ${"0018.5"}          | ${18.5}      | ${"18.5 string value should should be formatted as '18,5'"}
        ${"1 234"}           | ${1234}      | ${"1234 number value should should be formatted as '1 234'"}
        ${"123 456"}         | ${123456}    | ${"123456 number value should should be formatted as '123 456'"}
        ${"−123 456"}        | ${-123456}   | ${"-123456 number value should should be formatted as '-123 456'"}
        ${"1 234,25"}        | ${1234.25}   | ${"1234.25 number value should should be formatted as '1 234,25'"}
        ${"0001\xa0234,25"}  | ${1234.25}   | ${"0001234.25 string value should should be formatted as '1 234,25'"}
        ${"−0001\xa0234,25"} | ${-1234.25}  | ${"-0001234.25 string value should should be formatted as '-1 234,25'"}
        ${"100,3333"}        | ${100.3333}  | ${"value with format xxx,xxxx should be formatted as xxx,xxxx"}
        ${"1000.50"}         | ${1000.5}    | ${"value with dot (.) should convert to comma(,)"}
        ${"10000,50"}        | ${10000.5}   | ${"value with format xxxxx,xx with space and decimal should be formatted as xx xxx,xx"}
        ${"100000,50"}       | ${100000.5}  | ${"value with format xxxxxx,xx with space and decimal should be formatted as xxx xxx,xx"}
        ${"10 000 0, 50"}    | ${100000.5}  | ${"value with format xx xxx x, xx with space and decimal should be formatted as xxx xxx,xx"}
        ${undefined}         | ${undefined} | ${"invalid value should return undefined"}
        ${null}              | ${undefined} | ${"invalid value should return undefined"}
        ${""}                | ${undefined} | ${"invalid value should return undefined"}
        ${"foo"}             | ${undefined} | ${"invalid value should return undefined"}
        ${"123a"}            | ${undefined} | ${"invalid value should return undefined"}
        ${"123e-1"}          | ${undefined} | ${"invalid value should return undefined"}
        ${"-Infinity"}       | ${undefined} | ${"invalid value should return undefined"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            expect(parseNumber(value)).toEqual(expected);
        },
    );
});
