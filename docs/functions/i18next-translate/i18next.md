---
title: i18next
layout: pattern
sortorder: 1
---

Provider till `TranslationService` som använder [`i18next`][i18next] för översättningar.

[i18next]: https://www.i18next.com/

## Användning

```ts
import { TranslationService } from "@fkui/logic";
import { i18nextProvider } from "@fkui/i18next-translate";

/* create a new 18next translation provider */
const provider = await i18nextProvider({
    defaultLanguage: "sv",
    async loadLanguage(lang) {
        const response = await fetch(`/texts/${lang}.json`);
        return await response.json();
    },
});

/* use provider for TranslationService translations */
TranslationService.changeProvider(provider);
```

Om du använder Vue kom ihåg att aktivera {@link TranslationPlugin}:

```ts
import { defineComponent } from "vue";

const App = defineComponent({});

/* --- cut above --- */

import { createApp } from "vue";
import { TranslationPlugin } from "@fkui/vue";

const app = createApp(App);

/* enable translation plugin */
app.use(TranslationPlugin);
```
