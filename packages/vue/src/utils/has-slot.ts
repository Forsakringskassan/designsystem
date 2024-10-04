import { type Slots } from "vue";
import { RenderSlotOptions, renderSlotText } from "./render-slot-text";

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
    options: Partial<RenderSlotOptions> = {},
): boolean {
    console.log('hasSlot', vm, name, props, options);
    const slot = vm.$slots[name];

    return Boolean(renderSlotText(slot, props, options));
}
