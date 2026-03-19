import { numItems, tryAbove, tryBelow } from "./compute-listbox-rect";

describe("When not enough space above anchor", () => {
    const viewportRect = { y: 0, height: 400 };
    const itemHeight = 10;
    const numOfItems = 6;
    const anchorRect = { x: 10, y: 10, width: 50, height: 15 };
    const verticalSpacing = 8;
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
            verticalSpacing,
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
            verticalSpacing,
        );
        expect(result).toBeUndefined();
    });
});

describe("When not enough space below anchor", () => {
    const viewportRect = { y: 0, height: 400 };
    const itemHeight = 10;
    const numOfItems = 6;
    const anchorRect = { x: 10, y: 380, width: 50, height: 15 };
    const verticalSpacing = 8;
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
            verticalSpacing,
        );
        expect(result).toBeUndefined();
    });

    it("should fit above", () => {
        const result = tryAbove(
            itemHeight,
            numOfItems,
            anchorRect,
            viewportRect,
            verticalSpacing,
        );
        expect(result).toEqual({
            height: 60,
            left: 10,
            top: 312,
            width: 50,
        });
    });
});

describe("numItems()", () => {
    const itemHeight = 10;
    const verticalSpacing = 8;
    it("Should fit max 7 items, although more space is available", () => {
        const availableHeight = 100;
        const result = numItems(itemHeight, availableHeight, verticalSpacing);
        expect(result).toBe(7);
    });

    it("Should fit 3 items", () => {
        const availableHeight = 38;
        const result = numItems(itemHeight, availableHeight, verticalSpacing);
        expect(result).toBe(3);
    });

    it("Should fit 0 items, when there is too little space", () => {
        const availableHeight = 9;
        const result = numItems(itemHeight, availableHeight, verticalSpacing);
        expect(result).toBe(0);
    });
});
