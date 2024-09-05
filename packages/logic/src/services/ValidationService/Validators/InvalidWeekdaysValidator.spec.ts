import {
    type InvalidWeekdaysValidatorConfig,
    invalidWeekdaysValidator,
} from "./InvalidWeekdaysValidator";

const element = document.createElement("input");

const testConfig = {
    days: [6, 7],
};

describe("validation", () => {
    it.each`
        value           | expected | config        | description
        ${"2022-04-30"} | ${false} | ${testConfig} | ${"weekday should be invalid"}
        ${"2022-04-29"} | ${true}  | ${testConfig} | ${"weekday should be valid"}
        ${undefined}    | ${true}  | ${testConfig} | ${"undefined should be valid"}
        ${null}         | ${true}  | ${testConfig} | ${"null should be valid"}
        ${""}           | ${true}  | ${testConfig} | ${"empty string should be valid"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected, config }) => {
            const result = invalidWeekdaysValidator.validation(
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
        } as unknown as InvalidWeekdaysValidatorConfig;
        const runValidation = (): boolean =>
            invalidWeekdaysValidator.validation("2022-04-29", element, config);
        expect(() => runValidation()).toThrow();
    });
});
