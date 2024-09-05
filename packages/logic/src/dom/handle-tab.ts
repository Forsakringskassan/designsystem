import { findTabbableElements, focus } from "./focus";

/**
 * Handle tab focus between given containers focusable elements
 *
 * @public
 * @param event - tab KeyboardEvent
 * @param container - containing focusable elements
 */
export function handleTab(event: KeyboardEvent, container: HTMLElement): void {
    const elements = findTabbableElements(container);

    let targetIndex = elements.indexOf(event.target as HTMLElement);

    if (event.shiftKey) {
        targetIndex--;
    } else {
        targetIndex++;
    }

    if (targetIndex < 0) {
        targetIndex = elements.length - 1;
    } else if (targetIndex >= elements.length) {
        targetIndex = 0;
    }

    focus(elements[targetIndex]);
    event.preventDefault();
}
