---
title: Sätta kolumnbredd i tabell (kod)
short-title: Sätta kolumnbredd (kod)
layout: article
search:
    terms:
        - kolumnbredd
        - tabell
---

För att sätta storlek på en kolumn använd egenskapen width med storlek och enhet:

```diff
{
    type: "text",
    header: "Land",
    key: "land",
+   width: "13rem",
}
```

```import
FTableWidthExample.vue
```

Kolumner med procent på `width` fungerar mest intuitivt ihop med andra kolumner med procent:

```diff
[
    {
        type: "text",
        header: "Frukt",
        key: "namn",
+       width: "30%",
    },
    {
        type: "text",
        header: "Land",
        key: "land",
+       width: "50%",
    },
    {
        type: "text:currency",
        header: "Pris per kilo",
        key: "pris",
+       width: "20%",
    },
]
```

```import
FTableWidthPercentExample.vue
```
