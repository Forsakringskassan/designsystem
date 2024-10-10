import { useSlots } from "vue";
import { hasSlot } from "../../utils";

export function useSlotUtils() {
    const $slots = useSlots()
    return {
        hasSlot(name: string){
            return hasSlot({$slots}, name)
        }
    }
}