import { MissingValueError } from "../utils/ensure-set";
import { isSet } from "../utils/is";

/**
 * @public
 * @since %version%
 */
export function guardRef<T>(
    ref:
        | {
              value: T | null;
          }
        | undefined
        | null,
): asserts ref is { value: T } {
    if (!isSet(ref?.value)) {
        throw new MissingValueError();
    }
}
