import { FOfflineLocalePageobject } from "../pageobjects/FOfflineLocale.pageobject";
import { FOfflinePageObject } from "@fkui/vue/cypress";

describe("FOffline", () => {
    const offline = new FOfflinePageObject();
    const offlineLocale = new FOfflineLocalePageobject(
        '[data-test="offlineExample"]',
    );

    beforeEach(() => {
        cy.visit("/components/foffline.html");
    });

    it("should be displayed when simulating offline event", () => {
        offline.banner().should("not.exist");
        offline.el().should("have.attr", "role", "none");
        offlineLocale.simulateOffline().click();
        offline.banner().should("be.visible");
        offline.el().should("have.attr", "role", "alert");
    });

    it("should be hidden when simulating online event", () => {
        offline.banner().should("not.exist");
        offlineLocale.simulateOffline().click();
        offline.banner().should("be.visible");
        offlineLocale.simulateOffline().click();
        offline.banner().should("not.exist");
    });
});
