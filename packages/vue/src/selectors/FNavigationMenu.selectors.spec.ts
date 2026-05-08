import { mount } from "@vue/test-utils";
import { FNavigationMenu } from "../components";
import { FNavigationMenuSelectors } from "./FNavigationMenu.selectors";

/* FNavigationMenu uses ResizeObserver for overflow detection */
const resizeObserverMock = class {
    public observe(): void {
        /* empty */
    }
    public unobserve(): void {
        /* empty */
    }
    public disconnect(): void {
        /* empty */
    }
};
global.ResizeObserver = resizeObserverMock;

const routes = [
    { label: "Home", route: "home", href: "/" },
    { label: "About", route: "about", href: "/about" },
];

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FNavigationMenu, { props: { routes } });
    const { selector } = FNavigationMenuSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".imenu");
    expect(root.classes()).toContain("imenu");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FNavigationMenu, {
        props: { routes },
        attrs: { "data-test": "nav" },
    });
    const { selector } = FNavigationMenuSelectors('[data-test="nav"]');
    expect(selector).toBe('[data-test="nav"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("items() should return all visible menu items", () => {
    expect.assertions(1);
    const wrapper = mount(FNavigationMenu, { props: { routes } });
    const { items } = FNavigationMenuSelectors();
    expect(wrapper.findAll(items())).toHaveLength(2);
});

it("overflowItems() should return hidden menu items", () => {
    expect.assertions(1);
    const wrapper = mount(FNavigationMenu, { props: { routes } });
    const { overflowItems } = FNavigationMenuSelectors();
    /* All items are visible by default in jsdom (no layout/resize) */
    expect(wrapper.findAll(overflowItems())).toHaveLength(0);
});

it("selectedItem() should return a selector string", () => {
    expect.assertions(1);
    const { selectedItem } = FNavigationMenuSelectors();
    expect(selectedItem()).toContain(".imenu__list__item--highlight");
});

it("popupItem() should return a selector string", () => {
    expect.assertions(1);
    const { popupItem } = FNavigationMenuSelectors();
    expect(popupItem()).toContain(".imenu__popup-item__wrapper");
});
