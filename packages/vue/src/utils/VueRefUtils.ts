import { type ComponentPublicInstance } from "vue";
import { isSet } from "@fkui/logic";

/**
 * Verifies that a ref is a single `Element` and nothing else.
 *
 * @public
 * @param value - The value to type check.
 * @returns `true` if the ref is an `Element`, otherwise false.
 */
export function refIsElement(value: unknown): value is Element {
    return value instanceof Element;
}

/**
 * Verifies that a ref is an array containing at least one `Element`.
 *
 * @public
 * @param value - The value to type check.
 * @returns `true` if the ref is an `Element` array with at least one item,
 * otherwise false.
 */
export function refIsElementArray(value: unknown): value is Element[] {
    return (
        Array.isArray(value) && value.length > 0 && value[0] instanceof Element
    );
}

/**
 * Verifies that a ref is an array containing at least one `HTMLElement`.
 *
 * @public
 * @param value - The value to type check.
 * @returns `true` if the ref is an `HTMLElement` array with at least one item,
 * otherwise false.
 */
export function refIsHTMLElementArray(value: unknown): value is HTMLElement[] {
    return (
        Array.isArray(value) &&
        value.length > 0 &&
        value[0] instanceof HTMLElement
    );
}

/**
 * Verifies that a ref is a single Vue component and nothing else.
 *
 * @public
 * @param value - The value to type check.
 * @returns `true` if the ref is a `Vue` (component), otherwise false.
 */
export function refIsVue(value: unknown): value is ComponentPublicInstance {
    return (value as ComponentPublicInstance)?.$el !== undefined;
}

/**
 * Verifies that a ref is an array containing at least one Vue component.
 *
 * @public
 * @param value - The value to type check.
 * @returns `true` if the ref is a `Vue` (component) array with at least one
 * item, otherwise false.
 */
export function refIsVueArray(
    value: unknown,
): value is ComponentPublicInstance[] {
    return Array.isArray(value) && value.length > 0 && refIsVue(value[0]);
}

/**
 * Gets an array of `Element` items from a ref. If there are none, the array
 * returned will be empty rather than `undefined`.
 *
 * @public
 * @param ref - The ref to extract `Element` items from.
 * @returns An `Array` of `Element` items. Possibly empty.
 */
export function getElementsFromVueRef(ref: unknown): Element[] {
    let result: Element[] = [];

    if (refIsVueArray(ref)) {
        result = ref.map((vueRef) => vueRef.$el);
    } else if (refIsElementArray(ref)) {
        result = ref;
    } else if (isSet(ref)) {
        result = [getElementFromVueRef(ref)];
    }

    return result;
}

/**
 * Gets an array of `HTMLElement` items from a ref. If there are none, the array
 * returned will be empty rather than `undefined`.
 * The items are sorted according to the attribute data-ref-index. Elements missing data-ref-index will be sorted as -Infinity.
 *
 * @public
 * @param ref - The ref to extract `HTMLElement` items from.
 * @returns An `Array` of `HTMLElement` items. Possibly empty.
 * @throws An error if an `HTMLElement` could not be found from a valid ref.
 */
export function getSortedHTMLElementsFromVueRef(ref: unknown): HTMLElement[] {
    const htmlElements = getHTMLElementsFromVueRef(ref);
    htmlElements.sort((lhs, rhs) => {
        const lhsIndex = parseIntOrDefault(lhs.dataset.refIndex, -Infinity);
        const rhsIndex = parseIntOrDefault(rhs.dataset.refIndex, -Infinity);
        // compare first to avoid NaN when subtracting equal infinities
        return lhsIndex === rhsIndex ? 0 : lhsIndex - rhsIndex;
    });
    return htmlElements;
}

function parseIntOrDefault(
    value: string | undefined,
    defaultValue: number,
): number {
    if (typeof value === "string") {
        const parsed = parseInt(value, 10);
        if (!isNaN(parsed)) {
            return parsed;
        }
    }
    return defaultValue;
}

/**
 * Gets an array of `HTMLElement` items from a ref. If there are none, the array
 * returned will be empty rather than `undefined`.
 *
 * @public
 * @param ref - The ref to extract `HTMLElement` items from.
 * @returns An `Array` of `HTMLElement` items. Possibly empty.
 * @throws An error if an `HTMLElement` could not be found from a valid ref.
 */
export function getHTMLElementsFromVueRef(ref: unknown): HTMLElement[] {
    let result: HTMLElement[] = [];

    if (isEmptyArray(ref)) {
        result = [];
    } else if (refIsVueArray(ref)) {
        result = ref.map((vueRef) => vueRef.$el as HTMLElement);
    } else if (refIsHTMLElementArray(ref)) {
        result = [...ref];
    } else if (isSet(ref)) {
        result = [getHTMLElementFromVueRef(ref)];
    }

    return result;
}

function isEmptyArray(value: unknown): boolean {
    return Array.isArray(value) && value.length === 0;
}

/**
 * Find an `Element` from a ref, provided it is defined and not an array.
 *
 * @public
 * @param ref - The ref to extract the `Element` from.
 * @returns An `Element` if ref is `Vue` or `Element`. Otherwise `undefined`.
 */
export function findElementFromVueRef(ref: unknown): Element | undefined {
    if (refIsElement(ref)) {
        return ref;
    } else if (refIsVue(ref)) {
        return ref.$el;
    }
}

/**
 * Find an `HTMLElement` from a ref, provided it is defined and not an array.
 *
 * @public
 * @param ref - The ref to extract the `HTMLElement` from.
 * @returns An `HTMLElement` if ref is `Vue` or `HTMLElement`. Otherwise `undefined`.
 */
export function findHTMLElementFromVueRef(
    ref: unknown,
): HTMLElement | undefined {
    const result = findElementFromVueRef(ref);
    if (result instanceof HTMLElement) {
        return result as HTMLElement;
    }
    return undefined;
}

/**
 * Gets an `Element` a ref, provided it is defined and not an array.
 *
 * @public
 * @param ref - The ref to extract the `Element` from.
 * @returns An `Element` if ref is `Vue` or `Element`.
 * @throws An error if an `Element` could not be found.
 */
export function getElementFromVueRef(ref: unknown): Element | never {
    const element = findElementFromVueRef(ref);

    if (!isSet(element)) {
        throw new Error(`Unable to find element from ${ref}.`);
    }

    return element;
}

/**
 * Gets an `HTMLElement` a ref, provided it is defined and not an array.
 *
 * @public
 * @param ref - The ref to extract the `HTMLElement` from.
 * @returns An `HTMLElement` if ref is `Vue` or `Element`.
 * @throws An error if an `HTMLElement` could not be found.
 */
export function getHTMLElementFromVueRef(ref: unknown): HTMLElement | never {
    const element = findElementFromVueRef(ref);

    if (!isSet(element)) {
        throw new Error(`Unable to find element from ${ref}.`);
    }

    if (element instanceof HTMLElement) {
        return element;
    }

    throw new Error(`Not instance of HTMLELement ${ref}.`);
}
