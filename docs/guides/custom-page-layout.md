---
title: Egen layout till applikationsmall
layout: article
visible: false
---

Registrera en ny layout med `registerLayout(..)`.
Anropet kan exempelvis göras från din `main.ts`eller i root-komponenten som monterar applikationslayouten.
Namnet som anges är vad som senare används i `layout`-propen till `FPageLayout`.

## Registrera tema

```ts
import { registerLayout } from "@fkui/vue";

registerLayout({
    name: "my-custom",
    areas: {
        header: {
            attachPanel: "none",
            direction: "column",
        },
        toolbar: {
            attachPanel: "none",
            direction: "row",
        },
        sidebar: {
            attachPanel: "left",
            direction: "row",
        },
        content: {
            attachPanel: "none",
            direction: "column",
            scroll: true,
        },
        footer: {
            attachPanel: "none",
            direction: "column",
        },
    },
});
```

där:

- `attachPanel` talar om hur en panel ska fästas. Om ytan inte kan ta paneler sätter man `"none"`.
- `direction` talar om ifall ytan flödar horisontellt eller vertikalt.
- `scroll` talar om ifall ytan ska scrolla (i den riktning som `direction` talar om).

## Positionering och storlek

För positionering och storlek används [CSS grid](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids) på `::part(grid name)` och kan se ut så här:

```css
::part(grid my-custom) {
    grid-template:
        "sidebar header" min-content
        "sidebar toolbar" min-content
        "sidebar content" 1fr
        "footer footer" min-content
        / min-content 1fr;
}
```

Namn motsvarar de ytor som registrerats tidigare med `registerLayout()`.

## Färger

Färg och bakgrundsfärg sätts med `::part(area name)`:

```css
::part(area toolbar) {
    --f-page-layout-background: var(--fkds-color-background-secondary);
    --f-page-layout-color: var(--fkds-color-text-primary);
}
```

Namn motsvarar de ytor som registrerats tidigare med `registerLayout()`.

Vi rekommenderar att använda semantiska färger.

- Läs mer om {@link colors semantiska färger}.

## Använd eget tema

Slutligen används layouten genom att sätta det nya registrerade namnet som `layout` attributet samt implementera de ytor som definierats med hjälp av Vue slots.

```html static
<f-page-layout layout="my-custom">
    <template #header> [header] </template>
    <template #sidebar> [sidebar] </template>
    <template #toolbar> [toolbar] </template>
    <template #content> [content] </template>
    <template #footer> [footer] </template>
</f-page-layout>
```

## Justerbara ytor och paneler

Komponenten {@link FResizePane} kan användas för att skapa en yta vars storlek kan justeras av slutanvändaren.

Använd {@link useResize} för att styra {@link FResizePane} om du skapar egna paneler.
