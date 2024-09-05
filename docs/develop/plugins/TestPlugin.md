---
title: Test Plugin
layout: content-with-menu
---

_TestPlugin_ lägger till stöd för att lägga till `data-test` attribute dynamiskt på HTML element.
Plugin:et är tänkt att användas vid testautomation, enhets- och e2e-tester.

_ValidationPlugin_ initialiseras på nedan sätt (bör göras så tidigt i applikationen som möjligt, t.ex. main.ts )

```ts
import { TestPlugin } from "@fkui/vue";
Vue.use(TestPlugin);
```

## Användning

Lägg till direktivet `v-test` till elementet som ska få `data-test` attributet.

Notera att om värdet som skickas in till `v-test` är en sträng så måste värdet ha `''` runt sig, t.ex. `v-test="'exempel-v-test'"`.
Detta är för att det som är innanför `v-test=""` evalueras som JavaScript.

```import
TestPluginExample.vue
```

## Exempel

```import
TestPluginHidden.vue
```
