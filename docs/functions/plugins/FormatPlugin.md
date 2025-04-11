---
title: Format Plugin
layout: article
---

_FormatPlugin_ lägger till stöd för formaterings-direktivet `v-format`. Direktivet används för att formatera data som ska pressenteras, utöver formateringen så förhindras även radbryt. Val av formaterare görs via direktivets argument och följande format stöds:

- Bankgiro
- Datum
- Nummer
- Organisationsnummer
- Personnummer
- Text

::: warning
Att använda formaterings-direktivet på komponenter rekommenderas inte. Oväntat beteende kan inträffa då en komponent har flera rotnoder.
Om det används på komponenter kommer direktivet alltid att gälla för komponentens rotnod, liknande "fallthrough attributes".
:::

## Konfiguration

_FormatPlugin_ initialiseras på nedan sätt (bör göras så tidigt i applikationen som möjligt, t.ex. main.ts )

```ts
import { defineComponent } from "vue";

const App = defineComponent({});

/* --- cut above --- */
import { createApp } from "vue";
import { FormatPlugin } from "@fkui/vue";

const app = createApp(App);
app.use(FormatPlugin);
app.mount("#app");
```

## Bankgiro

Formaterar värdet enligt {@link formatters-and-parsers#bankgiro_parser parseBankgiro}.
Värdet ska vara av typen `string`.

```import static
FormatPluginBankgiro.vue
```

```import nomarkup
FormatPluginBankgiro.vue
```

## Datum

Datumformateraren stödjer fyra olika format:

- `v-format:date`: "2022-05-04"
- `v-format:date-long`: "4 maj 2022"
- `v-format:date-full`: "onsdag 4 maj 2022"
- `v-format:date-range`: "2022-05-04 – 2022-08-01"

Värdet kan antingen vara av typen `string` eller `DateRange`.

```ts
interface DateRange {
    from: string;
    to: string;
}
```

```import static
FormatPluginDate.vue
```

```import nomarkup
FormatPluginDate.vue
```

## Nummer

Formaterar värdet som ett nummer enligt {@link formatters-and-parsers#nummer_formaterare formatNumber}.
Värdet kan antingen vara av typen `string`,`number` eller `NumberFormat` om man vill precisera antalet decimaler.

```ts
interface NumberFormat {
    number: number | string;
    decimals: number;
}
```

```import static
FormatPluginNumber.vue
```

```import nomarkup
FormatPluginNumber.vue
```

## Organisationsnummer

Formaterar värdet som enligt {@link formatters-and-parsers#organisationsnummer_parser parseOrganisationsnummer}.
Värdet ska vara av typen `string`.

```import static
FormatPluginOrgnr.vue
```

```import nomarkup
FormatPluginOrgnr.vue
```

## Personnummer

Formaterar värdet som enligt {@link formatters-and-parsers#personnummer_parser parsePersonnummer}.
Värdet ska vara av typen `string`.

```import static
FormatPluginPnr.vue
```

```import nomarkup
FormatPluginPnr.vue
```

## Text

Formateraren för text ser till att texten inte radbryts.

```import static
FormatPluginText.vue
```

```import nomarkup
FormatPluginText.vue
```
