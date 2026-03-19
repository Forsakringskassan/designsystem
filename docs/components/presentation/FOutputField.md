---
title: Presentationsfält - dynamiskt
status: Produktionsklar
layout: component
component: FOutputField
---

Dynamiskt presentationsfält används för att presentera information som användaren inte ska kunna redigera och som är dynamisk. Det kan till exempel vara resultatet av en beräkning baserat på inmatade värden eller resultatet av en uppslagning baserat på en interaktion från användaren.
Komponenten presenterar dynamisk text i ett `<output>`-element.
Förslagsvis så kombineras komponenten med {@link FormatPlugin} för att formatera resultaten på önskat sätt.

```import
FOutputFieldExample.vue
```

Attributet `for` ska läggas till på `<f-output-field>` för att få en koppling till de inmatningsfält som används.
Attributet `for` tar en sträng med mellanslag som avdelare. Varje sträng separerad med ett mellanslag är ett id som motsvarar ett element.

## API

:::api
vue:FOutputField
:::
