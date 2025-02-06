import { type DefaultCypressChainable, type BasePageObject } from "./common";
import { FProgressbarPageObject } from "./FProgressbar.pageobject";

/**
 * @public
 */
export class FFileItemPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public fileName: () => DefaultCypressChainable;
    public cancelDeleteButton: () => DefaultCypressChainable;
    public cancelDeleteButtonIcon: () => DefaultCypressChainable;
    public progressMeter: FProgressbarPageObject;
    public fileIcon: () => DefaultCypressChainable;

    /**
     * @param selector - the root of the file item, usually `<div class="file-item">...</div>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
        this.fileName = () => cy.get(`${this.selector} .file-item__file-name`);
        this.fileIcon = () =>
            cy.get(`${this.selector} .file-item__file-open .icon`);
        this.cancelDeleteButton = () =>
            cy.get(`${this.selector} .file-item__file-remove`);
        this.cancelDeleteButtonIcon = () =>
            cy.get(`${this.selector} .file-item__file-remove .icon`);
        this.progressMeter = new FProgressbarPageObject(this.selector);
    }

    public typeOfFileIcon(): Cypress.Chainable<string> {
        return this.fileIcon().then((el) =>
            el[1].classList[1].replace(/.*f-icon-(\w+).*/, "$1"),
        );
    }

    public typeOfButtonIcon(): Cypress.Chainable<string> {
        return this.cancelDeleteButtonIcon().then((el) =>
            el[0].classList[2].replace(/.*f-icon-(\w+).*/, "$1"),
        );
    }
}
