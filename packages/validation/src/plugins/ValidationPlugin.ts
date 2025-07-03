import { type App, type Plugin, type Directive, watchEffect } from "vue";
import { type ValidatorTypeMapping } from "../type-mapping";
import { type ValidationConfig } from "../validation-config";
import { setConfigToElement } from "../validation-config";

/**
 * @public
 */
export type ValidationDirective = Directive<
    HTMLElement,
    | {
          [K in keyof ValidatorTypeMapping]?: Partial<ValidationConfig<K>>;
      }
    | undefined
>;

declare module "vue" {
    interface GlobalDirectives {
        vValidation: ValidationDirective;
    }
}

const validationDirective: ValidationDirective = {
    deep: true,
    mounted(element, binding) {
        watchEffect(() => { // @todo behövs denna?
            setConfigToElement(element, binding.value ?? {});
        });
    },
    updated(element, binding) {
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
