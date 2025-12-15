/**
 * The sizes allowed by the `FModal` `size` prop.
 *
 * @public
 * @since v6.31.0
 */
export const modalSizes = [
    "small",
    "medium",
    "large",
    "fullwidth",

    /** @deprecated deprecated default value */
    "",

    /** @deprecated deprecated alias for fullwidth */
    "fullscreen",
] as const;

/**
 * The sizes allowed by the `FModal` `size` prop.
 *
 * @public
 * @since v6.31.0
 */
export type FModalSize = Exclude<
    (typeof modalSizes)[number],
    /* exclude deprecated alias from the type, if the deprecated types are
     * needed the consumer should add those manually.  */
    "" | "fullscreen"
>;

/**
 * @internal
 */
export function sizeClass(size: string): string[] {
    if (!size) {
        return [];
    } else if (size === "fullscreen") {
        return [`modal__dialog-container--fullwidth`];
    } else {
        return [`modal__dialog-container--${size}`];
    }
}
