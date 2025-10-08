import { createApp } from "vue";
import { type SetupOptions } from "@forsakringskassan/vite-lib-config";

import "@fkui/icon-lib-default/dist/f";
import "./local.scss";

import { setRunningContext } from "./config";
import {
    FormatPlugin,
    TestPlugin,
    TranslationPlugin,
    ValidationPlugin,
} from "./plugins";

export function setup(options: SetupOptions): void {
    const { rootComponent, selector } = options;
    const app = createApp(rootComponent);
    setRunningContext(app);
    app.use(TestPlugin);
    app.use(TranslationPlugin);
    app.use(ValidationPlugin);
    app.use(FormatPlugin);
    app.mount(selector);
}
