/**
 * Example selectors for a fictional component.
 *
 * This is used internally for testing and can be used as a skeleton when
 * writing your own selector objects. It will be kept aligned with FKUI
 * recommendations and best practices.
 *
 * (This function is intentionally not exported from `index.ts` as it is not
 * supposed to be part of the public API.)
 *
 * The selector factory should not provide explicit TypeScript return types.
 * Correct types are derived automatically from the selector object.
 *
 * Each selector factory function should take a single parameter with the
 * consumer's selector referencing the component in question.
 *
 * @public
 * @since %version%
 * @param selector - The selector for the XExample component.
 * @returns An object with selector methods for the XExample component.
 */
export function XExampleSelectors(selector: string = ".example") {
    return Object.freeze({
        /**
         * The base selector for the component.
         *
         * This should always match the selector the consumer passed in.
         *
         * @public
         * @since %version%
         * @returns The root selector for the component.
         */
        get selector(): string {
            return selector;
        },

        /**
         * A method with no parameters.
         *
         * Write a short single sentence describing what this method does.
         * Optionally follow with an extended description separated by a blank
         * line.
         *
         * This description is shown in the consumer's editor when hovering over
         * the method and should help the consumer understand the purpose and
         * how to use it. If the method has parameters, describe the expected
         * values and usage.
         *
         * It is encouraged to provide one or more examples. Each example starts
         * with the `@example` tag on its own line, followed by a code fence
         * with the example content.
         *
         * The examples must be placed after the method description and before
         * the `@public` tag.
         *
         * After the optional examples every method should have tags in this
         * order: `@public`, `@since`, `@param` (if any), and `@returns`.
         *
         * @example
         *
         * ```ts
         * const { label } = XExampleSelectors();
         * cy.get(label()).should("have.text", "lorem ipsum");
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the label element.
         */
        label(this: void): string {
            return `${selector} .example__label`;
        },

        /**
         * A method with parameters.
         *
         * This should include the same information as a method without
         * parameters, plus a `@param` tag for each parameter the method
         * accepts.
         *
         * @example
         * ```ts
         * const { itemByName } = XExampleSelectors();
         * cy.get(itemByName("foo")).should("exist");
         * ```
         *
         * @public
         * @since %version%
         * @param name - The name of the item.
         * @returns A selector for the item with the given name.
         */
        itemByName(this: void, name: string): string {
            return `${selector} > [data-item~="${name}"]`;
        },

        /**
         * An internal element for internal usage only.
         *
         * This is not intended for consumers. We use this for elements that we
         * test internally and do not require consumers to retest in their
         * applications.
         *
         * Typical scenarios include verifying prop-to-DOM mapping or ARIA
         * attributes.
         *
         * Internal methods should not use the `@since` tag.
         *
         * @internal
         * @returns A selector for the secret element.
         */
        secret(this: void): string {
            return `${selector} .example__secret`;
        },
    });
}
