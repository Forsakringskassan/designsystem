/**
 * Default delay in milliseconds for {@link waitForScreenReader}
 *
 * @public
 */
export const SCREEN_READER_DELAY = 100;

/**
 * Defer execution of passed function to allow screen reader to update.
 * Used if screen reader has not been updated with changed or added
 * aria attributes before interaction.
 *
 * See issue:
 * https://github.com/nvaccess/nvda/issues/12738
 *
 * @public
 */
export function waitForScreenReader<TReturn = void>(
    callback: () => TReturn,
    delay = SCREEN_READER_DELAY,
): Promise<TReturn> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const result = callback();
                resolve(result);
            } catch (err: unknown) {
                reject(err);
            }
        }, delay);
    });
}
