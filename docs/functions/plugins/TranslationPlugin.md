---
title: Translation Plugin
layout: content-with-menu
---

Ett Vue-plugin som hjälper till med att översätta textnycklar globalt.

**Observera** att TranslationService används av detta plugin. TranslationsService stödjer enbart möjligheten att ange standardvärde i sitt grundutförande. För att översätta nycklar måste en implementation anges i TranslationService.

## Användning

### Composition API

Om du använder composition API ska du använda `useTranslate()` för att få tillgång till översättningsfunktionen:

```vue static
<script setup>
import { useTranslate } from "@fkui/vue";

const $t = useTranslate();
</script>

<template>
    <p>{{ $t("fkui.example.key", "Standardtext") }}</p>
</template>
```

### Options API

Om du använder options API ska du använda `TranslationMixin` för att få tillgång till översättningsfunktionen:

```vue static
<template>
    <p>{{ $t("fkui.example.key", "Standardtext") }}</p>
</template>

<script>
import { defineComponent } from "vue";
import { TranslationMixin } from "@fkui/vue";

export default defineComponent({
    mixins: [TranslationMixin],
});
</script>
```

Notera att `$t` kan användas i metoder och computed men inte som default-värde till propar.
Du måste istället anropa `TranslationService` från `@fkui/logic`` direkt:

```ts
import { defineComponent } from "vue";
import { TranslationService } from "@fkui/logic";

export default defineComponent({
    props: {
        exampleText: {
            type: String,
            required: false,
            default: TranslationService.provider.translate(
                "fkui.example.key",
                "Standardtext",
            ),
        },
    },
});
```

### Globalt

Du installerar plugin globalt för hela applikationen genom:

```ts
import { defineComponent } from "vue";

const App = defineComponent({});

/* --- cut above ---*/

import { createApp } from "vue";
import { TranslationPlugin } from "@fkui/vue";

const app = createApp(App);
app.use(TranslationPlugin);
app.mount("#app");
```

Detta motsvarar att alla komponenter använder `mixins: [TranslationMixin]`.
Det är enbart att rekommendera för applikationer och ej för komponentbibliotek eftersom komponenter då kräver att konsumenter också använder global installation av plugin.

## `$t(key: string, [defaultValue: string], [params: Record<string, unknown>])`

- `key` - Textnyckel som ska översättas.
- `defaultValue` - Standardtext som visas när ingen översättning finns.
- `params` - Parametrar som kan interpoleras. Kräver en provider med stöd för interpolering.

Första parametern till `$t()` är textnyckeln som används för att slå upp översatt text.

```html static
<p>{{ $t("fkui.example.key") }}</p>
```

Givet att följande översättningar lästs in till `TranslationService`:

```json
{
    "fkui.example.key": "Lorem ipsum dolor sit amet"
}
```

kommer följande att renderas upp:

```html static
<p>Lorem ipsum dolor sit amet</p>
```

### Standardtexter

Den valfria parametern `defaultValue` till `$t()` är en standardtext som visas när ingen översättning finns:

```html static
<p>{{ $t("fkui.example.missing", "Standardtext") }}</p>
```

Samtliga komponenter använder alltid standardtexter.
För applikationer är det valfritt.

### Parametrar och interpolering

Använd den valfria parametern `params` som är ett objekt med parametrar för interpolering.
Exakt hur och vad som kan interpoleras beror på den provider som du använder tillsammans med `TranslationService`.
Designsystemet erbjuder enbart en rudimentär provider där `{{ value }}` används som placeholder i texten.

```html static
<p>{{ $t("fkui.example.key", { count: 10, item: "frukter" }) }}</p>
```

eller kombinerat med standardtext:

```html static
<p>
    {{ $t("fkui.example.key", "Du har {{ count }} {{ item }}", { count: 10,
    item: "frukter" }) }}
</p>
```

Andra providers kan erbjuda pluralisering, nästlade objekt, formatering, osv.
