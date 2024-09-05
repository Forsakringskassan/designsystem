const FRAMERATE = 60;

function easeInEaseOut(a: number, b: number, s: number): number {
    return a + ((b - a) * (1 + Math.cos(Math.PI + s * Math.PI))) / 2;
}

function elementTop(element: Element): number {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset;
    const clientTop = document.documentElement.clientTop;

    return rect.top + scrollTop - clientTop;
}

/**
 * Optional arguments for scrollTo.
 *
 * @public
 * @param duration - Duration in milliseconds
 * @param offset - Set vertical offset, default 0px
 */
export interface ScrollToOptions {
    duration?: number;
    offset?: number;
}

/**
 * Scroll to element with scroll options.
 *
 * @public
 * @param element - Element to scroll into view
 * @param options - scroll options (duration, offset)
 */
export function scrollTo(
    element: Element,
    options: ScrollToOptions,
): Promise<void>;

/**
 * Scroll to element
 *
 * @public
 * @param element - Element to scroll into view
 * @param offset - Set vertical offset, default 0px
 */
export function scrollTo(element: Element, offset?: number): Promise<void>;
export function scrollTo(
    element: Element,
    arg: number | ScrollToOptions = 0,
): Promise<void> {
    if (typeof arg === "number") {
        const offset = arg;
        const bodyRect = document.body.getBoundingClientRect();
        const elemRect = element.getBoundingClientRect();
        const scroll = elemRect.top - bodyRect.top - offset;
        window.scrollTo({ top: scroll, behavior: "smooth" });
        return Promise.resolve();
    } else {
        return scrollToSlow(element, arg.duration || 500, arg.offset || 0);
    }
}

/**
 * Scroll to element with given duration
 *
 * @param element - Element to scroll into view
 * @param duration - Duration in milliseconds
 * @param offset - Set vertical offset, default 0px
 */
function scrollToSlow(
    element: Element,
    duration: number,
    offset = 0,
): Promise<void> {
    const steps = (duration / 1000) * FRAMERATE;
    const interval = duration / steps;
    const target = elementTop(element) - offset;
    const scrollRange = target - window.pageYOffset;

    function tween(s: number): number {
        return target - easeInEaseOut(scrollRange, 0, s);
    }

    return new Promise((resolve) => {
        let stepsLeft = steps;

        const requestAnimationFrame = setInterval(() => {
            if (stepsLeft-- > 0) {
                const s = 1 - stepsLeft / steps;
                const top = tween(s);
                window.scrollTo({ top, left: 0 });
            } else {
                clearInterval(requestAnimationFrame);
                resolve();
            }
        }, interval);
    });
}
