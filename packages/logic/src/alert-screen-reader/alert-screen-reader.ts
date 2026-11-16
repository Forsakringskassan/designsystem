import { waitForScreenReader } from "../wait-for-screen-reader";

/**
 * Options for {@link alertScreenReader}.
 *
 * @public
 */
export interface AlertScreenReaderOptions {
    /**
     * If true, set aria-live to assertive instead of polite.
     */
    assertive: boolean;
}

/**
 * Delay before {@link alertScreenReader} text is removed.
 *
 * @internal
 */
export const REMOVE_TEXT_DELAY = 2000;

const defaultOptions: AlertScreenReaderOptions = {
    assertive: false,
};

const wrapperId = "fkui-alert-screen-reader";

/**
 * Trigger screen reader to read the passed text.
 *
 * @public
 * @param text - text to be read by screen reader.
 * @param options - options for wrapper element attributes.
 */
export function alertScreenReader(
    text: string,
    options?: Partial<AlertScreenReaderOptions>,
): void {
    const wrapper = findWrapper() ?? createWrapper(defaultOptions);

    const mergedOptions = { ...defaultOptions, ...options };
    updateProperties(wrapper, mergedOptions);

    const msg = document.createElement("p");
    msg.textContent = text;

    /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
    waitForScreenReader(() => {
        wrapper.replaceChildren(msg);

        setTimeout(() => {
            // Remove element if it is still in the DOM.
            if (msg.parentElement === wrapper) {
                msg.remove();
            }
        }, REMOVE_TEXT_DELAY);
    });
}

/**
 * Create an element for adding text to be read by a screen reader.
 *
 * @internal
 * @param options - options for wrapper element attributes.
 */
export function createScreenReaderWrapper(
    options: AlertScreenReaderOptions,
): void {
    if (!findWrapper()) {
        createWrapper(options);
    }
}

/**
 * Update properties on wrapper element.
 *
 * @internal
 * @param options - options for wrapper element attributes.
 */
function updateProperties(
    wrapper: HTMLDivElement,
    options: AlertScreenReaderOptions,
): void {
    const ariaLive = options.assertive ? "assertive" : "polite";

    wrapper.setAttribute("aria-live", ariaLive);
}

/**
 * Find the wrapper element in the DOM.
 *
 * @internal
 */

function findWrapper(): HTMLDivElement | null {
    return document.querySelector<HTMLDivElement>(`#${wrapperId}`);
}

/**
 * Create the wrapper element for the screen reader.
 *
 * @internal
 * @returns The created wrapper element.
 */

function createWrapper(options: AlertScreenReaderOptions): HTMLDivElement {
    const wrapper = document.createElement("div");
    wrapper.id = wrapperId;
    wrapper.className = "sr-only";
    updateProperties(wrapper, options);

    document.body.append(wrapper);
    return wrapper;
}
