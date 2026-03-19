import { validLimit } from "./DateUtils";

describe("validLimit", () => {
    it.each`
        limit           | errorMessage                          | description
        ${"20200202"}   | ${"limit has invalid format"}         | ${"format other than YYYY-MM-DD should be invalid"}
        ${"2020/02/02"} | ${"limit has invalid format"}         | ${"format other than YYYY-MM-DD should be invalid"}
        ${"02-02-2020"} | ${"limit has invalid format"}         | ${"format other than YYYY-MM-DD should be invalid"}
        ${" "}          | ${"limit has invalid format"}         | ${"whitespace should be invalid"}
        ${3}            | ${"limit must be a non-empty string"} | ${"limit must be a string"}
        ${undefined}    | ${"limit must be a non-empty string"} | ${"limit can not be undefined"}
        ${""}           | ${"limit must be a non-empty string"} | ${"limit can not be empty"}
        ${{}}           | ${"limit must be a non-empty string"} | ${"limit can not be empty"}
    `(
        'should throw errors "$errorMessage" when "limit=$limit" because $description',
        ({ limit, errorMessage }) => {
            expect.assertions(1);
            expect(() => validLimit(limit)).toThrow(errorMessage);
        },
    );

    it.each`
        limit           | description
        ${"2020-01-01"} | ${"date format YYYY-MM-DD is valid"}
        ${"1990-12-31"} | ${"date format YYYY-MM-DD is valid"}
    `(
        'should not throw error when "limit=$limit" because $description',
        ({ limit }) => {
            expect.assertions(1);
            expect(() => validLimit(limit)).not.toThrow();
        },
    );
});
