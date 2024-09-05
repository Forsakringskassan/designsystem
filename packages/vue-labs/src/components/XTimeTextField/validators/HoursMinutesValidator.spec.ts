import { hoursMinutesValidator } from "./HoursMinutesValidator";

const element = document.createElement("input");

describe("validation", () => {
    it.each`
        value        | expected | description
        ${"10:59"}   | ${true}  | ${"59 minutes should be valid"}
        ${"10:00"}   | ${true}  | ${"00 minutes should be valid"}
        ${"5"}       | ${true}  | ${"string h should be valid"}
        ${"45"}      | ${true}  | ${"string hh should be valid"}
        ${"145"}     | ${true}  | ${"string hhh should be valid"}
        ${"1045"}    | ${true}  | ${"string hhhh should be valid"}
        ${"10045"}   | ${true}  | ${"string hhhhh should be valid"}
        ${":45"}     | ${true}  | ${"string :mm should be valid"}
        ${"0:45"}    | ${true}  | ${"string 0:mm should be valid"}
        ${"00:45"}   | ${true}  | ${"string 00:mm should be valid"}
        ${"01:45"}   | ${true}  | ${"string 0h:mm should be valid"}
        ${"10:45"}   | ${true}  | ${"string hh:mm should be valid"}
        ${"101:45"}  | ${true}  | ${"string hhh:mm should be valid"}
        ${"1001:45"} | ${true}  | ${"string hhhh:mm should be valid"}
        ${"nej"}     | ${false} | ${"regular letters should be invalid"}
        ${"10.45"}   | ${false} | ${"a dot separator should be invalid"}
        ${"10,45"}   | ${false} | ${"a comma separator should be invalid"}
        ${"10:60"}   | ${false} | ${"minutes greater than 59 should be invalid"}
        ${"10:62"}   | ${false} | ${"minutes greater than 59 should be invalid"}
        ${"10:-1"}   | ${false} | ${"negative minutes should be invalid"}
        ${"10:450"}  | ${false} | ${"more than two minute digits should be invalid"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected, config }) => {
            expect(
                hoursMinutesValidator.validation(value, element, config),
            ).toEqual(expected);
        },
    );
});
