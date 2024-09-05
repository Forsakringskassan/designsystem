import { isSet } from "./is";

/**
 * An error indicating that a mandatory value is not set.
 *
 * @public
 */
export class MissingValueError extends Error {
    public constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, MissingValueError.prototype);
    }
}

/**
 * Assert that a value is set and throw a {@link MissingValueError} if it is not,
 * i.e., both null and undefined values will throw an error. This can be nice to
 * use when transforming data between view model and rest api model.
 *
 * @public
 * @param value - the value asserted to be set.
 * @param message - an optional exception message to use if the check fails.
 * @returns the value unambiguously defined.
 * @throws {@link MissingValueError} if value is not set.
 */
export function ensureSet<T>(
    value: T | undefined | null,
    message = "",
): T | never {
    if (!isSet(value)) {
        throw new MissingValueError(message);
    }

    return value;
}
