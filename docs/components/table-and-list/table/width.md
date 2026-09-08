---
title: Sätta kolumnbredd i tabell
short-title: Sätta kolumnbredd
layout: article
search:
    terms:
        - kolumnbredd
        - tabell
---

Kolumnernas bredd i tabellen kan skjusteras med olika parametrar.

## Användning

```import
FTableWidthExample.vue
```

- `Frukt` kolumnen har `"grow"`.
- `Land` kolumnen har `width` satt.
- `Pris per kilo` kolumnen har `"shrink"`.

### `size`

Är det föredragna sättet att skjustera kolumnbredder på eftersom det är mest responsivt.

- `"grow"` kolumnen tar upp så mycket utrymme den kan.
- `"shrink"` kolumnen tar upp så lite den kan utan att kapa innehållet.

### `width`

Sätter en bredd som inte kan bli mindre eller större än det som är satt. Bör användas med
försiktighet eftersom det gör tabellen mindre responsiv och kan kapa innehållet.

Kräver att en kolumn i tabellen får växa med `"grow"` för att inte själv växa. Om tabellen bara har kolumner med `"shrink"` och tabellen får växa kommer kolumnen med `width` satt att växa.

### `widthUnit`

Bestämmer vilket enhet `width` ska använda.

Tillgängliga enheter:

- `"px"`
- `"rem"`

Default: `"px"`
