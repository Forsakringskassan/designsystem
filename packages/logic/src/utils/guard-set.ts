import { isSet } from "./is";
import { MissingValueError } from "./ensure-set";

/**
 * Assert that a value is set and throw a {@link MissingValueError} if it is not,
 * i.e., both null and undefined values will throw an error. This can be nice to
 * use when transforming data between view model and rest api model.
 *
 * @public
 * @param value - the value asserted to be set.
 * @param message - an optional exception message to use if the check fails.
 * @throws {@link MissingValueError} if value is not set.
 */
export function guardSet<T>(
    value: T | undefined | null,
    message = "",
): asserts value is T {
    if (!isSet(value)) {
        throw new MissingValueError(message);
    }
}
