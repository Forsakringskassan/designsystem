import {
    type App,
    type Directive,
    type DirectiveBinding,
    type Plugin,
} from "vue";
import isEqual from "lodash/isEqual";
import {
    type ValidatableHTMLElement,
    type ValidatorName,
    type ValidatorConfigs,
    type ValidatorConfig,
    availableValidators,
    isValidatableHTMLElement,
    ValidationService,
} from "@fkui/logic";
import { ComponentValidityEvent } from "../../types";

import { dispatchComponentUnmountEvent } from "../../utils";

function getValidatableElement(element: HTMLElement): ValidatableHTMLElement {
    if (isValidatableHTMLElement(element)) {
        return element;
    }
    const validatableInsideElement = element.querySelector(
        "input, textarea, select",
    );
    if (validatableInsideElement) {
        return validatableInsideElement as ValidatableHTMLElement;
    } else {
        throw new Error(`Couldn't find any validatable element`);
    }
}

function triggerInitialValidation(el: HTMLElement): void {
    const target = getValidatableElement(el);
    ValidationService.validateElement(target);
}

function registerValidators(
    el: HTMLElement,
    binding: DirectiveBinding<Record<string, ValidatorConfig>>,
): void | never {
    const { modifiers: bindingModifiers = {}, value: bindingValue = {} } =
        binding;
    const target = getValidatableElement(el);

    Object.keys(bindingValue).forEach((validatorName) => {
        if (!bindingModifiers[validatorName]) {
            throw new Error(
                `Have you forget to add '${validatorName}' to v-validation.${validatorName}?`,
            );
        }
    });

    const validatorConfigs: ValidatorConfigs = {};
    (Object.keys(bindingModifiers) as ValidatorName[]).forEach(
        (validatorName) => {
            validatorConfigs[validatorName] = bindingValue[validatorName] || {};
        },
    );

    ValidationService.addValidatorsToElement(target, validatorConfigs);
}

const ValidationDirective: Directive<
    HTMLElement,
    Record<string, ValidatorConfig>
> = {
    beforeMount(el: HTMLElement, binding: DirectiveBinding): void {
        registerValidators(el, binding);
    },
    beforeUnmount(el: HTMLElement, _binding: DirectiveBinding): void {
        const validatableElement = getValidatableElement(el);
        dispatchComponentUnmountEvent(validatableElement);
        ValidationService.removeValidatorsFromElement(validatableElement);
    },
    updated(el: HTMLElement, binding): void {
        if (!isEqual(binding.value, binding.oldValue)) {
            registerValidators(el, binding);
        }
    },
    mounted(el: HTMLElement) {
        triggerInitialValidation(el);
    },
};

const ValidationPrefixDirective: Directive<HTMLElement, string> = {
    beforeMount(el: HTMLElement, binding: DirectiveBinding) {
        el.addEventListener("component-validity", (event) => {
            const e = event as CustomEvent<ComponentValidityEvent>;
            e.detail.errorMessage = `${binding.value}${e.detail.errorMessage}`;
        });
    },
};

/**
 * @public
 */
export const ValidationPlugin: Plugin = {
    install(app: App) {
        /* register all builtin validators */
        for (const validator of availableValidators) {
            ValidationService.registerValidator(validator);
        }

        app.directive("validation", ValidationDirective);
        app.directive("validationPrefix", ValidationPrefixDirective);
    },
};
