---
name: FDefinitionListPageObject
title: "FDefinitionListPageObject"
layout: api.class
---

Använd `FDefinitionListPageObject` för att hämta information relaterat till {@link FDefinitionList definitionslista}.

Samtliga exempel använder detta underlag:

```import static
FDefinitionListPageObject.vue
```

## FDefinitionListPageObject()

Skapar ett nytt Cypress-pageobjekt.

### Syntax

```ts nocompile nolint
new FDefinitionListPageObject(selector);
```

#### Parametrar

`selector: string`
: Selector till elementet. Du kan med fördel använda direktivet {@link TestPlugin `v-test`} för din selector.

### Exempel

```import
FDefinitionListPageObject.cy.ts
```

## description()

Används för att komma åt beskrivningen för en definition i definitionslistan.

### Syntax

```ts nocompile nolint
description(index);
```

#### Parametrar

`index: number`
: Index för definitionen i definitionslistan.

#### Returvärde

`HTMLElement` som innehåller definitionens beskrivning.

### Exempel

```import
FDefinitionListPageObject-description.cy.ts
```

## numberOfDefinitions()

Används för att komma åt antalet definitioner i definitionslistan.

### Syntax

```ts nocompile nolint
numberOfDefinitions();
```

#### Returvärde

`Number` ger tillbaka status på antalet definitioner i definitionslistan.

### Exempel

```import
FDefinitionListPageObject-number-of-definitions.cy.ts
```

## term()

Används för att komma åt termen för en definition i definitionslistan.

### Syntax

```ts nocompile nolint
term(index);
```

#### Parametrar

`index: number`
: Index för definitionen i definitionslistan.

#### Returvärde

`HTMLElement` som innehåller definitionens term.

### Exempel

```import
FDefinitionListPageObject-term.cy.ts
```
