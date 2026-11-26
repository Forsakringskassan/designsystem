import { type Slots } from "vue";
import { type RenderSlotOptions, renderSlotText } from "./render-slot-text";

const defaultOptions: RenderSlotOptions = {
    stripClasses: ["sr-only"],
    componentPlaceholder: true,
};

/**
 * Check if slot is implemented by the user.
 *
 * @public
 * @param vm - Component instance.
 * @param name - Name of the slot to check for.
 * @param props - Props required by a scoped slot.
 * @param options - Render options.
 * @returns true if the slot is implemented and have non-empty content.
 */
export function hasSlot(
    vm: { $slots: Slots },
    name: string,
    props: Record<string, unknown> = {},
    options: Partial<Pick<RenderSlotOptions, "stripClasses">> = {},
): boolean {
    const slot = vm.$slots[name];

    const effectiveOptions = { ...defaultOptions, ...options };
    return Boolean(renderSlotText(slot, props, effectiveOptions));
}
