import { type DefaultCypressChainable } from "@fkui/vue/cypress";

export class FOfflineLocalePageobject {
    public selector: string;

    /**
     * @param selector - optional custom selector to offline component.
     */
    public constructor(selector: string) {
        this.selector = selector;
    }
    public simulateOffline(): DefaultCypressChainable {
        return cy.get(`${this.selector} button`);
    }
}
