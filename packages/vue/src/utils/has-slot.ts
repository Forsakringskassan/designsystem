import { type Slots } from "vue";
import { renderSlotText } from "./render-slot-text";

/**
 * Check if slot is implemented by the user.
 *
 * @public
 * @param vm - Component instance.
 * @param name - Name of the slot to check for.
 * @param props - Props required by a scoped slot.
 * @returns true if the slot is implemented and have non-empty content.
 */
export function hasSlot(
    vm: { $slots: Slots },
    name: string,
    props: Record<string, unknown> = {},
): boolean {
    const slot = vm.$slots[name];

    return Boolean(renderSlotText(slot, props));
}