---
title: Bulkoperation
layout: article
search:
    terms:
        - tabell
---

Bulkoperation innebär att användaren kan välja flera rader i en tabell och utföra samma åtgärd för alla valda rader samtidigt.
Det är särskilt användbart när användaren behöver hantera många poster på ett effektivt sätt, till exempel ta bort eller uppdatera flera rader i ett steg.

I FTable byggs bulkoperation med val av rader via selectable="single" eller selectable="multi" tillsammans med selected-rows.

I exemplet nedan kan användaren markera flera frukter och sedan ta bort de markerade raderna med en gemensam åtgärd.

Exemplet nedan visar bulkoperation med frukter.

```import
FTableBulkOperationExample.vue
```

## För utvecklare

{@link bulk-operation-code Detaljerad API-beskrivning för bulkoperation}
