import { minValueValidator } from "./MinValueValidator";

const element = document.createElement("input");

const testConfig = {
    minValue: 2,
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
        ${"3"}           | ${true}  | ${testConfig}          | ${"value above minValue should be valid"}
        ${"2"}           | ${true}  | ${testConfig}          | ${"value equal to minValue should be valid"}
        ${"1"}           | ${false} | ${testConfig}          | ${"value below minValue should be invalid"}
        ${"0"}           | ${false} | ${testConfig}          | ${"value below minValue should be invalid"}
        ${"-1"}          | ${false} | ${testConfig}          | ${"negative value below minValue should be invalid"}
        ${"1000 00 0 0"} | ${true}  | ${testConfig}          | ${"numeric value with multiple spaces should be valid"}
        ${"1000 00"}     | ${true}  | ${testConfig}          | ${"numeric value with one space should be valid"}
        ${"1 000"}       | ${true}  | ${testConfig}          | ${"value with whitespace and of type number should be valid"}
        ${"1 0000"}      | ${true}  | ${testConfig}          | ${"value with whitespace and of type number should be valid"}
        ${""}            | ${true}  | ${testConfig}          | ${"empty value should be valid"}
        ${"ett"}         | ${false} | ${testConfig}          | ${"non numeric input value should be invalid"}
        ${undefined}     | ${false} | ${testConfig}          | ${"undefined should be invalid"}
        ${null}          | ${false} | ${testConfig}          | ${"null should be invalid"}
        ${"3,3"}         | ${true}  | ${{ minValue: "3,3" }} | ${"value with comma(,) seperator should be valid"}
        ${"3.3"}         | ${true}  | ${{ minValue: "3.3" }} | ${"value with dot(.) seperator should be valid"}
        ${" "}           | ${false} | ${testConfig}          | ${"whitespace( ) should be invalid"}
        ${"."}           | ${false} | ${testConfig}          | ${"dot(.) should be invalid"}
        ${","}           | ${false} | ${testConfig}          | ${"comma(,) should be invalid"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected, config }) => {
            expect(
                minValueValidator.validation(value, element, config),
            ).toEqual(expected);
        },
    );

    it("should throw error on invalid config", () => {
        expect.assertions(1);

        expect(() =>
            minValueValidator.validation!("2", element, { minValue: "five" }),
        ).toThrowErrorMatchingInlineSnapshot(
            `"config.minValue must be a number"`,
        );
    });
});
