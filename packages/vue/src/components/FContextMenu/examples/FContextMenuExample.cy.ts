import { FContextMenuPageObject } from "../../../cypress";
import FContextMenuExample from "./FContextMenuExample.vue";

/**
 * Sanity tests for the "ikoner_och_text" documentation example:
 * https://designsystem.forsakringskassan.se/latest/components/fcontextmenu.html#ikoner_och_text
 */

const openButton = "[data-test='open-example-contextmenu-button']";

/* The FContextMenu in this example has data-test="contextmenu-open", which is
 * forwarded via Vue attr inheritance to the IPopup's inner popup wrapper div. */
const contextMenu = new FContextMenuPageObject(
    "[data-test='contextmenu-open']",
);

describe("FContextMenuExample (ikoner och text)", () => {
    beforeEach(() => {
        cy.mount(FContextMenuExample);
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
        it("should display 4 items (separators excluded)", () => {
            cy.get(openButton).click();
            contextMenu.items().should("have.length", 4);
        });

        it("should display correct item labels in order", () => {
            cy.get(openButton).click();
            contextMenu.item(0).should("contain.text", "Påminnelse");
            contextMenu.item(1).should("contain.text", "Ändra");
            contextMenu.item(2).should("contain.text", "Ta bort");
            contextMenu.item(3).should("contain.text", "Utan ikon");
        });

        it("should update selected value when an item is clicked", () => {
            cy.get(openButton).click();
            contextMenu.item(0).click();
            cy.get("pre").should("contain.text", "Selected: MENU_2");
        });
    });

    describe("ikoner", () => {
        it("should render icons for items that have an icon configured", () => {
            cy.get(openButton).click();
            contextMenu.item(0).find(".contextmenu__lefticon").should("exist");
            contextMenu.item(1).find(".contextmenu__lefticon").should("exist");
            contextMenu.item(2).find(".contextmenu__lefticon").should("exist");
        });

        it("should render icon placeholder for the item without an icon", () => {
            cy.get(openButton).click();
            /* When any item in the menu has an icon, the component renders icon
             * placeholders for all items to keep labels aligned. */
            contextMenu.item(3).find(".contextmenu__lefticon").should("exist");
        });
    });
});
