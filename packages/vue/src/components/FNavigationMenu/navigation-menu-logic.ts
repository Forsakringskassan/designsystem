import { MenuAction } from "../../types";

export interface MenuActionTarget {
    readonly currentFocusedItemIndex: number;

    setFocusOnItem(index: number): Promise<void>;
    activateItem(index: number): Promise<void>;
}

export function getNewItemIndexFromMenuAction(
    action: MenuAction | null,
    index: number,
    minIndex: number,
    maxIndex: number,
): number {
    let newIndex;
    if (maxIndex <= minIndex) {
        return minIndex;
    }
    if (index >= maxIndex) {
        return maxIndex - 1;
    }
    switch (action) {
        case MenuAction.MOVE_NEXT:
            newIndex = (index + 1) % maxIndex;
            newIndex = Math.max(newIndex, minIndex);
            break;
        case MenuAction.MOVE_PREV:
            newIndex = index - 1;
            if (newIndex < minIndex) {
                newIndex = maxIndex - 1;
            }
            break;

        case MenuAction.MOVE_FIRST:
            newIndex = minIndex;
            break;

        case MenuAction.MOVE_LAST:
            newIndex = Math.max(maxIndex - 1, minIndex);
            break;

        default:
            newIndex = index;
    }
    return newIndex;
}

export async function doMenuAction(
    action: MenuAction | null,
    target: MenuActionTarget,
    minIndex: number,
    maxIndex: number,
): Promise<void> {
    const currentIndex = target.currentFocusedItemIndex;
    const newFocusedItemIndex = getNewItemIndexFromMenuAction(
        action,
        currentIndex,
        minIndex,
        maxIndex,
    );
    switch (action) {
        case MenuAction.MOVE_NEXT:
        case MenuAction.MOVE_PREV:
        case MenuAction.MOVE_FIRST:
        case MenuAction.MOVE_LAST:
            await target.setFocusOnItem(newFocusedItemIndex);
            break;
        case MenuAction.ACTIVATE:
            await target.activateItem(newFocusedItemIndex);
            break;
    }
}
