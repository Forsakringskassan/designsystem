import { decimalValidator } from "./DecimalValidator";

const element = document.createElement("input");

const testConfig = {
    minDecimals: 1,
    maxDecimals: 2,
};

describe("validation", () => {
    it.each`
        value                | expected | config        | description
        ${""}                | ${true}  | ${testConfig} | ${"empty value should be valid"}
        ${"10"}              | ${false} | ${testConfig} | ${"numeric value should be invalid"}
        ${"1"}               | ${false} | ${testConfig} | ${"numeric value should be invalid"}
        ${"10,3"}            | ${true}  | ${testConfig} | ${"numeric value with comma(,) separator should be valid"}
        ${"10.3"}            | ${true}  | ${testConfig} | ${"numeric value with dot(.) separator should be valid"}
        ${"10,"}             | ${false} | ${testConfig} | ${"numeric value with comma(,) separator and empty right side should be invalid"}
        ${"10."}             | ${false} | ${testConfig} | ${"numeric value with dot(.) separator and empty right side should be invalid"}
        ${"10.133"}          | ${false} | ${testConfig} | ${"Numeric value with dot(.) seperator with three decimals should be invalid"}
        ${"10.13"}           | ${true}  | ${testConfig} | ${"Numeric value with dot(.) seperator with two decimals should be valid"}
        ${"50%"}             | ${false} | ${testConfig} | ${"numeric value with trailing % should be invalid"}
        ${"50,4%"}           | ${false} | ${testConfig} | ${"numeric value with trailing % and comma(,) separator should be invalid"}
        ${"50.4%"}           | ${false} | ${testConfig} | ${"numeric value with trailing % and dot(.) separator should be invalid"}
        ${"hundra"}          | ${false} | ${testConfig} | ${"non numeric value should be invalid"}
        ${"+100"}            | ${false} | ${testConfig} | ${"numeric value with leading plus(+) should be invalid"}
        ${"+100,10"}         | ${false} | ${testConfig} | ${"numeric value with leading plus(+) should be invalid"}
        ${"+100.10"}         | ${false} | ${testConfig} | ${"numeric value with leading plus(+) should be invalid"}
        ${"-100"}            | ${false} | ${testConfig} | ${"numeric value with leading minus(-) should be invalid"}
        ${"-100,10"}         | ${true}  | ${testConfig} | ${"numeric value with leading minus(-) should be valid"}
        ${"-100.10"}         | ${true}  | ${testConfig} | ${"numeric value with leading minus(-) should be valid"}
        ${"−100.10"}         | ${true}  | ${testConfig} | ${"numeric value with leading minus sign (U+2212) should be valid"}
        ${"--100.10"}        | ${false} | ${testConfig} | ${"numeric value with dual leading minus(--) should be invalid"}
        ${"1000 00 0 0 .50"} | ${true}  | ${testConfig} | ${"numeric value with multiple spaces should be valid"}
        ${"1000 00. 50"}     | ${true}  | ${testConfig} | ${"numeric value with one space should be valid"}
        ${"  1000 00.50  "}  | ${true}  | ${testConfig} | ${"numeric value with leading and trailing spaces should be valid"}
        ${"100,000,00"}      | ${false} | ${testConfig} | ${"numeric value with multiple comma(,)  should be invalid"}
        ${"100.000,50"}      | ${false} | ${testConfig} | ${"numeric value with multiple dot(.) and comma(,) should be invalid"}
        ${undefined}         | ${true}  | ${testConfig} | ${"undefined value should be valid"}
        ${null}              | ${true}  | ${testConfig} | ${"null value should be valid"}
        ${-100}              | ${false} | ${testConfig} | ${'value with leading "-" and of type number should be invalid'}
        ${100}               | ${false} | ${testConfig} | ${"value without whitespace and of type number should be invalid"}
        ${"undefined"}       | ${false} | ${testConfig} | ${'"undefined" value should be invalid'}
        ${"null"}            | ${false} | ${testConfig} | ${'"null" value should be invalid'}
        ${10e3}              | ${false} | ${testConfig} | ${"power to should be invalid"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected, config }) => {
            expect(decimalValidator.validation(value, element, config)).toEqual(
                expected,
            );
        },
    );

    it("should throw error on invalid config", () => {
        expect.assertions(2);

        const config1 = { maxDecimals: "five" as unknown as number };
        expect(() =>
            decimalValidator.validation("1", element, config1),
        ).toThrowErrorMatchingInlineSnapshot(
            `"config.maxDecimals must be a number"`,
        );

        const config2 = { minDecimals: "five" as unknown as number };
        expect(() =>
            decimalValidator.validation("1", element, config2),
        ).toThrowErrorMatchingInlineSnapshot(
            `"config.minDecimals must be a number"`,
        );
    });
});
