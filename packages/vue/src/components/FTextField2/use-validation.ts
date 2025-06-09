import { type Ref, type ShallowRef, onMounted, ref } from "vue";
import {
    type EnableValidationOptions,
    type UpdateEvent,
    enableValidation,
} from "@fkui/validation";
import { useEventListener } from "@vueuse/core";

export interface UseValidation {
    ariaInvalid: Readonly<Ref<"true" | undefined>>;
    showValidationError: Readonly<Ref<boolean>>;
    validationMessage: Readonly<Ref<string | undefined>>;
}

export function useValidation<TValue, TModel>(
    element: Readonly<ShallowRef<HTMLElement | null>>,
    options: EnableValidationOptions<TValue, TModel>,
): UseValidation {
    const ariaInvalid: Ref<"true" | undefined> = ref(undefined);
    const showValidationError = ref(false);
    const validationMessage: Ref<string | undefined> = ref(undefined);
    onMounted(() => {
        if (!element.value) {
            return;
        }
        enableValidation(element.value, options);
    });
    useEventListener(element, "validation:update", (event: UpdateEvent) => {
        const { submitted, isValid, message } = event.detail;
        showValidationError.value = submitted && !isValid;
        validationMessage.value = message;
        ariaInvalid.value = showValidationError.value ? "true" : undefined;
    });
    return {
        ariaInvalid,
        showValidationError,
        validationMessage,
    };
}
