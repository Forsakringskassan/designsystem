---
title: Format Plugin
layout: article
search:
    terms:
        - formateringsdirektiv
        - v-format
        - radbrytning
        - bankgiro
        - datum
        - nummer
        - organisationsnummer
        - personnummer
        - plusgiro
        - postnummer
        - text
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
- plusgiro
- postnummer
- text.

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

Datumformateraren stödjer tre olika format:

- `v-format:date`: "2022-05-04"
- `v-format:date-long`: "4 maj 2022"
- `v-format:date-full`: "onsdag 4 maj 2022"

Värdet kan antingen vara av typen `string` eller `FDate`.

```import static
FormatPluginDate.vue
```

```import nomarkup
FormatPluginDate.vue
```

## Datumintervall

`v-format:date-range` använder ISO-format som standard "2025-01-01 – 2025-12-31".
För ett mer läsbart datumintervall använder du `format: "human"`:

- Samma månad: "3–5 maj 2000"
- Samma år: "5 juni – 5 juli 2000"
- Olika år: "4 juni 2000 – 16 februari 2001"

När perioden innehåller endast en dag skrivs den som t.ex. "2 – 2 januari 2000".
Konsumenten ansvarar för att hantera presentationen av en-dagsperioder.

```import
date-range.ts
```

```import static
FormatPluginDateRange.vue
```

```import nomarkup
FormatPluginDateRange.vue
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
