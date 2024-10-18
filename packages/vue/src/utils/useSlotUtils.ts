import { useSlots } from "vue";
import { hasSlot } from "./has-slot";

export function useSlotUtils() {
    const $slots = useSlots()
    return {
        hasSlot(name: string){
            return hasSlot({$slots}, name)
        }
    }
}