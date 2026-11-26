---
title: Kolumntyper i tabell
short-title: Om kolumntyper
name: column-types
layout: article
alias: Kolumntyper
sortorder: 1
search:
    terms:
        - tabell
---

En kolumn i tabellen kan visa olika typer av innehåll.

Tabellen stödjer kolumntyperna:

- {@link column-type-text textfält} (enbart visning av data eller redigerbar) samt motsvarande format som de specialiserade inmatningsfälten
- {@link column-type-rowheader radrubrik}
- {@link column-type-button knapp}
- {@link column-type-anchor länk}
- {@link column-type-checkbox kryssruta}
- {@link column-type-select dropplista}
- {@link column-type-menu kontextmeny}
- {@link column-type-render renderat innehåll} (eget innehåll).

```import live-example
FTableColumnLiveExample.vue
```

Tabellen kan bara visa en typ av innehåll per kolumn.
Det går inte att blanda så att till exempel de översta raderna i en kolumn har kolumntypen dropplista och de nedersta raderna har textfält.
