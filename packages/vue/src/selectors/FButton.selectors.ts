/**
 * Selectors for `FButton`.
 *
 * @public
 * @since %version%
 * @param selector - The selector for the FButton component.
 * @returns An object with selector methods for the FButton component.
 */
export function FButtonSelectors(selector: string = ".button") {
    return Object.freeze({
        /**
         * The base selector for the component.
         *
         * This is the same selector that the consumer provided.
         *
         * @public
         * @since %version%
         * @returns The root selector for the component.
         */
        get selector(): string {
            return selector;
        },
    });
}
