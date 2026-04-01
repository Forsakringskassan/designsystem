---
name: FListPageObject
title: FListPageObject
layout: api.class
---

Använd `FListPageObject` för att hämta information relaterat till {@link FList}.

Samtliga exempel använder detta underlag:

```import static
FListPageObject.vue
```

## FListPageObject()

Skapar ett nytt Cypress-pageobjekt.

### Syntax

```ts nocompile nolint
new FListPageObject(selector);
```

#### Parametrar

`selector: string` {@optional}
: Selector till `FList` elementet. Du kan med fördel använda {@link TestPlugin `v-test`} direktivet för din selector.

## listItems()

Används för att komma åt element i listan.

### Syntax

```ts nocompile
listItems();
```

#### Returvärde

`HTMLElement[]` med samtliga element i listan.

### Exempel

```import static
FListPageObject-list-items.cy.ts
```

## emptyMessage()

Används för att komma åt meddelandet som visas när listan är tom.

### Syntax

```ts nocompile
emptyMessage();
```

#### Returvärde

`HTMLElement` med elementet som innehåller "Listan är tom" meddelandet.

### Exempel

```import static
FListPageObject-empty-message.cy.ts
```
