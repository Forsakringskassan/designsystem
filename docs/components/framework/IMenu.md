---
title: Meny
layout: component
component: IMenu
---

Meny är en ramverkskomponent som används av komponenten {@link FNavigationMenu Navigeringsmeny} för att visa en rad av navigeringsalternativ.

```import
IMenuExample.vue
```

## Skärmläsare

Som standard är namnet för komponentens navigeringslandmärke `Navigeringsmeny`.
För att ändra detta ska du använda `aria-label` attributet på `i-menu`-elementet.

Komponentens `aria-label` ska innehålla ett namn som tydligt beskriver syftet av menyn.
Om du använder flera menyer eller `nav`-element samtidigt se också till att alla namn är unika.

## API

:::api
vue:IMenu
:::
