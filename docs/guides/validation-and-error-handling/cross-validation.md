---
title: Korsvalidering
layout: pattern
search:
    terms:
        - datumperiod
---

## Datumperiod

Korsvalideringen av datum använder från-datumet som bas, det är det som avgör om
till-datumet är giltigt.
Från-datumet valideras bara mot ett absolut max/min-datum, till exempel +/- 1 månad från nuvarande datum.
Om från-datumet är ogiltigt så valideras till-datumet bara mot det absoluta max/min-datumen.
När ett giltigt från-datum är valt måste till-datumet vara lika med eller större än
från-datumet och mindre eller likamed det absoluta maxdatumet.

```import
CrossValidateDates.vue
```

## Validering utifrån ett annat fält

I det här exemplet används en {@link custom-formatter-parser anpassad validator} som
kontrollerar att längden på innehållet i fältet namn innehåller minst lika många tecken
som det som anges i fältet minimumlängd.

```import
ValidationPluginDynamicValidation.vue
```
