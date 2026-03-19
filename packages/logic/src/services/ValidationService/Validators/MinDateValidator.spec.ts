import { minDateValidator } from "./MinDateValidator";

const element = document.createElement("input");

const testConfig = {
    limit: "2020-02-02",
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
        value           | expected | config        | description
        ${"2020-02-02"} | ${true}  | ${testConfig} | ${"YYYY-MM-DD date equal to limit should be valid"}
        ${"2020-02-03"} | ${true}  | ${testConfig} | ${"YYYY-MM-DD date after limit should be valid"}
        ${"2020-03-02"} | ${true}  | ${testConfig} | ${"YYYY-MM-DD date after limit should be valid"}
        ${"2021-02-02"} | ${true}  | ${testConfig} | ${"YYYY-MM-DD date after limit should be valid"}
        ${"2020-02-01"} | ${false} | ${testConfig} | ${"YYYY-MM-DD date before limit should be invalid"}
        ${"2020-01-02"} | ${false} | ${testConfig} | ${"YYYY-MM-DD date before limit should be invalid"}
        ${"2019-02-02"} | ${false} | ${testConfig} | ${"YYYY-MM-DD date before limit should be invalid"}
        ${"20200202"}   | ${true}  | ${testConfig} | ${"YYYYMMDD date equal to limit should be valid"}
        ${"20200203"}   | ${true}  | ${testConfig} | ${"YYYYMMDD date after limit should be valid"}
        ${"20200302"}   | ${true}  | ${testConfig} | ${"YYYYMMDD date after limit should be valid"}
        ${"20210202"}   | ${true}  | ${testConfig} | ${"YYYYMMDD date after limit should be valid"}
        ${"20200201"}   | ${false} | ${testConfig} | ${"YYYYMMDD date before limit should be invalid"}
        ${"20200102"}   | ${false} | ${testConfig} | ${"YYYYMMDD date before limit should be invalid"}
        ${"20190202"}   | ${false} | ${testConfig} | ${"YYYYMMDD date before limit should be invalid"}
        ${"2020/02/02"} | ${true}  | ${testConfig} | ${"YYYY/MM/DD date equal to limit should be valid"}
        ${"2020/02/03"} | ${true}  | ${testConfig} | ${"YYYY/MM/DD date after limit should be valid"}
        ${"2020/03/02"} | ${true}  | ${testConfig} | ${"YYYY/MM/DD date after limit should be valid"}
        ${"2021/02/02"} | ${true}  | ${testConfig} | ${"YYYY/MM/DD date after limit should be valid"}
        ${"2020/02/01"} | ${false} | ${testConfig} | ${"YYYY/MM/DD date before limit should be invalid"}
        ${"2020/01/02"} | ${false} | ${testConfig} | ${"YYYY/MM/DD date before limit should be invalid"}
        ${"2019/02/02"} | ${false} | ${testConfig} | ${"YYYY/MM/DD date before limit should be invalid"}
        ${undefined}    | ${true}  | ${testConfig} | ${"undefined should be valid"}
        ${null}         | ${true}  | ${testConfig} | ${"null should be valid"}
        ${""}           | ${true}  | ${testConfig} | ${"empty string should be valid"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected, config }) => {
            expect(minDateValidator.validation(value, element, config)).toEqual(
                expected,
            );
        },
    );
});
