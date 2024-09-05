import { type DefaultCypressChainable } from "@fkui/vue/pageobject";

export class FOfflineDocsPageObject {
    public toggleButton(): DefaultCypressChainable {
        return cy.get('[data-test="offlineExample"] button');
    }
}
