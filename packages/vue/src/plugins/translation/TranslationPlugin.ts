import { type App, type ComponentOptions, type Plugin } from "vue";
import { translate } from "./translate";
import { TranslateFunction } from "./translate-function";

declare module "vue" {
    interface ComponentCustomProperties {
        $t: TranslateFunction;
    }
}

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $t: TranslateFunction;
    }
}

/**
 * @public
 */
export const TranslationMixin: ComponentOptions = {
    methods: {
        $t: translate,
    },
};

/**
 * @public
 */
export const TranslationPlugin: Plugin = {
    install(app: App) {
        app.mixin(TranslationMixin);
    },
};
