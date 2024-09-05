/**
 * Creates a placeholder element as a child under `<body>`.
 * The element should be cleaned by the caller.
 *
 * @example
 *
 * In Vue.js tests this can be used with `attachTo` when the component must be
 * present in the document (e.g. dealing with focus).
 *
 * ```ts
 * shallowMount(MyComponent, {
 *   attachTo: createPlaceholderInDocument(),
 * });
 * ```
 *
 * @public
 */
export function createPlaceholderInDocument(): HTMLElement {
    const elem = document.createElement("div");
    if (document.body) {
        document.body.appendChild(elem);
    }
    return elem;
}
