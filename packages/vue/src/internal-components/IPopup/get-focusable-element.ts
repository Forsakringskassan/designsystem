import { findTabbableElements } from "@fkui/logic";
import { getHTMLElementFromVueRef } from "../../utils";

export function getFocusableElement(
    rootElement: unknown,
    callback?: () => HTMLElement | null,
): HTMLElement | null {
    /* if user callback is provided use that only, if it returns null no element should be focused */
    if (callback) {
        return callback();
    }

    /* if no callback is provided we lookup the first tabbable element in the popup */
    const popupElement = getHTMLElementFromVueRef(rootElement);
    const elements = findTabbableElements(popupElement);
    return elements[0] ?? null; /* null coalece */
}
