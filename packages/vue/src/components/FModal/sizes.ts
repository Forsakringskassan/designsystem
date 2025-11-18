export const sizes = [
    "",
    "small",
    "medium",
    "large",
    "fullscreen",
    "fullwidth",
] as const;

export function sizeClass(size: string): string[] {
    if (!size) {
        return [];
    } else if (size === "fullscreen") {
        return [`modal__dialog-container--fullwidth`];
    } else {
        return [`modal__dialog-container--${size}`];
    }
}
