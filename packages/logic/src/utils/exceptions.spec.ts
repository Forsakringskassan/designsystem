import { DecoratedError } from "./exceptions";

describe("DecoratedError", () => {
    it("should contain details from original error", () => {
        const given = new Error("original message");

        const actual = new DecoratedError("more details here", given);

        expect(actual).toMatchInlineSnapshot(
            `[DecoratedError: more details here]`,
        );
        expect(actual.stack).toContain(`DecoratedError: more details here`);
        expect(actual.stack).toContain(`Caused by: Error: original message`);
        expect(actual.getCause()).toBe(given);
        expect(actual.getRootCause()).toBe(given);
    });

    it("should keep references to all exceptions in chain", () => {
        const givenRootCause = new Error("original message");
        const givenCause = new DecoratedError("Decorated 1", givenRootCause);

        const actual = new DecoratedError("Decorated 2", givenCause);

        expect(actual).toMatchInlineSnapshot(`[DecoratedError: Decorated 2]`);
        expect(actual.stack).toContain(`DecoratedError: Decorated 1`);
        expect(actual.stack).toContain(`DecoratedError: Decorated 2`);
        expect(actual.stack).toContain(
            `Caused by: DecoratedError: Decorated 1`,
        );
        expect(actual.stack).toContain(`Caused by: Error: original message`);
        expect(actual.getCause()).toBe(givenCause);
        expect(actual.getRootCause()).toBe(givenRootCause);
    });
});
