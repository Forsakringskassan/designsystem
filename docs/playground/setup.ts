import { type App, onMounted } from "vue";
import { injectSpritesheet } from "@fkui/icon-lib-default/dist/f/injectSpritesheet";
import { ValidationPlugin } from "@fkui/vue";

export function setup(app: App | undefined): void {
    if (!app) {
        return;
    }

    app.use(ValidationPlugin);

    onMounted(() => {
        const themeDefaultLink = document.createElement("link");
        themeDefaultLink.rel = "stylesheet";
        themeDefaultLink.href =
            "https://unpkg.com/@fkui/theme-default@latest/dist/fkui-css-variables.css";
        document.head.append(themeDefaultLink);

        const designLink = document.createElement("link");
        designLink.rel = "stylesheet";
        designLink.href = "https://unpkg.com/@fkui/design@latest";
        document.head.append(designLink);

        injectSpritesheet();
    });
}
