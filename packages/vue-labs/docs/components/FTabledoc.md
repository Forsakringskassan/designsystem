---
title: Tabell
status: Draft
layout: component
sortorder: 1
component:
    - FTable
search:
    terms:
        - navigering i tabell
        - tangentbordsnavigering
        - kolumn
        - rad
        - kolumnrubrik
        - radrubrik
        - kolumntyper
---

Använd en tabell när användaren behöver analysera och jämföra information strukturerad i rader och kolumner.
Tabeller kan antingen vara enkla tabeller för presentation eller vara mer avancerade tabeller med olika typer av interaktioner.

I en tabell har varje rad samma grupper av information som visas kolumnvis, till exempel namn, datum, belopp och diarienummer.

(länk table Här hittar du information om de gamla tabellkomponenerna datatabell och interaktiv tabell.)

Exempel på tabell.

Använd inte tabell för att

- sätta upp innehåll på en sida
- visa enkel information utan kolumnrubriker.

## Navigering i tabell

Navigering i en tabell styrs av vilken role som tabellen har.

Du sätter ingen role om tabellen enbart ska presentera data.
Om tabellen har expanderbara rader ska du sätta role:treegrid oavsett vilka andra funktioner som ingår i tabellen.
För tabeller som innehåller andra funktioner än expanderbara rader ska du sätta role:grid.
Det går inte att navigera till eller i en tabell som saknar role.
Användare med skärmläsare kommer kunna navigera i tabellen och få den uppläst förutsatt att du....(fråga)
Vid role:grid eller role:treegrid navigerar användren till tabellen genom tabbning.
När användaren tabbat sig till tabellen sker navigering inom tabellen med hjälp av piltangenterna.

### Tangentbordsnavigering

Tabellen har stöd för följande tangenter:

- pil upp: flyttar fokus till cell com ligger ovanför
- pil ner: flyttar fokus till cell som ligger nedanför
- högerpil: flyttar fokus till cell som ligger till höger
- vänsterpil: flyttar fokus till cell som ligger till vänster
- Home: flyttar fokus till första cellen i raden
- End: flyttar fokus till sista cellen i raden
- ctrl + Home: flyttar fokus till cell längst till vänster i översta raden
- ctrl + End: flyttar fokus till cell längst till höger i nedersta raden.

## Utforma en tabell

(länk design-table Läs om hur du utformar en tabell.)

## Presentera data

(länk present-data Läs om hur du presenterar data i tabell.)

## Tabellfunktioner

(länk f-table-functions Läs om vilka funktioner som kan finnas i tabellen.)
