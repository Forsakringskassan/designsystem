---
name: FFileItemPageObject
title: "FFileItemPageObject: FFileItemPageObject() constructor"
short-title: FFileItemPageObject()
sortorder: 1
layout: article
---

Använd `FFileItemPageObject` för att hämta information relaterat till {@link FFileItem filpresentatören }.

## Syntax

```ts
new FFileItemPageObject(selector);
```

### Parametrar

`selector: string`
: Selector till `FFileItem` elementet. Du kan med fördel använda {@link TestPlugin `v-test`} direktivet för din selector.

## Publika variablar

`fileName` - filens namn inklusive filändelsen\
`fileIcon` - namnet på filens ikon\
`cancelDeleteButton` - "Avbryt"/"Ta bort" knapp element\
`progressMeter` - selektorn till förkoppsindikatorn (FProgressbar)

## Exempel

```import static
FFileItemPageObject.vue
```

```import
FFileItemPageObject.cy.ts
```

## Relaterat

- {@link FFileItem}
