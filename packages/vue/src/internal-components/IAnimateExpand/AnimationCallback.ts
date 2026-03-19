/**
 * Callback defintion for IAnimateExpand.
 *
 * @public
 * @param expand - whether animation is expanding or collapsing
 */
export type AnimationCallback = (expand: boolean) => void | Promise<void>;
