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

let wrapper: HTMLDivElement;

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
    const mergedOptions = { ...defaultOptions, ...options };
    const wrapper = getWrapper();

    updateProperties(mergedOptions);

    const msg = document.createElement("p");
    msg.textContent = text;

    waitForScreenReader(() => {
        while (wrapper.firstChild) {
            wrapper.removeChild(wrapper.firstChild);
        }

        wrapper.appendChild(msg);

        setTimeout(() => {
            // Remove element if it is still in the DOM.
            if (msg.parentElement === wrapper) {
                wrapper.removeChild(msg);
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
    if (!getWrapper()) {
        wrapper = document.createElement("div");
        wrapper.id = "fkui-alert-screen-reader";
        wrapper.className = "sr-only";
        updateProperties(options);

        document.body.appendChild(wrapper);
    }
}

/**
 * Update properties on wrapper element.
 *
 * @internal
 * @param options - options for wrapper element attributes.
 */
function updateProperties(options: AlertScreenReaderOptions): void {
    const wrapper = getWrapper();
    const ariaLive = options.assertive ? "assertive" : "polite";

    wrapper.setAttribute("aria-live", ariaLive);
}

/**
 * Retrieve wrapper element.
 *
 * @internal
 */
function getWrapper(): HTMLDivElement {
    return wrapper;
}
