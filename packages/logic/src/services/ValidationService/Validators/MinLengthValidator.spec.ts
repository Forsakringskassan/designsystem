import { minLengthValidator } from "./MinLengthValidator";

const element = document.createElement("input");

it.each`
    value         | expected | description
    ${"1234567"}  | ${true}  | ${"7 characters are valid"}
    ${"123456"}   | ${false} | ${"6 characters are invalid"}
    ${"12345678"} | ${true}  | ${"more than 7 characters in length are valid"}
    ${""}         | ${true}  | ${"empty value is valid"}
`(
    'should return $expected with value "$value" because of $description',
    ({ value, expected }) => {
        const config = {
            length: 7,
        };
        const result = minLengthValidator.validation(value, element, config);
        expect(result).toEqual(expected);
    },
);
