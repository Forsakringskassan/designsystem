/**
 * @internal
 */
export function isAlphanumeric(e: KeyboardEvent): boolean {
    // using the fact that special keys have a name with length > 1
    // ignores ctrl, meta key combinations
    return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}
