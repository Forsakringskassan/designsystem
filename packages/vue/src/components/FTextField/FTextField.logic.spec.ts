import { resolveWidthClass } from "./FTextField.logic";

describe("resolveWidthClass", () => {
    it("should return prefixed classes when not inline", () => {
        expect(resolveWidthClass("foo bar", false)).toBe(
            "i-width-foo i-width-bar",
        );
    });

    it("should return undefined when inline", () => {
        expect(resolveWidthClass("foo bar", true)).toBeUndefined();
    });
});
