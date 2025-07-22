import { guardSet } from "./guard-set";

// eslint-disable-next-line jest/no-disabled-tests -- Work in progress
describe.skip("guardSet", () => {
    describe("numbers", () => {
        let value: number | null = 42;

        beforeEach(() => {
            guardSet(value);
        });

        it.each`
            newValue                   | shouldThrowException
            ${0}                       | ${false}
            ${Number.MIN_SAFE_INTEGER} | ${false}
            ${Number.MAX_SAFE_INTEGER} | ${false}
            ${null}                    | ${false}
            ${undefined}               | ${true}
        `(
            "should throw exception `MissingValueError` for `$newValue`: $shouldThrowException",
            ({ newValue, shouldThrowException }) => {
                value = newValue;
                expect(value).toBe(shouldThrowException ? 42 : newValue);
            },
        );
    });
});
