import { beforeEach, describe, expect, it } from "vitest";
import { toHaveFocus } from "./to-have-focus";

expect.extend({ toHaveFocus });

describe("toHaveFocus (vitest)", () => {
    let element: HTMLElement;
    let detached: HTMLElement;

    beforeEach(() => {
        document.body.innerHTML = "";
        element = document.createElement("input");
        detached = document.createElement("input");
        document.body.append(element);
    });

    it("should pass if element is focused", () => {
        element.focus();
        expect(element).toHaveFocus();
    });

    it("should pass with .not when element is not focused", () => {
        element.focus();
        expect(detached).not.toHaveFocus();
    });

    it("should produce a failure message when no element is focused", () => {
        expect(() => expect(detached).toHaveFocus()).toThrow(
            /another element was focused/,
        );
    });

    it("should throw if not an Element", () => {
        expect(() =>
            expect("foo" as unknown as Element).toHaveFocus(),
        ).toThrow();
    });
});
