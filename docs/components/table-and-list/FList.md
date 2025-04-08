---
title: Lista
status: Produktionsklar
layout: component
sortorder: 2
component: FList
---

Lista används när användaren behöver gå igenom ett antal poster för att hitta en särskild post som ska visas eller hanteras.

```import live-example
FListLiveExample.vue
```

## Ange nyckel (`keyAttribute`)

Med `keyAttribute` så kan du ange namnet för en nyckel (`key`) som finns i varje list-ojekt och innehåller ett värde som kan användas för att identifiera olika objekt.
Om detta anges, så måste varje objekt innehålla denna nyckel med ett unikt värde.

Att använda `keyAttribute` är valfritt och behövs inte anges om du inte har nåt naturligt id att ange för dina objekt.
Men om det är tänkt att objekten ska laddas om från REST-api eller liknande så måste du använda `keyAttribute` för att aktuell status för dina objekt ska kunna bibehållas.

```diff
-<f-list :items="myitems">
+<f-list :items="myitems" key-attribute="id">
```

```ts
// The key "id" is used for "keyAttribute".
const myItems = [
    { id: "a", name: "Banan" },
    { id: "b", name: "Äpple" },
];
```

## Användning av komponent

**Komponent motsvarar följande HTML element:** [Unordered List](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

## API

:::api
vue:FList
:::
