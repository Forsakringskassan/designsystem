import { useSlots } from "vue";
import { hasSlot } from "../utils/has-slot";

/**
 * @public
 */
export interface UseSlotUtils {
    hasSlot(name: string): boolean;
}

/**
 * @public
 */
export function useSlotUtils(): UseSlotUtils {
    const $slots = useSlots();
    return {
        hasSlot(name) {
            return hasSlot({ $slots }, name);
        },
    };
}
