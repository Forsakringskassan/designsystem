---
title: Startpunkt
status: Produktionsklar
layout: component
component:
    - name: entrypoint
      source: components/**/_entrypoint.scss
---

Startpunkt används för att framhäva en länk extra tydligt, som till exempel en ingång till en digital tjänst.

Startpunkten tar upp 2/3 av tillgänglig yta i desktopläge och 100% i mobilt läge.

```import live-example
EntrypointLiveExample.vue
```

## Copy

Texten på en startpunkt ska vara begriplig utan någon annan kontext, men hållas så kort som möjligt. Det första ordet bör vara ett verb i imperativ som uttrycker det användaren ska göra.

Bra texter på startpunkter är t.ex. "Ansök om VAB" och "Ansök om sjukpenning".

En startpunkt ska alltid ha en skärmläsartext som ska förtydliga att startpunkten leder till en tjänst och inte är en vanlig länk. Exempel som motsvarar texterna ovan är "Till tjänsten ansök om vab" och "Till tjänsten ansök om sjukpenning".

## Fullbredd

Vill du styra bredden med hjälp av gridsystemet använd klassen `entrypoint--full-width`.
