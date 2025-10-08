import { createApp } from "vue";
import "@fkui/icon-lib-default/dist/f";
import {
    TestPlugin,
    TranslationPlugin,
    ValidationPlugin,
    setRunningContext,
} from "@fkui/vue";
import { type SetupOptions } from "@forsakringskassan/vite-lib-config";
import "./local.scss";

export function setup(options: SetupOptions): void {
    const { rootComponent, selector } = options;
    const app = createApp(rootComponent);
    setRunningContext(app);
    app.use(TestPlugin);
    app.use(TranslationPlugin);
    app.use(ValidationPlugin);
    app.mount(selector);
}
