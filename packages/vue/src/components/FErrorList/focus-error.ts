import { focus, scrollTo } from "@fkui/logic";
import { type ErrorItem } from "../../types";

export function focusError(item: ErrorItem): void {
    const element = document.querySelector(`#${item.id}`);
    if (!element) {
        throw new Error(`Can not find element with id "${item.id}"`);
    }

    const focusElement = document.querySelector(`#${item.focusElementId}`);

    scrollTo(element, window.innerHeight * 0.25);
    focus(focusElement ? focusElement : element);
}
