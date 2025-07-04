import { type Ref, ref } from "vue";
import { type NormalizedValidatorConfigMapping } from "../types";

const configStore = new WeakMap<
    HTMLElement,
    Ref<NormalizedValidatorConfigMapping>
>();

/**
 * @internal
 */
export function getConfigurationRef(
    element: HTMLElement,
): Ref<NormalizedValidatorConfigMapping> {
    const existing = configStore.get(element);
    if (existing) {
        return existing;
    }
    const config: NormalizedValidatorConfigMapping = {};
    const sharedRef = ref<NormalizedValidatorConfigMapping>(config);
    configStore.set(element, sharedRef);
    return sharedRef;
}
