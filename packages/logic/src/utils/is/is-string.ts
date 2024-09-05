/**
 * @public
 */
export function isString(value: string | unknown): boolean {
    return typeof value === "string" || value instanceof String;
}
