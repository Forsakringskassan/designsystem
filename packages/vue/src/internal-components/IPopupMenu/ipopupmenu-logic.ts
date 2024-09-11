import { MenuAction } from "../../types";
import { type MenuItem } from "../../components";

export interface MenuActionTarget {
    readonly currentFocusedItemIndex: number;
    readonly items: MenuItem[];

    setFocusOnItem(index: number): Promise<void>;
    activateItem(index: number): Promise<void>;
}

export function getNewItemIndexFromMenuAction(
    action: MenuAction | null,
    index: number,
    n: number,
): number {
    let newIndex;
    if (n <= 0) {
        return 0;
    }
    switch (action) {
        case MenuAction.MOVE_NEXT:
            newIndex = (index + 1) % n;
            break;

        case MenuAction.MOVE_PREV:
            newIndex = (index - 1 + n) % n;
            break;

        case MenuAction.MOVE_FIRST:
            newIndex = 0;
            break;

        case MenuAction.MOVE_LAST:
            newIndex = Math.max(n - 1, 0);
            break;

        default:
            newIndex = index;
    }
    return newIndex;
}

export async function doMenuAction(
    action: MenuAction | null,
    target: MenuActionTarget,
): Promise<void> {
    const itemsLength = target.items.length;
    const currentIndex = target.currentFocusedItemIndex;
    const newFocusedItemIndex = getNewItemIndexFromMenuAction(
        action,
        currentIndex,
        itemsLength,
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
