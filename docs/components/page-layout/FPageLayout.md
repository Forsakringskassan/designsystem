---
title: Applikationsmall
status: Beta
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

Applikationsmallen erbjuder olika layouter för att dela upp en applikation som täcker hela skärmen i ytor.
Du kan utgå från en av fyra standardlayouter eller skapa en egen.
Mallen styr hur ytorna placeras i förhållande till varandra. Storleken på en yta styrs av vad som placeras i ytan.

## Användning

```import test-id=example
<!-- [html-validate-disable-block unique-landmark, no-multiple-main, heading-level -- clashes with site layout] -->
FPageLayoutExample.vue
```

Vilken layout som används bestäms av `layout`-propen:

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

Sidlayouten i sig tar upp hela skärmstorleken men inga ytor kommer med inbyggd marginal, padding, bredd eller höjd utan storlek bestäms helt av innehållet.
Du kan med fördel använda `flex-grow: 1` för att täcka upp hela ytans maximala storlek.

::: warning

`FPageLayout` kräver att det inte finns `margin` eller `padding` på `<body>`.
Det är upp till konsumenten att säkerställa detta.
Vanligtvis är det löst i det template-projekt man använt.

:::

## Landmärken

Landmärken ingår inte i applikationslayout utan konsumenten måste själv använda lämpliga landmärken.
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
<!-- [html-validate-disable-block unique-landmark, no-multiple-main, heading-level -- clashes with site layout] -->
FPageLayoutPredefined.vue
```

## Egen layout

Utöver förkonfigurerade layouter kan man skapa en egen.

Läs mer om att {@link custom-page-layout skapa egen layout}.
