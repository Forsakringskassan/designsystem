---
title: Lägga till och ta bort rader i tabell
short-title: Lägga till och ta bort rader
layout: article
search:
    terms:
        - tabell
---

```import
FTableAddRemoveExample.vue
```

När användaren lägger till en rad ska den alltid läggas sist i tabellen. Fokus ska vara kvar på Lägg till-knappen.

När användaren tar bort en rad ska fokus flyttas enligt prio:

1. cell i raden ovanför
2. cell i raden nedanför
3. till meddelande "Tabellen är tom" om att tabellen saknar rader.

Använd alltid en {@link FConfirmModal bekräftelsemodal} vid borttag av rader.

## Lägga till rader och paginering

När tabellen är paginerad och användaren kan lägga till rader bör tabellen ha sortering.
Annars kan inte användaren sortera om tabellen när nya rader tillkommit.

## Kod

{@link create-delete-rows-code Läs mer om hur du kodmässigt lägger till och tar bort rader i en tabell.}
