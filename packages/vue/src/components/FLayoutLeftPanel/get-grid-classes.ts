/**
 * @internal
 */
export function getGridClasses(
    element: { offsetWidth: number } | null,
): Record<string, boolean>;
export function getGridClasses(width: number): Record<string, boolean>;
export function getGridClasses(
    target: { offsetWidth: number } | number | null,
): Record<string, boolean> {
    if (target === null) {
        return {};
    }
    const width = typeof target === "number" ? target : target.offsetWidth;
    return {
        "grid--force": true,
        "grid--force-sm": true,
        "grid--force-md": width >= 640,
        "grid--force-lg": width >= 1024,
        "grid--force-xl": width >= 1280,
    };
}
