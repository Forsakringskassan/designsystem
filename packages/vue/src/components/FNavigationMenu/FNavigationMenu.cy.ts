import { defineComponent } from "vue";
import {
    IMenuPageObject,
    IPopupMenuPageObject,
    FNavigationMenuPageobject,
} from "../../pageobject";
import FNavigationMenu from "./FNavigationMenu.vue";

// The viewport size has been adjusted to display 7 menu items out of 10.
// The remaining 3 items are displayed in the popup menu that is shown after clicking on "Mer"
const viewportLarge = { width: 700, height: 500 };

// The viewport size has been adjusted to display 4 menu items out of 10.
// The remaining 6 items are displayed in the popup menu that is shown after clicking on "Mer"
const viewportSmall = { width: 500, height: 500 };

const testDataWith5Routes = [
    { label: "label #1", route: "ROUTE_1" },
    { label: "label #2", route: "ROUTE_2" },
    { label: "label #3", route: "ROUTE_3" },
    { label: "label #4", route: "ROUTE_4", href: "#href-4", target: "_blank" }, // Menu item with href
    { label: "label #5", route: "ROUTE_5" },
];

const testDataWith10Routes = [
    testDataWith5Routes[0],
    testDataWith5Routes[1],
    testDataWith5Routes[2],
    testDataWith5Routes[3],
    testDataWith5Routes[4],
    { label: "label #6", route: "ROUTE_6" },
    { label: "label #7", route: "ROUTE_7" },
    { label: "label #8", route: "ROUTE_8" }, // overflow, will be in popup menu
    { label: "label #9", route: "ROUTE_9" },
    { label: "label #10", route: "ROUTE_10", href: "#href-10" }, // Popup menu with href
];

const TestComponentTemplate = /* HTML */ `
    <div>
        <f-navigation-menu
            :routes="routes"
            @selectedRoute="selectedRoute = $event"
        />
        <div>
            <span data-testid="selectedRoute"> {{ selectedRoute }} </span>
        </div>
    </div>
`;

const selectedRouteDataTestid = '[data-testid="selectedRoute"]';

const TestComponent1 = defineComponent({
    template: TestComponentTemplate,
    components: {
        FNavigationMenu,
    },
    data() {
        return {
            routes: testDataWith5Routes,
            selectedRoute: "",
        };
    },
});

const TestComponent2 = defineComponent({
    template: TestComponentTemplate,
    components: {
        FNavigationMenu,
    },
    data() {
        return {
            routes: testDataWith10Routes,
            selectedRoute: "",
        };
    },
});

beforeEach(() => {
    // Set viewport width and height to 700 x 500 px
    cy.viewport(viewportLarge.width, viewportLarge.height);
});

function mountTC1AndGetPageObject(): FNavigationMenuPageobject {
    cy.mount(TestComponent1);
    return new FNavigationMenuPageobject("nav");
}

function mountTC2AndGetPageObject(): FNavigationMenuPageobject {
    cy.mount(TestComponent2);
    return new FNavigationMenuPageobject("nav");
}

describe("pageobjects", () => {
    describe("without overflow", () => {
        it("should be visible and contain 5 items", () => {
            const navMenu = mountTC1AndGetPageObject();
            navMenu.el().should("to.exist");
            const menuPageObj: IMenuPageObject = navMenu.menu();
            // should contain 5 menu items
            menuPageObj.items().should("have.length", 5);
            menuPageObj.item(0).should("contain.text", "label #1");
            menuPageObj.item(4).should("contain.text", "label #5");
        });

        it("should return the selected item after click", () => {
            const navMenu = mountTC1AndGetPageObject();
            const menuPageObj: IMenuPageObject = navMenu.menu();
            menuPageObj.item(0).click();
            menuPageObj.getSelectedItem().should("contain.text", "label #1");
        });
    });

    describe("with overflow", () => {
        it("should be visible and contain 8 items", () => {
            const navMenu = mountTC2AndGetPageObject();
            navMenu.el().should("to.exist");
            const menuPageObj: IMenuPageObject = navMenu.menu();
            // should contain 8 menu items. 7 labels + one "Mer" menu item
            menuPageObj.items().should("have.length", 8);
            menuPageObj.item(0).should("contain.text", "label #1");
            // overflow happens at item index 7 with label "label #8"
            menuPageObj.item(7).should("contain.text", "Mer");
        });

        it("should be visible after click on 'Mer' and contain 3 items", () => {
            const navMenu = mountTC2AndGetPageObject();
            const menuPageObj: IMenuPageObject = navMenu.menu();
            menuPageObj.el().should("to.exist");
            menuPageObj.items().should("have.length", 8);
            menuPageObj
                .item(7)
                .should("contain.text", "Mer")
                .click({ force: true });
            const popupMenuPageObj: IPopupMenuPageObject = navMenu.popupMenu();
            popupMenuPageObj.el().should("to.exist");
            popupMenuPageObj.items().should("have.length", 3);
        });
    });
});

describe("tests", () => {
    it("should emit selectedRoute on selected item menu", () => {
        const navMenu = mountTC2AndGetPageObject();
        const menuPageObj: IMenuPageObject = navMenu.menu();
        menuPageObj.item(0).click();
        cy.get(selectedRouteDataTestid).should("have.text", "ROUTE_1");
    });

    it("should change href on click link", () => {
        const navMenu = mountTC2AndGetPageObject();
        const menuPageObj: IMenuPageObject = navMenu.menu();
        menuPageObj
            .getItemLink(3)
            .should("contain.text", "label #4")
            .should("have.attr", "href", "#href-4");
    });

    it("should have target on link with target", () => {
        const navMenu = mountTC2AndGetPageObject();
        const menuPageObj: IMenuPageObject = navMenu.menu();
        menuPageObj.getItemLink(3).should("have.attr", "target", "_blank");
    });

    it("should emit selectedRoute on selected item from popupmenu", () => {
        const navMenu = mountTC2AndGetPageObject();
        const menuPageObj: IMenuPageObject = navMenu.menu();
        menuPageObj.el().should("to.exist");
        // Give the component time to redraw (it will replace item label #8 with "Mer") because of overflow
        menuPageObj.items().should("have.length", 8);
        // click on "Mer"
        menuPageObj
            .item(7)
            .should("contain.text", "Mer")
            .click({ force: true });
        const popupMenuPageObj: IPopupMenuPageObject = navMenu.popupMenu();
        // click on first item inside popupmenu
        popupMenuPageObj.items().should("have.length", 3);
        popupMenuPageObj
            .item(0)
            .should("contain.text", "label #8")
            .click({ force: true });
        cy.get(selectedRouteDataTestid).should("have.text", "ROUTE_8");
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- technical debt: flaky test */
    it.skip("should highlight selected item in menu", () => {
        const navMenu = mountTC2AndGetPageObject();
        const menuPageObj: IMenuPageObject = navMenu.menu();
        menuPageObj
            .getItemLink(5)
            .should("not.have.class", "imenu__list__anchor--highlight");
        menuPageObj.getItemLink(5).click();
        menuPageObj
            .getItemLink(5)
            .should("have.class", "imenu__list__anchor--highlight");
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- technical debt: flaky test */
    it.skip("should highlight selected item in popup-menu", () => {
        const navMenu = mountTC2AndGetPageObject();
        const menuPageObj: IMenuPageObject = navMenu.menu();
        const popupMenuPageObj: IPopupMenuPageObject = navMenu.popupMenu();
        //Wait on more-menu to settle
        menuPageObj.getItemLink(7).should("contain.text", "Mer");

        //More-menu should not be highlighted
        menuPageObj
            .getItemLink(7)
            .should("not.have.class", "imenu__list__anchor--highlight");

        //Select item in popupmenu
        menuPageObj.getItemLink(7).click();
        popupMenuPageObj
            .item(1)
            .should("not.have.class", "ipopupmenu__list__item--highlight");
        popupMenuPageObj.item(1).click();

        //More-menu should be highlighted
        menuPageObj
            .getItemLink(7)
            .should("have.class", "imenu__list__anchor--highlight");

        //Selected item in popupmenu should be highlighted
        menuPageObj.getItemLink(7).click();
        popupMenuPageObj
            .item(1)
            .should("have.class", "ipopupmenu__list__item--highlight");
    });

    it("should keep highlighted item when moved from menu to popup-menu", () => {
        const navMenu = mountTC2AndGetPageObject();
        const menuPageObj: IMenuPageObject = navMenu.menu();
        //Wait on more-menu to settle
        menuPageObj.getItemLink(7).should("contain.text", "Mer");

        // Select item in menu
        menuPageObj.getItemLink(5).click();

        //Resize to move selected item to popupmenu
        cy.viewport(viewportSmall.width, viewportSmall.height);

        //More menu should be highlited
        menuPageObj.getItemLink(5).should("contain.text", "Mer");
        menuPageObj
            .getItemLink(5)
            .should("have.class", "imenu__list__anchor--highlight");

        // selected item should still be highlighted (now in popupmenu)
        menuPageObj.getItemLink(5).click();
        const popupMenuPageObj: IPopupMenuPageObject = navMenu.popupMenu();
        popupMenuPageObj
            .item(0)
            .should("have.class", "ipopupmenu__list__item--highlight");
    });

    it("should keep highlighted item when moved from popup-menu to menu", () => {
        const navMenu = mountTC2AndGetPageObject();
        cy.viewport(viewportSmall.width, viewportSmall.height);
        const menuPageObj: IMenuPageObject = navMenu.menu();
        const popupMenuPageObj: IPopupMenuPageObject = navMenu.popupMenu();

        //Wait on more-menu to settle
        menuPageObj.getItemLink(5).should("contain.text", "Mer");

        // Select item in popupmenu
        menuPageObj.getItemLink(5).click();
        popupMenuPageObj.item(0).click();

        //More menu should be highlited
        menuPageObj
            .getItemLink(5)
            .should("have.class", "imenu__list__anchor--highlight");

        //Resize to move selected item from popupmenu to menu
        cy.viewport(viewportLarge.width, viewportLarge.height);

        // selected item should still be highlighted (now in menu)
        menuPageObj
            .getItemLink(5)
            .should("have.class", "imenu__list__anchor--highlight");
    });
});
