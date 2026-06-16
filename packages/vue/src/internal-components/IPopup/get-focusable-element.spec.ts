import * as logic from "@fkui/logic";
import { beforeEach, expect, it, vi } from "vitest";
import { getFocusableElement } from "./get-focusable-element";

beforeEach(() => {
    vi.restoreAllMocks();
});

it("should return first tabbable element by default", () => {
    const root = document.createElement("div");
    const button = document.createElement("button");
    const input = document.createElement("input");
    vi.spyOn(logic, "findTabbableElements").mockReturnValue([button, input]);

    const result = getFocusableElement(root);

    expect(result).toEqual(button);
});

it("should return null if no tabbable elements are available", () => {
    const root = document.createElement("div");
    vi.spyOn(logic, "findTabbableElements").mockReturnValue([]);

    const result = getFocusableElement(root);

    expect(result).toBeNull();
});

it("should call the user callback if callback optional param is provided", () => {
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
    expect(findTabbableElements).not.toHaveBeenCalledWith(root);
});
