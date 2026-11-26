import { FDetailsPanelPageObject } from "../../../cypress";
import FDetailsPanelExample from "./FDetailsPanelExample.vue";

const panel = FDetailsPanelPageObject.fromName("awesome-panel");

beforeEach(() => {
    cy.viewport(800, 600);
});

it("should open and close details panel", () => {
    cy.mount(FDetailsPanelExample);
    panel.el().should("not.exist");
    cy.get("button:contains('Öppna')").click();
    panel.el().should("exist");
    panel.content().should("contain.text", "Kalle Anka");
    panel.closeButton().click();
    panel.el().should("not.exist");
});
