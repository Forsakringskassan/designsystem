---
title: FPageLayout
status: Produktionsklar
layout: component
component: FPageLayout
---

<!-- to force the examples to a maximum size -->
<!-- [html-validate-disable-next element-permitted-content -- hack to contain layout component to example wrapper] -->
<style>
[data-test=example] .code-preview__preview {
	container-type: size;
	aspect-ratio: 16 / 9;
}
</style>

## Användning

```import test-id=example
FPageLayoutExample.vue
```

Vilken layout som används bestämms av `layout`-propen:

```html static
<f-page-layout layout="three-column"></f-page-layout>
```

Vilka ytor som finns varierar mellan layouter.
Ytans innehåll fylls med hjälp av Vue slots med motsvarande namn.

För att fylla ytan `header` med innehåll:

```html static
<f-page-layout layout="three-column">
    <template #header>
        <header>
            <h1>My header</h1>
        </header>
    </template>
</f-page-layout>
```

Sidlayouten i sig tar upp hela skärmstorleken men inga ytor kommer med inbyggd marginal, padding, bredd eller höjd utan storlek bestämms helt av innehållet.
Du kan med fördel använda `flew-grow: 1` för att täcka upp hela ytans maximala storlek.

## Landmärken

Landmärken ingår inte i applikationslayout utan konsumenten måste själv använda lämpliga landlärken.
Vi rekommenderar att använda följande landmärken i respektive yta:

- `<header>` i `header` ytan.
- `<footer>` i `footer` ytan.
- `<main>` i `content` ytan.

Beroende på innehåll i `left` och `right` ytorna är följande landmärken lämpliga:

- `<nav>` om ytan innehåller navigering exempelvis en meny.
- `<aside>` om ytan innehåller sekundärt innehåll som inte direkt relaterar till det primära innehållet.

## Standardlayouter

Följande förkonfigurerade layouter följer med som standard:

```import borderless nomarkup
FPageLayoutPredefined.vue
```

## Egen layout

Registrera en ny layout med `registerLayout`.
Namnet som anges är vad som senare används i `layout`-propen till `FPageLayout`.

```ts
registerLayout({
    name: "my-custom",
    areas: {
        header: {
            attach: "none",
            direction: "column",
        },
        toolbar: {
            attach: "none",
            direction: "row",
        },
        sidebar: {
            attach: "left",
            direction: "row",
        },
        content: {
            attach: "none",
            direction: "column",
        },
        footer: {
            attach: "none",
            direction: "column",
        },
    },
});
```

där:

- `attach` talar om var en panel kan fästas (eller inte kan fästas med `"none"`).
- `direction` talar om ifall ytan földar horizontalt eller vertikalt.

Styling använder [CSS grid](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids) på `::part(grid name)` och kan se ut så här:

```css
::part(grid my-custom) {
    grid-template:
        "sidebar header" min-content
        "sidebar toolbar" min-content
        "sidebar content"
        "footer footer" min-content
        / min-content 1fr;
}
```

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
