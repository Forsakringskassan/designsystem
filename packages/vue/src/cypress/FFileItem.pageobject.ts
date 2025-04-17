import { type DefaultCypressChainable, type BasePageObject } from "./common";
import { FProgressbarPageObject } from "./FProgressbar.pageobject";

/**
 * @public
 */
export class FFileItemPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;

    /**
     * @internal
     */
    public _progressMeter: FProgressbarPageObject;

    /**
     * @param selector - the root of the file item, usually `<div class="file-item">...</div>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
        this._progressMeter = new FProgressbarPageObject(this.selector);
    }

    /**
     * @internal
     */
    public _cancelDeleteButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`${this.selector} .file-item__file-remove`);
    }

    /**
     * @internal
     */
    public _cancelDeleteButtonIcon(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`${this.selector} .file-item__file-remove .icon`);
    }

    /**
     * @internal
     */
    public _fileIcon(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`${this.selector} .file-item__file-open .icon`);
    }

    /**
     * Filename of the uploaded file.
     */
    public fileName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`${this.selector} .file-item__file-name`);
    }

    /**
     * Filename extension in lowercase.
     */
    public typeOfFile(): Cypress.Chainable<string> {
        return this._fileIcon().then((el) =>
            el[1].classList[1].replace(/.*f-icon-(\w+).*/, "$1"),
        );
    }

    /**
     * @deprecated Deprecated alias for `typeOfFile`.
     */
    public typeOfFileIcon(): Cypress.Chainable<string> {
        return this.typeOfFile();
    }

    /**
     * @internal
     */
    public typeOfButtonIcon(): Cypress.Chainable<string> {
        return this._cancelDeleteButtonIcon().then((el) =>
            el[0].classList[2].replace(/.*f-icon-(\w+).*/, "$1"),
        );
    }
}
