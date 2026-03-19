import {
    type InvalidDatesValidatorConfig,
    invalidDatesValidator,
} from "./InvalidDatesValidator";

const element = document.createElement("input");

const testConfig = {
    dates: ["2020-01-01"],
};

describe("validation", () => {
    it.each`
        value           | expected | config        | description
        ${"2020-01-01"} | ${false} | ${testConfig} | ${"date should be invalid"}
        ${"2022-04-29"} | ${true}  | ${testConfig} | ${"date should be valid"}
        ${undefined}    | ${true}  | ${testConfig} | ${"undefined should be valid"}
        ${null}         | ${true}  | ${testConfig} | ${"null should be valid"}
        ${""}           | ${true}  | ${testConfig} | ${"empty string should be valid"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected, config }) => {
            const result = invalidDatesValidator.validation(
                value,
                element,
                config,
            );
            expect(result).toEqual(expected);
        },
    );

    it("should throw error when invalid config", () => {
        const config = {
            foo: "bar",
        } as unknown as InvalidDatesValidatorConfig;
        const runValidation = (): boolean =>
            invalidDatesValidator.validation("2022-04-29", element, config);
        expect(() => runValidation()).toThrow();
    });
});
