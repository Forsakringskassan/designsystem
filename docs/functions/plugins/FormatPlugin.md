---
title: Format Plugin
layout: article
---

FormatPlugin lägger till stöd för formaterings-direktivet `v-format`.
Direktivet används för att formatera data som ska presenteras.
Utöver formateringen förhindras även radbrytning av data.
Val av formaterare görs via direktivets argument och följande format stöds:

- bankgiro
- datum
- nummer
- organisationsnummer
- personnummer
- text.

::: warning
Använd inte formaterings-direktivet på komponenter.
Oväntat beteende kan inträffa då en komponent har flera rotnoder.
Om du ändå använder formaterings-direktivet på komponenter kommer direktivet alltid att gälla för komponentens rotnod, liknande "fallthrough attributes".
:::

## Konfiguration

Du initialiserar FormatPlugin på nedan sätt (bör göras så tidigt i applikationen som möjligt, till exempel main.ts )

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

Värdet ska vara av typen `string`.

Formaterar värdet enligt:

- NNN-NNNN om längden är sju tecken
- NNNN-NNNN om längden är åtta tecken.

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

Värdet kan antingen vara av typen `string`, `FDate` eller `DateRange`.

```import
date-range.ts
```

```import static
FormatPluginDate.vue
```

```import nomarkup
FormatPluginDate.vue
```

## Nummer

Formaterar värdet som ett nummer enligt:

- tar bort inledande nollor
- sätter tusenavdelare
- konverterar punkt till komma.

Värdet kan antingen vara av typen `string`,`number` eller `NumberFormat` om man vill precisera antalet decimaler.

```import
number-format.ts
```

```import static
FormatPluginNumber.vue
```

```import nomarkup
FormatPluginNumber.vue
```

## Organisationsnummer

Formaterar värdet enligt formatet NNNNNN-NNNN.
Värdet ska vara av typen `string`.

```import static
FormatPluginOrgnr.vue
```

```import nomarkup
FormatPluginOrgnr.vue
```

## Personnummer

Formaterar värdet enligt formatet ååååmmdd-nnnn.
Värdet ska vara av typen `string`.

```import static
FormatPluginPnr.vue
```

```import nomarkup
FormatPluginPnr.vue
```

## Plusgiro

Formaterar värdet enligt:

- bindestreck mellan näst sista och sista siffran
- grupper med två siffror till vänster om bindestreck.

Vid udda antal siffror till vänster kommer första gruppen innehålla en siffra.
Vid jämnt antal siffror till vänster kommer alla grupper innehåll två siffror.

Exempel

- N-N
- NN-N
- N NN-N
- NN NN-N
- N NN NN-N

Värdet ska vara av typen `string`.

```import static
FormatPluginPlusgiro.vue
```

```import nomarkup
FormatPluginPlusgiro.vue
```

## Postnummer

Formaterar värdet enligt formatet NNN NN.
Värdet ska vara av typen `string`.

```import static
FormatPluginPostnummer.vue
```

```import nomarkup
FormatPluginPostnummer.vue
```

## Text

Formateraren för text ser till att texten inte radbryts.

```import static
FormatPluginText.vue
```

```import nomarkup
FormatPluginText.vue
```
