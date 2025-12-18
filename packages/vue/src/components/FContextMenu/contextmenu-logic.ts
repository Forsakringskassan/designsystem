import { type Ref, toValue } from "vue";
import { MenuAction } from "../../types";
import { type ContextMenuItem } from "./contextmenuitem";

/**
 * @internal
 */
export interface UseMenuAction {
    doMenuAction(action: MenuAction | null): Promise<void>;
}

/**
 * @internal
 */
export interface UseMenuActionOptions {
    readonly currentFocusedItemIndex: Readonly<Ref<number>> | number;
    readonly popupItems: Readonly<Ref<ContextMenuItem[]>> | ContextMenuItem[];

    setFocusOnItem(index: number): Promise<void>;
    activateItem(index: number): Promise<void>;
}

/**
 * @internal
 */
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

/**
 * @internal
 */
export function useMenuAction(options: UseMenuActionOptions): UseMenuAction {
    const {
        currentFocusedItemIndex,
        popupItems,
        setFocusOnItem,
        activateItem,
    } = options;
    return {
        async doMenuAction(action) {
            const itemsLength = toValue(popupItems).length;
            const currentIndex = toValue(currentFocusedItemIndex);
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
                    await setFocusOnItem(newFocusedItemIndex);
                    break;
                case MenuAction.ACTIVATE:
                    await activateItem(newFocusedItemIndex);
                    break;
            }
        },
    };
}
