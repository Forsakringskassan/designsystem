import { type App, type Plugin, type Directive, watchEffect } from "vue";
import { type ValidatorTypeMapping } from "../type-mapping";
import { type ValidatorConfigMapping } from "../types/validation-config";
import { setConfigToElement } from "./config";

/**
 * @public
 */
export type ValidationDirective = Directive<
    HTMLElement,
    ValidatorConfigMapping | undefined,
    keyof ValidatorTypeMapping & {}
>;

declare module "vue" {
    interface GlobalDirectives {
        vValidation: ValidationDirective;
    }
}

const validationDirective: ValidationDirective = {
    deep: true,
    mounted(element, binding) {
        watchEffect(() => {
            // @todo behövs denna?
            setConfigToElement(element, binding.value ?? {});
        });
    },
    updated(element, binding) {
        console.log("update", binding.value);
        setConfigToElement(element, binding.value ?? {});
    },
};

/**
 * @public
 */
export const ValidationPlugin: Plugin = {
    install(app: App) {
        app.directive("validation", validationDirective);
    },
};
