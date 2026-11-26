/**
 * Sets up the CSS transition on the element.
 * Applied before enter and leave transitions to ensure the height
 * animation runs with the correct duration and easing.
 *
 * @internal
 */
export const transitionStyle = {
    overflow: "hidden",
    transition: "height 400ms cubic-bezier(0.46, 0.03, 0.52, 0.96)",
};
