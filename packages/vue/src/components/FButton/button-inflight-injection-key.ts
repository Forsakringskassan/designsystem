import { type ComputedRef, type InjectionKey } from "vue";

/**
 * @public
 */
export const buttonInflightInjectionKey = Symbol() as InjectionKey<
    ComputedRef<boolean>
>;
