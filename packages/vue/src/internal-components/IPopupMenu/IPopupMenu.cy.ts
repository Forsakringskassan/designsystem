import { defineComponent } from "vue";
import { IPopupMenuPageObject } from "../../cypress";
import IPopupMenu from "./IPopupMenu.vue";
import IPopupMenuExample from "./examples/IPopupMenuExample.vue";

const popupMenu = new IPopupMenuPageObject(".ipopupmenu--vertical");

// The id of the button that toggles the popup visibility on/off
const toggleOpenPopupButtonId = "#toggle-open";
const selectedItemId = '[data-testid="selectedItem"]';
const focusedItemId = '[data-testid="focusedItem"]';

function mountTestComponent(
    isOpen: boolean,
    items: Array<Record<string, unknown>>,
    enableKeyNav: boolean = true,
): void {
    const TestComponent = defineComponent({
        template: /* HTML */ `
            <div style="min-height: 95vh">
                <button
                    id="toggle-open"
                    ref="popupAnchor"
                    type="button"
                    @click="isOpen = !isOpen"
                >
                    Öppna
                </button>
                <pre data-testid="selectedItem">{{ selectedItem }}</pre>
                <pre data-testid="focusedItem">{{ focusedItem }}</pre>
                <i-popup-menu
                    id="ipopupmenu"
                    ref="ipopupmenu"
                    v-model="selectedItem"
                    v-model:focused-item="focusedItem"
                    :is-open="isOpen"
                    :items="items"
                    anchor="toggle-open"
                    :enable-keyboard-navigation="${enableKeyNav}"
                    @close="this.isOpen = false"
                ></i-popup-menu>
            </div>
        `,
        components: {
            IPopupMenu,
        },
    });
    cy.mount(TestComponent, {
        data() {
            return {
                items: items,
                selectedItem: "",
                focusedItem: "",
                isOpen: isOpen,
            };
        },
    });
}

const arrayWithOneTestItem = [
    {
        label: "my label",
        key: "my-key",
        href: "#my-href",
        target: "_blank",
    },
];

const arrayWithThreeTestItems = [
    {
        label: "label1",
        key: "key1",
    },
    {
        label: "label2",
        key: "key2",
    },
    {
        label: "label3",
        key: "key3",
    },
];

describe("keyboard navigation", () => {
    describe("when `enable-keyboard-navigation` is true", () => {
        beforeEach(() => {
            // Large enough to activate teleport.
            cy.viewport(1024, 600);
            mountTestComponent(true, arrayWithThreeTestItems);
            popupMenu.getItemLink(0).should("be.visible");
            popupMenu.getItemLink(0).focus();
        });

        it("should move focus with arrow keys", () => {
            cy.focused().trigger("keydown", { key: "ArrowDown" });
            popupMenu.getItemLink(1).should("have.focus");

            cy.focused().trigger("keydown", { key: "ArrowUp" });
            popupMenu.getItemLink(0).should("have.focus");
        });

        it("should wrap focus with arrow keys", () => {
            cy.focused().trigger("keydown", { key: "ArrowUp" });
            popupMenu.getItemLink(2).should("have.focus");

            cy.focused().trigger("keydown", { key: "ArrowDown" });
            popupMenu.getItemLink(0).should("have.focus");
        });

        it("should move focus with tab", () => {
            cy.focused().trigger("keydown", { key: "Tab" });
            popupMenu.getItemLink(1).should("have.focus");

            cy.focused().trigger("keydown", { key: "Tab", shiftKey: true });
            popupMenu.getItemLink(0).should("have.focus");
        });

        it("should close popup on tab to previous when on first item", () => {
            cy.focused().trigger("keydown", { key: "Tab", shiftKey: true });
            popupMenu.el().should("not.exist");
        });

        it("should close popup on tab to next when on last item", () => {
            cy.focused().trigger("keydown", { key: "ArrowUp" });
            popupMenu.getItemLink(2).should("have.focus");

            cy.focused().trigger("keydown", { key: "Tab" });
            popupMenu.el().should("not.exist");
        });

        it("should select item with spacebar", () => {
            cy.focused().trigger("keydown", { key: "Spacebar" });
            cy.get(selectedItemId).should("have.text", "key1");
        });
    });

    describe("when `enable-keyboard-navigation` is false", () => {
        beforeEach(() => {
            // Large enough to activate teleport.
            cy.viewport(1024, 600);
            mountTestComponent(true, arrayWithThreeTestItems, false);
            popupMenu.getItemLink(0).should("be.visible");
            popupMenu.getItemLink(0).focus();
        });

        it("should not move focus with arrow keys", () => {
            cy.focused().trigger("keydown", { key: "ArrowDown" });
            popupMenu.getItemLink(0).should("have.focus");

            cy.focused().trigger("keydown", { key: "ArrowUp" });
            popupMenu.getItemLink(0).should("have.focus");
        });

        it("should not programmatically move focus with tab", () => {
            cy.focused().trigger("keydown", { key: "Tab" });
            popupMenu.getItemLink(0).should("have.focus");

            cy.focused().trigger("keydown", { key: "Tab", shiftKey: true });
            popupMenu.getItemLink(0).should("have.focus");
        });

        it("should not select item with spacebar", () => {
            cy.focused().trigger("keydown", { key: "Spacebar" });
            cy.get(selectedItemId).should("be.empty");
        });
    });
});

describe("props", () => {
    describe("v-model:focused-item", () => {
        it("should update when focused item changes", () => {
            mountTestComponent(true, arrayWithThreeTestItems);
            popupMenu.getItemLink(0).should("be.visible");
            popupMenu.getItemLink(0).focus();
            popupMenu.getItemLink(0).should("have.focus");
            cy.get(focusedItemId).should("be.empty");

            cy.focused().trigger("keydown", { key: "ArrowDown" });
            cy.get(focusedItemId).should("contain.text", "key2");
        });

        it("should be empty when popup is closed", () => {
            mountTestComponent(true, arrayWithThreeTestItems);
            popupMenu.getItemLink(0).should("be.visible");
            popupMenu.getItemLink(0).focus();
            popupMenu.getItemLink(0).should("have.focus");
            cy.get(focusedItemId).should("be.empty");

            cy.focused().trigger("keydown", { key: "ArrowDown" });
            cy.get(focusedItemId).should("contain.text", "key2");

            cy.focused().trigger("keydown", { key: "Spacebar" });
            cy.get(focusedItemId).should("be.empty");
        });

        it("should set focus into popup menu on change from empty", () => {
            const openButton = "#popup-menu-open-button";
            cy.mount(IPopupMenuExample);
            cy.get(openButton).focus();
            cy.get(openButton).should("have.focus");

            cy.get(openButton).trigger("click");
            popupMenu.el().should("exist");

            // Example changes `v-model:focused-item` to first item key on pressing tab.
            cy.focused().trigger("keydown", { key: "Tab" });
            popupMenu.getItemLink(0).should("have.focus");
        });
    });
});

describe("tests", () => {
    it("should be visible after click on toggle open button", () => {
        mountTestComponent(false, arrayWithOneTestItem);
        // class ipopupmenu--vertical only exists when the popup is visible
        popupMenu.el().should("not.to.exist");
        cy.get(toggleOpenPopupButtonId).click();
        cy.get(toggleOpenPopupButtonId).then(() => {
            popupMenu.el().should("to.exist");
        });
    });

    it("should change href on click link", () => {
        mountTestComponent(true, arrayWithOneTestItem);
        popupMenu
            .getItemLink(0)
            .should("contain.text", "my label")
            .should("have.attr", "href", "#my-href");
    });

    it("should have target on link with target", () => {
        mountTestComponent(true, arrayWithOneTestItem);
        popupMenu.getItemLink(0).should("have.attr", "target", "_blank");
    });

    it("should activate link when item with `href` is clicked", () => {
        const items = [
            {
                label: "foobar",
                key: "foobar",
                href: "#foobar",
            },
        ];
        mountTestComponent(true, items);

        cy.url().should("not.contain", "#foobar");
        popupMenu.item(0).click();
        cy.url().should("contain", "#foobar");

        // Restore URL state.
        cy.location().go("back");
    });
});

describe("pageobject", () => {
    it("should return the list of items from the menu", () => {
        mountTestComponent(true, arrayWithThreeTestItems);
        popupMenu.items().should("have.length", 3);
        popupMenu.item(0).should("contain.text", "label1");
        popupMenu.item(2).should("contain.text", "label3");
    });

    it("should return the selected item after click", () => {
        // start with popup menu closed
        mountTestComponent(false, arrayWithThreeTestItems);
        // open popup menu
        cy.get(toggleOpenPopupButtonId).click();
        // select item at index 1
        popupMenu.item(1).click();
        cy.get(selectedItemId).should("have.text", "key2");
        cy.get(toggleOpenPopupButtonId).click();
        popupMenu.getSelectedItem().should("contain.text", "label2");
    });
});
