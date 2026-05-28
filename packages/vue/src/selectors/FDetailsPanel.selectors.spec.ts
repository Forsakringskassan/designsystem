import { FDetailsPanelSelectors } from "./FDetailsPanel.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(1);
    const { selector } = FDetailsPanelSelectors();
    expect(selector).toBe(".panel.panel--details");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(1);
    const { selector } = FDetailsPanelSelectors('[data-panel-name="my-panel"]');
    expect(selector).toBe('[data-panel-name="my-panel"]');
});

it("header() should return a selector for the header slot element", () => {
    expect.assertions(1);
    const { header } = FDetailsPanelSelectors();
    expect(header()).toBe(".panel.panel--details [slot=header]");
});

it("content() should return a selector for the content slot element", () => {
    expect.assertions(1);
    const { content } = FDetailsPanelSelectors();
    expect(content()).toBe(".panel.panel--details [slot=content]");
});

it("footer() should return a selector for the footer slot element", () => {
    expect.assertions(1);
    const { footer } = FDetailsPanelSelectors();
    expect(footer()).toBe(".panel.panel--details [slot=footer]");
});
