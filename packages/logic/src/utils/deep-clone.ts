import cloneDeep from "lodash.clonedeep";

/**
 * Perform a deep clone of the given value.
 *
 * This function supports cloning:
 *
 * - Primitive types such as booleans, numbers and strings
 * - Arrays and objects
 * - Classes
 * - `Date`,
 * - `Map`,
 * - `RegExp`
 * - `Set`
 * - `Symbol`
 *
 * The following values are NOT cloned:
 *
 * - `Error` (and subclasses) - Cloned value will reference the same Error instance.
 * - DOM `Node` (and subclasses) - Cloned value will return the same DOM reference.
 * - `Function` (and arrow functions) - Cloned value will be an empty object `{}`
 *
 * @public
 * @param value - The value to recursively clone.
 * @returns Returns the deep cloned value.
 */
export function deepClone<T>(value: T): T {
    return cloneDeep(value);
}
