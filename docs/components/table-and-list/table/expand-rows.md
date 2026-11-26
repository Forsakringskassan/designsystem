---
title: Expandera rader i tabell
short-title: Expandera rader
layout: article
search:
    terms:
        - tabell
---

Det går att skapa ytterligare tabellrader som visas genom att expandera en rad.
Raderna kan presenteras på två sätt:

- raden följer existerande kolumner
- raden är utsträckt över alla kolumner och med valfritt innehåll.

```import live-example
FTableExpandableLiveExample.vue
```

## Felhantering och validering av nästlade rader

Tabellen stödjer inte felhantering och validering av nästlade rader.
Det är bara förälder som valideras.

Om tabellen har validering på nästlade rader måste applikationen se till att användaren får information om felet genom att till exempel expandera raden eller informera användaren genom text.

## Kod

{@link expand-rows-code Läs om hur du sätter upp att expandera rader i tabell.}
