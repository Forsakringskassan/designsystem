import { expect, it } from "vitest";
import { FMinimizablePanelSelectors } from "./FMinimizablePanel.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(1);
    const { selector } = FMinimizablePanelSelectors();
    expect(selector).toBe(":scope");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(1);
    const { selector } = FMinimizablePanelSelectors('[data-test="panel"]');
    expect(selector).toBe('[data-test="panel"]');
});

it("header() should return a selector for the header slot element", () => {
    expect.assertions(1);
    const { header } = FMinimizablePanelSelectors();
    expect(header()).toBe(":scope [slot=header]");
});

it("content() should return a selector for the content slot element", () => {
    expect.assertions(1);
    const { content } = FMinimizablePanelSelectors();
    expect(content()).toBe(":scope [slot=content]");
});

it("footer() should return a selector for the footer slot element", () => {
    expect.assertions(1);
    const { footer } = FMinimizablePanelSelectors();
    expect(footer()).toBe(":scope [slot=footer]");
});
