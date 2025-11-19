---
name: FPaginatorPageObject
title: "FPaginatorPageObject"
layout: api.class
---

Använd `FPaginatorPageObject` för att hämta information relaterat till {@link pagination FPaginator}.

Samtliga exempel använder detta underlag:

```import static
FPaginatorPageObject.vue
```

## FPaginatorPageObject()

Skapar ett nytt Cypress-pageobjekt.

### Syntax

```ts nocompile nolint
new FPaginatorPageObject(selector);
```

#### Parametrar

`selector: string`
: Selector till `FPaginator` elementet. Du kan med fördel använda {@link TestPlugin `v-test`} direktivet för din selector.

### Exempel

```import static
FPaginatorPageObject.cy.ts
```

## currentPageButton()

Används för att komma åt knapp för den nuvarande sidan.

### Syntax

```ts nocompile
currentPageButton();
```

#### Returvärde

`HTMLElement` med knappen för den nuvarande sidan.

### Exempel

```import static
FPaginatorPageObject-current-page-button.cy.ts
```

## nextButton()

Används för att komma åt knapp för att gå till nästa sida.

### Syntax

```ts nocompile
nextButton();
```

#### Returvärde

`HTMLElement` med knappen för att gå till nästa sida.

### Exempel

```import static
FPaginatorPageObject-next-button.cy.ts
```

## pageButton()

Används för att komma åt knapp för att gå till en specifik sida eller samtliga sidknappar.

### Syntax

```ts nocompile
pageButton(page);
```

#### Parametrar

`page?: number | string`
: Nummer för knappens index; sträng för knappens sidnummer; odefinierat för samtliga sidknappar.

#### Returvärde

`HTMLElement` med knappen för att gå till den specifika sidan (om `page` är definerat); `HTMLElement[]` med samtliga sidknappar (om `page` är odefinerat).

### Exempel

```import static
FPaginatorPageObject-page-button.cy.ts
```

## pageCounter()

Används för att komma åt element för sidräknare.
Elementet ersätter sidknapparna i kompakt läge.

### Syntax

```ts nocompile
pageCounter();
```

#### Returvärde

`HTMLElement` med sidräknare.

### Exempel

```import static
FPaginatorPageObject-page-counter.cy.ts
```

## previousButton()

Används för att komma åt knapp för att gå till föregående sida.

### Syntax

```ts nocompile
previousButton();
```

#### Returvärde

`HTMLElement` med knappen för att gå till föregående sida.

### Exempel

```import static
FPaginatorPageObject-previous-button.cy.ts
```
