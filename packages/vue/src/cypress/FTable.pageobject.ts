import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 * @since v6.24.0
 */
export class FTablePageObject implements BasePageObject {
    public selector: string;

    private readonly selectHeader = ".table-ng__column--selectable";
    private readonly columnTitle = ".table-ng__column__title";
    private readonly columnDescription = ".table-ng__column__description";
    private readonly expandCell = ".table-ng__cell--expand";
    private readonly selectCell = ".table-ng__cell--selectable";

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
     * The headers for expandable buttons and selectable checkboxes are included.
     *
     * @public
     * @param col - Column number of header (1-indexed).
     * @returns The header cell element (`<th>`).
     */
    public header(
        col: number,
    ): Cypress.Chainable<JQuery<HTMLTableCellElement>> {
        const colIndex = String(col - 1);
        return cy.get([this.thead, `th:nth(${colIndex})`].join(" "));
    }

    /**
     * Get column title from table header.
     *
     * The headers for expandable buttons and selectable checkboxes are included.
     *
     * @public
     * @param col - Column number of header (1-indexed).
     * @returns Column description in header.
     */
    public headerTitle(col: number): DefaultCypressChainable {
        const colIndex = String(col - 1);
        return cy.get(
            [this.thead, `th:nth(${colIndex})`, this.columnTitle].join(" "),
        );
    }

    /**
     * Get column description from table header.
     *
     * The headers for expandable buttons and selectable checkboxes are included.
     *
     * @public
     * @param col - Column number of header (1-indexed).
     * @returns Column description in header.
     */
    public headerDescription(col: number): DefaultCypressChainable {
        const colIndex = String(col - 1);
        return cy.get(
            [this.thead, `th:nth(${colIndex})`, this.columnDescription].join(
                " ",
            ),
        );
    }

    /**
     * Get table cell (typically `<td>` but can be `<th>` if row headers are
     * present).
     *
     * Both row and column are 1-indexed, i.e. 1:1 selects the first cell in the
     * first row.
     *
     * The columns for expandable buttons and selectable checkboxes are included in column count.
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
        const row = this.bodyRow(descriptor.row);
        const nth = `nth-child(${descriptor.col})`;
        return cy.get([row, `> td:${nth},`, row, `> th:${nth}`].join(" "));
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
        return cy.get([this.bodyRow(row), this.expandCell, `button`].join(" "));
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
        return cy.get([this.thead, this.selectHeader, `input`].join(" "));
    }

    /**
     * Get select input of given row.
     *
     * Only applicable if using a selectable table.
     * Input is a checkbox if using a multiselect table and radio if single.
     *
     * @param row - Row number for the select input (1-indexed).
     * @returns Select input of given row.
     */
    public selectInput(
        row: number,
    ): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get([this.bodyRow(row), this.selectCell, `input`].join(" "));
    }

    /**
     * Get the currently open context menu.
     *
     * The context menu must have been opened for this to return an element.
     *
     * @internal
     * @returns The opened context menu element.
     */
    public contextmenu(): Cypress.Chainable<JQuery<HTMLDivElement>> {
        /* this element is teleported, so we cannot scope it to the table selector */
        return cy.get(`ul.contextmenu__list`);
    }

    /**
     * Get the menu items of the currently open context menu.
     *
     * The context menu must have been opened for this to return an element.
     *
     * @public
     * @returns The context menu items.
     */
    public contextmenuItems(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        /* this element is teleported, so we cannot scope it to the table selector */
        return cy.get(`ul.contextmenu__list .contextmenu__list__item`);
    }

    /**
     * Get the dropdown from a select cell.
     *
     * Only applicable if using a select cell.
     *
     * Element is teleported and does not use given selector. Method may
     * not work properly if there are several dropdowns open simultaneously.
     *
     * @internal
     * @returns Dropdown for a select cell.
     */
    public selectDropdown(): DefaultCypressChainable {
        return cy.get(".combobox__listbox");
    }

    /**
     * Get an option in a select cell dropdown.
     *
     * Only applicable if using a select cell.
     *
     * Element is teleported and does not use given selector. Method may
     * not work properly if there are several dropdowns open simultaneously.
     *
     * @public
     * @param option - option number (1-indexed).
     * @returns Option of given number from a select cell dropdown.
     */
    public selectDropdownOption(option: number): DefaultCypressChainable {
        const index = option - 1;
        return cy.get(
            `.combobox__listbox li.combobox__listbox__option:nth(${index})`,
        );
    }

    /**
     * Get table caption.
     *
     * Only applicable if caption slot is used.
     *
     * @public
     * @returns The table caption.
     */
    public caption(): Cypress.Chainable<JQuery<HTMLTableSectionElement>> {
        return cy.get(`${this.selector} caption`);
    }

    /**
     * Get table footer.
     *
     * Only applicable if footer slot is used.
     *
     * @public
     * @returns The table footer.
     */
    public footer(): Cypress.Chainable<JQuery<HTMLTableSectionElement>> {
        return cy.get(this.tfoot);
    }

    /**
     * Get current tabbable element in the table.
     *
     * If table is untouched, it is the first cell in the table body (including columns for expandable and selectable).
     * If the cell has an interactable element, it is instead the interactable that is returned and not the cell.
     *
     * @internal
     * @returns The current tabbable element.
     */
    public tabbableElement(): DefaultCypressChainable {
        return cy.get(`${this.selector} [tabindex=0]`);
    }

    /**
     * Get all visible rows (`<tr>` in `<tbody>`).
     *
     * Includes expanded rows if table is expandable.
     *
     * @public
     * @returns All visible rows in the table.
     */
    public rows(): Cypress.Chainable<JQuery<HTMLTableRowElement>> {
        return cy.get(`${this.tbody} tr`);
    }

    /** @internal */
    private bodyRow(row: number): string {
        const rowIndex = String(row - 1);
        return `${this.tbody} tr:nth(${rowIndex})`;
    }

    /** @internal */
    private get thead(): string {
        return `${this.selector} thead`;
    }

    /** @internal */
    private get tbody(): string {
        return `${this.selector} tbody`;
    }

    /** @internal */
    private get tfoot(): string {
        return `${this.selector} tfoot`;
    }
}
