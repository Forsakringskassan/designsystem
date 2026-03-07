/**
 * @public
 */
export function isString(value: string | unknown): boolean {
    /* eslint-disable-next-line unicorn/no-instanceof-builtins -- technical debt */
    return typeof value === "string" || value instanceof String;
}
