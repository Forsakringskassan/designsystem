import { numItems, tryAbove, tryBelow } from "./compute-listbox-rect";

describe("When not enough space above anchor", () => {
    const viewportRect = { y: 0, height: 400 };
    const itemHeight = 10;
    const numOfItems = 6;
    const anchorRect = { x: 10, y: 10, width: 50, height: 15 };
    /*
     *    Viewport
     *    +-----------------+
     *    |   +---------+   |
     *    |   | Anchor  |   |
     *    |   +---------+   |
     *    |                 |
     *    |                 |
     *    +-----------------+
     */
    it("should fit below", () => {
        const result = tryBelow(
            itemHeight,
            numOfItems,
            anchorRect,
            viewportRect,
        );
        expect(result).toEqual({
            height: 60,
            left: 10,
            top: 25,
            width: 50,
        });
    });

    it("should not fit above", () => {
        const result = tryAbove(
            itemHeight,
            numOfItems,
            anchorRect,
            viewportRect,
        );
        expect(result).toBeUndefined();
    });
});

describe("When not enough space below anchor", () => {
    const viewportRect = { y: 0, height: 400 };
    const itemHeight = 10;
    const numOfItems = 6;
    const anchorRect = { x: 10, y: 380, width: 50, height: 15 };
    /*
     *    Viewport
     *    +-----------------+
     *    |                 |
     *    |                 |
     *    |   +---------+   |
     *    |   | Anchor  |   |
     *    |   +---------+   |
     *    +-----------------+
     */
    it("should not fit below", () => {
        const result = tryBelow(
            itemHeight,
            numOfItems,
            anchorRect,
            viewportRect,
        );
        expect(result).toBeUndefined();
    });

    it("should fit above", () => {
        const result = tryAbove(
            itemHeight,
            numOfItems,
            anchorRect,
            viewportRect,
        );
        expect(result).toEqual({
            height: 60,
            left: 10,
            top: 320,
            width: 50,
        });
    });
});

describe("numItems()", () => {
    const itemHeight = 10;
    it("Should fit max 6 item, although more space is available", () => {
        const availableHeight = 100;
        const result = numItems(itemHeight, availableHeight);
        expect(result).toBe(6);
    });

    it("Should fit 3 items", () => {
        const availableHeight = 30;
        const result = numItems(itemHeight, availableHeight);
        expect(result).toBe(3);
    });

    it("Should fit 0 items, when there is too little space", () => {
        const availableHeight = 9;
        const result = numItems(itemHeight, availableHeight);
        expect(result).toBe(0);
    });
});
