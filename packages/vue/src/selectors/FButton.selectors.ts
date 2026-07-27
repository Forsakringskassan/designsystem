/**
 * Selectors for `FButton`.
 *
 * @public
 * @since v6.52.0
 * @param selector - The selector for the FButton component.
 * @returns An object with selector methods for the FButton component.
 */
export function FButtonSelectors(selector: string = ":scope") {
    return Object.freeze({
        /**
         * The base selector for the component.
         *
         * This is the same selector that the consumer provided.
         *
         * @public
         * @since v6.52.0
         * @returns The root selector for the component.
         */
        get selector(): string {
            return selector;
        },
    });
}
