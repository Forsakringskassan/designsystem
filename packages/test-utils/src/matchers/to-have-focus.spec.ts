/* eslint-disable jest/no-conditional-expect -- for testing exceptions */

import stripAnsi from "strip-ansi";
import { toHaveFocus } from "./to-have-focus";

declare global {
    /* eslint-disable-next-line @typescript-eslint/no-namespace -- module augmentation */
    namespace jest {
        interface Matchers<R> {
            toHaveFocus(): R;
        }
    }
}

expect.extend({
    toHaveFocus,
});

let element: HTMLElement;
let detached: HTMLElement;

beforeEach(() => {
    document.body.innerHTML = "";
    element = document.createElement("input");
    detached = document.createElement("input");
    document.body.appendChild(element);
});

it("should pass if element is focused", () => {
    expect.assertions(1);
    element.focus();
    expect(element).toHaveFocus();
});

it("should pass if element is not focused", () => {
    expect.assertions(1);
    element.focus();
    expect(detached).not.toHaveFocus();
});

it("should fail if element is not focused", () => {
    expect.assertions(2);
    try {
        expect(element).toHaveFocus();
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any -- assume message will be present */
    } catch (error: any) {
        expect(stripAnsi(error?.message)).toMatchInlineSnapshot(`
            "expect(received).toHaveFocus(expected)

            Expected element to have focus but another element was focused

            Expected:
              "html > body > input"
            Received:
              "html > body""
        `);
    }
});

it("should fail if detached element is not focused", () => {
    expect.assertions(2);
    try {
        expect(detached).toHaveFocus();
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any -- assume message will be present  */
    } catch (error: any) {
        expect(stripAnsi(error?.message)).toMatchInlineSnapshot(`
            "expect(received).toHaveFocus(expected)

            Expected element to have focus but another element was focused

            Expected:
              "input"
            Received:
              "html > body""
        `);
    }
});

it("should fail if element is focused", () => {
    expect.assertions(2);
    element.focus();
    expect(() => {
        expect(element).not.toHaveFocus();
    }).toThrowErrorMatchingInlineSnapshot(
        `"Expected element not to have focus"`,
    );
});

it("should handle document.activeElement being null", () => {
    expect.assertions(2);
    const root = document.documentElement;
    document.documentElement.remove();
    try {
        expect(element).toHaveFocus();
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any -- assume message will be present  */
    } catch (error: any) {
        expect(stripAnsi(error?.message)).toMatchInlineSnapshot(`
            "expect(received).toHaveFocus(expected)

            Expected element to have focus but no element was focused

            Expected:
              "html > body > input"
            Received:
              "<null>""
        `);
    } finally {
        document.appendChild(root);
    }
});

it("should throw error if expected value is not Element", () => {
    expect.assertions(1);
    element.focus();
    expect(() => {
        expect("foobar").toHaveFocus();
    }).toThrowErrorMatchingInlineSnapshot(
        `"Expected value must be Element instance but got "string" instead"`,
    );
});
