import { createApp } from "vue";
import { type SetupOptions } from "@forsakringskassan/vite-lib-config";

import "@fkui/icon-lib-default/dist/f";
import "@fkui/css-variables/dist/fkui-int-css-variables.css";
import "@fkui/design/src/fkui-int.scss";
import "@fkui/design/lib/fonts.css";

import { TestPlugin, TranslationPlugin, ValidationPlugin } from "./plugins";
import { setRunningContext } from "./config";

export function setup(options: SetupOptions): void {
    const { rootComponent, selector } = options;
    const app = createApp(rootComponent);
    setRunningContext(app);
    app.use(TestPlugin);
    app.use(TranslationPlugin);
    app.use(ValidationPlugin);
    app.mount(selector);
}
