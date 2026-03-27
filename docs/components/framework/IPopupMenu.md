---
title: Popup-meny
layout: component
component: IPopupMenu
---

Popup-meny är en ramverkskomponent som används av {@link FNavigationMenu navigeringsmenyn}.

```import
IPopupMenuExample.vue
```

## Teleport

Komponenten använder {@link IPopup} och kommer därför att teleporteras till body-elementet när den visas som overlay.
Detta kan ändras till valfritt element genom att ändra värdet för `config.teleportTarget`.

## Fokushantering

Popupmenyn kräver att du själv sätter fokus till menyn ifrån knappen som öppnar den.
Detta kan du göra genom att ange en `key` i `v-model:focused-item` som matchar ett objekt i `items`.
Komponenten kommer då sätta fokus på det elementet som matchade objektet.

Se koden för ovan exempel för hur man kan hantera fokus till menyn i samband med tangentbordsnavigering.

## API

:::api
vue:IPopupMenu
:::
