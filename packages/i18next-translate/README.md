# `@fkui/i18next-translate`

`i18next` translation provider for FKUI `TranslationService`.

## Usage

```ts
import { TranslationService } from "@fkui/logic";
import { i18nextProvider } from "@fkui/i18next-translate";

/* create a new 18next translation provider */
const provider = i18nextProvider({
    defaultLanguage: "sv",
    async loadLanguage(lang) {
        const response = await fetch(`/texts/${lang}.json`);
        return await response.json();
    },
});

/* use provider for TranslationService translations */
TranslationService.changeProvider(provider);
```

When using Vue and `@fkui/vue` remenber to enable `TranslationPlugin`:

```ts
import { createApp } from "vue";
import { TranslationPlugin } from "@fkui/vue";
import App from "./App.vue";

const app = createApp(App);

/* enable translation plugin */
app.use(TranslationPlugin);
```
