/**
 * @internal
 */
export interface Point {
    x: number;
    y: number;
}

/**
 * @internal
 */
export interface Rect extends Point {
    width: number;
    height: number;
}

/**
 * Get elements position relative to root element.
 *
 * @internal
 */
export function getAbsolutePosition(src: HTMLElement): Rect;
/**
 * Get elements position relative to root element.
 *
 * @internal
 */
export function getAbsolutePosition(src?: HTMLElement): Rect | undefined;
export function getAbsolutePosition(src?: HTMLElement): Rect | undefined {
    if (!src) {
        return undefined;
    }

    const isRoot = src.isSameNode(document.documentElement);
    if (isRoot) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset,
            width: src.clientWidth,
            height: src.clientHeight,
        };
    }

    const rect = src.getBoundingClientRect();
    return {
        x: Math.floor(rect.left + window.pageXOffset),
        y: Math.floor(rect.top + window.pageYOffset),
        width: Math.floor(rect.width),
        height: Math.floor(rect.height),
    };
}
