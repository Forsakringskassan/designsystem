import { clearingNumberValidator } from "./ClearingNumberValidator";

const element = document.createElement("input");
//The clearingnumbers we use is for testpurpose only.
it.each`
    value        | expected | description
    ${""}        | ${true}  | ${"empty value should be valid"}
    ${null}      | ${true}  | ${"null should be valid"}
    ${undefined} | ${true}  | ${"undefined should be valid"}
    ${"1234"}    | ${true}  | ${"a 4 digit clearing number is valid"}
    ${"12345"}   | ${true}  | ${"a 5 digit clearing number is valid"}
    ${"1234-5"}  | ${true}  | ${"a 5 digit clearing number is valid"}
    ${"3300"}    | ${true}  | ${"a nordea number is valid"}
    ${"123"}     | ${false} | ${"a 3 digit clearing number is invalid"}
    ${"123-45"}  | ${false} | ${"a 5 digit clearing number with wrong hyphen is invalid"}
    ${"1234 5"}  | ${true}  | ${"a 5 digit clearing number with space instead of hyphen is valid"}
    ${"1234,5"}  | ${false} | ${"a 5 digit clearing number with comma instead of hyphen is invalid"}
    ${"1234.5"}  | ${false} | ${"a 5 digit clearing number with dot instead of hyphen is invalid"}
    ${" "}       | ${false} | ${"a space is invalid"}
    ${"1234-56"} | ${false} | ${"a 6 digit clearing number with hyphen is invalid"}
    ${"123456"}  | ${false} | ${"a 6 digit clearing number is invalid"}
    ${"asdf"}    | ${false} | ${"only numbers are valid"}
`(
    'should return $expected with value "$value" because of $description',
    ({ value, expected }) => {
        const result = clearingNumberValidator.validation(value, element, {});
        expect(result).toEqual(expected);
    },
);
