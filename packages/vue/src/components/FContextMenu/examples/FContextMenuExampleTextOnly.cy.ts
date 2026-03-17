import { FContextMenuPageObject } from "../../../cypress";
import FContextMenuExampleTextOnly from "./FContextMenuExampleTextOnly.vue";

/**
 * Sanity tests for the "bara_text" documentation example:
 * https://designsystem.forsakringskassan.se/latest/components/fcontextmenu.html#bara_text
 */

const openButton = "[data-test='open-example-contextmenu-button']";

/* The FContextMenu in this example has no explicit id/data-test.
 * The page object targets the rendered <nav class="contextmenu"> directly. */
const contextMenu = new FContextMenuPageObject(".contextmenu");

describe("FContextMenuExampleTextOnly (bara text)", () => {
    beforeEach(() => {
        cy.mount(FContextMenuExampleTextOnly);
    });

    describe("öppna och stänga", () => {
        it("should initially have the menu closed", () => {
            contextMenu.el().should("not.exist");
        });

        it("should open menu when clicking the open button", () => {
            cy.get(openButton).click();
            contextMenu.el().should("exist");
        });

        it("should close the menu after an item is selected", () => {
            cy.get(openButton).click();
            contextMenu.item(0).click();
            contextMenu.el().should("not.exist");
        });

        it("should be able to open the menu again after closing", () => {
            cy.get(openButton).click();
            contextMenu.item(0).click();
            contextMenu.el().should("not.exist");
            cy.get(openButton).click();
            contextMenu.el().should("exist");
        });
    });

    describe("menyval", () => {
        it("should display 6 items (separators excluded)", () => {
            cy.get(openButton).click();
            contextMenu.items().should("have.length", 6);
        });

        it("should display correct item labels in order", () => {
            cy.get(openButton).click();
            contextMenu.item(0).should("contain.text", "Skriv ut");
            contextMenu.item(1).should("contain.text", "Påminnelse");
            contextMenu.item(2).should("contain.text", "Ändra");
            contextMenu.item(3).should("contain.text", "Ta bort");
            contextMenu.item(4).should("contain.text", "Utan ikon");
            contextMenu
                .item(5)
                .should(
                    "contain.text",
                    "Sista menyval med längsta bredd som överstiger 260px",
                );
        });

        it("should update selected value when an item is clicked", () => {
            cy.get(openButton).click();
            contextMenu.item(0).click();
            cy.get("pre").should("contain.text", "Selected: MENU_1");
        });
    });
});
