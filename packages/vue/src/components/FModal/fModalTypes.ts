/**
 * @public
 */
export const FModalTypes = ["", "information", "warning", "error"] as const;

/**
 * Get classes to apply based on what type is requested.
 *
 * @public
 */
export function fModalTypeClass(type: string): string[] {
    if (!type) {
        return [];
    } else {
        return [`modal--${type}`];
    }
}
