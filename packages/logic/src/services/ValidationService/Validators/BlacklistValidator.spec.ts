import { blacklistValidator } from "./BlacklistValidator";

const element = document.createElement("input");

describe("validation", () => {
    it("should throw error if no values to be excluded", () => {
        expect(() => blacklistValidator.validation("", element, {})).toThrow();
    });
    it.each`
        value           | excluded                            | expected | description
        ${undefined}    | ${[]}                               | ${true}  | ${"anything should be valid"}
        ${null}         | ${[]}                               | ${true}  | ${"anything should be valid"}
        ${"string"}     | ${[]}                               | ${true}  | ${"anything should be valid"}
        ${"räksmörgås"} | ${"räksmörgås"}                     | ${false} | ${"excluded value should be invalid"}
        ${"räksmörgåS"} | ${"räksmörgås"}                     | ${true}  | ${"not excluded value should be valid"}
        ${"pizza"}      | ${["kebab", "pizza", "räksmörgås"]} | ${false} | ${"excluded value should be invalid"}
        ${"ostbågar"}   | ${["kebab", "pizza", "räksmörgås"]} | ${true}  | ${"not excluded value should be valid"}
        ${"123"}        | ${123}                              | ${false} | ${"excluded number-value should be invalid"}
        ${"124"}        | ${123}                              | ${true}  | ${"not excluded number-value should be valid"}
        ${"8"}          | ${[123, 55, 7, 8]}                  | ${false} | ${"excluded number-value should be invalid"}
        ${"10"}         | ${[123, 55, 7, 8]}                  | ${true}  | ${"not excluded number-value should be valid"}
    `(
        'should return "$expected" if "$excluded" excluded and value "$value" because of $description',
        ({ value, expected, excluded }) => {
            expect(
                blacklistValidator.validation(value, element, {
                    values: excluded,
                }),
            ).toEqual(expected);
        },
    );
});
