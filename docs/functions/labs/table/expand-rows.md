---
title: Expandera rader
layout: article
search:
    terms:
        - tabell
---

Det går att skapa ytterligare tabellrader som visas när användaren expanderar en rad.
Raderna kan presenteras på två sätt: de kan följa existerande kolumner eller innehålla valfritt innehåll som sträcker sig över hela raden.

{@link expand-rows-code Detaljerad API-beskrivning för expanderbara rader}

## Följa existerande kolumner

De nästlade raderna visas med exakt samma kolumnkonfiguration som övriga rader.
Det är det enklaste sättet att visa expanderat innehåll när strukturen på nästlade rader matchar förälderraden.

// plats för kodexempel

## Valfritt innehåll

Med sloten `expandable` kan du ta full kontroll över vad som visas i den expanderade raden.
Innehållet presenteras i en cell som sträcker sig över hela raden.

// plats för kodexempel

## Bra att veta

- Tabellen stödjer inte felhantering och validering av nästlade rader — det är bara föräldraraden som valideras.
- Om tabellen har validering på nästlade rader måste applikationen se till att användaren informeras om felet, till exempel genom att expandera raden automatiskt eller visa ett felmeddelande.
- Skapa inte för komplext expanderat innehåll, till exempel ytterligare expanderbara tabeller inuti.
