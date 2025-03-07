import { createApp } from "vue";
import "@fkui/icon-lib-default/dist/f";
import router from "./router";
import "./local.scss";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
