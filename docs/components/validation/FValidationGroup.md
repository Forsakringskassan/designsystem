---
title: Validering samlad
status: Produktionsklar
layout: component
component: FValidationGroup
---

Samlad validering används för att få information om alla objekt i en grupp uppfyller valideringskriterier. Tillgång till gruppens valideringstatus nås enkelt via `v-model`. Standard är att valideringsevent från underliggande inmatningsfält skickas vidare uppåt om man inte sätter `stopPropagation` till `false`.

```import
FValidationGroupExample.vue
```

## API

:::api
vue:FValidationGroup
:::
