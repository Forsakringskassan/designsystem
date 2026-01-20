---
title: Expandera rader (kod)
layout: article
search:
    terms:
        - tabell
---

Expanderbara rader kan presenteras på två sätt:

- rader som följer existerande kolumner
- rader med valfritt innehåll.

För båda varianterna sätter du propen `expandable-attribute` till den egenskap i objektet som innehåller rader med expanderat innehåll.

Givet följande struktur sätter du expandable-attribute till `myExpandableRow`:

// plats för kodexempel

## Följa existerande kolumner

För att skapa expanderbart innehåll som följer existerande kolumner måste du sätta `expandable-attribute` och du får inte använda slot `expandable`.
Innehållet följer då samma datastruktur som ordinarie rader.

Se nedan exempel av data som du kan använda för att generera en expanderbar rad som innehåller två tabellrader.

// plats för kodexempel

// plats för kodexempel

// plats för kodexempel

## Valfritt innehåll

För att själv ta kontroll över hur raden presenteras använder du sloten `expandable`.
Ditt innehåll placeras i en cell som sträcker sig över hela raden och vad som ligger i datastrukturen behöver inte följa ordinarie rader.

Skapa inte ett för komplext expanderat innehåll som till exempel att placera ytterligare expanderbara tabeller inuti.

// plats för kodexempel
