import { createApp } from "vue";
import "@fkui/icon-lib-default/dist/f";
import {
    TestPlugin,
    ValidationPlugin,
    config,
    setRunningContext,
} from "@fkui/vue";
import "@fkui/logic/polyfills";
import App from "./App.vue";
import router from "./router";

config.production = false;
config.popupContainer = "#app";

const app = createApp(App);
app.use(router);
app.use(ValidationPlugin);
app.use(TestPlugin);
app.mount("#app");
setRunningContext(app);
