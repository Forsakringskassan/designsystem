import { FExpandablePanelSelectors } from "../selectors";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FExpandablePanelPageObject implements BasePageObject {
    private _selectors: ReturnType<typeof FExpandablePanelSelectors>;

    public expandCollapseIcon: () => DefaultCypressChainable;
    public header: () => DefaultCypressChainable;
    public body: () => DefaultCypressChainable;
    public notificationIcon: () => DefaultCypressChainable;
    public relatedInfo: () => DefaultCypressChainable;

    /**
     * @param selector - the root of the expandablepanel, usually `<div class="expandable-panel">...</div>`.
     */
    public constructor(selector: string) {
        this._selectors = FExpandablePanelSelectors(selector);

        this.expandCollapseIcon = () =>
            cy.get(this._selectors.expandCollapseIcon());

        this.header = () => cy.get(this._selectors.toggleButton());

        this.notificationIcon = () => cy.get(this._selectors.notification());

        this.body = () => cy.get(this._selectors.body());

        this.relatedInfo = () => cy.get(this._selectors.relatedInfo());
    }

    public get selector(): string {
        return this._selectors.selector;
    }

    /**
     * Get the root element.
     *
     * @returns The element itself.
     */
    public el(): DefaultCypressChainable {
        return cy.get(this._selectors.selector);
    }

    /**
     * Returns the number of notifications
     */
    public numberOfNotifications(): Cypress.Chainable<number> {
        let nrOfNotifications = 0;
        this.notificationIcon()
            .invoke("text")
            .then((text: string) =>
                text.replace(/(\d+)/, (_match, matchGroup1: string) => {
                    nrOfNotifications = Math.trunc(Number(matchGroup1));
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
