---
title: Sätta kolumnbredd i tabell
short-title: Sätta kolumnbredd
layout: article
search:
    terms:
        - kolumnbredd
        - tabell
---

Kolumnernas bredd i tabellen kan justeras med olika parametrar.

## Användning

```import
FTableWidthExample.vue
```

- `Frukt` kolumnen har `"grow"`.
- `Land` kolumnen har `width` satt.
- `Pris per kilo` kolumnen har `"shrink"`.

### `size`

Är det föredragna sättet att justera kolumnbredder på eftersom det är mest responsivt.

- `"grow"` kolumnen tar upp så mycket utrymme den kan.
- `"shrink"` kolumnen tar upp så lite den kan utan att kapa innehållet.

### `width`

Används för att sätta en mer specifik bredd än vad `size` kan ge. Skrivs som `"50%"`.

Enhet:

- `"%"`

Kolumnen tar upp den precentuella angivna delen. Den kan både växa och krympa.

Enheter:

- `"px"`
- `"rem"`
- `"ch"`

Sätter en bredd som inte kan bli mindre eller större än det som är satt. Bör användas med försiktighet eftersom det gör tabellen mindre responsiv.

Kräver att en kolumn i tabellen får växa med `"grow"` för att inte själv växa. Om tabellen bara har kolumner med `"shrink"` och tabellen får växa kommer kolumnen med `width` satt att växa.

## Användning av procentuella enheter på kolumnerna

```import
FTableWidthPercentExample.vue
```
