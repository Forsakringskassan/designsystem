---
title: Välja rader i tabell
short-title: Välja rader
layout: article
search:
    terms:
        - tabell
---

Användaren kan välja en eller flera rader i tabellen genom komponenterna radioknapp respektive kryssruta.
Om tabellen har kryssruta (flerval) ingår även funktionen för bulkoperation (länk) i tabellen.

## Flerval

```import nomarkup
FTableBulkExampleMulti.vue
```

### Bulkoperation

Bulkoperation innebär att användaren kan välja ett antal rader och utföra åtgärd/operation för alla valda rader samtidigt.

```import
FTableBulkLiveExample.vue
```

### Ta bort rader vid bulkoperation

Om användaren kan ta bort rader eller innehåll i tabellen genom bulkoperation behöver du se till att användaren får bekräfta före borttagande.

## Enkelval

```import nomarkup
FTableBulkExampleSingle.vue
```

## Kod

{@link select-rows-code Läs om hur du sätter upp att välja rader i tabell.}
