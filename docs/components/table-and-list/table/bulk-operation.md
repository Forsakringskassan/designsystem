---
title: Bulkoperation i tabell
short-title: Bulkoperation
layout: article
search:
    terms:
        - kryssruta
---

Bulkoperation innebär att användaren kan välja ett antal rader och utföra åtgärd/operation för alla valda rader samtidigt.

## Ta bort rader vid bulkoperation

Om användaren kan ta bort rader eller innehåll i tabellen behöver du se till att användaren får bekräfta före borttagande.

## Bulkoperation med sortering och filtrering

Så här fungerar bulkoperation när du har både sortering och filtrering samtidigt:

- När du väljer "Välj alla" markeras alla synliga rader.
- När du filtrerar innehållet i tabellen rensas tidigare val.
- När du sorterar innehållet i tabellen behåller valda rader sin markering.
- När du lägger till en rad uppdateras bulkstatus?

## Bulkoperation med paginering

Så här fungerar bulkoperation när har paginering:

- När du väljer "Välj alla" markeras alla rader i tabellen inte bara den aktuella sidan.
- De rader som är valda behåller sin markering när du flyttar dig mellan sidorna.

## Bulkoperation med filtrering och paginering

Så här fungerar bulkoperation när du har både filtering och paginering samtidigt:

- När du väljer "Välj alla" markeras alla rader i hela det filtrerade resultatet.
- Det gäller även om du står på sida 2 eller en annan sida i pagineringen.
- När du avmarkerar "Välj alla" rensas valen på samtliga sidor.

## Kod

{@link bulk-operation-code Läs om hur du sätter upp bulkoperation i tabell.}
