import { watchEffect, type App, type DirectiveBinding, type Plugin } from "vue";

/**
 * FocusPlugin: A Vue directive plugin that sets focus on toggle.
 *
 * @public
 */
export const FocusPlugin: Plugin = {
    install(app: App) {
        app.directive(
            "focus",
            (el: HTMLElement, { value }: DirectiveBinding) => {
                watchEffect(() => {
                    if (value === true) {
                        el.focus();
                    }
                });
            },
        );
    },
};
