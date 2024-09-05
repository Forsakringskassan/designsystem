import { lessThanTimeValidator } from "./LessThanTimeValidator";

const element = document.createElement("input");

const testConfig = {
    limit: 3,
};

describe("validation", () => {
    beforeAll(() => {
        /* eslint-disable-next-line no-console -- technical debt, bad practice
         * and console is not restored so it leaks to other tests, should use
         * jest.spyOn(..) at least and for tests expected to log should have
         * explicit tests for this */
        console.error = jest.fn();
    });

    it.each`
        value            | expected | config                 | description
        ${"-3"}          | ${false} | ${testConfig}          | ${"negative value should be invalid"}
        ${"2"}           | ${true}  | ${testConfig}          | ${"value below limit should be valid"}
        ${"0"}           | ${true}  | ${testConfig}          | ${"value below limit should be valid"}
        ${"3"}           | ${false} | ${testConfig}          | ${"value equal to limit should be invalid"}
        ${"10"}          | ${false} | ${testConfig}          | ${"value above limit should be invalid"}
        ${"1000 00 0 0"} | ${true}  | ${{ limit: 20000000 }} | ${"numeric value with multiple spaces should be valid"}
        ${"1000 00"}     | ${true}  | ${{ limit: 200000 }}   | ${"numeric value with one space should be valid"}
        ${"1000 00 0 0"} | ${false} | ${{ limit: 10000000 }} | ${"numeric value with multiple spaces equal to limit should be invalid"}
        ${"1000 00"}     | ${false} | ${{ limit: 100000 }}   | ${"numeric value with one space equal to limit should be invalid"}
        ${"1 000"}       | ${true}  | ${{ limit: 2000 }}     | ${"value with whitespace and of type number should be valid"}
        ${"1 0000"}      | ${true}  | ${{ limit: 20000 }}    | ${"value with whitespace and of type number should be valid"}
        ${"1 000"}       | ${false} | ${{ limit: 1000 }}     | ${"value with whitespace and of type number equal to limit should be invalid"}
        ${"1 0000"}      | ${false} | ${{ limit: 10000 }}    | ${"value with whitespace and of type number equal to limit should be invalid"}
        ${""}            | ${true}  | ${testConfig}          | ${"empty value should be valid"}
        ${"ett"}         | ${false} | ${testConfig}          | ${"non numeric input value should be invalid"}
        ${undefined}     | ${false} | ${testConfig}          | ${"undefined should be invalid"}
        ${null}          | ${false} | ${testConfig}          | ${"null should be invalid"}
        ${"3.3"}         | ${false} | ${{ limit: 4 }}        | ${"value with dot(.) seperator should be invalid"}
        ${" "}           | ${false} | ${testConfig}          | ${"whitespace( ) should be invalid"}
        ${"."}           | ${false} | ${testConfig}          | ${"dot(.) should be invalid"}
        ${","}           | ${false} | ${testConfig}          | ${"comma(,) should be invalid"}
    `(
        'should return "$expected" for "$value" because of "$description"',
        ({ value, expected, config }) => {
            expect(
                lessThanTimeValidator.validation(value, element, config),
            ).toEqual(expected);
        },
    );

    it("should throw error on invalid config", () => {
        expect.assertions(1);

        expect(() =>
            lessThanTimeValidator.validation("2", element, { limit: "five" }),
        ).toThrowErrorMatchingInlineSnapshot(`"config.limit must be a number"`);
    });
});
