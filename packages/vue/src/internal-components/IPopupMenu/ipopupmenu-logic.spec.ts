import { MenuAction } from "../../types";
import { type MenuItem } from "../../components";
import {
    MenuActionTarget,
    getNewItemIndexFromMenuAction,
    doMenuAction,
} from "./ipopupmenu-logic";

describe("getNewItemIndexFromMenuAction", () => {
    const items = ["A", "B", "C"];
    it.each`
        index | menuAction               | newIndex | desc
        ${0}  | ${MenuAction.MOVE_NEXT}  | ${1}     | ${"MOVE_NEXT"}
        ${1}  | ${MenuAction.MOVE_PREV}  | ${0}     | ${"MOVE_PREV"}
        ${2}  | ${MenuAction.MOVE_FIRST} | ${0}     | ${"MOVE_FIRST"}
        ${0}  | ${MenuAction.MOVE_LAST}  | ${2}     | ${"MOVE_LAST"}
    `(
        "should return correct new index ($index => $newIndex) on menu action $desc",
        ({ index, menuAction, newIndex }) => {
            const result = getNewItemIndexFromMenuAction(
                menuAction,
                index,
                items.length,
            );
            expect(result).toEqual(newIndex);
        },
    );

    it.each`
        index | menuAction              | newIndex | desc
        ${2}  | ${MenuAction.MOVE_NEXT} | ${0}     | ${"MOVE_NEXT"}
        ${0}  | ${MenuAction.MOVE_PREV} | ${2}     | ${"MOVE_PREV"}
    `(
        "should wrap around new index ($index => $newIndex) on menu action $desc",
        ({ index, menuAction, newIndex }) => {
            const result = getNewItemIndexFromMenuAction(
                menuAction,
                index,
                items.length,
            );
            expect(result).toEqual(newIndex);
        },
    );
});

describe("Menu actions triggered with keyboard (doMenuAction)", () => {
    const testItems: MenuItem[] = [
        { label: "label1", key: "MENU_1", href: "#href-1" },
        { label: "label2", key: "MENU_2", href: "#href-2" },
        { label: "label3", key: "MENU_3", href: "#href-3" },
    ];
    it("should move focus to first item", async () => {
        const target: MenuActionTarget = {
            currentFocusedItemIndex: 1, // second item index
            items: testItems,
            setFocusOnItem: jest.fn().mockResolvedValue(undefined),
            activateItem: jest.fn().mockResolvedValue(undefined),
        };
        // move to first item
        await doMenuAction(MenuAction.MOVE_FIRST, target);
        expect(target.setFocusOnItem).toHaveBeenCalledWith(0); // first item index
    });
    it("should activate the current item", async () => {
        const target: MenuActionTarget = {
            currentFocusedItemIndex: 1, // second item index
            items: testItems,
            setFocusOnItem: jest.fn().mockResolvedValue(undefined),
            activateItem: jest.fn().mockResolvedValue(undefined),
        };
        // activate current item
        await doMenuAction(MenuAction.ACTIVATE, target);
        expect(target.activateItem).toHaveBeenCalledWith(1); // second item index
    });
});
