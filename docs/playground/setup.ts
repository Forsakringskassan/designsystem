import { type App, onMounted } from "vue";
import { ValidationPlugin } from "@fkui/vue";
import { injectSpritesheet } from "@fkui/icon-lib-default/dist/f/injectSpritesheet";

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
