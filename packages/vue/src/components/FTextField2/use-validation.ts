import { type Ref, type ShallowRef, onMounted, ref } from "vue";
import {
    type EnableValidationOptions,
    type UpdateEvent,
    enableValidation,
} from "@fkui/validation";
import { useEventListener } from "@vueuse/core";

export interface UseValidationOptions<TValue, TModel> {
    getViewValue(): TValue;
    getModelValue(): TModel;
    initial: TValue;
    parser(value: TValue): TModel;
    formatter(value: TModel): TValue;
    event: string[];
}

export interface UseValidation<TValue, TModel> {
    viewValue: Ref<TValue>;
    modelValue: Ref<TModel>;
    value: Ref<TValue | TModel | undefined>;
    isValid: Readonly<Ref<boolean>>;
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
    options: UseValidationOptions<TValue, TModel>,
): UseValidation<TValue, TModel> {
    const viewValue = ref<TValue>(options.initial) as Ref<TValue>;
    const modelValue = ref<TModel>(
        options.parser(options.initial),
    ) as Ref<TModel>;
    const value = ref<TValue | TModel | undefined>(viewValue.value) as Ref<
        TValue | TModel | undefined
    >;
    const isValid = ref(false);
    const ariaInvalid: Ref<"true" | undefined> = ref(undefined);
    const required: Ref = ref(false);
    const showValidationError = ref();
    const validationMessage: Ref<string | undefined> = ref(undefined);
    onMounted(() => {
        if (!element.value) {
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
                const { message } = event.detail;
                const show = shouldshowError(event);
                isValid.value = event.detail.isValid;
                showValidationError.value = show;
                validationMessage.value = message;
                ariaInvalid.value = show ? "true" : undefined;
                value.value = event.detail.modelValue ?? event.detail.viewValue;
            },
        );
        enableValidation<TValue, TModel>(element.value, {
            ...options,
        });
    });
    return {
        viewValue,
        modelValue,
        value,
        isValid,
        showValidationError,
        validationMessage,
        attributes: {
            ariaInvalid,
            required,
        },
    };
}
