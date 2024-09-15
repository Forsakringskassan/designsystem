import { Rect } from "../../utils";
import {
    Candidate,
    CandidateOrder,
    clipRect,
    fitInsideArea,
    getCandidates,
    getFallbackPosition,
    isInside,
    Placement,
    SpacingDirection,
} from "./IPopupUtils";

const numberOfCandidates = 9;

describe("getCandidates()", () => {
    it("should find candidates", () => {
        expect.assertions(10);
        const anchor = { x: 50, y: 50, width: 10, height: 10 };
        const target = { x: NaN, y: NaN, width: 50, height: 10 };
        const clippedArea = { x: 0, y: 0, width: 100, height: 100 };
        const candidates = getCandidates(
            anchor,
            target,
            clippedArea,
            0,
            CandidateOrder.Default,
        );
        expect(candidates).toHaveLength(numberOfCandidates);
        /**
         *     +-+
         *     | |
         *     +-+
         *     X-----+
         *     |     |
         *     +-----+
         */
        expect(candidates[0]).toEqual({
            x: 50,
            y: 60,
            width: 50,
            height: 10,
            placement: Placement.A,
            direction: 1,
        });
        /**
         *     +-+
         *     | |
         *     +-+
         * X-----+
         * |     |
         * +-----+
         */
        expect(candidates[1]).toEqual({
            x: 10,
            y: 60,
            width: 50,
            height: 10,
            placement: Placement.B,
            direction: 1,
        });
        /**
         *     X-----+
         *     |     |
         *     +-----+
         *     +-+
         *     | |
         *     +-+
         */
        expect(candidates[2]).toEqual({
            x: 50,
            y: 40,
            width: 50,
            height: 10,
            placement: Placement.C,
            direction: 1,
        });
        /**
         * X-----+
         * |     |
         * +-----+
         *     +-+
         *     | |
         *     +-+
         */
        expect(candidates[3]).toEqual({
            x: 10,
            y: 40,
            width: 50,
            height: 10,
            placement: Placement.D,
            direction: 1,
        });

        /**
         *         X-----+
         *     +-+ |     |
         *     | | |     |
         *     +-+ |     |
         *         +-----+
         */
        expect(candidates[4]).toEqual({
            x: 60, // 50 + 10 + 0 /* anchor.x + anchor.width + spacing */
            y: 50, // 50 + 5 - 5 /* anchor.y + anchor.height / 2 - target.height / 2 */
            width: 50,
            height: 10,
            placement: Placement.E,
            direction: 0,
        });
        /**
         *     X-----+
         *     |     | +-+
         *     |     | | |
         *     |     | +-+
         *     +-----+
         */
        expect(candidates[5]).toEqual({
            x: 0, // 50 - 50 /* anchor.x - (target.width + spacing) */
            y: 50, // 50 + 5 - 5 /* anchor.y + anchor.height / 2 - target.height / 2 */,
            width: 50,
            height: 10,
            placement: Placement.F,
            direction: 0,
        });
        /**
         *     X-----+
         * +-+ |     |
         * | | +-----+
         * +-+
         */
        expect(candidates[6]).toEqual({
            x: 60,
            y: 0,
            width: 50,
            height: 10,
            placement: Placement.G,
            direction: 2,
        });
        /**
         * X-----+
         * |     | +-+
         * +-----+ | |
         *         +-+
         */
        expect(candidates[7]).toEqual({
            x: 0,
            y: 0,
            width: 50,
            height: 10,
            placement: Placement.H,
            direction: 2,
        });
        /**
         * +------------+
         * |   X----+   |
         * |   |    |   |
         * |   +----+   |
         * +------------+
         */
        expect(candidates[8]).toEqual({
            x: 25, // 0 + (100 - 50) / 2 /* clippedArea.x + (clippedArea.width - target.width) / 2 */
            y: 45, // 0 + (100 - 10) / 2 /* clippedArea.y + (clippedArea.height - target.height) / 2 */
            width: 50,
            height: 10,
            placement: Placement.I,
            direction: 3,
        });
    });

    it("should handle spacing", () => {
        expect.assertions(10);
        const anchor = { x: 50, y: 50, width: 10, height: 10 };
        const target = { x: NaN, y: NaN, width: 50, height: 10 };
        const clippedArea = { x: 0, y: 0, width: 100, height: 100 };
        const candidates = getCandidates(
            anchor,
            target,
            clippedArea,
            20,
            CandidateOrder.Default,
        );
        expect(candidates).toHaveLength(numberOfCandidates);
        expect(candidates[0]).toEqual({
            placement: Placement.A,
            x: 50,
            y: 80,
            width: 50,
            height: 10,
            direction: 1,
        });
        expect(candidates[1]).toEqual({
            placement: Placement.B,
            x: 10,
            y: 80,
            width: 50,
            height: 10,
            direction: 1,
        });
        expect(candidates[2]).toEqual({
            placement: Placement.C,
            x: 50,
            y: 20,
            width: 50,
            height: 10,
            direction: 1,
        });
        expect(candidates[3]).toEqual({
            placement: Placement.D,
            x: 10,
            y: 20,
            width: 50,
            height: 10,
            direction: 1,
        });
        expect(candidates[4]).toEqual({
            placement: Placement.E,
            x: 80, // 50 + 10 + 20 /* anchor.x + anchor.width + spacing */
            y: 50, // 50 + 5 - 5 /* anchor.y + anchor.height / 2 - target.height / 2 */
            width: 50,
            height: 10,
            direction: 0,
        });
        expect(candidates[5]).toEqual({
            placement: Placement.F,
            x: -20, // 50 - (50 + 20) /* anchor.x - (target.width + spacing) */
            y: 50, // 50 + 5 - 5 /* anchor.y + anchor.height / 2 - target.height / 2 */,
            width: 50,
            height: 10,
            direction: 0,
        });
        expect(candidates[6]).toEqual({
            placement: Placement.G,
            x: 80, // 50 + 10 + 20 /* anchor.x + anchor.width + spacing */
            y: 20, // 0 + 20 /* clippedArea.y + spacing */
            width: 50,
            height: 10,
            direction: 2,
        });
        expect(candidates[7]).toEqual({
            placement: Placement.H,
            x: -20, // 50 - (50 + 20) /* anchor.x - (target.width + spacing) */
            y: 20, // 0 + 20 /* clippedArea.y + spacing */
            width: 50,
            height: 10,
            direction: 2,
        });
        expect(candidates[8]).toEqual({
            placement: Placement.I,
            x: 25, // 0 + (100 - 50) / 2 /* clippedArea.x + (clippedArea.width - target.width) / 2 */
            y: 45, // 0 + (100 - 10) / 2 /* clippedArea.y + (clippedArea.height - target.height) / 2 */
            width: 50,
            height: 10,
            direction: 3,
        });
    });
});

describe("isInside()", () => {
    const area: Rect = {
        x: 0,
        y: 0,
        width: 80,
        height: 60,
    };
    const candidate: Candidate = {
        placement: Placement.G,
        x: 20,
        y: 20,
        width: 20,
        height: 10,
        direction: SpacingDirection.Both,
    };

    it("should return true if candidate is inside area", () => {
        expect.assertions(1);
        expect(isInside(area, candidate, 10)).toBeTruthy();
    });

    it("should return false if candidate is left of area", () => {
        expect.assertions(4);
        expect(isInside(area, { ...candidate, x: -1 }, 0)).toBeFalsy();
        expect(isInside(area, { ...candidate, x: 0 }, 0)).toBeTruthy();
        expect(isInside(area, { ...candidate, x: 9 }, 10)).toBeFalsy();
        expect(isInside(area, { ...candidate, x: 10 }, 10)).toBeTruthy();
    });

    it("should return false if candidate is right of area", () => {
        expect.assertions(4);
        expect(isInside(area, { ...candidate, x: 61 }, 0)).toBeFalsy();
        expect(isInside(area, { ...candidate, x: 60 }, 0)).toBeTruthy();
        expect(isInside(area, { ...candidate, x: 51 }, 10)).toBeFalsy();
        expect(isInside(area, { ...candidate, x: 50 }, 10)).toBeTruthy();
    });

    it("should return false if candidate is above area", () => {
        expect.assertions(4);
        expect(isInside(area, { ...candidate, y: -1 }, 0)).toBeFalsy();
        expect(isInside(area, { ...candidate, y: 0 }, 0)).toBeTruthy();
        expect(isInside(area, { ...candidate, y: 9 }, 10)).toBeFalsy();
        expect(isInside(area, { ...candidate, y: 10 }, 10)).toBeTruthy();
    });

    it("should return true if candidate is below area", () => {
        expect.assertions(4);
        expect(isInside(area, { ...candidate, y: 51 }, 0)).toBeFalsy();
        expect(isInside(area, { ...candidate, y: 50 }, 0)).toBeTruthy();
        expect(isInside(area, { ...candidate, y: 41 }, 10)).toBeFalsy();
        expect(isInside(area, { ...candidate, y: 40 }, 10)).toBeTruthy();
    });
});

describe("getFallbackPosition()", () => {
    it("should return fallback position closest to horizontal anchor position", () => {
        const anchor = { x: 80, y: 50, width: 10, height: 10 };
        const target = { x: NaN, y: NaN, width: 50, height: 10 };
        const clippedArea = { x: 0, y: 0, width: 100, height: 10 };
        const res = getFallbackPosition(anchor, target, clippedArea, 0);
        const expectedFallbackPosition = {
            x: 30, // 80 - (50 + 0) /* anchor.x - (target.width + spacing) */
            y: 60, // 50 + 10 + 0 /* anchor.y + anchor.height + spacing */
        };
        expect(res).toEqual(expectedFallbackPosition);
    });

    it("should return fallback position without horizontal alignment", () => {
        const anchor = { x: 10, y: 50, width: 10, height: 10 };
        const target = { x: NaN, y: NaN, width: 50, height: 10 };
        const clippedArea = { x: 20, y: 0, width: 100, height: 10 };
        const res = getFallbackPosition(anchor, target, clippedArea, 0);
        const expectedFallbackPosition = {
            x: 20, // 20 + 0 /* clippedArea.x + spacing */
            y: 60, // 50 + 10 + 0 /* anchor.y + anchor.height + spacing */
        };
        expect(res).toEqual(expectedFallbackPosition);
    });
});

describe("clipRect()", () => {
    /**
     *    Viewport (20, 0) 100x100
     *    +----------------------+
     *    | (10, 10) Area 100x20 |
     * +-----------------------+ |
     * |  |XXXXXXXXXXXXXXXXXXXX| |
     * +-----------------------+ |
     *    |                      |
     *    +----------------------+
     */
    it("should clip left edge", () => {
        expect.assertions(1);
        const rect = { x: 10, y: 10, width: 100, height: 20 };
        const viewport = { x: 20, y: 0, width: 100, height: 100 };
        expect(clipRect(rect, viewport)).toEqual({
            x: 20,
            y: 10,
            width: 90,
            height: 20,
        });
    });

    /**
     * Viewport (0, 0) 100x100
     * +----------------------+
     * | (10, 10) Area 100x20 |
     * | +-----------------------+
     * | |XXXXXXXXXXXXXXXXXXXX|  |
     * | +-----------------------+
     * |                      |
     * +----------------------+
     */
    it("should clip right edge", () => {
        expect.assertions(1);
        const rect = { x: 10, y: 10, width: 100, height: 20 };
        const viewport = { x: 0, y: 0, width: 100, height: 100 };
        expect(clipRect(rect, viewport)).toEqual({
            x: 10,
            y: 10,
            width: 90,
            height: 20,
        });
    });

    /**
     * Viewport (0, 20) 100x100
     *    (10, 10) Area 20x100
     *    +--+
     *    |  |
     * +--|--|----------------+
     * |  |XX|                |
     * |  |XX|                |
     * |  +--+                |
     * |                      |
     * +----------------------+
     */
    it("should clip top edge", () => {
        expect.assertions(1);
        const rect = { x: 10, y: 10, width: 20, height: 100 };
        const viewport = { x: 0, y: 20, width: 100, height: 100 };
        expect(clipRect(rect, viewport)).toEqual({
            x: 10,
            y: 20,
            width: 20,
            height: 90,
        });
    });

    /**
     * Viewport (0, 0) 100x100
     * +----------------------+
     * | (10, 10) Area 20x100 |
     * |  +--+                |
     * |  |XX|                |
     * |  |XX|                |
     * +--|--|----------------+
     *    |  |
     *    +--+
     */
    it("should clip bottom edge", () => {
        expect.assertions(1);
        const rect = { x: 10, y: 10, width: 20, height: 100 };
        const viewport = { x: 0, y: 0, width: 100, height: 100 };
        expect(clipRect(rect, viewport)).toEqual({
            x: 10,
            y: 10,
            width: 20,
            height: 90,
        });
    });

    /**
     * Viewport (0, 0) 100x100
     * +----------------------+
     * | (10, 10) Area 20x20  |
     * | +--+                 |
     * | |XX|                 |
     * | +--+                 |
     * |                      |
     * +----------------------+
     */
    it("should handle when rect is fully inside viewport", () => {
        expect.assertions(1);
        const rect = { x: 10, y: 10, width: 20, height: 20 };
        const viewport = { x: 0, y: 0, width: 100, height: 100 };
        expect(clipRect(rect, viewport)).toEqual(rect);
    });

    /**
     * Area (0, 0) 100x100
     * +--------------------------+
     * | (10, 10) Viewport 10x10  |
     * | +--+                     |
     * | |XX|                     |
     * | +--+                     |
     * |                          |
     * +--------------------------+
     */
    it("should handle when viewport is fully inside rect", () => {
        expect.assertions(1);
        const rect = { x: 0, y: 0, width: 100, height: 100 };
        const viewport = { x: 10, y: 10, width: 10, height: 10 };
        expect(clipRect(rect, viewport)).toEqual(viewport);
    });
});

describe("fitInsideArea()", () => {
    /**
     *  Area 200x100
     *  +---------------------------+
     *  |  (10,10) Anchor 10x10     |
     *  |  +--+                     |
     *  |  |  |                     |
     *  |  +--+                     |
     *  |  +--------------+         |
     *  |  | Target       |         |
     *  |  | 100x50       |         |
     *  |  +--------------+         |
     *  +---------------------------+
     */
    it("should align position to bottom left when target fits inside area", () => {
        expect.assertions(1);
        const target = { x: NaN, y: NaN, width: 100, height: 50 };
        const anchor = { x: 10, y: 10, width: 10, height: 10 };
        const area = { x: 0, y: 0, width: 200, height: 100 };
        const position = fitInsideArea({
            target,
            anchor,
            area,
            spacing: 0,
            candidateOrder: CandidateOrder.Default,
        });
        expect(position).toEqual({
            placement: Placement.A,
            x: 10,
            y: 20,
        });
    });

    /**
     *  Area 200x200
     *  +---------------------------+
     *  |  +--------------+         |
     *  |  | Target       |         |
     *  |  | 100x50       |         |
     *  |  +--------------+         |
     *  |  +--+                     |
     *  |  |  |                     |
     *  |  +--+                     |
     *  |  (10,100) Anchor 10x10    |
     *  +---------------------------+
     */
    it("should clip area by given viewport", () => {
        expect.assertions(1);
        const target = { x: NaN, y: NaN, width: 100, height: 50 };
        const anchor = { x: 10, y: 10, width: 10, height: 10 };
        const area = { x: 0, y: 0, width: 200, height: 200 };
        const viewport = { x: 0, y: 0, width: 200, height: 200 };
        const position = fitInsideArea({
            target,
            anchor,
            area,
            viewport,
            spacing: 0,
            candidateOrder: CandidateOrder.Default,
        });
        expect(position).toEqual({
            placement: Placement.A,
            x: 10,
            y: 20,
        });
    });
});
