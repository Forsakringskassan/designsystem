import { MenuAction } from "../types";

/**
 * @internal
 */
export function actionFromKeyboardEvent(
    event: KeyboardEvent,
): MenuAction | null {
    switch (event.key) {
        case "End":
            return MenuAction.MOVE_LAST;
        case "Home":
            return MenuAction.MOVE_FIRST;
        case "Up":
        case "ArrowUp":
            return MenuAction.MOVE_PREV;
        case "Down":
        case "ArrowDown":
            return MenuAction.MOVE_NEXT;
        case "Left":
        case "ArrowLeft":
            return MenuAction.MOVE_PREV;
        case "Right":
        case "ArrowRight":
            return MenuAction.MOVE_NEXT;
        case "Tab":
            if (event.shiftKey) {
                return MenuAction.MOVE_PREV;
            }
            return MenuAction.MOVE_NEXT;
        case " ":
        case "Spacebar":
        case "Enter":
            return MenuAction.ACTIVATE;
        default:
            return null;
    }
}
