import { configLogic } from "../config";
import { isVisible } from "./is-visible";
import { scrollTo } from "./scroll-to";

const sym = /* @__PURE__ */ Symbol("focus-stack");

/**
 * @public
 */
export interface StackHandle {
    [sym]: number;
}

export interface StackFrame {
    id: number;
    element: Element | null;
}

let _stackHandleCounter: number = 0;
const _focusElementStack: StackFrame[] = [];

/**
 * Options for {@link focus}.
 *
 * @public
 */
export interface FocusOptions {
    /**
     * If set to `true` `tabindex="-1"` will be added as needed so any element
     * can be focused.
     */
    force?: boolean;

    /**
     * By default the element is scrolled into view. Set this to `true` to prevent this behavior.
     *
     * See full description of [`preventScroll` at
     * MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#parameters)
     */
    preventScroll?: boolean;

    /**
     * By default the element is scrolled into view centered vertically. Set this to `true` to
     * scroll such that the elements top is at the top of the viewport.
     *
     * It will utilize the `scrollIntoView` function, see full description of [`scrollIntoView` at
     * MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
     */
    scrollToTop?: boolean;
}

const TABBABLE_ELEMENT_SELECTOR = /* @__PURE__ */ [
    "a[href]",
    "area[href]",
    "input",
    "select",
    "textarea",
    "button",
    "iframe",
    "object",
    "embed",
    "*[contenteditable]",
    '*[tabindex]:not([tabindex="-1"])',
].join(", ");

function isHTMLElement(
    element: Element | null | undefined,
): element is HTMLElement {
    return Boolean(element && element instanceof HTMLElement);
}

/**
 * Give focus to a given element.
 *
 * For convenience it will ignore `null` and `undefined` as element parameter.
 *
 * If in a Vue context, please refer to the `focus` method included in `@fkui/vue`.
 *
 * @public
 * @param element - Element to focus.
 * @param options - Focus options. If you pass boolean `true` or `false` it sets the `force` option.
 */
export function focus(
    element: Element | null | undefined,
    options: boolean | FocusOptions = {},
): void {
    if (typeof options === "boolean") {
        options = { force: options };
    }
    if (isHTMLElement(element)) {
        if (options.force && !isFocusable(element)) {
            element.setAttribute("tabindex", "-1");
        }

        const { force, scrollToTop, ...params } = options;
        element.focus(params);
        if (scrollToTop) {
            element.focus({ ...params, preventScroll: true });
            scrollTo(element);
        } else {
            element.focus(params);
        }
    }
}

/**
 * Check if an element is focusable (visible and either interactive or with
 * tabindex). This includes programatically focusable elements.
 *
 * @public
 * @param element - An `Element` for which to test focusability.
 * @returns `true` if the element is focusable, otherwise `false`.
 */
export function isFocusable(element: Element): boolean {
    const visible = element instanceof HTMLElement ? isVisible(element) : false;
    return (
        isTabbable(element) || (visible && element.matches('*[tabindex="-1"]'))
    );
}

/**
 * Check if an element is disabled.
 *
 * @public
 * @param element - An `Element`to test disabled.
 * @returns `true`if the element is disabled.
 *
 */
export function isDisabled(element: Element & { disabled?: boolean }): boolean {
    return Boolean(element.disabled);
}

/**
 * Check if an element is tabbable (visible and either interactive or
 * non-negative tabindex). This does not include programatically focusable
 * elements.
 *
 * @public
 * @param element - An `Element` for which to test focusability.
 * @returns `true` if the element is focusable, otherwise `false`.
 */
export function isTabbable(element: Element): boolean {
    const tabindexAttr = element instanceof HTMLElement ? element.tabIndex : 0;
    const visible = element instanceof HTMLElement ? isVisible(element) : false;

    return (
        !isDisabled(element) &&
        tabindexAttr !== -1 &&
        visible &&
        element.matches(TABBABLE_ELEMENT_SELECTOR)
    );
}

/**
 * Find all visible and tabbable elements.
 *
 * @public
 * @param root - Element or document to find tabbable elements in.
 * @returns List of matching elements
 */
export function findTabbableElements(
    root: HTMLElement | Document,
): HTMLElement[] {
    const selector = TABBABLE_ELEMENT_SELECTOR;
    const nodes = root.querySelectorAll<HTMLElement>(selector);
    return Array.from(nodes).filter(isTabbable);
}

/**
 * Focus first focusable element among given root element's hierarchy.
 *
 * @public
 * @param rootElement - Root element.
 */
export function focusFirst(rootElement: HTMLElement): void {
    const element = findTabbableElements(rootElement).shift();
    if (element) {
        focus(element);
    }
}

/**
 * Focus last focusable element among given root element's hierarchy.
 *
 * @public
 * @param rootElement - Root element.
 */
export function focusLast(rootElement: HTMLElement): void {
    const element = findTabbableElements(rootElement).pop();
    if (element) {
        focus(element);
    }
}

/**
 * Restore focus to a previous element. Use this in combination with {@link saveFocus}
 *
 * @public
 */
export function restoreFocus(): void {
    try {
        forcePopFocus();
    } catch {
        /* do nothing */
    }
}

/**
 * Save a DOM reference to the active element for later use.
 *
 * @public
 * @param document - Document element
 */
export function saveFocus(document: Document): void {
    if (document.activeElement instanceof HTMLElement) {
        pushFocus();
    }
}

/**
 * Save current active element focus on the stack and set focus on element
 *
 * @public
 * @param element - The element to set focus on
 */
export function pushFocus(element?: Element | null): StackHandle {
    const stackFrame = {
        id: _stackHandleCounter++,
        element: document.activeElement,
    };
    _focusElementStack.push(stackFrame);
    focus(element);
    return { [sym]: stackFrame.id };
}

/**
 * Restore the focus on the last element from the stack
 *
 * @public
 * @throws Error when pop is called on an empty focus stack
 * @throws Error when pop is called without a valid StackHandle
 */
export function popFocus(handle: StackHandle): void {
    if (_focusElementStack.length === 0) {
        const emptyStackErrorMsg = "Can not call pop on an empty focus stack";
        if (configLogic.production) {
            // eslint-disable-next-line no-console -- expected to log
            console.error(emptyStackErrorMsg);
            return;
        } else {
            throw new Error(emptyStackErrorMsg);
        }
    }
    const top = _focusElementStack.pop();
    if (top?.id !== handle[sym]) {
        const outOfOrderErrorMsg = `push/pop called out-of-order. Expected stack handle id: ${top?.id} but got ${handle[sym]}`;
        if (configLogic.production) {
            // eslint-disable-next-line no-console -- expected to log
            console.error(outOfOrderErrorMsg);
            return;
        } else {
            throw new Error(outOfOrderErrorMsg);
        }
    }
    focus(top?.element);
}

/**
 * Restore the focus on the last element from the stack
 * Prefer `popFocus(handle: StackHandle)`
 *
 * @internal
 */
export function forcePopFocus(): void {
    if (_focusElementStack.length === 0) {
        throw new Error("Can not call pop on an empty focus stack");
    }
    const top = _focusElementStack.pop();
    focus(top?.element);
}

/**
 * Clear the stack, that is remove all elements from it. For use with unit-tests only
 * @internal
 */
export function resetFocusStack(): void {
    _focusElementStack.length = 0;
}

/**
 * Reset the stack handle counter to 0. For use with unit-tests only
 * @internal
 */
export function resetStackHandleCounter(): void {
    _stackHandleCounter = 0;
}
