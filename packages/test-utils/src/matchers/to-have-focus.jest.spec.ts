/* eslint-disable jest/no-conditional-expect -- for testing exceptions */

import { beforeEach, describe, expect, it } from "@jest/globals";
import { toHaveFocus } from "./to-have-focus";

expect.addSnapshotSerializer({
    test(value: unknown) {
        return typeof value === "string";
    },
    serialize(value: string) {
        /* eslint-disable-next-line no-control-regex -- expected to replace control regex */
        return value.replaceAll(/\u{1B}\[[\d;]*m/gu, "");
    },
});

expect.extend({
    toHaveFocus,
});

describe("toHaveFocus (jest)", () => {
    let element: HTMLElement;
    let detached: HTMLElement;

    beforeEach(() => {
        document.body.replaceChildren();
        element = document.createElement("input");
        detached = document.createElement("input");
        document.body.append(element);
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
            expect(error?.message).toMatchInlineSnapshot(`
                expect(received).toHaveFocus(expected)

                Expected element to have focus but another element was focused

                Expected:
                  "html > body > input"
                Received:
                  "html > body"
            `);
        }
    });

    it("should fail if detached element is not focused", () => {
        expect.assertions(2);
        try {
            expect(detached).toHaveFocus();
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any -- assume message will be present  */
        } catch (error: any) {
            expect(error?.message).toMatchInlineSnapshot(`
                expect(received).toHaveFocus(expected)

                Expected element to have focus but another element was focused

                Expected:
                  "input"
                Received:
                  "html > body"
            `);
        }
    });

    it("should fail if element is focused", () => {
        expect.assertions(2);
        element.focus();
        expect(() => {
            expect(element).not.toHaveFocus();
        }).toThrowErrorMatchingInlineSnapshot(
            `Expected element not to have focus`,
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
            expect(error?.message).toMatchInlineSnapshot(`
                expect(received).toHaveFocus(expected)

                Expected element to have focus but no element was focused

                Expected:
                  "html > body > input"
                Received:
                  "<null>"
            `);
        } finally {
            document.append(root);
        }
    });

    it("should throw error if expected value is not Element", () => {
        expect.assertions(1);
        element.focus();
        expect(() => {
            expect("foobar").toHaveFocus();
        }).toThrowErrorMatchingInlineSnapshot(
            `Expected value must be Element instance but got "string" instead`,
        );
    });
});
