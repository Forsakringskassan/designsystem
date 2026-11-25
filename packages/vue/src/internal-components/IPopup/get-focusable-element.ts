import { findTabbableElements } from "@fkui/logic";
import { getHTMLElementFromVueRef } from "../../utils";

export function getFocusableElement(
    rootElement: unknown,
    focus: boolean | (() => HTMLElement | null),
): HTMLElement | null {
    if (!focus) {
        return null;
    }

    if (typeof focus === "function") {
        return focus();
    }

    const popupElement = getHTMLElementFromVueRef(rootElement);
    const elements = findTabbableElements(popupElement);
    return elements[0] ?? null;
}
