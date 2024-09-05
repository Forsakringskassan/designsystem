import { MenuAction } from "../types";
import { actionFromKeyboardEvent } from "./action-from-keyboard-event";

const KEY_EVENT = "keydown";

it.each`
    key             | menuAction               | desc
    ${"End"}        | ${MenuAction.MOVE_LAST}  | ${"MOVE_LAST"}
    ${"Home"}       | ${MenuAction.MOVE_FIRST} | ${"MOVE_FIRST"}
    ${"ArrowUp"}    | ${MenuAction.MOVE_PREV}  | ${"MOVE_PREV"}
    ${"ArrowDown"}  | ${MenuAction.MOVE_NEXT}  | ${"MOVE_NEXT"}
    ${"ArrowLeft"}  | ${MenuAction.MOVE_PREV}  | ${"MOVE_PREV"}
    ${"ArrowRight"} | ${MenuAction.MOVE_NEXT}  | ${"MOVE_NEXT"}
    ${"Tab"}        | ${MenuAction.MOVE_NEXT}  | ${"MOVE_NEXT"}
    ${"Shift+Tab"}  | ${MenuAction.MOVE_PREV}  | ${"MOVE_PREV"}
`("should return menu action $desc on key $key", ({ key, menuAction }) => {
    expect.assertions(1);

    let event: KeyboardEvent;
    if (key === "Shift+Tab") {
        key = "Tab";
        event = new KeyboardEvent(KEY_EVENT, {
            key: key,
            shiftKey: true,
        });
    } else {
        event = new KeyboardEvent(KEY_EVENT, { key });
    }

    const action = actionFromKeyboardEvent(event);
    expect(action).toEqual(menuAction);
});

it("should return null on unsupported key code", () => {
    expect.assertions(1);

    const event = new KeyboardEvent(KEY_EVENT, { keyCode: -1 });
    const action = actionFromKeyboardEvent(event);
    expect(action).toBeNull();
});
