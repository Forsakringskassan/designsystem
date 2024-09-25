import { type BasePageObject, type DefaultCypressChainable } from "../common";
import { IMenuPageObject } from "../IMenu.pageobject";
import { IPopupMenuPageObject } from "../IPopupMenu.pageobject";

/**
 * Represents f-navigation-menu with access to its i-menu and its i-popup-menu element
 *
 ' @public
 */
export class FNavigationMenuPageobject implements BasePageObject {
    public selector: string;

    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    /**
     * @param selector - the root of the navigation menu, usually `div > nav.imenu`.
     */
    public constructor(selector: string) {
        this.selector = selector;
    }

    /**
     * Returns `IMenu` page object.
     */
    public menu(): IMenuPageObject {
        return new IMenuPageObject(`${this.selector}.imenu`);
    }

    /**
     * Returns `IPopupMenu` page object.
     */
    public popupMenu(): IPopupMenuPageObject {
        return this.menu().popupMenu();
    }
}
