import { type DefineComponent, defineComponent } from "vue";
import { FNavigationMenuPageobject } from "../../cypress";
import FNavigationMenu from "./FNavigationMenu.vue";

const navMenu = new FNavigationMenuPageobject();
const popupMenu = navMenu.popupMenu();

const VIEWPORT = {
    // Wide enough for no items to overflow.
    NO_OVERFLOW: { width: 1024, height: 600 },
    // 3 items overflowing (8 visible items).
    LOW_OVERFLOW: { width: 700, height: 600 },
    // 6 items overflowing (2 visible items).
    HIGH_OVERFLOW: { width: 200, height: 600 },
};

function setViewport(viewport: { height: number; width: number }): void {
    cy.viewport(viewport.width, viewport.height);
}

const testRoutes = [
    { label: "label #1", route: "ROUTE_1" },
    { label: "label #2", route: "ROUTE_2" },
    { label: "label #3", route: "ROUTE_3" },
    { label: "label #4", route: "ROUTE_4", href: "#href-4", target: "_blank" },
    { label: "label #5", route: "ROUTE_5" },
    { label: "label #6", route: "ROUTE_6" },
    { label: "label #7", route: "ROUTE_7" },
    { label: "label #8", route: "ROUTE_8" },
    { label: "label #9", route: "ROUTE_9" },
    { label: "label #10", route: "ROUTE_10", href: "#href-10" },
];

const modelRouteId = '[data-testid="modelRoute"]';
const selectedRouteId = '[data-testid="selectedRoute"]';

const defaultTemplate = /* HTML */ `
    <div style="min-height:95vh">
        <f-navigation-menu
            v-model:route="route"
            :routes="routes"
            @selectedRoute="selectedRoute = $event"
        />
        <div>
            <span data-testid="modelRoute"> {{ route }} </span>
            <span data-testid="selectedRoute"> {{ selectedRoute }} </span>
        </div>
    </div>
`;

function createComponent(template = defaultTemplate): DefineComponent {
    return defineComponent({
        template,
        components: {
            FNavigationMenu,
        },
        data() {
            return {
                routes: testRoutes,
                route: "",
                selectedRoute: "",
            };
        },
    });
}

describe("on resize", () => {
    it("items that overflow should be hidden", () => {
        setViewport(VIEWPORT.NO_OVERFLOW);
        cy.mount(createComponent());

        navMenu.items().should("have.length", 10);
        navMenu.overflowItems().should("have.length", 0);

        setViewport(VIEWPORT.LOW_OVERFLOW);
        navMenu.items().should("have.length", 8);
        navMenu.overflowItems().should("have.length", 3);
    });

    it("items that are no longer overflowing should become visible", () => {
        setViewport(VIEWPORT.LOW_OVERFLOW);
        cy.mount(createComponent());

        navMenu.items().should("have.length", 8);
        navMenu.overflowItems().should("have.length", 3);

        setViewport(VIEWPORT.NO_OVERFLOW);
        navMenu.items().should("have.length", 10);
        navMenu.overflowItems().should("have.length", 0);
    });

    it("should show popup item if menu has overflowing items", () => {
        setViewport(VIEWPORT.LOW_OVERFLOW);
        cy.mount(createComponent());
        navMenu.popupItem().should("exist");
    });

    it("should not show popup item if no items are overflowing", () => {
        setViewport(VIEWPORT.NO_OVERFLOW);
        cy.mount(createComponent());
        navMenu.popupItem().should("not.exist");
    });

    it("should close open popup menu if no items are overflowing", () => {
        setViewport(VIEWPORT.LOW_OVERFLOW);
        cy.mount(createComponent());

        navMenu.popupItem().click();
        popupMenu.el().should("exist");

        setViewport(VIEWPORT.NO_OVERFLOW);
        popupMenu.el().should("not.exist");
    });

    it("should not overflow if `vertical` is used", () => {
        setViewport(VIEWPORT.HIGH_OVERFLOW);
        const template = /* HTML */ `
            <div style="min-height: 95vh">
                <f-navigation-menu :routes="routes" vertical />
            </div>
        `;
        cy.mount(createComponent(template));

        navMenu.items().should("have.length", 10);
        navMenu.overflowItems().should("have.length", 0);
        navMenu.popupItem().should("not.exist");
    });
});

describe("on select item", () => {
    beforeEach(() => {
        setViewport(VIEWPORT.LOW_OVERFLOW);
    });

    it("should emit selectedRoute", () => {
        cy.mount(createComponent());
        cy.get(selectedRouteId).should("have.text", "");
        navMenu.item(0).click();
        cy.get(selectedRouteId).should("have.text", "ROUTE_1");
    });

    it("should emit selectedRoute when item is selected in popup menu", () => {
        cy.mount(createComponent());
        navMenu.popupItem().click();
        popupMenu.item(0).click();
        cy.get(selectedRouteId).should("have.text", "ROUTE_8");
    });

    it("should update route v-model", () => {
        cy.mount(createComponent());
        cy.get(modelRouteId).should("have.text", "");
        navMenu.item(0).click();
        cy.get(modelRouteId).should("have.text", "ROUTE_1");
    });

    it("should update route v-model when item is selected in popup menu", () => {
        cy.mount(createComponent());
        navMenu.popupItem().click();
        popupMenu.item(0).click();
        cy.get(modelRouteId).should("have.text", "ROUTE_8");
    });

    it("should highlight selected item", () => {
        cy.mount(createComponent());
        navMenu
            .item(5)
            .should("not.have.class", "imenu__list__item--highlight");
        navMenu.item(5).click();
        navMenu.item(5).should("have.class", "imenu__list__item--highlight");
    });

    it("should highlight popup item when an item in popup menu is selected", () => {
        cy.mount(createComponent());
        navMenu
            .popupItem()
            .should("not.have.class", "imenu__list__item--highlight");
        navMenu.popupItem().click();
        popupMenu.item(0).click();
        navMenu
            .popupItem()
            .should("have.class", "imenu__list__item--highlight");
    });

    it("should highlight selected item in popup menu", () => {
        cy.mount(createComponent());

        // Select item in popup menu.
        navMenu.popupItem().click();
        popupMenu.item(0).click();

        // Reopen popup menu (selected item should be highlighted).
        navMenu.popupItem().click();
        popupMenu
            .item(0)
            .should("have.class", "ipopupmenu__list__item--highlight");
    });

    it("should still be highlighted when moved from menu to popup menu", () => {
        cy.mount(createComponent());

        // Select an item.
        navMenu.item(5).click();
        navMenu.item(5).should("have.class", "imenu__list__item--highlight");

        // Resize to move selected item to popup menu (popup item should be highlighted).
        setViewport(VIEWPORT.HIGH_OVERFLOW);
        navMenu.items().should("have.length", 2);
        navMenu
            .popupItem()
            .should("have.class", "imenu__list__item--highlight");

        // Selected item should still be highlighted (now in popup menu).
        navMenu.popupItem().click();
        popupMenu
            .item(4)
            .should("have.class", "ipopupmenu__list__item--highlight");
    });

    it("should still be highlighted when moved from popup menu to menu", () => {
        setViewport(VIEWPORT.HIGH_OVERFLOW);
        cy.mount(createComponent());

        // Select an item in popup menu (should highlight popup item).
        navMenu.popupItem().click();
        popupMenu.item(4).click();
        navMenu
            .popupItem()
            .should("have.class", "imenu__list__item--highlight");

        // Resize to move selected item from popup menu to menu.
        setViewport(VIEWPORT.LOW_OVERFLOW);
        navMenu.items().should("have.length", 8);
        navMenu.item(5).should("have.class", "imenu__list__item--highlight");
    });

    it("should activate link if item has `href`", () => {
        setViewport(VIEWPORT.NO_OVERFLOW);
        cy.mount(createComponent());

        cy.url().should("not.contain", "#href-10");
        navMenu.item(9).click();
        cy.url().should("contain", "#href-10");

        // Restore URL state.
        cy.location().go("back");
    });
});

describe("on key pressed", () => {
    beforeEach(() => {
        setViewport(VIEWPORT.LOW_OVERFLOW);
        cy.mount(createComponent());
        navMenu.itemLink(0).should("be.visible");
        navMenu.itemLink(0).focus();
        navMenu.itemLink(0).should("have.focus");
    });

    it("should move focus with arrow keys", () => {
        cy.focused().trigger("keydown", { key: "ArrowRight" });
        navMenu.itemLink(1).should("have.focus");

        cy.focused().trigger("keydown", { key: "ArrowLeft" });
        navMenu.itemLink(0).should("have.focus");

        cy.focused().trigger("keydown", { key: "ArrowDown" });
        navMenu.itemLink(1).should("have.focus");

        cy.focused().trigger("keydown", { key: "ArrowUp" });
        navMenu.itemLink(0).should("have.focus");
    });

    it("should move focus with tab", () => {
        cy.focused().trigger("keydown", { key: "Tab" });
        navMenu.itemLink(1).should("have.focus");

        cy.focused().trigger("keydown", { key: "Tab", shiftKey: true });
        navMenu.itemLink(0).should("have.focus");
    });

    it("should wrap focus with arrow keys", () => {
        cy.focused().trigger("keydown", { key: "ArrowLeft" });
        navMenu.itemLink(7).should("have.focus");

        cy.focused().trigger("keydown", { key: "ArrowRight" });
        navMenu.itemLink(0).should("have.focus");

        cy.focused().trigger("keydown", { key: "ArrowUp" });
        navMenu.itemLink(7).should("have.focus");

        cy.focused().trigger("keydown", { key: "ArrowDown" });
        navMenu.itemLink(0).should("have.focus");
    });

    it("should select item with spacebar", () => {
        cy.focused().trigger("keydown", { key: "Spacebar" });
        cy.get(selectedRouteId).should("have.text", "ROUTE_1");
        cy.get(modelRouteId).should("have.text", "ROUTE_1");
    });

    it("should select item with enter", () => {
        cy.focused().trigger("keydown", { key: "Enter" });
        cy.get(selectedRouteId).should("have.text", "ROUTE_1");
        cy.get(modelRouteId).should("have.text", "ROUTE_1");
    });

    it("should toggle popup when popup item is selected", () => {
        cy.focused().trigger("keydown", { key: "ArrowLeft" });
        navMenu.itemLink(7).should("have.focus");

        cy.focused().trigger("keydown", { key: "Spacebar" });
        popupMenu.el().should("exist");

        cy.focused().trigger("keydown", { key: "Spacebar" });
        popupMenu.el().should("not.exist");

        cy.focused().trigger("keydown", { key: "Enter" });
        popupMenu.el().should("exist");

        cy.focused().trigger("keydown", { key: "Enter" });
        popupMenu.el().should("not.exist");
    });

    describe("when focusing popup item and popup menu is open", () => {
        beforeEach(() => {
            // Move focus to popup item and open popup menu.
            navMenu.itemLink(7).focus();
            navMenu.itemLink(7).should("have.focus");
            cy.focused().trigger("keydown", { key: "Spacebar" });
            popupMenu.el().should("exist");
        });

        it("should move focus to first item in popup menu on arrow down", () => {
            cy.focused().trigger("keydown", { key: "ArrowDown" });
            popupMenu.getItemLink(0).should("have.focus");
        });

        it("should move focus to first item in popup menu on tab", () => {
            cy.focused().trigger("keydown", { key: "Tab" });
            popupMenu.getItemLink(0).should("have.focus");
        });

        it("should move focus to last item in popup menu on arrow up", () => {
            cy.focused().trigger("keydown", { key: "ArrowUp" });
            popupMenu.getItemLink(2).should("have.focus");
        });

        it("should close popup on arrow left", () => {
            cy.focused().trigger("keydown", { key: "ArrowLeft" });
            popupMenu.el().should("not.exist");
        });

        it("should close popup on arrow right", () => {
            cy.focused().trigger("keydown", { key: "ArrowRight" });
            popupMenu.el().should("not.exist");
        });

        it("should close popup on tab to previous", () => {
            cy.focused().trigger("keydown", { key: "Tab", shiftKey: true });
            popupMenu.el().should("not.exist");
        });
    });
});
