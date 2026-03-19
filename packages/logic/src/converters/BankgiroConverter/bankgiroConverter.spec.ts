import { parseBankgiro } from "./bankgiroConverter";

//These fake bankgiro values are as of this writing 2024-05-28 verified as non-existing,
//but are not provided as official fake sample numbers by bankgirot.se
describe("parseBankgiro", () => {
    it.each`
        value          | expected       | description
        ${""}          | ${undefined}   | ${"empty value should return undefined"}
        ${undefined}   | ${undefined}   | ${"undefined value should return undefined"}
        ${"999999b"}   | ${undefined}   | ${"value with non-digit should return undefined"}
        ${"9999996"}   | ${"999-9996"}  | ${"value with 7 digits should be parsed as XXX-XXXX"}
        ${"999-9996"}  | ${"999-9996"}  | ${"value with 7 digits and hyphen should be parsed as XXX-XXXX"}
        ${"99999997"}  | ${"9999-9997"} | ${"value with 8 digits should be parsed as XXXX-XXXX"}
        ${"9999-9997"} | ${"9999-9997"} | ${"value with 8 digits and hyphen should be parsed as XXXX-XXXX"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            expect(parseBankgiro(value)).toEqual(expected);
        },
    );
});
