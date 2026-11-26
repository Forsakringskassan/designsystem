/**
 * Global registry interface.
 * Consumers (the main project) will merge their specific key types into this.
 *
 * @public
 * @since v6.38.0
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type -- intentional empty interface for module augmentation
export interface CustomTranslationRegistry {
    // This is intentionally empty.
    // The consumer will add a property like: `Keys: MyUnionType`
}

/**
 * Resolves the valid translation keys.
 * If the consumer has defined `Keys` in the registry, use that.
 * Otherwise, fallback to `string` (loose typing).
 *
 * @public
 * @since v6.38.0
 */
export type ResolveTranslationKey = CustomTranslationRegistry extends {
    Keys: infer K;
}
    ? K
    : string;

/**
 * Helper type: aliases valid keys to strictly string.
 * This filters out `symbol`, which cannot be used in template literals.
 * Only allows "string-key": "value" pairs
 *
 * @public
 * @since v6.38.0
 */
export type ValidKey = string;

/**
 * Constructs a tuple type of a specific length `N`.
 * Used internally for recursion depth tracking.
 *
 * @public
 * @since v6.38.0
 */
export type BuildDepth<
    N extends number,
    T extends unknown[] = [],
> = T["length"] extends N ? T : BuildDepth<N, [...T, unknown]>;

/**
 * Computes `N - 1` at the type level.
 *
 * @public
 * @since v6.38.0
 */
export type Prev<N extends number> =
    BuildDepth<N> extends [...infer R, unknown] ? R["length"] : never;

/**
 * Joins two path segments.
 *
 * We use generic constraints (`extends ValidKey`) here instead of conditional
 * checks to keep it clean. If K or P is not a string/number, TS will error.
 *
 * @public
 * @since v6.38.0
 */
export type Join<K extends ValidKey, P extends ValidKey> = `${K}.${P}`;

/**
 * Internal helper: "Flattens" the object one level deep.
 *
 * This generates a mapped type where the keys are the property names,
 * and the values are the calculated paths (current key + nested paths).
 *
 * @example
 * ```ts
 * // Input: { user: { name: string } }
 * // Output: { user: "user" | "user.name" }
 * ```
 *
 * @public
 * @since v6.38.0
 */
export type PathMap<T, Depth extends number> = {
    [K in keyof T & ValidKey]: T[K] extends object
        ? `${K}` | Join<K, NestedKeys<T[K], Prev<Depth>>>
        : `${K}`;
};

/**
 * Recursively generates a union of all dot-notation paths for object `T`.
 *
 * It uses `PathMap` to calculate paths for properties and then extracts
 * the values using `[keyof T]`.
 *
 * @public
 * @since v6.38.0
 * @typeParam T - The object or array to inspect.
 * @typeParam Depth - The maximum recursion depth (defaults to 6).
 * @returns A union of string paths (e.g., `"user" | "user.name"`).
 */
export type NestedKeys<T, Depth extends number = 6> = [Depth] extends [never]
    ? never
    : T extends object
      ? PathMap<T, Depth>[keyof T & ValidKey]
      : never;

/**
 * @public
 * @typeParam Key - The valid translation keys. Defaults to `string` for loose typing,
 * but can be set to a specific union of strings (e.g., via `NestedKeys<Schema>`)
 * to enforce strict key validation and autocompletion.
 */
export interface TranslateFunction<Key = ResolveTranslationKey> {
    /* eslint-disable @typescript-eslint/unified-signatures -- technical debt,
     * should be merged to fewer signatures */

    /**
     * Returns the translation for the key.
     *
     * @param key - The translation key.
     */
    (key: Key): string;

    /**
     * Returns the translation for the key or the default value if no
     * translation exists.
     *
     * @param key - The translation key.
     * @param defaultValue - The default value.
     */
    (key: Key, defaultValue: string): string;

    /**
     * Returns the translation for the key. The translation is interpolated
     * with the given arguments.
     *
     * @param key - The translation key.
     * @param args - The interpolation arguments.
     */
    (key: Key, args: Record<string, unknown>): string;

    /**
     * Returns the translation for the key or the default value if no
     * translation exists. The translation is interpolated with the given
     * arguments.
     *
     * @param key - The translation key.
     * @param defaultValue - The default value.
     * @param args - The interpolation arguments.
     */
    (key: Key, defaultValue: string, args: Record<string, unknown>): string;

    /**
     * Returns the translation for the key or the default value if no
     * translation exists. The translation is interpolated with the given
     * arguments.
     *
     * @param key - The translation key.
     * @param defaultValue - The default value.
     * @param args - The interpolation arguments.
     */
    (
        key: Key,
        defaultValue?: string | Record<string, unknown>,
        args?: Record<string, unknown>,
    ): string;

    /* eslint-enable @typescript-eslint/unified-signatures */
}

/**
 * @public
 */
export interface TranslationProviderInterface {
    readonly currentLanguage: string;

    changeLanguage(
        language: string,
    ): Promise<void> | Promise<TranslateFunction>;

    translate(
        key: string,
        defaultValueOrArgs?: string | Record<string, unknown>,
        args?: Record<string, unknown>,
    ): string;
}
