import { config } from "../../config";

/**
 * Get container element from one of the following sources (in order):
 *
 * 1. An explicit element given by the container prop.
 * 2. A parent marked as a popup container.
 * 3. Default configured popup container element (e.g. `<body>`).
 */
export function getContainer(
    element: Element,
    prop: HTMLElement | null | undefined,
): HTMLElement {
    if (prop) {
        return prop;
    }
    const parent = element.closest<HTMLElement>(".popup__container");
    if (parent) {
        return parent;
    }
    return config.popupContainer;
}
