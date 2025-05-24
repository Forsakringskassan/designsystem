import { type DefaultCypressChainable, type BasePageObject } from "./common";
import { FTableColumnPageObject } from "./FTableColumn.pageobject";

/**
 * @public
 */
export class FInteractiveTablePageObject implements BasePageObject {
    public selector: string;

    /**
     * @param selector - root element selector for `FInteractiveTable`, usually `.table`.
     */
    public constructor(selector: string = ".table") {
        this.selector = selector;
    }

    /**
     * Get root element.
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
     * Neither the marker for expandable rows or the checkbox for selectable
     * rows are included in the column count, i.e. `1` always refers to the
     * first column with content.
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
                `tr:not(.table__expandable-row--collapsed):nth(${rowIndex})`,
                `> .table__column:nth(${colIndex})`,
            ].join(" "),
        );
    }

    /**
     * Get `<caption>` element.
     */
    public caption(): DefaultCypressChainable {
        return cy.get(`${this.selector} caption`);
    }

    /**
     * Get all table headers (`<th>` in `<thead>`).
     *
     * Includes the headers for checkboxes in selectable rows and markers in expandable rows.
     */
    public headersRow(): DefaultCypressChainable {
        return cy.get(`${this.selector} thead th`);
    }

    /**
     * Get all table body rows (`<tr>` in `<tbody>`).
     *
     * Includes expandable rows even if not expanded.
     */
    public bodyRow(): DefaultCypressChainable {
        return cy.get(`${this.selector} tbody tr`);
    }

    /**
     * Get row (`<tr>` in `<tbody>`) of given index.
     *
     * Includes expandable rows even if not expanded.
     *
     * @param index - Row number (0-indexed).
     */
    public row(index: number): DefaultCypressChainable {
        return cy.get(`${this.selector} tbody tr:nth(${index})`);
    }

    /**
     * Get page object for `FTableColumn` with selector targeting the given row number.
     *
     * Index includes the header row (index 0 selects the header row while 1 selects first row in table body).
     * Index ignores expandable rows.
     *
     * @param index - Row number (0-indexed).
     * @returns Page object for `FTableColumn`.
     */
    public columnItem(index: number): FTableColumnPageObject {
        return new FTableColumnPageObject(
            `${this.selector} .table__row`,
            index,
        );
    }

    /**
     * Get page object for `FTableColumn` with selector targeting the header row.
     *
     * @returns Page object for `FTableColumn`.
     */
    public headerRowItem(): FTableColumnPageObject {
        return new FTableColumnPageObject(`${this.selector} .table__row`, 0);
    }

    /**
     * Get sort order icon in given column.
     *
     * Index includes the columns for checkboxes in selectable rows and markers in expandable rows.
     *
     * @param index - Column index (0-indexed).
     * @param order - Column sort order.
     * @returns icon of given sort order.
     */
    public getColumnSortedByIcon(
        index: number,
        order: "ascending" | "descending" | "unsorted",
    ): DefaultCypressChainable {
        let iconName: string;

        switch (order) {
            case "ascending":
                iconName = "f-icon-caret-up";
                break;
            case "descending":
                iconName = "f-icon-caret-down";
                break;
            case "unsorted":
                iconName = "f-icon-sort";
                break;
            default:
                throw Error("Invalid order");
        }

        const column = this.headerRowItem().tableRowHeaderContent().eq(index);
        return column.find(`svg.${iconName}`);
    }
}
