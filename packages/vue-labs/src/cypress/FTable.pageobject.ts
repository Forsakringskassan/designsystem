import { type DefaultCypressChainable, type BasePageObject } from "./common";

/**
 * @public
 */
export class FTablePageObject implements BasePageObject {
    public selector: string;

    private readonly cellClass = ".table-ng__cell";
    private readonly selectClass = ".table-ng__cell--selectable";
    private readonly expandClass = ".table-ng__cell--expandable";

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
     * Get table header cell (`<th>` in `<thead>`).
     *
     * Column for expandable buttons and selectable checkboxes are not included.
     *
     * @public
     * @param col - Column number of header (1-indexed).
     * @returns The header cell element (`<th>`).
     */
    public header(
        col: number,
    ): Cypress.Chainable<JQuery<HTMLTableCellElement>> {
        const colIndex = col - 1;
        return cy.get(
            [
                this.selector,
                `thead`,
                `th:not(${this.selectClass}, ${this.expandClass}):nth(${colIndex})`,
            ].join(" "),
        );
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
        return cy.get(
            [
                this.selector,
                `tbody`,
                `tr:nth(${rowIndex})`,
                `> ${this.cellClass}:not(${this.selectClass}, ${this.expandClass}):nth(${colIndex})`,
            ].join(" "),
        );
    }

    /**
     * Get expand button of given row.
     *
     * Only applicable if using an expandable table.
     *
     * @public
     * @param row - Row number for the expand button (1-indexed).
     * @returns Expand button of given row.
     */
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

    /**
     * Get checkbox in the table header for selectable column.
     *
     * Only applicable if using a multiselect table.
     *
     * @public
     * @returns Checkbox in selectable column header.
     */
    public selectHeaderInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(
            [this.selector, `thead`, `th${this.selectClass}`, `input`].join(
                " ",
            ),
        );
    }

    /**
     * Get select input of given row.
     *
     * Only applicable if using a selectable table.
     *
     * @param row - Row number for the select input (1-indexed).
     * @returns Select input of given row.
     */
    public selectInput(
        row: number,
    ): Cypress.Chainable<JQuery<HTMLInputElement>> {
        const rowIndex = row - 1;
        return cy.get(
            [
                this.selector,
                `tbody`,
                `tr:nth(${rowIndex})`,
                this.selectClass,
                `input`,
            ].join(" "),
        );
    }

    /**
     * Get current tabbable element in the table.
     *
     * If table is untouched, it is the first cell in the table body (including columns for expandable and selectable).
     * If the cell has an interactable element, it is instead the interactable that is returned and not the cell.
     *
     * @public
     * @returns The current tabbable element.
     */
    public tabbableElement(): DefaultCypressChainable {
        return cy.get(`${this.selector} [tabindex=0]`);
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
