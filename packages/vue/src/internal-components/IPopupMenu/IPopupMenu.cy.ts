import { defineComponent } from "vue";
import { IPopupMenuPageObject } from "../../pageobject";
import IPopupMenu from "./IPopupMenu.vue";

const popupMenu = new IPopupMenuPageObject(".ipopupmenu--vertical");

// The id of the button that toggles the popup visibility on/off
const toggleOpenPopupButtonId = "#toggle-open";
// The data-testid catches and display the highlited item
const highlightedItemTestId = '[data-testid="highlightedItem"]';

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
                <pre data-testid="highlightedItem">{{ model }}</pre>
                <i-popup-menu
                    id="ipopupmenu"
                    ref="ipopupmenu"
                    v-model="model"
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
                model: "",
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
            /* eslint-disable-next-line cypress/no-unnecessary-waiting -- technical debt SFKUI-6672: the popup closes if the resize event is fired too late */
            cy.wait(500);
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
            cy.get(highlightedItemTestId).should("have.text", "key1");
        });
    });

    describe("when `enable-keyboard-navigation` is false", () => {
        beforeEach(() => {
            // Large enough to activate teleport.
            cy.viewport(1024, 600);
            /* eslint-disable-next-line cypress/no-unnecessary-waiting -- technical debt SFKUI-6672: the popup closes if the resize event is fired too late */
            cy.wait(500);
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
            cy.get(highlightedItemTestId).should("be.empty");
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
        cy.get(highlightedItemTestId).should("have.text", "key2");
        cy.get(toggleOpenPopupButtonId).click();
        popupMenu.getSelectedItem().should("contain.text", "label2");
    });
});
