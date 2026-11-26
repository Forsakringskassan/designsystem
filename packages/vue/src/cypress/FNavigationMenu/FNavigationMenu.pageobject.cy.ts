import { FNavigationMenu } from "../../components/FNavigationMenu";
import { FNavigationMenuPageobject } from "./FNavigationMenu.pageobject";

const navMenu = new FNavigationMenuPageobject();

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

beforeEach(() => {
    setViewport(VIEWPORT.LOW_OVERFLOW);
    cy.mount(FNavigationMenu, { props: { routes: testRoutes } });
});

it("`el()` should be able to get root", () => {
    navMenu.el().should("exist");
});

it("`items()` should be able to get all visible items", () => {
    navMenu.items().should("have.length", 8);
});

it("`items()` should be able to get popup item", () => {
    navMenu.items().eq(7).should("contain.text", "Mer");
});

it("`overflowItems()` should be able to get all overflowed items", () => {
    navMenu.overflowItems().should("have.length", 3);
});

it("`item()` should be able to get specific visible item", () => {
    navMenu.item(2).should("contain.text", "label #3");
});

it("`item()` should be able to get popup item", () => {
    navMenu.item(7).should("contain.text", "Mer");
});

it("`item()` should not be able to get overflowed item", () => {
    navMenu.item(7).should("exist");
    navMenu.item(8).should("not.exist");
});

it("`itemLink()` should be able to get specific item anchor", () => {
    navMenu.itemLink(2).should("contain.text", "label #3");
});

it("`itemLink()` should not be able to get anchor of overflowed item", () => {
    navMenu.itemLink(7).should("exist");
    navMenu.itemLink(8).should("not.exist");
});

it("`selectedItem()` should be able to get selected item", () => {
    navMenu.selectedItem().should("not.exist");
    navMenu.item(2).click();
    navMenu.selectedItem().should("contain.text", "label #3");
});

it("`selectedItem()` should be able to get popup item when overflowed item selected", () => {
    navMenu.selectedItem().should("not.exist");
    navMenu.item(6).click();
    navMenu.selectedItem().should("contain.text", "label #7");

    // Resize to move selected item into popup menu so that popup item is selected.
    setViewport(VIEWPORT.HIGH_OVERFLOW);
    navMenu.selectedItem().should("contain.text", "Mer");
});

it("`popupItem()` should be able to get item that open popup menu", () => {
    navMenu.popupItem().should("contain.text", "Mer");
});
