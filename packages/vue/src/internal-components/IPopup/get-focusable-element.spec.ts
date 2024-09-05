import logic from "@fkui/logic";
import { getFocusableElement } from "./get-focusable-element";

beforeEach(() => {
    jest.restoreAllMocks();
});

it("should return first tabbable element by default", () => {
    const root = document.createElement("div");
    const button = document.createElement("button");
    const input = document.createElement("input");
    jest.spyOn(logic, "findTabbableElements").mockReturnValue([button, input]);

    const result = getFocusableElement(root);

    expect(result).toEqual(button);
});

it("should return null if no tabbable elements are available", () => {
    const root = document.createElement("div");
    jest.spyOn(logic, "findTabbableElements").mockReturnValue([]);

    const result = getFocusableElement(root);

    expect(result).toBeNull();
});

it("should call the user callback if callback optional param is provided", () => {
    expect.assertions(2);
    const root = document.createElement("div");
    const button = document.createElement("button");
    const findTabbableElements = jest
        .spyOn(logic, "findTabbableElements")
        .mockReturnValue([button]);
    const myCallback = jest.fn();
    myCallback.mockReturnValue(button);

    const result = getFocusableElement(root, myCallback);

    expect(result).toBe(button);
    expect(findTabbableElements).not.toHaveBeenCalledWith(root);
});
