import { createApp, h } from "vue";
import { type SetupOptions } from "@forsakringskassan/docs-generator";

import {
    ErrorPlugin,
    FErrorHandlingApp,
    TestPlugin,
    TranslationPlugin,
    ValidationPlugin,
    setRunningContext,
} from "@fkui/vue";

export function setup(options: SetupOptions): void {
    const { rootComponent, selector } = options;
    const app = createApp({
        render() {
            return h(FErrorHandlingApp, { defaultComponent: rootComponent });
        },
    });
    setRunningContext(app);
    app.use(ErrorPlugin);
    app.use(ValidationPlugin);
    app.use(TestPlugin);
    app.use(TranslationPlugin);
    app.mount(selector);
    app.config.warnHandler = (msg, vm, trace) => {
        /* eslint-disable-next-line no-console -- expected to log */
        console.warn(`Warning:`, msg, trace);
        throw new Error(msg);
    };
}
