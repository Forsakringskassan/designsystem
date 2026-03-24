---
title: Navigera i tabell
layout: article
search:
    terms:
        - tabell
        - tangentbord
        - tangentbordsnavigering
---

Tabellen följer ARIA-mönstret för `grid` och `treegrid` och stödjer tangentbordsnavigering med piltangenterna.
Navigeringen är inte cirkulär — piltangenterna stannar vid kanten av tabellen.

// plats för kodexempel

## Tangentbordsnavigering

| Tangent | Beskrivning |
| --- | --- |
| Pil upp | Flytta fokus till cellen ovanför |
| Pil ner | Flytta fokus till cellen nedanför |
| Högerpil | Flytta fokus till cellen till höger |
| Vänsterpil | Flytta fokus till cellen till vänster |
| Home | Flytta fokus till första cellen i raden |
| End | Flytta fokus till sista cellen i raden |
| Ctrl + Home | Flytta fokus till första cellen i första dataraden |
| Ctrl + End | Flytta fokus till sista cellen i sista raden |
| Tab | Navigera in i tabellen, stannar vid senast besökta cell |
| Shift + Tab | Navigera ut ur tabellen bakåt |

## Redigera celler

När en cell är redigerbar aktiveras redigeringsläget automatiskt vid knapptryckning.

| Tangent | Beskrivning |
| --- | --- |
| Alfanumerisk tangent | Öppnar redigeringsläge och skriver in tecknet |
| Enter | Öppnar redigeringsläge, eller sparar och flyttar fokus till cellen nedanför |
| Escape | Avbryter redigering och återställer ursprungsvärdet |
| Tab | Sparar och flyttar fokus till nästa cell |
| Shift + Tab | Sparar och flyttar fokus till föregående cell |

## Bra att veta

- Om en cell innehåller ett interagerbart objekt som ett inmatningsfält eller en dropplista får objektet direkt fokus.
- Om användaren tabbar ut ur tabellen och sedan tabbar tillbaka med Shift + Tab hamnar fokus på senast besökta cell.
- Det finns en begränsning i scrollning: när användaren navigerar till en cell som är delvis synlig i fönstret får cellen fokus men tabellen skrollar inte för att göra hela cellen synlig. Tabellen skrollar först när cellen befinner sig helt utanför fönstret. Det gäller både vertikal och horisontell scrollning.
