---
title: Sidhuvud
status: Produktionsklar
layout: component
component: FPageHeader
---

Sidhuvud ska visas längst upp på applikationer som öppnas i ett eget webbläsarfönster. Den innehåller alltid Försäkringskassans logotyp och namnet på applikationen

```import
FPageHeaderDefault.vue
```

Vid större skärmstorlekar visas hela Försäkringskassans logotyp med text och vid mindre visas en komprimerad variant med endast symbol.

I fall där applikationen innehåller flera olika sidor kan logotypen göras till en klickbar länk som leder användaren tillbaka till applikationens förstasida

Sidhuvudet kan också visa sekundär information till höger.

## Egen logotyp och brytpunkt

```import
FPageHeaderCustomLogo.vue
```

## Skiplink

Skiplink är en särskild länk som fungerar som det första tabbningsbara elementet och visas endast när det fokuserats.
Syftet är att snabbt låta en tangenbordsnavigerande användare hoppa till det primära innehållet utan att navigera genom navigeringsmenyer osv.

Skiplink aktiveras genom att sätta`skipLink` till det id som innehåller det primära innehållet:

```diff
 <header>
     <f-page-header
+        skip-link="awesome-id"
     </f-page-header>
 </header>
+<main>
+    <h1 id="awesome-id" tabindex="-1">
+</main>
```

Notera att elementet måste vara fokuserbart.

## API

:::api
vue:FPageHeader
:::
