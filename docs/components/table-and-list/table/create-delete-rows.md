---
title: Lägga till och ta bort rader i tabell
short-title: Lägga till och ta bort rader
layout: article
search:
    terms:
        - tabell
---

Om användaren ska kunna lägga till eller ta bort rader i tabellen behöver du se till att tabellen följer mönstret nedan.
När användaren lägger till en rad ska den alltid läggas sist i tabellen och fokus ska flyttas till raden som har lagts till.
Om användaren tar bort en rad ska fokus flyttas enligt prio nedan

- cell i raden ovanför
- cell i raden nedanför
- till meddelande "Tabellen är tom" om att tabellen saknar rader.

Exempel på tabell med knappar för ta bort/lägga till.

## Lägga till rader och paginering

När tabellen är paginerad och användaren kan lägga till rader bör tabellen ha sortering.
Annars kan inte användaren sortera om tabellen när nya rader tillkommit.
