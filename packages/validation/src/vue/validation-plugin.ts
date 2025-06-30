import { type App, type Plugin } from "vue";
import { validationDirective } from "./validation-directive";

/**
 * @public
 */
export const ValidationPlugin: Plugin = {
    install(app: App) {
        app.directive("validation", validationDirective);
    },
};
