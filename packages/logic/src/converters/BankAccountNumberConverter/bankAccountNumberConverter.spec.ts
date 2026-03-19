import { parseBankAccountNumber } from "./bankAccountNumberConverter";

//We use randomly generated test data.
describe("parseBankAccountNumber", () => {
    it.each`
        value                | expected        | description
        ${undefined}         | ${undefined}    | ${"undefined value should return undefined"}
        ${""}                | ${undefined}    | ${"empty value should return undefined"}
        ${"1 234 567-8"}     | ${"12345678"}   | ${"should parse a correct account number"}
        ${"1 er234 56-7"}    | ${undefined}    | ${"should not parse an incorrect account number and return undefined"}
        ${"0 0 1 234 567-8"} | ${"0012345678"} | ${"should keep initial zeros"}
    `(
        'should return "$expected" from "$value" because "$description"',
        ({ value, expected }) => {
            expect(parseBankAccountNumber(value)).toEqual(expected);
        },
    );
});
