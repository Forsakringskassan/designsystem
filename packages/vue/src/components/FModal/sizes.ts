/**
 * The sizes allowed by the `FModal` `size` prop.
 *
 * @public
 * @since v6.31.0
 */
export const modalSizes = ["small", "medium", "large", "fullwidth"] as const;

/**
 * The sizes allowed by the `FModal` `size` prop.
 *
 * @public
 * @since v6.31.0
 */
export type FModalSize = (typeof modalSizes)[number];

/**
 * @internal
 */
export function sizeClass(size: string): string[] {
    if (!size) {
        return [];
    }
    if (size === "fullscreen") {
        return [`modal__dialog-container--fullwidth`];
    }
    return [`modal__dialog-container--${size}`];
}
