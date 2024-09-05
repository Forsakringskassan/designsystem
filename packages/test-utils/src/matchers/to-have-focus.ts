import { generateSelector } from "../utils";

export function toHaveFocus(
    this: jest.MatcherUtils,
    element: Element,
): jest.CustomMatcherResult {
    if (!(element instanceof Element)) {
        throw new TypeError(
            `Expected value must be Element instance but got "${typeof element}" instead`,
        );
    }

    const { matcherHint, printExpected, printReceived } = this.utils;
    const currentFocus = document.activeElement;
    const isFocused = element.isSameNode(currentFocus);
    if (isFocused) {
        return {
            pass: true,
            message: () => "Expected element not to have focus",
        };
    } else {
        return {
            pass: false,
            message(): string {
                const expected = generateSelector(element);
                const actual = generateSelector(currentFocus);
                const another = currentFocus ? "another" : "no";
                return [
                    matcherHint(".toHaveFocus"),
                    "",
                    `Expected element to have focus but ${another} element was focused`,
                    "",
                    "Expected:",
                    `  ${printExpected(expected)}`,
                    "Received:",
                    `  ${printReceived(actual)}`,
                ].join("\n");
            },
        };
    }
}
