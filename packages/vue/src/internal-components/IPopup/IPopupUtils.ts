import { type Point, type Rect, getAbsolutePosition } from "../../utils";

interface PageOffset {
    pageXOffset: number;
    pageYOffset: number;
}

function offset(
    page: PageOffset,
    el: HTMLElement,
): { top: number; left: number } {
    const rect = el.getBoundingClientRect();
    return {
        top: rect.top + page.pageYOffset,
        left: rect.left + page.pageXOffset,
    };
}

export function clamp(value: number, min: number, max: number): number {
    return Math.max(Math.min(value, max), min);
}

export function getElement(
    anchor: string | HTMLElement | null | undefined,
): HTMLElement | null {
    if (!anchor) {
        return null;
    }
    if (typeof anchor === "string") {
        return document.getElementById(anchor);
    } else {
        return anchor;
    }
}

/**
 * @internal
 */
export enum SpacingDirection {
    "Horizontal",
    "Vertical",
    "Both",
    "None",
}

/**
 * @public
 */
export enum Placement {
    /** popup below and alignment towards the left edge. */
    "A" = "A",
    /** popup below and alignment towards the right edge. */
    "B" = "B",
    /** popup above and alignment towards the left edge. */
    "C" = "C",
    /** popup above and alignment towards the right edge. */
    "D" = "D",
    /** popup right of anchor vertically centered. */
    "E" = "E",
    /** popup left of anchor vertically centered. */
    "F" = "F",
    /** popup to the right of the anchor at the top of the area. */
    "G" = "G",
    /** popup to the left of the anchor at the top of the area. */
    "H" = "H",
    /** popup vertically and horizontally centered in area. */
    "I" = "I",
    /**
     * Fallback
     * - If inline is set to never, the popup is positioned below the anchor without inlining.
     * - If inline is set to auto, the popup will appear inline below the anchor.
     */
    "Fallback" = "Fallback",
    /** Placement not calculated. */
    "NotCalculated" = "NotCalculated",
}

export enum CandidateOrder {
    "Default" = "Default",
    "IPopupError" = "IPopupError",
}

export interface Candidate extends Rect {
    /**
     * Which directions to include spacing in calculation for candidate position.
     */
    direction: SpacingDirection;
    placement: Placement;
}

type AllCandidates = [
    Candidate,
    Candidate,
    Candidate,
    Candidate,
    Candidate,
    Candidate,
    Candidate,
    Candidate,
    Candidate,
];

export interface FitInsideAreaOptions<T> {
    /**
     * The target area to fit inside the area.
     */
    target: T;

    /**
     * Anchor point. The target area is positioned relative to this point inside
     * area.
     */
    anchor: T;

    /**
     * Area to fit target inside.
     */
    area: T;

    /**
     * Restrict area to given viewport, i.e. a limited rectangle _inside_ the
     * area. Typically this is used when the area is a scrollable region.
     *
     * If you pass `<html>` element (`document.documentElement`) it uses the
     * windows viewport. See [CSSOM definition of clientWidth and
     * clientHeight](https://www.w3.org/TR/cssom-view-1/#dom-element-clientwidth).
     */
    viewport?: T;

    /**
     * Minimum amount of space (in pixels) between target, anchor and area.
     */
    spacing: number;

    /**
     * Determines the order in which the candidates are checked, first valid candidate will be used.
     */
    candidateOrder: CandidateOrder;
}

export interface FitInsideAreaResult extends Point {
    placement: Placement;
}

/**
 * Given two rectangles it generates a list of candidate positions for the
 * target rectangle.
 *
 *      Left-aligned  | Right-aligned
 *      +---------+   |   +---------+
 *      |    C    |   |   |    D    |
 *      +---------+   |   +---------+
 *      (spacing)     |     (spacing)
 *      +------+      |      +------+
 *      |Anchor|      |      |Anchor|
 *      +------+      |      +------+
 *      (spacing)     |     (spacing)
 *      +---------+   |   +---------+
 *      |    A    |   |   |    B    |
 *      +---------+   |   +---------+
 *
 * Centered Right (E) | Centered Left (F)
 *           +----+   |   +----+
 * +------+  |    |   |   |    | +------+
 * |Anchor|  | E  |   |   | F  | |Anchor|
 * +------+  |    |   |   |    | +------+
 *           +----+   |   +----+
 *
 * Position G: Like E but positioned at the top of the clippedArea
 * Position H: Like F but positioned at the top of the clippedArea
 *
 * Position I: Vertically and horizontally centered in the clippedArea
 * +------------+
 * |   X----+   |
 * |   | I  |   |
 * |   +----+   |
 * +------------+
 *
 * @internal
 */
export function getCandidates(
    anchor: Rect,
    target: Rect,
    clippedArea: Rect,
    spacing: number,
    candidateOrder: CandidateOrder,
): AllCandidates {
    const dw = target.width - anchor.width;
    const a: Candidate = {
        placement: Placement.A,
        x: anchor.x,
        y: anchor.y + anchor.height + spacing,
        width: target.width,
        height: target.height,
        direction: SpacingDirection.Vertical,
    };
    const b: Candidate = {
        placement: Placement.B,
        x: anchor.x - dw,
        y: anchor.y + anchor.height + spacing,
        width: target.width,
        height: target.height,
        direction: SpacingDirection.Vertical,
    };
    const c: Candidate = {
        placement: Placement.C,
        x: anchor.x,
        y: anchor.y - target.height - spacing,
        width: target.width,
        height: target.height,
        direction: SpacingDirection.Vertical,
    };
    const d: Candidate = {
        placement: Placement.D,
        x: anchor.x - dw,
        y: anchor.y - target.height - spacing,
        width: target.width,
        height: target.height,
        direction: SpacingDirection.Vertical,
    };
    const e: Candidate = {
        placement: Placement.E,
        x: anchor.x + anchor.width + spacing,
        y: anchor.y + anchor.height / 2 - target.height / 2,
        width: target.width,
        height: target.height,
        direction: SpacingDirection.Horizontal,
    };
    const f: Candidate = {
        placement: Placement.F,
        x: anchor.x - (target.width + spacing),
        y: anchor.y + anchor.height / 2 - target.height / 2,
        width: target.width,
        height: target.height,
        direction: SpacingDirection.Horizontal,
    };
    const g: Candidate = {
        placement: Placement.G,
        x: anchor.x + anchor.width + spacing,
        y: clippedArea.y + spacing,
        width: target.width,
        height: target.height,
        direction: SpacingDirection.Both,
    };
    const h: Candidate = {
        placement: Placement.H,
        x: anchor.x - (target.width + spacing),
        y: clippedArea.y + spacing,
        width: target.width,
        height: target.height,
        direction: SpacingDirection.Both,
    };
    const i: Candidate = {
        placement: Placement.I,
        x: clippedArea.x + (clippedArea.width - target.width) / 2,
        y: clippedArea.y + (clippedArea.height - target.height) / 2,
        width: target.width,
        height: target.height,
        direction: SpacingDirection.None,
    };

    if (candidateOrder === CandidateOrder.IPopupError) {
        return [b, a, d, c, e, f, f, f, f];
    } else {
        //CandidateOrder.Default
        return [a, b, c, d, e, f, g, h, i];
    }
}

/**
 * Returns true if the inner rect is fully contained inside the outer rect
 * (minus spacing). Comparison is inclusive, i.e. the inner can overlap outer.
 *
 * @internal
 */
export function isInside(
    outer: Rect,
    inner: Candidate,
    spacing: number,
): boolean {
    const isHorizontalDirection =
        inner.direction === SpacingDirection.Horizontal ||
        inner.direction === SpacingDirection.Both;
    const xSpacing = isHorizontalDirection ? spacing : 0;

    const isVerticalDirection =
        inner.direction === SpacingDirection.Vertical ||
        inner.direction === SpacingDirection.Both;
    const ySpacing = isVerticalDirection ? spacing : 0;

    const ax = [inner.x, inner.x + inner.width];
    const ay = [inner.y, inner.y + inner.height];
    const bx = [outer.x + xSpacing, outer.x + outer.width - xSpacing];
    const by = [outer.y + ySpacing, outer.y + outer.height - ySpacing];

    if (ax[0] < bx[0] || ax[1] > bx[1]) {
        return false;
    }
    if (ay[0] < by[0] || ay[1] > by[1]) {
        return false;
    }
    return true;
}

function isElementOptions(
    options: FitInsideAreaOptions<Rect> | FitInsideAreaOptions<HTMLElement>,
): options is FitInsideAreaOptions<HTMLElement> {
    return options.target instanceof HTMLElement;
}

/**
 * Clip given rect so no edges is outside the viewport, i.e. the rect where rect
 * and viewport intersects.
 *
 * @internal
 */
export function clipRect(src: Rect, clip?: Rect): Rect {
    if (!clip) {
        return src;
    }

    const x = Math.max(src.x, clip.x);
    const y = Math.max(src.y, clip.y);
    const width = Math.min(src.x + src.width, clip.x + clip.width) - x;
    const height = Math.min(src.y + src.height, clip.y + clip.height) - y;
    return { x, y, width, height };
}

/**
 * Takes a rect or element and returns a suitable position inside given area. It
 * uses an anchor point to try to align the target.
 *
 * @public
 */
export function fitInsideArea(
    options: FitInsideAreaOptions<Rect> | FitInsideAreaOptions<HTMLElement>,
): FitInsideAreaResult {
    if (isElementOptions(options)) {
        const {
            area: areaElement,
            anchor: anchorElement,
            target: targetElement,
            viewport: viewportElement,
            spacing,
            candidateOrder,
        } = options;
        const area = getAbsolutePosition(areaElement);
        const anchor = getAbsolutePosition(anchorElement);
        const target = getAbsolutePosition(targetElement);
        const viewport = getAbsolutePosition(viewportElement);
        const result = fitInsideArea({
            area,
            target,
            anchor,
            viewport,
            spacing,
            candidateOrder,
        });

        const offset = targetElement.offsetParent?.getBoundingClientRect();
        if (!offset) {
            return result;
        }
        return {
            ...result,
            x: result.x - (offset.left + window.pageXOffset),
            y: result.y - (offset.top + window.pageYOffset),
        };
    }

    const { anchor, target, area, viewport, spacing } = options;
    const clippedArea = clipRect(area, viewport);

    const candidates = getCandidates(
        anchor,
        target,
        clippedArea,
        spacing,
        options.candidateOrder,
    );

    /* try to find a good match, i.e. a candidate where the entire target fits
     * inside given area */
    const index = candidates.findIndex((it) =>
        isInside(clippedArea, it, spacing),
    );
    if (index >= 0) {
        const match = candidates[index];
        return { x: match.x, y: match.y, placement: match.placement };
    }

    /* if all candidates would be obscured position target below anchor but
     * try to keep as close to anchor horizontal position as possible */
    return {
        ...getFallbackPosition(anchor, target, clippedArea, spacing),
        placement: Placement.Fallback,
    };
}

/**
 * When opening poupup inline this metod
 * calculates the need scroll to get the
 * popup within the viewport.
 */
export function getScrollToPopup(param: {
    popup: HTMLElement;
    windowInnerHeight: number;
    scrollTop: number;
    spacing: number;
}): number {
    const popupOffset = offset(
        { pageXOffset: 0, pageYOffset: param.scrollTop },
        param.popup,
    );
    const popupHeight = param.popup.offsetHeight;

    const neededScroll =
        popupOffset.top - param.windowInnerHeight + popupHeight + param.spacing;

    if (neededScroll > param.scrollTop) {
        return neededScroll;
    } else {
        return param.scrollTop;
    }
}

/**
 * Get the fallback position coordinates
 * try to align with anchor.x if there is room for the target
 * if target is outside the clippedArea, use no horizontal alignment
 *
 * @internal
 */
export function getFallbackPosition(
    anchor: Rect,
    target: Rect,
    clippedArea: Rect,
    spacing: number,
): Point {
    const x = anchor.x - (target.width + spacing);
    const y = anchor.y + anchor.height + spacing;
    if (x >= clippedArea.x) {
        return {
            x: x,
            y: y,
        };
    } else {
        // no horizontal alignment
        return {
            x: clippedArea.x + spacing,
            y: y,
        };
    }
}
