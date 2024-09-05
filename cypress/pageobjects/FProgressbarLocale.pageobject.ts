import {
    type BasePageObject,
    type DefaultCypressChainable,
} from "@fkui/vue/pageobject";

export class FProgressbarLocalePageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public increase: () => DefaultCypressChainable;
    public decrease: () => DefaultCypressChainable;

    /**
     * @param selector - the root of the static field, usually `<div class="progress">...</div>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
        this.increase = () =>
            cy.get(`${this.selector} :nth-child(1) > :nth-child(3)`);
        this.decrease = () =>
            cy.get(`${this.selector} :nth-child(1) > :nth-child(4)`);
    }
}
