---
title: Logotyp
status: Produktionsklar
layout: component
component: FLogo
---

Logotyp används för att visa en responsiv logo.

```import live-example
FLogoLiveExample.vue
```

## Ange logotyp

För att bestämma vilken logo som ska visas används CSS variabler för respektive storlek.
Variablerna definieras som `background`.

För att kunna använda `FLogo` med `responsive` krävs det att båda variabler är satta.

```css
:root {
    --f-logo-image-small: url("path/to/image-small.svg");
    --f-logo-image-large: url("path/to/image-large.svg");
}
```

För att ändra logotypens storlek används CSS variabler.
Storleks-variablerna definieras som `padding`.

Logotypen kommer att centreras samt växa eller krympa för att passa inom given storlek.

```css
:root {
    --f-logo-size-small: 0.6rem;
    --f-logo-size-large: 0.6rem 4rem;
}
```

## API

:::api
vue:FLogo
:::
