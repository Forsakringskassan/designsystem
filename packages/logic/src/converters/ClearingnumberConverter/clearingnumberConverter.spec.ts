import { parseClearingNumber } from "./clearingnumberConverter";

//The clearingnumbers we use is for testpurpose only.
describe("parseClearingNumber", () => {
    it.each`
        value        | expected     | description
        ${undefined} | ${undefined} | ${"undefined value should return undefined"}
        ${""}        | ${undefined} | ${"empty value should return undefined"}
        ${"56781"}   | ${"5678-1"}  | ${"correct value should add hyphen"}
        ${"5678"}    | ${"5678"}    | ${"correct 4 digit clearing number without hyphen should pass"}
        ${"5678-1"}  | ${"5678-1"}  | ${"correct 5 digit with hyphen clearing number should pass"}
        ${"5678-12"} | ${undefined} | ${"faulty clearing number should be returned as undefined"}
        ${"567812"}  | ${undefined} | ${"faulty clearing number should be returned as undefined"}
        ${"567"}     | ${undefined} | ${"faulty clearing number should be returned as undefined"}
        ${"12e45"}   | ${undefined} | ${"faulty clearing number should be returned as undefined"}
    `(
        'should return "$expected" from "$value" because "$description"',
        ({ value, expected }) => {
            expect(parseClearingNumber(value)).toEqual(expected);
        },
    );
});
