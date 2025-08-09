import { isSet } from "../utils/is";
import { MissingValueError } from "../utils/ensure-set";

/**
 * [Assertion function][ts-handbook] to assert that a value is set.
 * Any value that is not null or undefined is considered set including falsy values such as 0 or "".
 *
 * Throws {@link MissingValueError} if value is not set.
 *
 * [ts-handbook]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
 *
 *  @example
 *
 * ```ts
 * const value = getValue();
 * //    ^?   string | null
 *
 * assertSet(value);
 *
 * // value is now guaranteed to be non-null
 * ```
 *
 * @public
 * @since v6.15.0
 * @param value - the value asserted to be set.
 * @param message - an optional exception message to use if the check fails.
 * @throws {@link MissingValueError} if value is not set.
 */
export function assertSet<T>(
    value: T | undefined | null,
    message = "Expected value to be set, but it was not",
): asserts value is T {
    if (!isSet(value)) {
        throw new MissingValueError(message);
    }
}
