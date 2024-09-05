import { formatPercent, parsePercent } from "./percentConverter";

describe("formatting", () => {
    it.each`
        value       | expected         | type
        ${"0"}      | ${"0"}           | ${"string"}
        ${"18.5"}   | ${"18,5"}        | ${"string"}
        ${"18,5"}   | ${"18,5"}        | ${"string"}
        ${"123456"} | ${"123\xa0456"}  | ${"string"}
        ${0}        | ${"0"}           | ${"number"}
        ${18}       | ${"18"}          | ${"number"}
        ${123}      | ${"123"}         | ${"number"}
        ${1234}     | ${"1\xa0234"}    | ${"number"}
        ${123456}   | ${"123\xa0456"}  | ${"number"}
        ${-123456}  | ${"−123\xa0456"} | ${"number"}
        ${1234.25}  | ${"1\xa0234,25"} | ${"number"}
    `(
        'should format "$value" ($type) as "$expected"',
        ({ value, expected }) => {
            expect(formatPercent(value)).toBe(expected);
        },
    );

    it("should return undefined for empty value", () => {
        expect.assertions(3);
        expect(formatPercent(undefined)).toBeUndefined();
        expect(formatPercent(null)).toBeUndefined();
        expect(formatPercent("")).toBeUndefined();
    });

    it("should return undefined for unparsable value", () => {
        expect.assertions(1);
        expect(formatPercent("xxx")).toBeUndefined();
    });

    it("should return undefined for NaN", () => {
        expect.assertions(1);
        expect(formatPercent(NaN)).toBeUndefined();
    });
});

describe("formatting decimals", () => {
    it.each`
        value       | expected            | description
        ${0}        | ${"0,00"}           | ${"0 number value should should be formatted as '0,00'"}
        ${18}       | ${"18,00"}          | ${"18 number value should should be formatted as '18,00'"}
        ${123}      | ${"123,00"}         | ${"123 number value should should be formatted as '123,00'"}
        ${1234}     | ${"1\xa0234,00"}    | ${"1234 number value should should be formatted as '1 234,00'"}
        ${123456}   | ${"123\xa0456,00"}  | ${"123456 number value should should be formatted as '123 456,00'"}
        ${-123456}  | ${"−123\xa0456,00"} | ${"-123456 number value should should be formatted as '-123 456,00'"}
        ${1234.25}  | ${"1\xa0234,25"}    | ${"1234.25 number value should should be formatted as '1 234,25'"}
        ${1234.255} | ${"1\xa0234,26"}    | ${"1234.255 number value should be rounded and formatted as '1 234,26'"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            expect(formatPercent(value, 2)).toEqual(expected);
        },
    );
});

describe("parse", () => {
    it.each`
        value                | expected    | description
        ${"0"}               | ${0}        | ${"0 string value should should be formatted as '0'"}
        ${"18"}              | ${18}       | ${"18 number value should should be formatted as '18'"}
        ${"18,5"}            | ${18.5}     | ${"18.5 string value should should be formatted as '18,5'"}
        ${"18.5"}            | ${18.5}     | ${"18.5 string value should should be formatted as '18,5'"}
        ${" 18.5 "}          | ${18.5}     | ${"18.5 string value should should be formatted as '18,5'"}
        ${"0018.5"}          | ${18.5}     | ${"18.5 string value should should be formatted as '18,5'"}
        ${"1 234"}           | ${1234}     | ${"1234 number value should should be formatted as '1 234'"}
        ${"123 456"}         | ${123456}   | ${"123456 number value should should be formatted as '123 456'"}
        ${"−123 456"}        | ${-123456}  | ${"-123456 number value should should be formatted as '-123 456'"}
        ${"1 234,25"}        | ${1234.25}  | ${"1234.25 number value should should be formatted as '1 234,25'"}
        ${"0001\xa0234,25"}  | ${1234.25}  | ${"0001234.25 string value should should be formatted as '1 234,25'"}
        ${"−0001\xa0234,25"} | ${-1234.25} | ${"-0001234.25 string value should should be formatted as '-1 234,25'"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            expect(parsePercent(value)).toEqual(expected);
        },
    );
});
