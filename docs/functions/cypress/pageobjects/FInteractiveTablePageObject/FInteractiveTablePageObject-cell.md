---

    name: FInteractiveTablePageObject.cell
    title: "FInteractiveTablePageObject: cell() method"
    short-title: cell()
    layout: api.method
    ---

    Get table cell (typically `<td>` but can be `<th>` if row headers are present).

Both row and column are 1-indexed, i.e. 1:1 selects the first cell in the first row.

Neither the marker for expandable rows or the checkbox for selectable rows are included in the column count, i.e. `1` always refers to the first column with content.

For expandable rows the row count depend on whenever a row is expanded or not. If the first row is collapsed the second row refers to the next parent row while if the first row is expanded the second row refers to the first expanded row under the first row.

    ## Syntax

    ```ts nocompile nolint
    cell(descriptor);
    ```

    ### Parametrar

    `descriptor: {
    row: number;
    col: number;

}`
: Row and column number of cell (1-indexed).

    ### Returvärde

    `Cypress.Chainable<JQuery<HTMLTableCellElement>>`

     The cell element.




    ## Exempel

    ```import static
    FInteractiveTablePageObject-cell.vue
    ```

    ```import
    FInteractiveTablePageObject-cell.cy.ts
    ```
