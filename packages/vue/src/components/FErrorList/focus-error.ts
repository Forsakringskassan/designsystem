import { focus, scrollTo } from "@fkui/logic";
import { type ErrorItem } from "../../types";

export function focusError(item: ErrorItem): void {
    const element = document.querySelector(`#${String(item.id)}`);
    if (!element) {
        throw new Error(`Can not find element with id "${String(item.id)}"`);
    }

    const focusElement = document.querySelector(
        `#${String(item.focusElementId)}`,
    );

    scrollTo(element, window.innerHeight * 0.25);
    focus(focusElement ?? element);
}
