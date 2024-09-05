function canUseID(element: Element): boolean {
    if (!element.isConnected) {
        return false;
    }
    if (!element.id) {
        return false;
    }
    const hits = document.querySelectorAll(`#${element.id}`);
    return hits.length === 1;
}

function stringifyNode(element: Element): [text: string, final: boolean] {
    if (canUseID(element)) {
        return [`#${element.id}`, true];
    }

    const tagName = element.tagName.toLowerCase();
    const classes = Array.from(element.classList.values())
        .map((it) => `.${it}`)
        .join("");
    return [`${tagName}${classes}`, false];
}

/**
 * Generate a selector for given element.
 *
 * @public
 * @param element - Element to generate selector for.
 * @returns DOM selector
 */
export function generateSelector(element: Element | null): string {
    if (!element) {
        return "<null>";
    }

    const [text, final] = stringifyNode(element);

    /* if the element itself is the final node needed for the selector just
     * return it right away */
    if (final) {
        return text;
    }

    const ancestry: string[] = [text];
    let cur = element;
    while (cur.parentElement) {
        const parent = cur.parentElement;
        const [text, final] = stringifyNode(parent);
        ancestry.push(text);
        if (final) {
            break;
        }
        cur = parent;
    }

    return ancestry.reverse().join(" > ");
}
