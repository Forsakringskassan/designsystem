import { FNavigationMenu } from "../../components/FNavigationMenu";
import { FNavigationMenuPageobject } from "./FNavigationMenu.pageobject";

// Confirm `FNavigationMenu`backwards compatibility with
// removed `IMenu` component and its deprecated pageobject.
const menu = new FNavigationMenuPageobject().menu();

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

beforeEach(() => {
    setViewport(VIEWPORT.LOW_OVERFLOW);
    cy.mount(FNavigationMenu, { props: { routes: testRoutes } });
});

it("`el()` should be able to get root", () => {
    menu.el().should("exist");
});

it("`items()` should be able to get all visible items", () => {
    menu.items().should("have.length", 8);
});

it("`items()` should be able to get popup item", () => {
    menu.items().eq(7).should("contain.text", "Mer");
});

it("`item()` should be able to get specific visible item", () => {
    menu.item(2).should("contain.text", "label #3");
});

it("`item()` should be able to get popup item", () => {
    menu.item(7).should("contain.text", "Mer");
});

it("`item()` should not be able to get overflowed item", () => {
    menu.item(7).should("exist");
    menu.item(8).should("not.exist");
});

it("`getSelectedItem()` should be able to get selected item", () => {
    menu.getSelectedItem().should("not.exist");
    menu.item(2).click();
    menu.getSelectedItem().should("contain.text", "label #3");
});

it("`getSelectedItem()` should be able to get popup item when overflowed item selected", () => {
    menu.getSelectedItem().should("not.exist");
    menu.item(6).click();
    menu.getSelectedItem().should("contain.text", "label #7");

    // Resize to move selected item into popup menu so that popup item is selected.
    setViewport(VIEWPORT.HIGH_OVERFLOW);
    menu.getSelectedItem().should("contain.text", "Mer");
});

it("`getItemLink()` should be able to get specific item anchor", () => {
    menu.getItemLink(2).should("contain.text", "label #3");
});

it("`getItemLink()` should not be able to get anchor of overflowed item", () => {
    menu.getItemLink(7).should("exist");
    menu.getItemLink(8).should("not.exist");
});
