/**
 * Selectors for `FTableButton`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FTableButton component.
 * @returns An object with selector methods for the FTableButton component.
 */
export function FTableButtonSelectors(selector: string = ".table__button") {
    return Object.freeze({
        /**
         * The base selector for the component.
         *
         * This is the same selector that the consumer provided.
         *
         * @public
         * @since v6.45.0
         * @returns The root selector for the component.
         */
        get selector(): string {
            return selector;
        },
    });
}
