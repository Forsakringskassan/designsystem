import { type DefaultCypressChainable, type BasePageObject } from "./common";
import { FDialogueTreeItemPageObject } from "./FDialogueTreeItem.pageobject";

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
            `${this.selector} li:nth(${index})`,
        );
    }
}
