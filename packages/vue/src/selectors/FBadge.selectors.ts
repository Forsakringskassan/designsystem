/**
 * Selectors for `FBadge`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FBadge component.
 * @returns An object with selector methods for the FBadge component.
 */
export function FBadgeSelectors(selector: string = ".badge") {
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
