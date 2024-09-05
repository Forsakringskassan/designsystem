import { maxLengthValidator } from "./MaxLengthValidator";

const element = document.createElement("input");

it.each`
    value         | expected | description
    ${"1234567"}  | ${true}  | ${"7 characters are valid"}
    ${"123456"}   | ${true}  | ${"6 characters are valid"}
    ${"12345678"} | ${false} | ${"more than 7 characters in length are invalid"}
    ${""}         | ${true}  | ${"empty value is valid"}
`(
    'should return $expected with value "$value" because of $description',
    ({ value, expected }) => {
        const options = { length: 7 };
        const result = maxLengthValidator.validation(value, element, options);
        expect(result).toEqual(expected);
    },
);
