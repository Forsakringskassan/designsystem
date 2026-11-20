/**
 * Replace all properties of `target` with the properties of `source` while
 * keeping the object identity of `target`. Properties missing in `source` are
 * removed from `target`.
 *
 * @internal
 */
export function replaceItem<T>(target: T, source: T): void {
    if (target === source) {
        return;
    }

    const dst = target as object;
    const keep = new Set(Object.keys(source as object));

    for (const key of Object.keys(dst)) {
        if (!keep.has(key)) {
            Reflect.deleteProperty(dst, key);
        }
    }

    Object.assign(dst, source);
}
