---
title: Redigera innehåll i tabell
short-title: Redigera innehåll
layout: article
search:
    terms:
        - tabell
---

För tabell finns det två typer av redigering: inline-redigering (exempel nedan) och via modal.

```import
FTableInlineEdit.vue
```

## Inline-redigering

Användaren redigerar direkt innehållet på en rad genom att stå i aktuell cell.

Kolumntyperna {@link column-type-text Text} och {@link column-type-select Dropplista} har stöd för inline-redigering.

### Text

Redigering påbörjas genom att:

- trycka på `Enter` i fokuserad cell (redigera innehåll)
- börja skriva i fokuserad cell (ersätter innehåll)
- klicka på cell

Redigering avslutas genom att:

- trycka på `Enter` (fokus hamnar på underliggande cell)
- trycka på `Tab` (fokus hamnar på nästa cell)
- trycka på `Shift + Tab` (fokus hamnar på föregående cell)
- klicka utanför cellen

Redigering avbryts genom att:

- klicka på `Escape` (fokus kvarstår på cell)

### Dropplista

Redigering påbörjas genom att:

- trycka på `Enter` i fokuserad cell
- klicka på cell

Redigering avslutas genom att på valt alternativ:

- trycka på `Enter` (fokus hamnar på underliggande cell)
- klicka på ett alternativ (fokus hamnar på underliggande cell)

Redigering avbryts genom att:

- klicka på `Escape` (fokus kvarstår på cell)
- trycka på `Tab` (fokus hamnar på nästa cell)
- trycka på `Shift + Tab` (fokus hamnar på föregående cell)
- klicka utanför cellen

## Redigering via modaler

Användaren öppnar separat formulär eller modal för att redigera innehåll på en rad.

```import
FTableCrudEdit.vue
```

Med {@link FCrudDataset Datamängdredigeraren} kan du lägga till funktionalitet för att skapa, ändra och ta bort rader i tabellen via modaler.

## Mobila enheter och redigerbar tabell

En redigerbar tabell ska inte användas i de fall användaren har mobila enheter/surfplattor.
Den redigerbara tabellen har begränsningar som gör det omöjligt för en användare att kunna redigera och få översikt.
Samma sak gäller även för redigerbar tabell och användare med skärmläsarverktyg som voiceover och talkback.

{@link index Läs mer om mobila enheter och tabell.}

## Kod

{@link edit-code Läs om hur du sätter upp att redigera innehåll i tabell.}
