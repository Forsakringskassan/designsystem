import { createApp, h } from "vue";
import { type SetupOptions } from "@forsakringskassan/docs-generator";

import {
    ErrorPlugin,
    FErrorHandlingApp,
    FormatPlugin,
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
    app.use(ErrorPlugin, {
        captureWarnings: true,
        logToConsole: true,
    });
    app.use(ValidationPlugin);
    app.use(TestPlugin);
    app.use(TranslationPlugin);
    app.use(FormatPlugin);
    app.mount(selector);
}
