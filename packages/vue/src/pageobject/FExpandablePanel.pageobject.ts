import { type DefaultCypressChainable, type BasePageObject } from "./common";

/**
 * @public
 */
export class FExpandablePanelPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public expandCollapseIcon: () => DefaultCypressChainable;
    public header: () => DefaultCypressChainable;
    public body: () => DefaultCypressChainable;
    public notificationIcon: () => DefaultCypressChainable;
    public relatedInfo: () => DefaultCypressChainable;

    /**
     * @param selector - the root of the expandablepanel, usually `<div class="expandable-panel">...</div>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);

        this.expandCollapseIcon = () =>
            cy.get(`${this.selector} .expandable-panel__icon`);
        this.header = () =>
            cy.get(`${this.selector} .expandable-panel__heading button`);

        this.notificationIcon = () =>
            cy.get(
                `${this.selector} .expandable-panel__heading .expandable-panel__notification`,
            );

        this.body = () => cy.get(`${this.selector} .expandable-panel__body`);
        this.relatedInfo = () =>
            cy.get(`${this.selector} .expandable-panel__outside`);
    }

    /**
     * Returns the number of notifications
     */
    public numberOfNotifications(): Cypress.Chainable<number> {
        let nrOfNotifications = 0;
        this.notificationIcon()
            .invoke("text")
            .then((text: string) =>
                text.replace(/(\d+)/, (match, matchGroup1) => {
                    nrOfNotifications = parseInt(matchGroup1, 10);
                    return matchGroup1;
                }),
            );

        return cy.wrap("Count number of notifications").then(() => {
            return nrOfNotifications;
        });
    }

    public isOpen(): Cypress.Chainable<boolean> {
        let isPanelOpen = false;
        this.el()
            .invoke("attr", "class")
            .then((classes) => {
                const panelClasses = classes ? classes.split(" ") : [];

                isPanelOpen = panelClasses.includes(
                    "expandable-panel--expanded",
                );
            });

        return cy.wrap("Check if panel is expanded").then(() => {
            return isPanelOpen;
        });
    }
}
