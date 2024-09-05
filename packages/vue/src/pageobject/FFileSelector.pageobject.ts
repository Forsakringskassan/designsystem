import { type DefaultCypressChainable, type BasePageObject } from "./common";

/**
 * @public
 */
export class FFileSelectorPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public addFile: () => DefaultCypressChainable;
    public icon: () => DefaultCypressChainable;

    /**
     * @param selector - the root of the file file selector, usually `<div class="file-selector">...</div>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
        this.addFile = () => cy.get(`${this.selector} > input`);
        this.icon = () => cy.get(`${this.selector}  .f-icon-paper-clip`);
    }
}
