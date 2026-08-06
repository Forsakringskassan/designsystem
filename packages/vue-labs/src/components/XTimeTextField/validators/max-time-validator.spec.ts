import { describe, expect, it } from "vitest";
import { maxTimeValidator } from "./max-time-validator";

const element = document.createElement("input");

const testConfig = {
    maxTime: 3,
};

describe("validation", () => {
    it.each`
        value            | expected | config                     | description
        ${"-3"}          | ${false} | ${testConfig}              | ${"negative value should be invalid"}
        ${"2"}           | ${true}  | ${testConfig}              | ${"value below maxTime should be valid"}
        ${"0"}           | ${true}  | ${testConfig}              | ${"value below maxTime should be valid"}
        ${"3"}           | ${true}  | ${testConfig}              | ${"value equal to maxTime should be valid"}
        ${"10"}          | ${false} | ${testConfig}              | ${"value above maxTime should be invalid"}
        ${"1000 00 0 0"} | ${true}  | ${{ maxTime: "10000000" }} | ${"numeric value with multiple spaces should be valid"}
        ${"1000 00"}     | ${true}  | ${{ maxTime: "100000" }}   | ${"numeric value with one space should be valid"}
        ${"1 000"}       | ${true}  | ${{ maxTime: "1000" }}     | ${"value with whitespace and of type number should be valid"}
        ${"1 0000"}      | ${true}  | ${{ maxTime: "10000" }}    | ${"value with whitespace and of type number should be valid"}
        ${""}            | ${true}  | ${testConfig}              | ${"empty value should be valid"}
        ${"ett"}         | ${false} | ${testConfig}              | ${"non numeric input value should be invalid"}
        ${undefined}     | ${false} | ${testConfig}              | ${"undefined should be invalid"}
        ${null}          | ${false} | ${testConfig}              | ${"null should be invalid"}
        ${"3.3"}         | ${false} | ${{ maxTime: 4 }}          | ${"value with dot(.) seperator should be invalid"}
        ${" "}           | ${false} | ${testConfig}              | ${"whitespace( ) should be invalid"}
        ${"."}           | ${false} | ${testConfig}              | ${"dot(.) should be invalid"}
        ${","}           | ${false} | ${testConfig}              | ${"comma(,) should be invalid"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({
            value,
            expected,
            config,
        }: {
            value: unknown;
            expected: boolean;
            config: unknown;
        }) => {
            expect.assertions(1);
            /* @ts-expect-error -- technical debt, we're lying to the type system */
            expect(maxTimeValidator.validation(value, element, config)).toEqual(
                expected,
            );
        },
    );

    it("should throw error on invalid config", () => {
        expect.assertions(1);

        expect(() =>
            maxTimeValidator.validation("2", element, { maxTime: "five" }),
        ).toThrowErrorMatchingInlineSnapshot(
            "[Error: config.maxTime must be a number]",
        );
    });
});
