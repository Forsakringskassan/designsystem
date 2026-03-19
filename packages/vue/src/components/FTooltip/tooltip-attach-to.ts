import { type InjectionKey, type ShallowRef } from "vue";

/**
 * @internal
 */
export const tooltipAttachTo = Symbol("tooltipAttachTo") as InjectionKey<
    Readonly<ShallowRef<HTMLElement | null>>
>;
