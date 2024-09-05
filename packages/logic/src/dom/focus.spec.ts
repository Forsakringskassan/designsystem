import "@fkui/test-utils/jest";
import { configLogic } from "../config";
import {
    findTabbableElements,
    focus,
    focusFirst,
    focusLast,
    isDisabled,
    isFocusable,
    isTabbable,
    popFocus,
    pushFocus,
    resetFocusStack,
    resetStackHandleCounter,
} from "./focus";
import { scrollTo } from "./scroll-to";

jest.mock("./scroll-to", () => ({
    scrollTo: jest.fn(),
}));

describe("focus", () => {
    describe("with force option", () => {
        it('should add tabindex="-1" and focus if no tabindex exists', () => {
            document.body.innerHTML = /* HTML */ `
                <div class="test-visible"></div>
            `;
            const div = document.querySelector("div");
            focus(div, { force: true });
            expect(div?.tabIndex).toBe(-1);
            expect(div).toHaveFocus();
        });

        it('should NOT add tabindex="-1" if it already exists but still focus element', () => {
            document.body.innerHTML = /* HTML */ `
                <div tabindex="0" class="test-visible"></div>
            `;
            const div = document.querySelector("div");
            focus(div, { force: true });
            expect(div?.tabIndex).toBe(0);
            expect(div).toHaveFocus();
        });

        it('should NOT add tabindex="-1" if it already is focusable', () => {
            document.body.innerHTML = /* HTML */ `
                <input type="text" class="test-visible" />
            `;
            const input = document.querySelector("input");
            focus(input, { force: true });
            expect(input?.hasAttribute("tabindex")).toBeFalsy();
            expect(input).toHaveFocus();
        });

        it("should handle literal true", () => {
            document.body.innerHTML = /* HTML */ `
                <div class="test-visible"></div>
            `;
            const div = document.querySelector("div");
            focus(div, true);
            expect(div?.tabIndex).toBe(-1);
            expect(div).toHaveFocus();
        });

        it("should handle literal false", () => {
            document.body.innerHTML = /* HTML */ `
                <div class="test-visible"></div>
            `;
            const div = document.querySelector("div");
            focus(div, false);
            expect(div?.hasAttribute("tabindex")).toBeFalsy();
            expect(div).not.toHaveFocus();
        });
    });

    describe("preventScroll", () => {
        it("should pass option to native focus method", () => {
            expect.assertions(2);
            const element = document.createElement("input");
            const spy = jest.spyOn(element, "focus");
            focus(element, { preventScroll: true });
            expect(spy).toHaveBeenCalledWith({ preventScroll: true });
            spy.mockClear();
            focus(element, { preventScroll: false });
            expect(spy).toHaveBeenCalledWith({ preventScroll: false });
        });

        it("should not pass option unless explicitly set", () => {
            expect.assertions(1);
            const element = document.createElement("input");
            const spy = jest.spyOn(element, "focus");
            focus(element);
            expect(spy).toHaveBeenCalledWith({});
        });

        it("should not pass force option", () => {
            expect.assertions(3);
            const element = document.createElement("input");
            const spy = jest.spyOn(element, "focus");
            focus(element, { force: true });
            expect(spy).toHaveBeenCalledWith({});
            spy.mockClear();
            focus(element, { force: true, preventScroll: false });
            expect(spy).toHaveBeenCalledWith({ preventScroll: false });
            spy.mockClear();
            focus(element, true);
            expect(spy).toHaveBeenCalledWith({});
        });
    });

    describe("scrollToTop", () => {
        it("should use the scrollTo function when activated", () => {
            expect.assertions(2);
            const element = document.createElement("input");
            const spy = jest.spyOn(element, "focus");
            focus(element, { scrollToTop: true });
            expect(scrollTo).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith({ preventScroll: true });
        });

        it("should not call the scrollTo function when not activated", () => {
            expect.assertions(4);
            const element = document.createElement("input");
            const spy = jest.spyOn(element, "focus");
            focus(element, { scrollToTop: false });
            expect(scrollTo).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith({});
            focus(element);
            spy.mockClear();
            focus(element);
            expect(scrollTo).toHaveBeenCalledTimes(1); // Still 1
            expect(spy).toHaveBeenCalledWith({});
        });
    });

    it('should NOT add tabindex="-1" or focus if not visible', () => {
        document.body.innerHTML = "<div></div>";
        const div = document.querySelector("div");
        focus(div);
        expect(div?.hasAttribute("tabindex")).toBeFalsy();
        expect(div).not.toHaveFocus();
    });

    it("should ignore element parameter that is undefined", () => {
        expect(() => focus(undefined, true)).not.toThrow();
        expect(document.body).toHaveFocus();
    });

    it("should ignore element parameter that is null", () => {
        expect(() => focus(null, true)).not.toThrow();
        expect(document.body).toHaveFocus();
    });

    it("should ignore element parameter that is not HTMLElement", () => {
        const svg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg",
        );
        const spy = jest.spyOn(svg, "focus");
        expect(() => focus(svg, true)).not.toThrow();
        expect(spy).not.toHaveBeenCalled();
        expect(document.body).toHaveFocus();
    });
});

describe("isFocusable", () => {
    it.each`
        markup                                                | visible  | focusable | description
        ${'<input type="text" />'}                            | ${true}  | ${true}   | ${"interactive element"}
        ${"<textarea></textarea>"}                            | ${true}  | ${true}   | ${"interactive element"}
        ${"<iframe></iframe>"}                                | ${true}  | ${true}   | ${"interactive element"}
        ${'<button type="button">Click me</button>'}          | ${true}  | ${true}   | ${"interactive element"}
        ${'<a href="http://example.net">A link</a>'}          | ${true}  | ${true}   | ${"interactive element"}
        ${'<h1 tabindex="0">Content</h1>'}                    | ${true}  | ${true}   | ${"non-interactive element with tabindex"}
        ${'<h1 tabindex="-1">Content</h1>'}                   | ${true}  | ${true}   | ${"non-interactive element with negative tabindex"}
        ${"<h1>Content</h1>"}                                 | ${true}  | ${false}  | ${"non-interactive without tabindex"}
        ${'<input type="text" />'}                            | ${false} | ${false}  | ${"interactive element is not visible"}
        ${'<button type="button" disabled>Disabled</button>'} | ${true}  | ${false}  | ${"interactive element with disbabled attribute"}
    `(
        'should return $focusable if markup is "$markup" because $description',
        ({ markup, visible, focusable }) => {
            document.body.innerHTML = markup;
            const element = document.body.firstElementChild!;
            if (visible) {
                element.classList.add("test-visible");
            }
            expect(isFocusable(element)).toBe(focusable);
        },
    );
});

describe("isTabbable", () => {
    it.each`
        markup                                                | visible  | tabbable | description
        ${'<input type="text" />'}                            | ${true}  | ${true}  | ${"interactive element"}
        ${"<textarea></textarea>"}                            | ${true}  | ${true}  | ${"interactive element"}
        ${"<iframe></iframe>"}                                | ${true}  | ${true}  | ${"interactive element"}
        ${'<button type="button">Click me</button>'}          | ${true}  | ${true}  | ${"interactive element"}
        ${'<a href="http://example.net">A link</a>'}          | ${true}  | ${true}  | ${"interactive element"}
        ${'<h1 tabindex="0">Content</h1>'}                    | ${true}  | ${true}  | ${"non-interactive element with tabindex"}
        ${'<h1 tabindex="-1">Content</h1>'}                   | ${true}  | ${false} | ${"non-interactive element with negative tabindex"}
        ${"<h1>Content</h1>"}                                 | ${true}  | ${false} | ${"non-interactive without tabindex"}
        ${'<input type="text" />'}                            | ${false} | ${false} | ${"interactive element is not visible"}
        ${'<button type="button" disabled>Disabled</button>'} | ${true}  | ${false} | ${"interactive element with disbabled attribute"}
    `(
        'should return $tabbable if markup "$markup" because $description',
        ({ markup, visible, tabbable }) => {
            document.body.innerHTML = markup;
            const element = document.body.firstElementChild!;
            if (visible) {
                element.classList.add("test-visible");
            }
            expect(isTabbable(element)).toBe(tabbable);
        },
    );
});

describe("isDisabled", () => {
    it.each`
        markup                              | disabled | description
        ${'<input type="text" />'}          | ${false} | ${"not having disabled attribute."}
        ${'<input type="text" disabled />'} | ${true}  | ${"disabled attribute is set."}
    `(
        'should return $disabled if markup is "$markup" because $description',
        ({ markup, disabled }) => {
            document.body.innerHTML = markup;
            const element = document.body.firstElementChild!;
            expect(isDisabled(element)).toBe(disabled);
        },
    );
});

describe("findTabbableElements()", () => {
    it("should return visible elements", () => {
        const markup = /* HTML */ `
            <input class="test-visible" />
            <textarea></textarea>
            <iframe></iframe>
            <div>nonFocusElement</div>
        `;
        document.body.innerHTML = markup;
        const elements = findTabbableElements(document);
        expect(elements).toHaveLength(1);
    });

    it("should find <input>", () => {
        expect.assertions(1);
        const root = document.createElement("div");
        const input = document.createElement("input");
        input.classList.add("test-visible");
        root.appendChild(input);
        expect(findTabbableElements(root)).toEqual([input]);
    });

    it("should ignore hidden elements", () => {
        expect.assertions(1);
        const root = document.createElement("div");
        const input = document.createElement("input");
        root.appendChild(input);
        expect(findTabbableElements(root)).toEqual([]);
    });

    it("should find element with tabindex", () => {
        expect.assertions(1);
        const root = document.createElement("div");
        const span = document.createElement("span");
        span.tabIndex = 0;
        span.classList.add("test-visible");
        root.appendChild(span);
        expect(findTabbableElements(root)).toEqual([span]);
    });

    it('should ignore element with tabindex="-1"', () => {
        expect.assertions(1);
        const root = document.createElement("div");
        const span = document.createElement("span");
        span.tabIndex = -1;
        span.classList.add("test-visible");
        root.appendChild(span);
        expect(findTabbableElements(root)).toEqual([]);
    });
});

describe("focusFirst", () => {
    it("should focus first visible focusable element", () => {
        document.body.innerHTML = /* HTML */ `
            <div id="outerdiv">
                <input class="test-visible" />
                <div id="innerdiv">
                    <button>not visible</button>
                    <input id="should-be-focused" class="test-visible" />
                    <button class="test-visible">Also focusable</button>
                </div>
            </div>
        `;

        focusFirst(document.getElementById("innerdiv")!);
        const shouldBeFocused = document.getElementById("should-be-focused");
        expect(shouldBeFocused).toHaveFocus();
    });

    it("should not focus any element if no focusable children", () => {
        document.body.innerHTML = /* HTML */ ` <div>Nothing to focus</div> `;
        focusFirst(document.body);
        expect(document.body).toHaveFocus();
    });
});

describe("focusLast", () => {
    it("should focus last visible focusable element", () => {
        document.body.innerHTML = /* HTML */ `
            <div id="outerdiv">
                <input class="test-visible" />
                <div id="innerdiv">
                    <button class="test-visible">Also focusable</button>
                    <input id="should-be-focused" class="test-visible" />
                    <button>not visible</button>
                </div>
            </div>
        `;

        focusLast(document.getElementById("innerdiv")!);
        const shouldBeFocused = document.getElementById("should-be-focused");
        expect(shouldBeFocused).toHaveFocus();
    });

    it("should not focus any element if no focusable children", () => {
        document.body.innerHTML = /* HTML */ ` <div>Nothing to focus</div> `;
        focusLast(document.body);
        expect(document.body).toHaveFocus();
    });
});

describe("focus stack", () => {
    beforeEach(() => {
        resetFocusStack();
        resetStackHandleCounter();
        document.body.innerHTML = "";
    });

    describe("pushFocus", () => {
        it("should set focus on given element", () => {
            expect.assertions(1);

            document.body.innerHTML = /* HTML */ `
                <button id="b1"></button>
                <input id="i1" />
            `;

            const button = document.getElementById("b1");
            const inputField = document.getElementById("i1");
            button?.focus();

            pushFocus(inputField);

            expect(inputField).toHaveFocus();
        });
    });

    /* eslint-disable no-console -- many tests related to console logging triggers this */
    describe("popFocus", () => {
        beforeEach(() => {
            configLogic.production = false;
        });

        afterEach(() => {
            jest.restoreAllMocks();
        });

        it("should restore focus to element before pushFocus()", () => {
            expect.assertions(2);

            document.body.innerHTML = /* HTML */ `
                <button id="b1"></button>
                <input id="i1" />
            `;
            const button = document.getElementById("b1");
            const inputField = document.getElementById("i1");
            button?.focus();

            const focus = pushFocus(inputField);
            expect(inputField).toHaveFocus();

            popFocus(focus);
            expect(button).toHaveFocus();
        });

        it("should restore focus after 3 push followed by 3 pop", () => {
            expect.assertions(4);
            document.body.innerHTML = /* HTML */ `
                <button id="b1"></button>
                <button id="b2"></button>
                <button id="b3"></button>
            `;
            const button1 = document.getElementById("b1");
            const button2 = document.getElementById("b2");
            const button3 = document.getElementById("b3");
            button1?.focus();

            const handle1 = pushFocus(button2);
            expect(button2).toHaveFocus();
            const handle2 = pushFocus(button3);
            expect(button3).toHaveFocus();

            popFocus(handle2);
            expect(button2).toHaveFocus();
            popFocus(handle1);
            expect(button1).toHaveFocus();
        });

        it("should write an error to the console when focus stack is empty in prod", () => {
            expect.assertions(2);
            jest.spyOn(console, "error").mockReturnValue(undefined);

            // Given
            configLogic.production = true;
            const handle1 = pushFocus();
            resetFocusStack();

            // When
            popFocus(handle1);

            // Then
            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error).toHaveBeenCalledWith(
                "Can not call pop on an empty focus stack",
            );
        });

        it("should raise an exception when focus stack is empty in dev mode only", () => {
            expect.assertions(1);

            // Given
            configLogic.production = false;
            const handle1 = pushFocus();
            resetFocusStack();

            // When, Then
            expect(() => popFocus(handle1)).toThrow(
                new Error("Can not call pop on an empty focus stack"),
            );
        });

        it("should write an error to the console when popFocus called without valid StackHandle in prod", () => {
            expect.assertions(2);
            jest.spyOn(console, "error").mockReturnValue(undefined);

            // Given
            configLogic.production = true;
            const handle1 = pushFocus();
            pushFocus();

            // When
            popFocus(handle1);

            // Then
            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error).toHaveBeenLastCalledWith(
                "push/pop called out-of-order. Expected stack handle id: 1 but got 0",
            );
        });

        it("should raise an exception when popFocus called without valid StackHandle in dev mode only", () => {
            expect.assertions(1);

            // Given
            configLogic.production = false;
            const handle1 = pushFocus();
            pushFocus();

            // When, Then
            expect(() => popFocus(handle1)).toThrow(
                new Error(
                    "push/pop called out-of-order. Expected stack handle id: 1 but got 0",
                ),
            );
        });
    });
    /* eslint-enable no-console */
});
