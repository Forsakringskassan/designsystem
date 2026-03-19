import { type ValidatableHTMLElement } from "../ValidationServiceInterface";
import { postalCodeValidator } from "./PostalCodeValidator";

//The postalcodes we use is for testpurpose only.
describe("validation", () => {
    it.each`
        value          | expected | description
        ${undefined}   | ${true}  | ${"undefined value should be valid"}
        ${null}        | ${true}  | ${"null value should be valid"}
        ${""}          | ${true}  | ${"empty value should be valid"}
        ${"undefined"} | ${false} | ${'"undefined" value should be invalid'}
        ${"null"}      | ${false} | ${'"null" value should be invalid'}
        ${"93222"}     | ${true}  | ${"value without whitespace and of type string should be valid"}
        ${"932 22"}    | ${true}  | ${"value with whitespace should be valid"}
        ${"932"}       | ${false} | ${"value with invalid format should be invalid"}
        ${"9322"}      | ${false} | ${"value with invalid format should be invalid"}
        ${"932 "}      | ${false} | ${"value with invalid format should be invalid"}
        ${"932 2222"}  | ${false} | ${"value with invalid format should be invalid"}
        ${"-93222"}    | ${false} | ${'value with leading "-" and of type string should be invalid'}
        ${"03222"}     | ${false} | ${'value with leading "0" should be invalid'}
        ${"032aB"}     | ${false} | ${"value with letters should be invalid"}
        ${"032 aB"}    | ${false} | ${"value with letters should be invalid"}
    `(
        'should return $expected with value "$value" because of $description',
        ({ value, expected }) => {
            expect(
                postalCodeValidator.validation(
                    value,
                    {} as ValidatableHTMLElement,
                    {},
                ),
            ).toEqual(expected);
        },
    );
});
