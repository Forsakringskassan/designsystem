import { type Directive, type DirectiveBinding } from "vue";
import { type ValidatorTypeMapping } from "../type-mapping";
import { type ValidatorConfigMapping } from "../types";
import { getConfigurationRef } from "./get-configuration-ref";
import { normalizeConfiguration } from "./normalize-configuration";

/**
 * @public
 */
export type ValidationDirective = Directive<
    HTMLElement,
    ValidatorConfigMapping | undefined,
    keyof ValidatorTypeMapping & {}
>;

/**
 * @internal
 */
export type ValidationDirectiveBinding = DirectiveBinding<
    ValidatorConfigMapping | undefined,
    keyof ValidatorTypeMapping & {}
>;

declare module "vue" {
    interface GlobalDirectives {
        vValidation: ValidationDirective;
    }
}

function isDeepEqual(a: unknown, b: unknown): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
}

function updateConfig(
    element: HTMLElement,
    binding: ValidationDirectiveBinding,
): void {
    const sharedRef = getConfigurationRef(element);
    const normalized = normalizeConfiguration(binding.modifiers, binding.value);
    if (isDeepEqual(sharedRef.value, normalized)) {
        return;
    }
    sharedRef.value = normalized;
}

/**
 * @internal
 */
export const validationDirective: ValidationDirective = {
    deep: true, // @todo behövs denna?
    mounted(element, binding) {
        updateConfig(element, binding);
    },
    updated(element, binding) {
        updateConfig(element, binding);
    },
};
