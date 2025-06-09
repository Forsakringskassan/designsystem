import { type Ref, type ShallowRef, onMounted, ref } from "vue";
import {
    type ConfigEvent,
    type EnableValidationOptions,
    type UpdateEvent,
    enableValidation,
} from "@fkui/validation";
import { useEventListener } from "@vueuse/core";

export interface UseValidation {
    ariaInvalid: Readonly<Ref<"true" | undefined>>;
    required: Readonly<Ref<boolean>>;
    showValidationError: Readonly<Ref<boolean>>;
    validationMessage: Readonly<Ref<string | undefined>>;
}

function shouldshowError(event: UpdateEvent): boolean {
    const { submitted, isValid, validator } = event.detail;
    if (isValid) {
        return false;
    }
    return submitted || validator !== "required";
}

export function useValidation<TValue, TModel>(
    element: Readonly<ShallowRef<HTMLElement | null>>,
    options: EnableValidationOptions<TValue, TModel>,
): UseValidation {
    const ariaInvalid: Ref<"true" | undefined> = ref(undefined);
    const required: Ref = ref(false);
    const showValidationError = ref();
    const validationMessage: Ref<string | undefined> = ref(undefined);
    useEventListener(element, "validation:config", (event) => {
        console.log('config event', event);
    });
    useEventListener(element, "validation:update", (event: UpdateEvent) => {
        const { message } = event.detail;
        const show = shouldshowError(event);
        showValidationError.value = show;
        validationMessage.value = message;
        ariaInvalid.value = show ? "true" : undefined;
    });
    onMounted(() => {
        if (!element.value) {
            return;
        }
        enableValidation(element.value, options);
    });
    return {
        ariaInvalid,
        required,
        showValidationError,
        validationMessage,
    };
}
