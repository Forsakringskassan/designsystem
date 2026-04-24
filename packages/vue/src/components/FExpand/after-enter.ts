import { getHTMLElementFromVueRef } from "../../utils";
import { openedStyle } from "./styles";

/**
 * @internal
 */
export function afterEnterTransition(element: Element): void {
    const htmlElement = getHTMLElementFromVueRef(element);
    Object.assign(htmlElement.style, openedStyle);
}
