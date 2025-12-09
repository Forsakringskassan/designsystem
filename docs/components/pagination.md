---
title: Paginering
status: Produktionsklar
layout: component
component:
    - FPaginateDataset
    - FPaginator
---

```import live-example
PaginationExample.vue
```

## Hur används komponenten?

Paginering används för att låta användaren navigera mellan innehåll som är uppdelat på flera sidor.
Innehållet kan till exempel vara sökresultat eller tabeller.

## Tänk på att

- Fundera på hur många objekt som ska visas på en sida så att det blir optimalt för användaren.
- Om du kombinerar paginering med tabell kan vissa funktioner i tabell skapa oönskade beteenden vid paginering.

## Responsivitet

Paginering visar sidor som standard tillsammans med knappar för föregående och nästa sida, se exempel nedan.
När fönstret blir smalare och paginering inte får plats ersätts sidorna med en text som visar vilken sida användaren befinner sig på, se exempel överst.

```import vue
PaginationPageButtonExample.vue
```

## Hämtning av data

Om du inte har tillgång till hela datamängden direkt kan du använda dynamisk hämtning av data.
Då hämtar du bara den data som ska visas på aktuell sida.
Använd attributen `itemsLength` och `fetchData`.
Med attributet `itemsLength` anger du hur stor den totala datamängden är och som kommer ligga till grund för siduppdelning.
Attributet `fetchData` anger den funktion som ska användas för hämtning av det data ska visas på aktuell sida.

```ts static
const persons = [] as unknown[];

/* --- cut above --- */

async function fetchData(first: number, last: number) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return persons.slice(first, last);
}
```

## Textnycklar

Läs mer om att {@link translate-text anpassa och översätta text}.

:::api
translation:FPaginator
:::

## API

### FPaginateDataset

:::api
vue:FPaginateDataset
:::

### FPaginator

:::api
vue:FPaginator
:::
