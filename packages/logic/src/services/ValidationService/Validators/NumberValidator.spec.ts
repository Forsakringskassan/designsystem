import { numberValidator } from "./NumberValidator";

const element = document.createElement("input");

describe("validation", () => {
    it.each`
        value            | expected | description
        ${""}            | ${true}  | ${"empty value should be valid"}
        ${"10"}          | ${true}  | ${"numeric value should be valid"}
        ${"1"}           | ${true}  | ${"numeric value should be valid"}
        ${"10,3"}        | ${true}  | ${"numeric value with comma(,) separator should be valid"}
        ${"10,3"}        | ${true}  | ${"numeric value with comma(,) separator should be valid"}
        ${"1,3333"}      | ${true}  | ${"numeric value with comma(,) separator and 4 decimals should be valid"}
        ${"10.3"}        | ${true}  | ${"numeric value with dot(.) separator should be valid"}
        ${"10,"}         | ${false} | ${"numeric value with comma(,) separator and empty right side should be invalid"}
        ${"10."}         | ${false} | ${"numeric value with dot(.) separator and empty right side should be invalid"}
        ${"50%"}         | ${false} | ${"numeric value with trailing % should be invalid"}
        ${"50,4%"}       | ${false} | ${"numeric value with trailing % and comma(,) separator should be invalid"}
        ${"50.4%"}       | ${false} | ${"numeric value with trailing % and dot(.) separator should be invalid"}
        ${"hundra"}      | ${false} | ${"non numeric value should be invalid"}
        ${"+100"}        | ${false} | ${"numeric value with leading plus(+) should be invalid"}
        ${"+100,10"}     | ${false} | ${"numeric value with leading plus(+) should be invalid"}
        ${"+100.10"}     | ${false} | ${"numeric value with leading plus(+) should be invalid"}
        ${"-100"}        | ${true}  | ${"numeric value with leading minus(-) should be valid"}
        ${"-100,10"}     | ${true}  | ${"numeric value with leading minus(-) should be valid"}
        ${"-100.10"}     | ${true}  | ${"numeric value with leading minus(-) should be valid"}
        ${"--100.10"}    | ${false} | ${"numeric value with dual leading minus(--) should be unvalid"}
        ${"1000 00 0 0"} | ${true}  | ${"numeric value with multiple spaces should be valid"}
        ${"1000 00"}     | ${true}  | ${"numeric value with one space should be valid"}
        ${"  1000 00  "} | ${true}  | ${"numeric value with leading and trailing spaces should be valid"}
        ${"100.000.50"}  | ${false} | ${"numeric value with multiple dot(.) and comma(,) should be invalid"}
        ${"100,000,00"}  | ${false} | ${"numeric value with multiple comma(,)  should be invalid"}
        ${"1 000"}       | ${true}  | ${"value with whitespace and of type number should be valid"}
        ${"1 0000"}      | ${true}  | ${"value with whitespace and of type number should be valid"}
        ${undefined}     | ${true}  | ${"undefined value should be valid"}
        ${null}          | ${true}  | ${"null value should be valid"}
        ${"undefined"}   | ${false} | ${'"undefined" value should be invalid'}
        ${"null"}        | ${false} | ${'"null" value should be invalid'}
        ${"10e3"}        | ${false} | ${"power to should be invalid"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected, config }) => {
            expect(numberValidator.validation(value, element, config)).toEqual(
                expected,
            );
        },
    );
});
