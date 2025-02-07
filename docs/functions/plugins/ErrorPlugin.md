---
title: Error Plugin
layout: content-with-menu
component:
    - ErrorPlugin
    - FErrorHandlingApp
---

Ett Vue-plugin som visar en generell felsida då ett ohanterat fel uppstår.

## Usage

Skapa en komponent som wrappar din applikationskomponent:

```diff
-import { createApp } from "vue";
+import { createApp, markRaw } from "vue";
+import { ErrorPlugin, FErrorHandlingApp } from "@fkui/vue";

+const ErrorHandlingApp = defineComponent({
+    render() {
+        return h(FErrorHandlingApp, {
+            defaultComponent: markRaw(MyAwesomeApp),
+        });
+    },
+});

-const app = createApp(MyAwesomeApp);
+const app = createApp(ErrorHandlingApp);
 app.mount("#app");
```

Anropa `app.use(ErrorPlugin)` innan applikationen monteras:

```diff
 const app = createApp(ErrorHandlingApp);
+app.use(ErrorPlugin);
 app.mount("#app");
```

### Egen felsida

Det går att sätta sin egen specifika felsida.

```diff
 const ErrorHandlingApp = defineComponent({
     render() {
         return h(FErrorHandlingApp, {
             defaultComponent: markRaw(MyAwesomeApp),
+            errorComponent: markRaw(MyApplicationErrorPage),
         });
     },
 });
```

Ett enkelt sätt för att komma igång med en applikationsspecifik sida är att kopiera `FErrorPage.vue` i detta repo.

## Exempel

Prova att kasta ett ohanterat fel:

```import
ErrorPluginExample.vue
```

Axios-fel mm hanteras om man har kodat på följande vis:

```ts
import axios from "axios";

/* --- cut above --- */

async function bliFel(): Promise<void> {
    await axios.get("http://example.net");
    // alternativt return axios.get('http://example.net');
}
```

Om man däremot har kodat felaktigt, enligt nedanstående exempel, kommer exceptions inte att fångas av denna plugin.

```ts
import axios from "axios";

/* --- cut above --- */

function bliFel(): void {
    axios.get("http://example.net");
}
```

## Options

Plugin tar ett optional objekt med inställningar:

```ts
import { createApp, defineComponent } from "vue";
import { ErrorPlugin } from "@fkui/vue";

const app = createApp(defineComponent({}));

/* --- cut above ---*/

app.use(ErrorPlugin, {
    captureWarnings: true,
    logToConsole: true,
});
```

### `captureWarnings`

- type: `boolean`
- default: `true`

Om `true` så hanteras varningar som fel i utvecklarläge.

### `logToConsole`

- type: `boolean`
- default: `true`

Om `true` så loggas fel till console (så som det normallt set blir när `ErrorPlugin` eller en annan `errorHandler` installerats)
