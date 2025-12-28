import { type BasePageObject, type DefaultCypressChainable } from "./common";
import { FCheckboxFieldPageObject, FTableColumnPageObject } from ".";

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
     * Neither the marker for expandable rows or the radio/checkbox for selectable
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
                `tr:not(.table__expandable-row--collapsed):nth(${String(rowIndex)})`,
                `> .table__column:nth(${String(colIndex)})`,
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
     * Get table header cell (`<th>` in `<thead>`).
     *
     * Neither the marker for expandable rows or the radio/checkbox for selectable
     * rows are included in the column count, i.e. `1` always refers to the
     * first column with content.
     *
     * @public
     * @param col - column number of header (1-indexed).
     * @returns The header cell element.
     */
    public header(
        col: number,
    ): Cypress.Chainable<JQuery<HTMLTableCellElement>> {
        const index = col - 1;
        return cy.get(
            `${this.selector} thead .table__column:nth(${String(index)})`,
        );
    }

    /**
     * Get all table headers (`<th>` in `<thead>`).
     *
     * Includes the headers for radios/checkboxes in selectable rows and markers in expandable rows.
     */
    public headersRow(): DefaultCypressChainable {
        return cy.get(`${this.selector} thead th`);
    }

    /**
     * Get row (`<tr>` in `<tbody>`) of given index.
     *
     * Includes expandable rows even if not expanded.
     *
     * @param index - Row number (0-indexed).
     */
    public row(index: number): DefaultCypressChainable {
        return cy.get(`${this.selector} tbody tr:nth(${String(index)})`);
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
     * Get page object with selector for the checkbox in given row.
     *
     * For expandable rows the row count depend on whenever a row is expanded or
     * not. If the first row is collapsed the second row refers to the next
     * parent row while if the first row is expanded the second row refers to
     * the first expanded row under the first row.
     *
     * Requires a `selectable` table of type `multi`.
     *
     * @public
     * @deprecated Use ´.selectable()´ instead. Deprecated since v6.28.0.
     * @param row - Row number (1-indexed).
     * @returns Page object for `FCheckboxField`.
     */
    public checkbox(row: number): FCheckboxFieldPageObject {
        const index = row - 1;
        return new FCheckboxFieldPageObject(
            [
                this.selector,
                `tbody`,
                `tr:not(.table__expandable-row--collapsed):nth(${String(index)})`,
                `.checkbox`,
            ].join(" "),
        );
    }

    /**
     * Get selectable input element (checkbox or radio) in given row.
     *
     * For expandable rows the row count depend on whenever a row is expanded or
     * not. If the first row is collapsed the second row refers to the next
     * parent row while if the first row is expanded the second row refers to
     * the first expanded row under the first row.
     *
     * Requires a `selectable` table.
     *
     * @public
     * @since v6.28.0
     * @param row - Row number (1-indexed).
     * @returns Input element.
     */
    public selectable(row: number): DefaultCypressChainable {
        const index = row - 1;

        return cy
            .get(
                [
                    this.selector,
                    `tbody`,
                    `tr:not(.table__expandable-row--collapsed):nth(${String(index)})`,
                    `input`,
                ].join(" "),
            )
            .first();
    }

    /**
     * Get sort order icon in given column.
     *
     * Index includes the columns for radios/checkboxes in selectable rows and markers in expandable rows.
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

        return cy.get(
            `${this.selector} thead th:nth(${String(index)}) svg.${iconName}`,
        );
    }

    /**
     * Get page object for `FTableColumn` with selector targeting the header row.
     *
     * @deprecated Use `header()` instead. Deprecated since v6.11.0.
     * @returns Page object for `FTableColumn`.
     */
    /* eslint-disable-next-line @typescript-eslint/no-deprecated -- for backwards compatibility */
    public headerRowItem(): FTableColumnPageObject {
        /* eslint-disable-next-line @typescript-eslint/no-deprecated -- for backwards compatibility */
        return new FTableColumnPageObject(`${this.selector} .table__row`, 0);
    }

    /**
     * Get page object for `FTableColumn` with selector targeting the given row number.
     *
     * Index includes the header row (index 0 selects the header row while 1 selects first row in table body).
     * Index ignores expandable rows.
     *
     * @deprecated Use `cell()` for body content and `header()` for header content instead. Deprecated since v6.11.0.
     * @param index - Row number (0-indexed).
     * @returns Page object for `FTableColumn`.
     */
    /* eslint-disable-next-line @typescript-eslint/no-deprecated -- for backwards compatibility */
    public columnItem(index: number): FTableColumnPageObject {
        /* eslint-disable-next-line @typescript-eslint/no-deprecated -- for backwards compatibility */
        return new FTableColumnPageObject(
            `${this.selector} .table__row`,
            index,
        );
    }
}
