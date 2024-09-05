import { maxValueValidator } from "./MaxValueValidator";

const element = document.createElement("input");

const testConfig = {
    maxValue: 3,
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
        value            | expected | config                      | description
        ${"-3"}          | ${true}  | ${testConfig}               | ${"value below maxValue should be valid"}
        ${"2"}           | ${true}  | ${testConfig}               | ${"value below maxValue should be valid"}
        ${"0"}           | ${true}  | ${testConfig}               | ${"value below maxValue should be valid"}
        ${"3"}           | ${true}  | ${testConfig}               | ${"value equal to maxValue should be valid"}
        ${"10"}          | ${false} | ${testConfig}               | ${"value above maxValue should be invalid"}
        ${"1000 00 0 0"} | ${true}  | ${{ maxValue: "10000000" }} | ${"numeric value with multiple spaces should be valid"}
        ${"1000 00"}     | ${true}  | ${{ maxValue: "100000" }}   | ${"numeric value with one space should be valid"}
        ${"1 000"}       | ${true}  | ${{ maxValue: "1000" }}     | ${"value with whitespace and of type number should be valid"}
        ${"1 0000"}      | ${true}  | ${{ maxValue: "10000" }}    | ${"value with whitespace and of type number should be valid"}
        ${""}            | ${true}  | ${testConfig}               | ${"empty value should be valid"}
        ${"ett"}         | ${false} | ${testConfig}               | ${"non numeric input value should be invalid"}
        ${undefined}     | ${false} | ${testConfig}               | ${"undefined should be invalid"}
        ${null}          | ${false} | ${testConfig}               | ${"null should be invalid"}
        ${"3,3"}         | ${true}  | ${{ maxValue: "3,3" }}      | ${"value with comma(,) seperator should be valid"}
        ${"3.3"}         | ${true}  | ${{ maxValue: "3.3" }}      | ${"value with dot(.) seperator should be valid"}
        ${" "}           | ${false} | ${testConfig}               | ${"whitespace( ) should be invalid"}
        ${"."}           | ${false} | ${testConfig}               | ${"dot(.) should be invalid"}
        ${","}           | ${false} | ${testConfig}               | ${"comma(,) should be invalid"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected, config }) => {
            expect(
                maxValueValidator.validation(value, element, config),
            ).toEqual(expected);
        },
    );

    it("should throw error on invalid config", () => {
        expect.assertions(1);

        expect(() =>
            maxValueValidator.validation!("2", element, { maxValue: "five" }),
        ).toThrowErrorMatchingInlineSnapshot(
            `"config.maxValue must be a number"`,
        );
    });
});
