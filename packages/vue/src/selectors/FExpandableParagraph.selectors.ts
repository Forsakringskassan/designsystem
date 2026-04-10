/**
 * Selectors for `FExpandableParagraph`.
 *
 * @public
 * @since %version%
 * @param selector - The selector for the FExpandableParagraph component.
 * @returns An object with selector methods for the FExpandableParagraph component.
 */
export function FExpandableParagraphSelectors(
    selector: string = ".expandable-paragraph",
) {
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

        /**
         * Get the expand/collapse icon.
         *
         * @public
         * @since %version%
         * @returns The expand/collapse icon.
         */
        expandCollapseIcon(): string {
            return `${selector} .expandable-paragraph__icon`;
        },

        /**
         * Get the header.
         *
         * @public
         * @since %version%
         * @returns The header.
         */
        header(): string {
            return `${selector} .expandable-paragraph__heading .expandable-paragraph__button`;
        },

        /**
         * Get the body.
         *
         * @public
         * @since %version%
         * @returns The body.
         */
        body(): string {
            return `${selector} .expandable-paragraph__content`;
        },

        /**
         * Get the related info.
         *
         * @public
         * @since %version%
         * @returns The related info.
         */
        relatedInfo(): string {
            return `${selector} .expandable-paragraph__related-information`;
        },
    });
}
