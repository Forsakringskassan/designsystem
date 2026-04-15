import { getHTMLElementFromVueRef } from "../../utils";
import { hiddenStyle, initialStyle, visibleStyle } from "./styles";

/**
 * @internal
 */
export function enterTransition(element: Element): number {
    let newHeight = 0;
    const htmlElement = getHTMLElementFromVueRef(element);
    Object.assign(htmlElement.style, initialStyle);
    Object.assign(htmlElement.style, hiddenStyle);
    htmlElement.style.width = getComputedStyle(element).width;
    const height = getComputedStyle(element).height;
    Object.assign(htmlElement.style, visibleStyle);
    // Force redraw
    /* eslint-disable-next-line @typescript-eslint/no-unused-expressions -- technical debt, there should be a better way */
    getComputedStyle(element).height;
    setTimeout(() => {
        newHeight = Number.parseInt(height, 10);
        htmlElement.style.height = height;
    });
    return newHeight;
}
