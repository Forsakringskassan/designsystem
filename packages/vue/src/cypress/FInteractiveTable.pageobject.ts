import { type DefaultCypressChainable, type BasePageObject } from "./common";
import { FTableColumnPageObject } from "./FTableColumn.pageobject";

/**
 * @public
 */
export class FInteractiveTablePageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;

    /**
     * @param selector - table selector.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
    }

    public caption(): DefaultCypressChainable {
        return cy.get(`${this.selector} caption`);
    }

    public bodyRow(): DefaultCypressChainable {
        return cy.get(`${this.selector} tbody tr`);
    }

    public row(index: number): DefaultCypressChainable {
        return cy.get(`${this.selector} tbody tr:nth(${index})`);
    }

    public headersRow(): DefaultCypressChainable {
        return cy.get(`${this.selector} thead th`);
    }

    /**
     * Hämta page object för specifikt Table row item.
     */
    public columnItem(index: number): FTableColumnPageObject {
        return new FTableColumnPageObject(
            `${this.selector} .table__row`,
            index,
        );
    }

    /**
     * Hämta page object för specifikt Header row item.
     */
    public headerRowItem(): FTableColumnPageObject {
        return new FTableColumnPageObject(`${this.selector} .table__row`, 0);
    }

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
