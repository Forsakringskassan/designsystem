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
    app.use(ErrorPlugin);
    app.use(ValidationPlugin);
    app.use(TestPlugin);
    app.use(TranslationPlugin);
    app.mount(selector);
    setRunningContext(app);
}
