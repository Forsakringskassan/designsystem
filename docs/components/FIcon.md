---
title: Ikon
status: Produktionsklar
layout: component
component: FIcon
---

## Innan användning

För att använda ikoner måste du aktivt i din applikation ladda in den `spritesheet` med ikoner som du vill använda.
FKUI-komponenterna är beroende utav att ett ikon-paket är inladdat.

Placera följande i din kod:

```js
import "@fkui/icon-lib-default/dist/f";
```

Exemplet ovan använder standardpaketet för ikoner från FKUI, `@fkui/icon-lib-default`.
För att använda ett annat ikon-paket, ersätt med namnet på det paketet.

```import
FIconError.vue
```

## Informationsbärande ikon

Som standard är ikonen gömd för skärmläsare.
Om du istället vill skapa en informationsbärande ikon kan du använda slot som i nedan exempel, eller sätta beskrivande text med aria-attribut på komponenten.

```import
FIconInfo.vue
```

## Stackbara ikoner

```import
FIconStack.vue
```

## Användning av annat ikon-bibliotek

```import
FIconLibrary.vue
```

## Spegling och rotation av ikoner

Original:

```import
FIconDefault.vue
```

Spegling:

```import
FIconFlip.vue
```

Rotation:

```import
FIconRotate.vue
```

Ikon innuti cirkel:
Wrappa ikoner med klassen `icon-stack--circle` alternativt `icon-stack--circle-bottom` för att applicera ikon innuti en cirkel.

```import
FIconCircleBackground.vue
```

### Alla ikoner

```import
FIconAll.vue
```

## API

:::api
vue:FIcon
:::
