import { UnknownItem } from "../types";
import {
    itemEquals,
    includeItem,
    handleKeyboardFocusNavigation,
} from "./ListUtils";

afterAll(() => {
    jest.resetAllMocks();
});

describe("itemEquals()", () => {
    const obj = { id: "1" };
    const objClone = { id: "1" };
    const otherObj = { id: "2" };

    it("should equal same instance", () => {
        expect(itemEquals(obj, obj, "id")).toBeTruthy();
    });

    it("should equal clone", () => {
        expect(itemEquals(obj, objClone, "id")).toBeTruthy();
    });

    it("should not equal other object", () => {
        expect(itemEquals(obj, otherObj, "id")).toBeFalsy();
    });

    it("should not equal undefined", () => {
        expect(itemEquals(obj, undefined, "id")).toBeFalsy();
        expect(itemEquals(undefined, obj, "id")).toBeFalsy();
        expect(
            itemEquals<UnknownItem, "id">(undefined, undefined, "id"),
        ).toBeFalsy();
    });
});

describe("includeItem()", () => {
    const list = [{ id: "1" }, { id: "2" }, { id: "3" }];

    it("should include same instance", () => {
        expect(includeItem(list[1], list, "id")).toBeTruthy();
    });

    it("should include clone", () => {
        expect(includeItem({ id: "2" }, list, "id")).toBeTruthy();
    });

    it("should not include other object", () => {
        expect(includeItem({ id: "other-id" }, list, "id")).toBeFalsy();
    });

    it("should not include undefined", () => {
        expect(includeItem(undefined, list, "id")).toBeFalsy();
        expect(includeItem({ id: "1" }, undefined, "id")).toBeFalsy();
        expect(
            includeItem<UnknownItem, "id">(undefined, undefined, "id"),
        ).toBeFalsy();
    });
});

describe("handleKeyboardFocusNavigation()", () => {
    let list: HTMLElement[];

    beforeEach(() => {
        list = [
            { id: 0, focus: jest.fn() } as unknown as HTMLElement,
            { id: 1, focus: jest.fn() } as unknown as HTMLElement,
            { id: 2, focus: jest.fn() } as unknown as HTMLElement,
        ];
    });

    it.each(["ArrowDown", "Down"])(
        'should focus next element when pressing "%s"',
        (key: string) => {
            handleKeyboardFocusNavigation(key, list[1], list);
            expect(list[2].focus).toHaveBeenCalled();
        },
    );

    it.each(["ArrowUp", "Up"])(
        'should focus previous element when pressing "%s"',
        (key: string) => {
            handleKeyboardFocusNavigation(key, list[1], list);
            expect(list[0].focus).toHaveBeenCalled();
        },
    );

    it.each(["ArrowDown", "Down"])(
        'should focus first element when pressing "%s" on last element',
        (key: string) => {
            handleKeyboardFocusNavigation(key, list[2], list);
            expect(list[0].focus).toHaveBeenCalled();
        },
    );

    it.each(["ArrowUp", "Up"])(
        'should focus last element when pressing "%s" on first element',
        (key: string) => {
            handleKeyboardFocusNavigation(key, list[0], list);
            expect(list[2].focus).toHaveBeenCalled();
        },
    );
});
