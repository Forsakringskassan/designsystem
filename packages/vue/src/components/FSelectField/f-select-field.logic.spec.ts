import { describe, expect, it } from "vitest";
import { resolveWidthClass } from "./f-select-field.logic";

describe("resolveWidthClass", () => {
    it("should return prefixed classes when not inline", () => {
        expect.assertions(1);
        expect(resolveWidthClass("foo bar", false)).toBe(
            "i-width-foo i-width-bar",
        );
    });

    it("should return undefined when inline", () => {
        expect.assertions(1);
        expect(resolveWidthClass("foo bar", true)).toBeUndefined();
    });
});
