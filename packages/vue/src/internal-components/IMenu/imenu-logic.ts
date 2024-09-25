import { MenuAction } from "../../types";
import { IMenuItem } from "./imenu-utils";

export interface MenuActionTarget {
    readonly items: IMenuItem[];

    setFocusOnItem(index: number): Promise<void>;
    activateItem(index: number): Promise<void>;
}

export function getNewItemIndexFromMenuAction(
    action: MenuAction | null,
    index: number,
    maxIndex: number,
): number {
    const minIndex = 0;
    const nextIndex = index + 1;
    const prevIndex = index - 1;
    let newIndex;

    switch (action) {
        case MenuAction.MOVE_NEXT:
            newIndex = nextIndex > maxIndex ? minIndex : nextIndex;
            break;

        case MenuAction.MOVE_PREV:
            newIndex = prevIndex < minIndex ? maxIndex : prevIndex;
            break;

        case MenuAction.MOVE_FIRST:
            newIndex = minIndex;
            break;

        case MenuAction.MOVE_LAST:
            newIndex = maxIndex;
            break;

        default:
            newIndex = index;
    }

    return newIndex;
}

export async function doMenuAction(
    action: MenuAction | null,
    target: MenuActionTarget,
    currentIndex: number,
    maxIndex: number,
): Promise<void> {
    const newcurrentFocusedItemIndex = getNewItemIndexFromMenuAction(
        action,
        currentIndex,
        maxIndex,
    );
    switch (action) {
        case MenuAction.MOVE_NEXT:
        case MenuAction.MOVE_PREV:
        case MenuAction.MOVE_FIRST:
        case MenuAction.MOVE_LAST:
            await target.setFocusOnItem(newcurrentFocusedItemIndex);
            break;
        case MenuAction.ACTIVATE:
            await target.activateItem(newcurrentFocusedItemIndex);
            break;
    }
}
