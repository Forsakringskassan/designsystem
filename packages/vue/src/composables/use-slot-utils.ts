import { useSlots } from "vue";
import { hasSlot } from "../utils/has-slot";

/**
 * @public
 */
export type WithoutInstance<F> = F extends (
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any -- can be anything */
    vm: any,
    ...rest: infer R
) => infer T
    ? (...args: R) => T
    : never;

/**
 * @public
 */
export interface UseSlotUtils {
    hasSlot: WithoutInstance<typeof hasSlot>;
}

/**
 * @public
 */
export function useSlotUtils(): UseSlotUtils {
    const $slots = useSlots();
    return {
        hasSlot(...args) {
            return hasSlot({ $slots }, ...args);
        },
    };
}
