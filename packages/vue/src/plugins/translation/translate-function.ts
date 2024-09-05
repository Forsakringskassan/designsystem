/* eslint-disable @typescript-eslint/unified-signatures -- technical debt,
 * should be merged to fewer signatures */

/**
 * @public
 */
export interface TranslateFunction {
    /**
     * Returns the translation for the key.
     *
     * @param key - The translation key.
     */
    (key: string): string;

    /**
     * Returns the translation for the key or the default value if no
     * translation exists.
     *
     * @param key - The translation key.
     * @param defaultValue - The default value.
     */
    (key: string, defaultValue: string): string;

    /**
     * Returns the translation for the key. The translation is interpolated
     * with the given arguments.
     *
     * @param key - The translation key.
     * @param args - The interpolation arguments.
     */
    (key: string, args: Record<string, unknown>): string;

    /**
     * Returns the translation for the key or the default value if no
     * translation exists. The translation is interpolated with the given
     * arguments.
     *
     * @param key - The translation key.
     * @param defaultValue - The default value.
     * @param args - The interpolation arguments.
     */
    (key: string, defaultValue: string, args: Record<string, unknown>): string;
}

/* eslint-enable @typescript-eslint/unified-signatures */
