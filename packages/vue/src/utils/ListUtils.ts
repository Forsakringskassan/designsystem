import { isSet } from "@fkui/logic";

/**
 * @public
 */
export function itemEquals<T extends object, K extends keyof T>(
    item1: T | undefined,
    item2: T | undefined,
    compareAttribute: K,
): boolean {
    if (!isSet(item1) || !isSet(item2)) {
        return false;
    }

    if (item1 === item2) {
        return true;
    }

    return item1[compareAttribute] === item2[compareAttribute];
}

/**
 * @public
 */
export function includeItem<T extends object, K extends keyof T>(
    item: T | undefined,
    itemList: T[] | undefined,
    compareAttribute: K,
): boolean {
    if (!isSet(item) || !isSet(itemList)) {
        return false;
    }
    const itemCompareValue = item[compareAttribute];
    const match = itemList.find((it) => {
        return it[compareAttribute] === itemCompareValue;
    });
    return Boolean(match);
}

/**
 * @public
 */
export function handleKeyboardFocusNavigation(
    key: string,
    focusedElement: HTMLElement,
    focusableElements: Element[],
): void {
    let tabPosition = focusableElements.indexOf(focusedElement);
    const keyDown = ["ArrowDown", "Down"];
    const keyUp = ["ArrowUp", "Up"];

    if (keyDown.includes(key)) {
        tabPosition++;
        if (tabPosition === focusableElements.length) {
            tabPosition = 0;
        }
    }

    if (keyUp.includes(key)) {
        tabPosition--;
        if (tabPosition === -1) {
            tabPosition = focusableElements.length - 1;
        }
    }

    if (focusableElements[tabPosition]) {
        (focusableElements[tabPosition] as HTMLElement).focus();
    }
}
