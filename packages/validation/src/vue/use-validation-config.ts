import {
    type MaybeRefOrGetter,
    type Ref,
    ref,
    toValue,
    watchEffect,
} from "vue";
import { type ValidatorConfigMapping } from "../types";
import { getConfigurationRef } from "./get-configuration-ref";

/**
 * @public
 */
export function useValidationConfig(
    rootElement: MaybeRefOrGetter<HTMLElement | null>,
): Readonly<Ref<ValidatorConfigMapping | undefined>> {
    const configRef = ref<ValidatorConfigMapping | undefined>();

    watchEffect(() => {
        const element = toValue(rootElement);
        if (!element) {
            configRef.value = undefined;
            return;
        }
        configRef.value = getConfigurationRef(element).value;
    });

    return configRef;
}
