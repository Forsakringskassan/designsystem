import { MissingValueError } from "../utils/ensure-set";
import { isSet } from "../utils/is";

/**
 * [Assertion function][ts-handbook] to assert that a nullable Vue ref holds a
 * non-null value. Typically used with template refs but any nullable ref can be
 * used.
 *
 * Throws {@link MissingValueError} if the ref holds `null` or `undefined`, or
 * the ref itself is `null` or `undefined`.
 *
 * [ts-handbook]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
 *
 *  @example
 *
 * ```ts
 * const element = useTemplateRef("my-template-ref");
 * //    ^?   Readonly<ShallowRef<HTMLElement | null>>
 *
 * assertRef(element);
 *
 * // element is now guaranteed to be a HTMLElement ref
 * ```
 *
 * @public
 * @since v6.15.0
 * @param ref - the value asserted to be a ref.
 * @param message - an optional exception message to use if the check fails.
 * @throws {@link MissingValueError} if value is not set.
 */
export function assertRef<T>(
    ref:
        | {
              value: T | null;
          }
        | undefined
        | null,
    message = "Expected ref to have a non-null value, but it did not",
): asserts ref is { value: T } {
    if (!isSet(ref?.value)) {
        throw new MissingValueError(message);
    }
}
