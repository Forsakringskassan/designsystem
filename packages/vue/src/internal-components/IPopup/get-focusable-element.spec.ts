import * as logic from "@fkui/logic";
import { beforeEach, expect, it, vi } from "vitest";
import { getFocusableElement } from "./get-focusable-element";

beforeEach(() => {
    vi.restoreAllMocks();
});

it("should return first tabbable element when focus is true", () => {
    expect.assertions(1);
    const root = document.createElement("div");
    const button = document.createElement("button");
    const input = document.createElement("input");
    vi.spyOn(logic, "findTabbableElements").mockReturnValue([button, input]);

    const result = getFocusableElement(root, true);

    expect(result).toEqual(button);
});

it("should return null if no tabbable elements are available", () => {
    expect.assertions(1);
    const root = document.createElement("div");
    vi.spyOn(logic, "findTabbableElements").mockReturnValue([]);

    const result = getFocusableElement(root, true);

    expect(result).toBeNull();
});

it("should return null without searching when focus is false", () => {
    expect.assertions(2);
    const findTabbableElements = vi.spyOn(logic, "findTabbableElements");

    expect(getFocusableElement(null, false)).toBeNull();
    expect(findTabbableElements).not.toHaveBeenCalled();
});

it("should call the user callback when provided", () => {
    expect.assertions(2);
    const root = document.createElement("div");
    const button = document.createElement("button");
    const findTabbableElements = vi
        .spyOn(logic, "findTabbableElements")
        .mockReturnValue([button]);
    const myCallback = vi.fn();
    myCallback.mockReturnValue(button);

    const result = getFocusableElement(root, myCallback);

    expect(result).toBe(button);
    expect(findTabbableElements).not.toHaveBeenCalled();
});

it("should return null when the callback returns null", () => {
    expect.assertions(2);
    const findTabbableElements = vi.spyOn(logic, "findTabbableElements");

    expect(getFocusableElement(null, () => null)).toBeNull();
    expect(findTabbableElements).not.toHaveBeenCalled();
});
