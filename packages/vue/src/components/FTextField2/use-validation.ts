import { type Ref, type ShallowRef, onMounted, ref } from "vue";
import {
    type UpdateEvent,
    enableValidation,
    getConfigFromElement,
} from "@fkui/validation";
import { useEventListener } from "@vueuse/core";

export interface Validity {
    isValid: boolean;
}

export interface UseValidationOptions<TValue, TModel> {
    viewValue: Ref<TValue>;
    modelValue: Ref<TModel | undefined>;
    validity: Ref<Validity>;
    parser(value: TValue): TModel | undefined;
    formatter(value: TModel): TValue | undefined;
    event: string[];
}

export interface UseValidation {
    showValidationError: Readonly<Ref<boolean>>;
    validationMessage: Readonly<Ref<string | undefined>>;
    attributes: {
        ariaInvalid: Readonly<Ref<"true" | undefined>>;
        required: Readonly<Ref<boolean>>;
    };
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
    rootElement: Readonly<ShallowRef<HTMLElement | null>>,
    options: UseValidationOptions<TValue, TModel>,
): UseValidation {
    const { viewValue, modelValue, validity } = options;
    const ariaInvalid: Ref<"true" | undefined> = ref(undefined);
    const required: Ref = ref(false);
    const showValidationError = ref();
    const validationMessage: Ref<string | undefined> = ref(undefined);

    onMounted(() => {
        if (!element.value || !rootElement.value) {
            return;
        }

        /* @todo hantera att denna kanske kan komma senare */
        const config = getConfigFromElement(rootElement.value);
        if (!config) {
            return;
        }

        useEventListener(element, "validation:config", (event) => {
            const { enabled = true } = event.detail.required ?? {};
            required.value = enabled;
        });

        useEventListener(
            element,
            "validation:update",
            (event: UpdateEvent<TValue, TModel>) => {
                console.log('validation:update', event.detail);
                const { message } = event.detail;
                const show = shouldshowError(event);
                showValidationError.value = show;
                validationMessage.value = message;
                ariaInvalid.value = show ? "true" : undefined;
                if (event.detail.formattedValue !== undefined) {
                    viewValue.value = event.detail.formattedValue;
                }
                modelValue.value = event.detail.modelValue;
                validity.value.isValid = event.detail.isValid;
            },
        );

        enableValidation<TValue, TModel>(element.value, {
            getViewValue() {
                return viewValue.value;
            },
            getModelValue() {
                return modelValue.value;
            },
            getConfiguration() {
                return getConfigFromElement(rootElement.value) ?? {};
            },
            ...options,
        });
    });
    return {
        showValidationError,
        validationMessage,
        attributes: {
            ariaInvalid,
            required,
        },
    };
}
