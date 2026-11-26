import { type DefaultCypressChainable } from "@fkui/vue/cypress";

export class FOfflineDocsPageObject {
    public toggleButton(): DefaultCypressChainable {
        return cy.get('[data-test="offlineExample"] button');
    }
}
