/**
 * Selectors for `FLogo`.
 *
 * @public
 * @since %version%
 * @param selector - The selector for the FLogo component.
 * @returns An object with selector methods for the FLogo component.
 */
export function FLogoSelectors(selector: string = ".logo") {
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
