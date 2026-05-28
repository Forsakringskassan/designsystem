/**
 * Selectors for `FDataTable`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FDataTable component.
 * @returns An object with selector methods for the FDataTable component.
 */
export function FDataTableSelectors(selector: string = ".table") {
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

        /**
         * Get all body row elements.
         *
         * @example Cypress
         *
         * ```ts
         * const { rows } = FDataTableSelectors();
         * cy.get(rows()).should("have.length", 5);
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { rows } = FDataTableSelectors();
         * await expect(page.locator(rows())).toHaveCount(5);
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for all body row elements.
         */
        rows(): string {
            return `${selector} tbody .table__row`;
        },

        /**
         * Get a header cell (`<th>` in `<thead>`).
         *
         * Expandable and selectable columns are not included in the column count.
         *
         * @example Cypress
         *
         * ```ts
         * const { header } = FDataTableSelectors();
         * cy.get(header(1)).should("contain.text", "Name");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { header } = FDataTableSelectors();
         * await expect(page.locator(header(1))).toContainText("Name");
         * ```
         *
         * @public
         * @since v6.45.0
         * @param col - Column number (1-indexed).
         * @returns A selector for the header cell.
         */
        header(col: number): string {
            return `${selector} thead .table__column:nth-child(${col})`;
        },

        /**
         * Get a body cell.
         *
         * Both row and column are 1-indexed. Expandable and selectable columns
         * are not included in the column count.
         *
         * @example Cypress
         *
         * ```ts
         * const { cell } = FDataTableSelectors();
         * cy.get(cell({ row: 1, col: 1 })).should("contain.text", "Alice");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { cell } = FDataTableSelectors();
         * await expect(page.locator(cell({ row: 1, col: 1 }))).toContainText("Alice");
         * ```
         *
         * @public
         * @since v6.45.0
         * @param descriptor - Row and column number (1-indexed).
         * @returns A selector for the cell element.
         */
        cell(descriptor: { row: number; col: number }): string {
            const { row, col } = descriptor;
            return `${selector} tbody tr:not(.table__expandable-row--collapsed):nth-child(${row}) > .table__column:nth-child(${col})`;
        },

        /**
         * Get the `<caption>` element.
         *
         * Only present when the caption slot is used.
         *
         * @example Cypress
         *
         * ```ts
         * const { caption } = FDataTableSelectors();
         * cy.get(caption()).should("contain.text", "My table");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { caption } = FDataTableSelectors();
         * await expect(page.locator(caption())).toContainText("My table");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the caption element.
         */
        caption(): string {
            return `${selector} caption`;
        },
    });
}
