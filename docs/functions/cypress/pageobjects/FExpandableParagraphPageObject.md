---
name: FExpandableParagraphPageObject
title: FExpandableParagraphPageObject
layout: api.class
---

Använd `FExpandableParagraphPageObject` för att hämta information relaterat till {@link FExpandableParagraph}.

Samtliga exempel använder detta underlag:

```import static
FExpandableParagraphPageObject/FExpandableParagraphPageObject.vue
```

## FExpandableParagraphPageObject()

Skapar ett nytt Cypress-pageobjekt.

### Syntax

```ts nocompile nolint
new FExpandableParagraphPageObject(selector);
```

#### Parametrar

`selector: string` {@optional}
: Selector till `FExpandableParagraph` elementet. Du kan med fördel använda {@link TestPlugin `v-test`} direktivet för din selector.

## expandCollapseIcon()

Används för att komma åt ikonen som kan expandera och kollapsa det expanderbara stycket.

### Syntax

```ts nocompile
expandCollapseIcon();
```

#### Returvärde

`HTMLElement` med elementet som innehåller ikonen som kan expandera och kollapsa det expanderbara stycket.

### Exempel

```import static
FExpandableParagraphPageObject/FExpandableParagraphPageObject-expandCollapse.cy.ts
```

## header()

Används för att komma åt rubriken på den det expanderbara stycket.

### Syntax

```ts nocompile
header();
```

#### Returvärde

`HTMLElement` med elementet som innehåller rubriken på det expanderbara stycket.

### Exempel

```import static
FExpandableParagraphPageObject/FExpandableParagraphPageObject-header.cy.ts
```

## body()

Används för att komma åt innehållet på det expanderbara stycket.

### Syntax

```ts nocompile
body();
```

#### Returvärde

`HTMLElement` med elementet som innehåller innehållet på det expanderbara stycket.

### Exempel

```import static
FExpandableParagraphPageObject/FExpandableParagraphPageObject-body.cy.ts
```

## relatedInfo()

Används för att komma åt relaterad information på det expanderbara stycket.

### Syntax

```ts nocompile
relatedInfo();
```

#### Returvärde

`HTMLElement` med elementet som innehåller relaterad information på det expanderbara stycket.

### Exempel

```import static
FExpandableParagraphPageObject/FExpandableParagraphPageObject-relatedInfo.cy.ts
```

## isOpen()

Används för att veta ifall det expanderbara stycket är öppet eller inte.

### Syntax

```ts nocompile
isOpen();
```

#### Returvärde

`boolean` för att veta ifall det expanderbara stycket är öppet eller inte.

### Exempel

```import static
FExpandableParagraphPageObject/FExpandableParagraphPageObject-isOpen.cy.ts
```
