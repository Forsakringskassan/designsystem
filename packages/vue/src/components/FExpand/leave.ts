import { getHTMLElementFromVueRef } from "../../utils";
import { visibleStyle } from "./styles";

/**
 * @internal
 */
export function leaveTransition(element: Element): void {
    const htmlElement = getHTMLElementFromVueRef(element);
    const height = getComputedStyle(element).height;
    htmlElement.style.height = height;

    // Force redraw
    /* eslint-disable-next-line @typescript-eslint/no-unused-expressions -- technical debt, there should be a better way */
    getComputedStyle(element).height;
    setTimeout(() => {
        Object.assign(htmlElement.style, visibleStyle);
    });
}
