import { createApp } from "vue";
import { FBadge } from "@fkui/vue";

const app = createApp({
    components: {
        FBadge,
    },
    template: /* HTML */ ` <f-badge>Test</f-badge> `,
});

app.mount("#app");
