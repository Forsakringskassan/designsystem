import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FExpandablePanelPageObject implements BasePageObject {
    public selector: string;

    /**
     * @param selector - the root of the expandablepanel, usually `<div class="expandable-panel">...</div>`.
     */
    public constructor(selector: string = ".expandable-panel") {
        this.selector = selector;
    }

    /**
     * Get root element.
     *
     * @public
     * @returns Root element of the expandable panel.
     */
    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    /**
     * Get the body of the expandable panel.
     *
     * @public
     * @returns Body of the expandable panel.
     */
    public body(): DefaultCypressChainable {
        return cy.get(`${this.selector} .expandable-panel__body`);
    }

    /**
     * Get the expand icon.
     *
     * @public
     * @returns Expand icon element.
     */
    public expandCollapseIcon(): DefaultCypressChainable {
        return cy.get(`${this.selector} .expandable-panel__icon`);
    }

    /**
     * Get the header button element.
     *
     * @public
     * @returns Header button element.
     */
    public header(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return cy.get(`${this.selector} .expandable-panel__heading button`);
    }

    /**
     * Get boolean state of the expandable panel for if it
     * is open (true) or closed (false).
     *
     * @public
     * @returns Boolean for panel being open (true) or closed (false).
     */
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

    /**
     * Get the notification icon.
     *
     * Only applicable if notifications are above zero.
     *
     * @public
     * @returns Notification icon element.
     */
    public notificationIcon(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .expandable-panel__heading .expandable-panel__notification`,
        );
    }

    /**
     * Returns the number of notifications
     *
     * @public
     * @returns Number of notifications.
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

    /**
     * Get container element for the `outside` slot.
     *
     * Only applicable if the `outside` slot is used.
     *
     * @public
     * @returns Container element for the `outside` slot.
     */
    public relatedInfo(): DefaultCypressChainable {
        return cy.get(`${this.selector} .expandable-panel__outside`);
    }
}
