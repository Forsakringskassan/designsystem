import { createApp, h } from "vue";
import {
    ErrorPlugin,
    FErrorHandlingApp,
    TestPlugin,
    TranslationPlugin,
    ValidationPlugin,
    setRunningContext,
} from "@fkui/vue";
import { type SetupOptions } from "@forsakringskassan/docs-generator";

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
