import { type InjectionKey, type Ref } from "vue";

/**
 * @public
 */
export const buttonInflightInjectionKey = Symbol() as InjectionKey<
    Readonly<Ref<boolean>>
>;
