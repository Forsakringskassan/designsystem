import { NestedStringRecord } from "../types";

/**
 * Takes an optionally nested textobject structure and convert to a flat
 * structure. Nested keys are joined with a dot ".". Deep nesting is supported.
 *
 * Given the following:
 * ```
 * {
 *   "foo": {
 *     "bar": "text"
 *   }
 * }
 * ```
 *
 * It would produce the following output:
 * ```
 * {
 *   "foo.bar": "text"
 * }
 * ```
 *
 * If the src object is already flat the output will be the same.
 *
 * @public
 * @param src - Source data
 * @param destination - Destination to write temporary result to.
 * @param prefix - If set this is prefixed to all keys.
 */
export function flatten(
    src: NestedStringRecord,
    destination?: Record<string, string>,
    prefix = "",
): Record<string, string> {
    destination = destination || {};
    return Object.entries(src).reduce((result, [key, data]) => {
        const nestedKey = `${prefix}${key}`;
        if (typeof data === "string") {
            result[nestedKey] = data;
        } else {
            flatten(data, result, `${nestedKey}.`);
        }
        return result;
    }, destination);
}
