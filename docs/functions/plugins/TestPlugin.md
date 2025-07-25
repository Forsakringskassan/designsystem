---
title: Test Plugin
layout: content-with-menu
search:
    terms:
        - data-test
        - testautomation
        - enhetstest
        - e2e-test
---

TestPlugin lägger till stöd för att lägga till `data-test` attribute dynamiskt på HTML element.
Plugin:et är tänkt att användas vid testautomation, enhets- och e2e-tester.

TestPlugin initialiseras på nedan sätt (bör göras så tidigt i applikationen som möjligt, till exempel main.ts )

```ts
import { defineComponent } from "vue";

const App = defineComponent({});

/* --- cut above ---*/

import { createApp } from "vue";
import { TestPlugin } from "@fkui/vue";

const app = createApp(App);
app.use(TestPlugin);
app.mount("#app");
```

## Användning

Lägg till direktivet `v-test` till elementet som ska få attributet `data-test`.

Notera att om värdet som skickas in till `v-test` är en sträng så måste värdet ha `''` runt sig, till exempel `v-test="'exempel-v-test'"`.
Detta är för att det som är innanför `v-test=""` evalueras som JavaScript.

```import
TestPluginExample.vue
```

## Exempel

```import
TestPluginHidden.vue
```
