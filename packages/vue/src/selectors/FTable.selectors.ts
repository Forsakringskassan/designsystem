/**
 * Selectors for `FTable`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FTable component.
 * @returns An object with selector methods for the FTable component.
 */
export function FTableSelectors(selector: string = ".table-ng") {
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
         * const { rows } = FTableSelectors();
         * cy.get(rows()).should("have.length", 3);
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { rows } = FTableSelectors();
         * await expect(page.locator(rows())).toHaveCount(3);
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for all body row elements.
         */
        rows(): string {
            return `${selector} tbody .table-ng__row`;
        },

        /**
         * Get the empty state row element.
         *
         * Only present when the table has no data rows.
         *
         * @example Cypress
         *
         * ```ts
         * const { emptyRow } = FTableSelectors();
         * cy.get(emptyRow()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { emptyRow } = FTableSelectors();
         * await expect(page.locator(emptyRow())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the empty state row element.
         */
        emptyRow(): string {
            return `${selector} .table-ng__row--empty`;
        },

        /**
         * Get a header cell (`<th>` in `<thead>`).
         *
         * Both the expandable button column and selectable checkbox column are
         * included in the column count.
         *
         * @example Cypress
         *
         * ```ts
         * const { header } = FTableSelectors();
         * cy.get(header(1)).should("contain.text", "Name");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { header } = FTableSelectors();
         * await expect(page.locator(header(1))).toContainText("Name");
         * ```
         *
         * @public
         * @since v6.45.0
         * @param col - Column number (1-indexed).
         * @returns A selector for the header cell.
         */
        header(col: number): string {
            return `${selector} thead th:nth-child(${col})`;
        },

        /**
         * Get a body cell (`<td>` or `<th>` for row headers).
         *
         * Both row and column are 1-indexed. Both the expandable button column
         * and selectable checkbox column are included in the column count.
         *
         * @example Cypress
         *
         * ```ts
         * const { cell } = FTableSelectors();
         * cy.get(cell({ row: 1, col: 1 })).should("contain.text", "Alice");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { cell } = FTableSelectors();
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
            const rowSelector = `${selector} tbody tr:nth-child(${row})`;
            return `${rowSelector} > td:nth-child(${col}), ${rowSelector} > th:nth-child(${col})`;
        },

        /**
         * Get the `<caption>` element.
         *
         * Only present when the caption slot is used.
         *
         * @example Cypress
         *
         * ```ts
         * const { caption } = FTableSelectors();
         * cy.get(caption()).should("contain.text", "My table");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { caption } = FTableSelectors();
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

        /**
         * Get the `<tfoot>` element.
         *
         * Only present when the footer slot is used.
         *
         * @example Cypress
         *
         * ```ts
         * const { footer } = FTableSelectors();
         * cy.get(footer()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { footer } = FTableSelectors();
         * await expect(page.locator(footer())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the footer element.
         */
        footer(): string {
            return `${selector} tfoot`;
        },
    });
}
