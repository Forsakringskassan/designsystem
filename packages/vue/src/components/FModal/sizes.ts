export const sizes = [
    "",
    "small",
    "medium",
    "large",
    "fullscreen",
    "fullwidth",
];

export function sizeClass(size: string): string[] {
    if (!sizes.includes(size)) {
        throw new Error(`"${size}" is not a valid size`);
    }
    if (!size) {
        return [];
    } else if (size === "fullscreen") {
        return [`modal__dialog-container--fullwidth`];
    } else {
        return [`modal__dialog-container--${size}`];
    }
}
