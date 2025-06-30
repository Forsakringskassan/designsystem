import { createApp } from "vue";
import { type SetupOptions } from "@forsakringskassan/vite-lib-config";
import { getErrorMessages } from "@fkui/logic";
import { addErrorMessages, ValidationPlugin } from "@fkui/validation";

import "@fkui/icon-lib-default/dist/f";
import "./local.scss";

import { TestPlugin, TranslationPlugin, FormatPlugin } from "./plugins";
import { setRunningContext } from "./config";

export function setup(options: SetupOptions): void {
    addErrorMessages(getErrorMessages());
    const { rootComponent, selector } = options;
    const app = createApp(rootComponent);
    setRunningContext(app);
    app.use(TestPlugin);
    app.use(TranslationPlugin);
    app.use(ValidationPlugin);
    app.use(FormatPlugin);
    app.mount(selector);
}
