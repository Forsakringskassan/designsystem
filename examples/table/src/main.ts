import { createApp } from "vue";
import "@fkui/icon-lib-default/dist/f";
import { ValidationPlugin } from "@fkui/vue";
import App from "./App.vue";
import router from "./router";
import "./local.scss";

const app = createApp(App);
app.use(router);
app.use(ValidationPlugin);
app.mount("#app");
