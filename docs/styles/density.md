---
title: Densitet
layout: pattern
---

Densitet styr hur många komponenter och hur mycket information som får plats på skärmen utan att
användaren behöver skrolla. Densitet påverkar en komponents höjd samt avståndet mellan komponenter.
Hög densitet ger en kompakt layout för applikationer som behöver presentera mycket information som
användaren måste kunna överblicka.

```import nomarkup
DensityExample.vue
```

Densitet kan användas för hela sidor, avgränsade ytor och komponenter.
En hög densitet kan till exempel användas för att presentera en tabell med mycket information på en
sida som i övrigt är luftig.
Använd inte densitet för att ändra storleken på enskilda komponenter som till exempel en knapp eller ett inmatningsfält.

-   Designsystemet har tre nivåer av densitet: standard, kompakt och extra kompakt.
-   Densitet är frikopplat från textstorlek.
    Till exempel går det att kombinera en relativt stor textstorlek med hög densitet.
-   En högre densitet ger inte mindre horisontellt utrymme för text.
    Till exempel ska en kolumn i en tabell visa samma mängd tecken oavsett vald densitet.

Jämför olika nivåer {@link compare-density här}.

## Ändra densitet

Du kan ändra nivå genom att ange någon av följande klasser:

| Klass             | Beskrivning   |
| ----------------- | ------------- |
| `density-default` | Standard      |
| `density-dense`   | Kompakt       |
| `density-densest` | Extra kompakt |

## Anpassa för egen komponent

För att anpassa densitet för egna komponenter behöver du gå igenom alla vertikala avstånd,
som till exempel `margin`, `padding`, `top`, och `bottom`.
Använd hjälpfunktionen {@link densify `densify`} för de vertikala avstånd som ska vara påverkade av densitet.
Se till att bredden är oförändrad av densitetsändringen.
