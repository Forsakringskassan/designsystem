import {
    computed,
    onMounted,
    ref,
    toValue,
    watchEffect,
    type MaybeRefOrGetter,
    type Ref,
} from "vue";
import { useEventListener } from "@vueuse/core";
import { enableValidation } from "../enable-validation";
import type { UpdateEvent } from "../event";
import type { ValidatorConfigMapping } from "../types";
import { useValidationConfig } from "./use-validation-config";
import { internalValidate } from "../validate-element";

/**
 * @public
 */
export interface ValidityModel {
    isValid: boolean;
}

/**
 * @public
 */
export interface UseValidationOptions<TValue, TModel> {
    viewValue: Ref<TValue>;
    modelValue: Ref<TModel | undefined>;
    validity: Ref<ValidityModel>;
    parser(value: TValue): TModel | undefined;
    formatter(value: TModel): TValue | undefined;
    event: string[];
}

/**
 * @public
 */
export interface UseValidation {
    showValidationError: Readonly<Ref<boolean>>;
    validationMessage: Readonly<Ref<string | undefined>>;
    attributes: {
        ariaInvalid: Readonly<Ref<"true" | undefined>>;
        required: Readonly<Ref<boolean>>;
    };
    configuration: Readonly<Ref<ValidatorConfigMapping>>;
}

function shouldshowError(event: UpdateEvent): boolean {
    const { submitted, isValid, validator } = event.detail;
    if (isValid) {
        return false;
    }
    return submitted || validator !== "required";
}

/**
 * @public
 */
export function useValidation<TValue, TModel>(
    element: MaybeRefOrGetter<HTMLElement | null>,
    rootElement: MaybeRefOrGetter<HTMLElement | null>,
    options: UseValidationOptions<TValue, TModel>,
): UseValidation {
    const { viewValue, modelValue, validity } = options;
    const ariaInvalid: Ref<"true" | undefined> = ref(undefined);
    const showValidationError = ref();
    const validationMessage: Ref<string | undefined> = ref(undefined);
    const configuration = useValidationConfig(rootElement);
    const required = computed(() => {
        return Boolean(configuration.value.required?.enabled);
    });

    watchEffect(() => {
        const x = toValue(element);
        if (x) {
            internalValidate(x, configuration.value);
        }
    });

    useEventListener(
        element,
        "validation:update",
        (event: UpdateEvent<TValue, TModel>) => {
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

    onMounted(() => {
        enableValidation<TValue, TModel>(toValue(element), {
            getViewValue() {
                return viewValue.value;
            },
            getModelValue() {
                return modelValue.value;
            },
            getConfiguration() {
                return configuration.value;
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
        configuration,
    };
}
