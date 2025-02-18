---
title: Applikationslayout
status: Produktionsklar
layout: component
component:
    - FLayoutApplicationTemplate
    - FLayoutLeftPanel
    - FLayoutRightPanel
---

Applikationslayout är en uppsättning komponenter som används för att bygga upp applikationer med fördefinierade ytor.
Komponenterna består dels av en applikationsmall `FLayoutApplicationTemplate` som definierar upp ytor för sidhuvud, sidfot, toppnavigering och huvudinnehåll, och dels av två ytterligare komponenter: Vänsteryta `FLayoutLeftPanel` och Högeryta `FLayoutRightPanel`.

<!-- [html-validate-disable-next element-permitted-content -- hack to contain layout component to example wrapper] -->
<style>
  .code-preview__preview {
    transform: translateZ(0);
  }
</style>

```import fullscreen
<!-- [html-validate-disable-block unique-landmark, no-multiple-main, heading-level -- clashes with site layout] -->
<!-- [html-validate-disable-block valid-id, attribute-allowed-values -- component generates invalid id's] -->
FLayoutApplicationTemplateExample.vue
```

## Applikationsmall

Applikationsmallen `FLayoutApplicationTemplate` består av fyra ytor: sidhuvud, toppnavigering, primäryta och sidfot.

```import borderless nomarkup
<!-- [html-validate-disable-block unique-landmark, no-multiple-main -- clashes with site layout] -->
FLayoutApplicationTemplateParts.vue
```

### Sidhuvud

I ytan för sidhuvudet placeras i regel komponenten Sidhuvud `FPageheader`.
{@link FPageHeader Se sidhuvud}

### Toppnavigering

I ytan för toppnavigering kan en horisontell Navigeringsmeny `FNavigationMenu` placeras.
{@link FNavigationMenu Se Navigationsmeny}

### Primäryta

Med primär yta menas behållaren med huvudinnehåll.
Denna yta är obligatorisk och motsvarar komponentens default-slot.

I regel ska primärytan alltid ha en H1 rubrik.

### Sidfot

I ytan för sidfoten kan lägre prioriterade länkar eller information visas längst ner på sidan.

### Användning

Applikationsmallen läggs typiskt till i `App.vue` och man låter `<router-view>` renderas i default sloten (primärytan):

```html static
<template>
    <f-layout-application-template>
        <template #header>
            <!-- pageheader... --->
        </template>

        <template #top-navigation>
            <!-- top navigation... -->
        </template>

        <template #default>
            <router-view></router-view>
        </template>

        <template #footer>
            <!-- footer... -->
        </template>
    </f-layout-application-template>
</template>
```

## Vänsteryta

Vänsterytan `FLayoutLeftPanel` placeras till vänster om den primära ytan -- här kan t ex länkar för navigering till undersidor i applikationen placeras.
Den kan också användas för att visa sökalternativ då sökresultat listas i den primära ytan. Gemensamt för funktionaliteten som placeras i vänsterytan är att den påverkar vad som visas i den primära ytan.

Vänsterytan kan minimeras genom att klicka på pilarna längst upp till höger, i minimerat läge visas ytan som en tunn list som kan expanderas genom att klicka på menysymbolen.

## Högeryta

Högerytan `FLayoutRightPanel` ger möjlighet att visa detaljerad information om något som visas sammanfattat i den primära ytan.
Högerytan ytan borrar ner och fördjupar information från den primära.
Det kan vara till exempel en tabell- eller listrad i den primära ytan som man kan öppna upp och visa mer detaljerad information om i högerytan.

Den högra ytan kan stängas igen genom att klicka på krysset i det högra hörnet, men till skillnad från en modal behöver den inte stängas för att kunna visa och hantera resterande innehåll i den primära ytan.

## API

### `FLayoutApplicationTemplate`

:::api
vue:FLayoutApplicationTemplate
:::

### `FLayoutLeftPanel`

:::api
vue:FLayoutLeftPanel
:::

### `FLayoutRightPanel`

:::api
vue:FLayoutRightPanel
:::
