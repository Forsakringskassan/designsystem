import { type DefaultCypressChainable, type BasePageObject } from "./common";

/**
 * @public
 */
export class FTablePageObject implements BasePageObject {
    public selector: string;

    /**
     * @param selector - root element selector for `FTable`, usually `.table-ng`.
     */
    public constructor(selector: string = ".table-ng") {
        this.selector = selector;
    }

    /**
     * Get root element.
     *
     * @public
     */
    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    /**
     * Get table cell (typically `<td>` but can be `<th>` if row headers are
     * present).
     *
     * Both row and column are 1-indexed, i.e. 1:1 selects the first cell in the
     * first row.
     *
     * Columns for expandable or selectable is not included in the column count,
     * i.e. `1` always refers to the first column with content.
     *
     * For expandable rows the row count depend on whenever a row is expanded or
     * not. If the first row is collapsed the second row refers to the next
     * parent row while if the first row is expanded the second row refers to
     * the first expanded row under the first row.
     *
     * @public
     * @param descriptor - Row and column number of cell (1-indexed).
     * @returns The cell element.
     */
    public cell(descriptor: {
        row: number;
        col: number;
    }): Cypress.Chainable<JQuery<HTMLTableCellElement>> {
        const rowIndex = descriptor.row - 1;
        const colIndex = descriptor.col - 1;

        const cell = ".table-ng__cell";
        const selectable = ".table-ng__cell--selectable";
        const expandable = ".table-ng__cell--expand";

        return cy.get(
            [
                this.selector,
                `tbody`,
                `tr:nth(${rowIndex})`,
                `> ${cell}:not(${selectable}, ${expandable}):nth(${colIndex})`,
            ].join(" "),
        );
    }

    /**
     * Get table header cell (`<th>` in `<thead>`).
     *
     * Column for expandable buttons and selectable checkboxes are not included.
     *
     * @public
     * @param col - column number of header (1-indexed).
     * @returns The header cell element.
     */
    public header(col: number): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        const rowIndex = col - 1;
        const selectable = ".table-ng__column--selectable";
        const expandable = ".table-ng__column--expand";

        return cy.get(
            [
                this.selector,
                `thead`,
                `th:not(${selectable}, ${expandable}):nth(${rowIndex})`,
            ].join(" "),
        );
    }

    public expandButton(
        row: number,
    ): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        const rowIndex = row - 1;
        return cy.get(
            [
                this.selector,
                `tbody`,
                `tr:nth(${rowIndex})`,
                `.table-ng__cell--expand`,
                `button`,
            ].join(" "),
        );
    }

    public selectCheckbox(
        row: number,
    ): Cypress.Chainable<JQuery<HTMLInputElement>> {
        const rowIndex = row - 1;
        return cy.get(
            [
                this.selector,
                `tbody`,
                `tr:nth(${rowIndex})`,
                `.table-ng__cell--selectable`,
                `input`,
            ].join(" "),
        );
    }

    /**
     * Get all visible rows (`<tr>` in `<tbody>`).
     *
     * Includes rows that have been expanded if table is expandable.
     *
     * @public
     * @returns All visible rows in the table.
     */
    public rows(): Cypress.Chainable<JQuery<HTMLTableRowElement>> {
        return cy.get(`${this.selector} tbody tr`);
    }
}
