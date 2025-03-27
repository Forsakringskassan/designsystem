import { createApp } from "vue";
import "@fkui/icon-lib-default/dist/f";
import {
    FormatPlugin,
    TestPlugin,
    ValidationPlugin,
    config,
    setRunningContext,
} from "@fkui/vue";
import "@fkui/logic/polyfills";
import router from "./router";
import App from "./App.vue";

config.production = false;
config.popupContainer = "#app";

const app = createApp(App);
app.use(router);
app.use(ValidationPlugin);
app.use(TestPlugin);
app.use(FormatPlugin);
app.mount("#app");
setRunningContext(app);
