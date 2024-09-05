import { focus as focusElement, type FocusOptions } from "@fkui/logic";

/**
 * An object that looks like a Vue instance.
 *
 * @public
 */
export interface VueLike {
    readonly $el: Element;
    focusTarget?: VueLike | Element | Array<VueLike | Element> | null;
}

function isVueComponent(element: unknown): element is VueLike {
    return Boolean(element && typeof element === "object" && "$el" in element);
}

/**
 * Give browser focus to a given element.
 *
 * If an array is passed, only the first element will receive focus.
 *
 * Vue components containing a `focusTarget` attribute will recursively pass along the focus to that
 * value.
 *
 * For convenience it will ignore `null` and `undefined` as element parameter.
 *
 * @public
 * @param element - Element to focus.
 * @param options - Focus options. If you pass boolean `true` or `false` it sets the `force` option.
 *
 * @returns `true` if successfully found an HTMLElement to focus. Otherwise, `false`.
 */
export function focus(
    element: unknown,
    options: boolean | FocusOptions = {},
): boolean {
    if (Array.isArray(element)) {
        return focus(element[0], options);
    }

    if (isVueComponent(element)) {
        const targetElement = element.focusTarget ?? element.$el;
        return focus(targetElement, options);
    }

    if (element instanceof HTMLElement) {
        focusElement(element, options);
        return true;
    }

    return false;
}
