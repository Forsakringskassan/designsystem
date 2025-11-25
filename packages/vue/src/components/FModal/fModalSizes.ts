/**
 * @public
 */
export const FModalSizes = [
    "",
    "small",
    "medium",
    "large",
    /**
     * @deprecated Acts as fullwidth. Recommended to use `ModalSize.FULLWIDTH` instead.
     */
    "fullscreen",
    "fullwidth",
] as const;

/**
 * Get classes to apply based on what size is requested.
 *
 * @public
 */
export function fModalSizeClass(size: string): string[] {
    if (!size) {
        return [];
    }

    // Normalize deprecated/legacy string values safely
    if (size === "fullscreen") {
        size = "fullwidth";
    }

    return [`modal__dialog-container--${size}`];
}
