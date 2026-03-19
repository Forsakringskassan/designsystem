import { HoursMinutesValidatorUtils } from "./HoursMinutesValidatorUtils";

describe("validate", () => {
    it.each`
        value            | expected     | description
        ${"3"}           | ${180}       | ${"numeric value should be valid"}
        ${"1000 00 0 0"} | ${600000000} | ${"numeric value with multiple spaces should be valid"}
        ${"1000 00"}     | ${6000000}   | ${"numeric value with one space should be valid"}
        ${"1 000"}       | ${60000}     | ${"value with whitespace and of type number should be valid"}
        ${"1 0000"}      | ${600000}    | ${"value with whitespace and of type number should be valid"}
        ${" 1 0 0 0 0"}  | ${600000}    | ${"value with whitespace and of type number should be valid"}
    `(
        'should be called with "$expected" for "$value" because of "$description"',
        ({ value, expected }) => {
            const compareFunction = jest.fn();
            const testConfig = { limit: "01:30" };
            HoursMinutesValidatorUtils.validate(
                value,
                testConfig,
                "limit",
                compareFunction,
            );
            expect(compareFunction).toHaveBeenCalledWith(expected, 90);
        },
    );

    it.each`
        value        | config                  | expected | description
        ${""}        | ${{ limit: "1" }}       | ${true}  | ${"empty string as value should be valid"}
        ${"2"}       | ${{ limit: "1" }}       | ${true}  | ${"numeric value should be valid"}
        ${"."}       | ${{ limit: "1" }}       | ${false} | ${"comma(,) as value should be invalid"}
        ${","}       | ${{ limit: "1" }}       | ${false} | ${"dot(.) as value should be invalid"}
        ${null}      | ${{ limit: "1" }}       | ${false} | ${"null as value should be invalid"}
        ${undefined} | ${{ limit: "1" }}       | ${false} | ${"undefined as value should be valid"}
        ${"2"}       | ${{ limit: null }}      | ${false} | ${"null as limit should be invalid"}
        ${"2"}       | ${{ limit: undefined }} | ${false} | ${"undefined as limit should be invalid"}
    `(
        "should return $expected because of $description",
        ({ value, config, expected }) => {
            function compareFunction(): boolean {
                return true;
            }
            expect(
                HoursMinutesValidatorUtils.validate(
                    value,
                    config,
                    "limit",
                    compareFunction,
                ),
            ).toBe(expected);
        },
    );
});
