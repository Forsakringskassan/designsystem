import { FContextMenuPageObject } from "../../../cypress";
import FContextMenuExample from "./FContextMenuExample.vue";

const po = new FContextMenuPageObject(".contextmenu");

describe("FContextMeny example", () => {
    it("should open the menu and have correct number of choices", () => {
        cy.mount(FContextMenuExample);
        cy.get("button").click();
        po.items().should("have.length", 4);
    });
});
