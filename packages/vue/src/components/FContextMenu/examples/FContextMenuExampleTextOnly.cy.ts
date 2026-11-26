import { FContextMenuPageObject } from "../../../cypress";
import FContextMenuExampleTextOnly from "./FContextMenuExampleTextOnly.vue";

const po = new FContextMenuPageObject(".contextmenu");

describe("FContextMeny example", () => {
    it("should open the menu and have correct number of choices", () => {
        cy.mount(FContextMenuExampleTextOnly);
        cy.get("button").click();
        po.items().should("have.length", 6);
    });
});
