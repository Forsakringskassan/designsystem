import {
    type DirectiveBinding,
    type App,
    type Plugin,
    type Directive,
} from "vue";
import { type ValidatorName, type ValidatorTypeMapping } from "../type-mapping";
import { type ValidationConfig } from "../validation-config";
import { setConfigToElement } from "../validation-config";

function registerValidators(
    target: HTMLElement,
    binding: DirectiveBinding,
): void | never {
    const { modifiers: bindingModifiers = {}, value: bindingValue = {} } =
        binding;
    Object.keys(bindingValue).forEach((validatorName) => {
        if (!bindingModifiers[validatorName]) {
            throw new Error(
                `Have you forget to add '${validatorName}' to v-validation.${validatorName}?`,
            );
        }
    });

    const validatorConfigs: {
        [K in keyof ValidatorTypeMapping]?: ValidationConfig<K>;
    } = {};

    (Object.keys(bindingModifiers) as ValidatorName[]).forEach(
        (validatorName) => {
            validatorConfigs[validatorName as keyof ValidatorTypeMapping] =
                bindingValue[validatorName] || {};
        },
    );
    setConfigToElement(target, validatorConfigs);
}

const ValidationDirective: Directive<HTMLElement, DirectiveBinding> = {
    // Called when the bound element's parent component and all its children are mounted.
    async mounted(el: HTMLElement, binding: DirectiveBinding) {
        /* eslint-disable-next-line no-console -- temp */
        console.log("v-validation mounted");
        registerValidators(el, binding);
    },

    // Called after the parent component and all of its children have updated
    updated() {
        /* eslint-disable-next-line no-console -- temp */
        console.log("v-validation updated");
        // Add code to handle updates.
    },
};

/**
 * @public
 */
export const ValidationPlugin: Plugin = {
    install(app: App) {
        app.directive("validation", ValidationDirective);
    },
};
