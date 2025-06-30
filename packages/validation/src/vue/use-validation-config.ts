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
): Readonly<Ref<ValidatorConfigMapping>> {
    const configRef = ref<ValidatorConfigMapping>({});

    watchEffect(() => {
        const element = toValue(rootElement);
        if (!element) {
            configRef.value = {};
            return;
        }
        configRef.value = getConfigurationRef(element).value;
    });

    return configRef;
}
