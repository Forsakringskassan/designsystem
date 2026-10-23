/**
 * Extracts the keys of `T` whose value is an array, i.e. properties that can
 * hold nested rows or expandable content.
 *
 * @public
 * @since %version%
 */
export type TableNestedKeyOf<T> = {
    [K in keyof T]: NonNullable<T[K]> extends unknown[] ? K : never;
}[keyof T];
