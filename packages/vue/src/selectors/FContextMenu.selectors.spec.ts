import { FContextMenuSelectors } from "./FContextMenu.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(1);
    const { selector } = FContextMenuSelectors();
    expect(selector).toBe(".contextmenu");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(1);
    const { selector } = FContextMenuSelectors('[data-test="menu"]');
    expect(selector).toBe('[data-test="menu"]');
});

it("items() should return a selector for menu item elements", () => {
    expect.assertions(1);
    const { items } = FContextMenuSelectors();
    expect(items()).toBe(".contextmenu .contextmenu__list__item");
});

it("itemLink() should return the link selector", () => {
    expect.assertions(1);
    const { itemLink } = FContextMenuSelectors();
    expect(itemLink()).toBe("a");
});
