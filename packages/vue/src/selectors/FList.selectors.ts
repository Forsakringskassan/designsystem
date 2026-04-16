/**
 * Selectors for `FList`.
 *
 * @public
 * @since v6.42.0
 * @param selector - The selector for the FList component.
 * @returns An object with selector methods for the FList component.
 */
export function FListSelectors(selector: string = ".list") {
    return Object.freeze({
        /**
         * The base selector for the component.
         *
         * This is the same selector that the consumer provided.
         *
         * @public
         * @since v6.42.0
         * @returns The root selector for the component.
         */
        get selector(): string {
            return selector;
        },

        /**
         * Get all list items.
         *
         * @public
         * @since v6.42.0
         * @returns A selector for all of the list items.
         */
        listItems(this: void): string {
            return `${selector} > .list__item:not(.list__item--empty) > .list__item__itempane`;
        },

        /**
         * Get the list item with the given index.
         *
         * @public
         * @since v6.42.0
         * @param index - The index of the item (0-based).
         * @returns A selector for the list item with the given index.
         */
        listItemByIndex(this: void, index: number): string {
            return `${selector} > .list__item:nth-child(${index + 1}):not(.list__item--empty)`;
        },

        /**
         * Get the element displaying the empty message when the list is empty.
         *
         * @public
         * @since v6.42.0
         * @returns A selector for the element with empty text.
         */
        emptyMessage(this: void): string {
            return `${selector} > .list__item.list__item--empty`;
        },
    });
}
