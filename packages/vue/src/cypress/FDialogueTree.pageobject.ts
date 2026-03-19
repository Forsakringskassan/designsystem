import { FDialogueTreeItemPageObject } from "./FDialogueTreeItem.pageobject";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FDialogueTreePageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
    }

    public options(): DefaultCypressChainable {
        return cy.get(`${this.selector} li`);
    }

    public option(index: number): FDialogueTreeItemPageObject {
        return new FDialogueTreeItemPageObject(
            `${this.selector} li:nth(${String(index)})`,
        );
    }
}
