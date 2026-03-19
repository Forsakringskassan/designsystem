import { percentValidator } from "./PercentValidator";

const element = document.createElement("input");

describe("validation", () => {
    it.each`
        value           | expected | description
        ${""}           | ${true}  | ${"empty value should be valid"}
        ${"10"}         | ${true}  | ${"numeric value should be valid"}
        ${"1 000"}      | ${true}  | ${"numeric value with spaces should be valid"}
        ${"-1 000 000"} | ${true}  | ${"numeric value with spaces and leading minus(-) should be valid"}
        ${"+1 000 000"} | ${true}  | ${"numeric value with spaces and leading plus(+) should be valid"}
        ${"1"}          | ${true}  | ${"numeric value should be valid"}
        ${"10,3"}       | ${true}  | ${"numeric value with comma(,) separator should be valid"}
        ${"10.3"}       | ${true}  | ${"numeric value with dot(.) separator should be valid"}
        ${"10,"}        | ${false} | ${"numeric value with comma(,) separator and empty right side should be invalid"}
        ${"10."}        | ${false} | ${"numeric value with dot(.) separator and empty right side should be invalid"}
        ${"50%"}        | ${false} | ${"numeric value with trailing % should be invalid"}
        ${"50,4%"}      | ${false} | ${"numeric value with trailing % and comma(,) separator should be invalid"}
        ${"50.4%"}      | ${false} | ${"numeric value with trailing % and dot(.) separator should be invalid"}
        ${"hundra"}     | ${false} | ${"non numeric value should be invalid"}
        ${"+100"}       | ${true}  | ${"numeric value with leading plus(+) should be valid"}
        ${"+100,10"}    | ${true}  | ${"numeric value with leading plus(+) should be valid"}
        ${"+100.10"}    | ${true}  | ${"numeric value with leading plus(+) should be valid"}
        ${"-100"}       | ${true}  | ${"numeric value with leading minus(-) should be valid"}
        ${"-100,10"}    | ${true}  | ${"numeric value with leading minus(-) should be valid"}
        ${"-100.10"}    | ${true}  | ${"numeric value with leading minus(-) should be valid"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected, config }) => {
            const result = percentValidator.validation(value, element, config);
            expect(result).toEqual(expected);
        },
    );
});
