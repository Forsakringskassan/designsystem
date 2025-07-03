import { guardSet } from "./guard-set";

/**
 * @public
 */
export function guardRef<T>(
    ref:
        | {
              value: T | null;
          }
        | undefined
        | null,
): asserts ref is { value: T } {
    guardSet(ref);

    if (!ref.value) {
        throw new Error("Ref is unset");
    }
}
