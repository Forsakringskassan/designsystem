import { mount } from "cypress/vue";
import { injectSpritesheet } from "@fkui/icon-lib-default/dist/f/injectSpritesheet";
import { type App } from "vue";
import {
    TestPlugin,
    TranslationPlugin,
    ValidationPlugin,
} from "../../packages/vue/src/plugins";
import { config, setRunningContext } from "../../packages/vue/src/config";
import "@fkui/theme-default/src/fkui-css-variables.scss";

import "./main.scss";
import "./common";

config.teleportTarget = "#teleport";
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace -- module augmentation
    namespace Cypress {
        interface Chainable {
            mount: typeof mount;
        }
    }
}

Cypress.Commands.add("mount", (component, options = {}) => {
    // Setup options object
    options.global ??= {};
    options.global.plugins ??= [];
    options.global.config ??= {};
    options.global.config.compilerOptions ??= {};
    options.global.config.compilerOptions.whitespace = "preserve";

    /* Installing validationPlugin */
    options.global.plugins.push({
        install(app: App) {
            app.use(ValidationPlugin);
            app.use(TestPlugin);
            app.use(TranslationPlugin);
            setRunningContext(app);
        },
    });

    return mount(component, options);
});

injectSpritesheet();
