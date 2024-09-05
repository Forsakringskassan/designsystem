/**
 * Executes a function when it stops being invoked for n seconds. Usually used together with resize,
 * scroll and keyup/keydown-events to improve application's performance.
 *
 * Example:
 *
 * ```
 *    window.addEventListener(
 *        'resize',
 *        debounce(computationalHeavyFunction, 1000),
 *    );
 * ```
 *
 * This will call the `computationalHeavyFunction` once if the resize-event hasn't been sent for 1000 ms.
 *
 * Example with immediate-flag:
 *
 * ```
 *    window.addEventListener(
 *        'resize',
 *        debounce(computationalHeavyFunction, 1000, true),
 *    );
 * ```
 *
 * This will call the `computationalHeavyFunction` once BEFORE the resize-event has finished,
 * and thereafter will not be able to be called again until the timeout has finished
 *
 * @public
 * @param func - Function to be debounced.
 * @param delay - Function execution threshold in milliseconds.
 * @param immediate - Whether the function should be called at the beginning of the delay (Before the timeout) instead of the end.
 * Default is false.
 */
export function debounce<TThis, TArgs extends unknown[], TReturn>(
    this: TThis,
    func: (this: TThis, ...args: TArgs) => TReturn,
    delay: number,
    immediate = false,
): (...args: TArgs) => void {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return function functionToExecute(this: TThis, ...args: TArgs): void {
        const timedOutFunction = (): void => {
            timeout = null;
            if (!immediate) {
                func.apply(this, args);
            }
        };

        const callNow = immediate && !timeout;

        if (timeout !== null) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(timedOutFunction, delay);

        if (callNow) {
            func.apply(this);
        }
    };
}
