import { type ComputedRef, type InjectionKey } from "vue";

/**
 * @internal
 */
export const buttonInflightInjectionKey = Symbol() as InjectionKey<
    ComputedRef<boolean>
>;
