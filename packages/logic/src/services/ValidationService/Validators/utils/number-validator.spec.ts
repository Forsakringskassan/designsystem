import { expect, it, vi } from "vitest";
import { numberValidator } from "./number-validator";

it.each`
    value            | expected      | description
    ${"3"}           | ${3}          | ${"numeric value should be valid"}
    ${"0,3"}         | ${0.3}        | ${"value with comma(,) seperator should be valid"}
    ${"-1.2"}        | ${-1.2}       | ${"value with dot(.) seperator should be valid"}
    ${"1000 00 0 0"} | ${10_000_000} | ${"numeric value with multiple spaces should be valid"}
    ${"1000 00"}     | ${100_000}    | ${"numeric value with one space should be valid"}
    ${"1 000"}       | ${1000}       | ${"value with whitespace and of type number should be valid"}
    ${"1 0000"}      | ${10_000}     | ${"value with whitespace and of type number should be valid"}
    ${" 1 0 0 0 0"}  | ${10_000}     | ${"value with whitespace and of type number should be valid"}
`(
    'should be called with "$expected" for "$value" because of $description',
    ({ value, expected }) => {
        expect.assertions(1);
        const compareFunction = vi.fn();
        const testConfig = { limit: "1" };
        numberValidator(value, testConfig, "limit", compareFunction);
        expect(compareFunction).toHaveBeenCalledWith(expected, 1);
    },
);

it.each`
    config                        | expected      | description
    ${{ limit: "3" }}             | ${3}          | ${"numeric value should be valid"}
    ${{ limit: "0,3" }}           | ${0.3}        | ${"value with comma(,) seperator should be valid"}
    ${{ limit: "-1.2" }}          | ${-1.2}       | ${"value with dot(.) seperator should be valid"}
    ${{ limit: "1000 00 0 0" }}   | ${10_000_000} | ${"numeric value with multiple spaces should be valid"}
    ${{ limit: "1000 00" }}       | ${100_000}    | ${"numeric value with one space should be valid"}
    ${{ limit: "1 000" }}         | ${1000}       | ${"value with whitespace and of type number should be valid"}
    ${{ limit: "1 0000" }}        | ${10_000}     | ${"value with whitespace and of type number should be valid"}
    ${{ limit: " 1 0 0 0 0" }}    | ${10_000}     | ${"value with whitespace and of type number should be valid"}
    ${{ limit: "10\u{A0}050,3" }} | ${10_050.3}   | ${"value with non breaking whitespace and of type number should be valid"}
`(
    'should be called with "$expected" for "$config" because of $description',
    ({ config, expected }) => {
        expect.assertions(1);
        const compareFunction = vi.fn();
        numberValidator("1", config, "limit", compareFunction);
        expect(compareFunction).toHaveBeenCalledWith(1, expected);
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
        expect.assertions(1);
        function compareFunction(): boolean {
            return true;
        }

        expect(numberValidator(value, config, "limit", compareFunction)).toBe(
            expected,
        );
    },
);

it("should throw error if not a number in config", () => {
    expect.assertions(1);
    const compareFunction = vi.fn();

    expect.assertions(1);

    expect(() =>
        numberValidator("1", { limit: "a" }, "limit", compareFunction),
    ).toThrowErrorMatchingInlineSnapshot(
        `[Error: config.limit must be a number]`,
    );
});
