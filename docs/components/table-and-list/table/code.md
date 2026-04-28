---
title: Tabell (kod)
layout: article
sortorder: 2
search:
    terms:
        - visa data
        - kolumn
        - rad
        - kolumnrubrik
        - radrubrik
        - kolumntyper
---

Den här sidan innehåller information om hur du sätter upp komponenten tabell i din applikation.

Du sätter upp din tabell genom att definiera kolumner och rader som ska ingå.

```ts
import { defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    // definiera data
}

const columns = defineTableColumns<Row>([
    // definiera kolumner
]);

const rows = useDatasetRef<Row>([
    // definiera rader
]);
```

```html static
<f-table :columns :rows></f-table>
```

## Kolumner

Du konfigurerar kolumner i tabellen med funktionen `defineTableColumns`.

I funktionen definierar du upp kolumnerna i tabellen genom att bland annat bestämma/sätta kolumnrubrik, vänster-/högerjustering av innehåll, formatering, kolumntyp med mera.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
}

/* --- cut above --- */
const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Namn",
        key: "namn",
    },
    {
        type: "text",
        header: "Land",
        key: "land",
    },
]);
```

`type` anger typen av kolumn.
Det finns flera olika typer av kolumner.
{@link column-types Läs mer om olika kolumntyper}.

`header` anger kolumnens rubrik och kan antingen sättas till en statisk text eller en `ref`.
[Läs mer om kolumnrubriker](#kolumnrubrik).

`key` anger vilken egenskap i radobjektet som tabellcellen visar.
[Läs mer om att mappa data till kolumner](#mappa-data-till-kolumner).

Utöver ovan har olika kolumntyper ofta egna konfigurationsmöjligheter.

## Mappa data till kolumner

```ts
interface Row {
    namn: string;
    land: string;
}
```

När du definierar kolumnen kan du ange `key`, där `key` måste vara en av de kända egenskaperna i radobjektet.

```ts
const columns = defineTableColumns<Row>([
    {
        key: "namn",
    },
]);
```

I det här fallet kommer tabellen att presentera värdet från namn-fältet i ditt radobjekt.

Är du i behov av att ha mer kontroll över värde som presenteras eller skrivs kan du använda dig av funktionerna `value` och `update`.

```ts
const columns = defineTableColumns<Row>([
    {
        value(row) {
            return row.namn;
        },
        update(row, value) {
            row.namn = value;
        },
    },
]);
```

TODO: Formatering (vad är skillnaden mellan `format` och `value` - när använder jag vilken? Vem vinner om man specar både formatter och har egen `update`-metod?)

## Kolumnrubrik

För att sätta kolumnrubrik använder du `header`.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
}

/* --- cut above --- */
const columns = defineTableColumns<Row>([
    {
        header: "Namn",
    },
]);
```

I det här fallet kommer kolumnens rubrik att sättas till "Namn".

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
}

/* --- cut above --- */
const columns = defineTableColumns<Row>([
    {
        header: computed(() => `Namn ${index.value}`),
    },
]);
```

Om du behöver ha dynamiskt namn på din kolumn kan du använda `ref` (`computed`).

Utöver `header` kan du också använda `description` för att sätta hjälptext.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
}

/* --- cut above --- */
const columns = defineTableColumns<Row>([
    {
        header: "Namn",
        description: "Hjälptext",
    },
]);
```

TODO exemplet fungerar inte

```vue nomarkup
<script setup lang="ts">
import { defineTableColumns, useDatasetRef, FTable } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
}

const columns = defineTableColumns<Row>([
    {
        header: "Namn",
        description: "Hjälptext",
        key: "namn",
    },
]);

const rows = useDatasetRef<Row>([]);
</script>

<template>
    <f-table :columns :rows></f-table>
</template>
```

## Kolumnbredder

Kolumnens storlek sätts med egenskapen `size`.

- `shrink` - kolumnen ta så lite plats den kan
- `expand` - kolumnen tar så mycket plats den kan.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
}

/* --- cut above --- */
const columns = defineTableColumns<Row>([
    {
        header: "Namn",
        size: "shrink",
    },
    {
        header: "Land",
        size: "expand",
    },
]);
```

```vue nomarkup
<script setup lang="ts">
import { defineTableColumns, useDatasetRef, FTable } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
}

const columns = defineTableColumns<Row>([
    {
        header: "Namn",
        size: "shrink",
    },
    {
        header: "Land",
        size: "expand",
    },
]);

const rows = useDatasetRef<Row>([
    {
        namn: "Apelsin",
        land: "Spanien",
    },
    {
        namn: "Banan",
        land: "Colombia",
    },
    {
        namn: "Äpple",
        land: "Sverige",
    },
]);
</script>

<template>
    <f-table :columns :rows></f-table>
</template>
```

## Vänster- och högerjustering

Kolumnen kan höger- eller vänsterjusteras med egenskapen `align`.

- `left` - kolumnens innehåll vänsterjusteras (standard)
- `right` - kolumnens innehåll högerjusteras.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
}

/* --- cut above --- */
const columns = defineTableColumns<Row>([
    {
        header: "Namn",
        align: "left",
    },
    {
        header: "Land",
        align: "right",
    },
]);
```

```vue nomarkup
<script setup lang="ts">
import { defineTableColumns, useDatasetRef, FTable } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
}

const columns = defineTableColumns<Row>([
    {
        header: "Namn",
        align: "left",
    },
    {
        header: "Land",
        align: "right",
    },
]);

const rows = useDatasetRef<Row>([
    {
        namn: "Apelsin",
        land: "Spanien",
    },
    {
        namn: "Banan",
        land: "Colombia",
    },
    {
        namn: "Äpple",
        land: "Sverige",
    },
]);
</script>

<template>
    <f-table :columns :rows></f-table>
</template>
```

## Tabulära nummer

Om kolumnen presenterar numerisk data, bör egenskapen `tnum` sättas till `true` för att aktivera tabulära nummer.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    value: number;
}

/* --- cut above --- */
const columns = defineTableColumns<Row>([
    {
        header: "Värde",
        tnum: true,
    },
]);
```

```vue nomarkup
<script setup lang="ts">
import { defineTableColumns, useDatasetRef, FTable } from "@fkui/vue";

interface Row {
    value: number;
}

const columns = defineTableColumns<Row>([
    {
        header: "Med tnum",
        tnum: true,
        key: "value",
    },
    {
        header: "Utan tnum",
        tnum: false,
        key: "value",
    },
]);

const rows = useDatasetRef<Row>([
    {
        value: 111,
    },
    {
        value: 888,
    },
    {
        value: 181,
    },
]);
</script>

<template>
    <f-table :columns :rows></f-table>
</template>
```

## Radrubrik

TODO Hänvisa till kolumntypen radrubrik
För att definiera kolumnen som radrubrik, se avsnitt Kolumntyper (länk).

## Framhäva rader

TODO plus zebra

Det går även att sätta egna klasser på rader med propen `rowClass`.
Funktionen tar emot raden och kan returnera `string`, `string[]` eller ett objekt med klassnamn.

## Radid

TODO när behöver jag använda radid? Är det kopplat till `f-sort-filter-dataset`?

För att identifiera olika rader med ett värde kan du ange namnet för en nyckel (key) med `keyAttribute`. Nyckeln finns i varje radobjekt.  
Om du anger keyAttribute, måste varje rad (även expanderade rader) innehålla denna nyckel med ett unikt värde.

Att använda keyAttribute är valfritt och det behövs inte om det finns ett naturligt id att ange för dina rader.
Du måste använda keyAttribute om dina rader ska bibehålla aktuell status vid omladdning från REST-api eller liknande.

// plats för kodexempel

// plats för kodexempel

## Tom tabell

TODO korta ner text
När tabellen är tom (finns inget innehåll att presentera) visas en text som informerar användaren om att tabellen är tom.
Du kan ändra texten för att bättre passa innehållet, till exempel "Det finns inga betalningar" eller "Ingen anslutning finns".
Texten sätts i slot `#empty`:

// plats för kodexempel

## Tabellrubrik

TODO: även här kodexempel, inte formulera om så mycket. Långt ner?
En tabell ska alltid ha en rubrik, antingen med caption-elementet eller en associerad rubrik (heading).
Tabellrubriken ska hjälpa användaren att hitta till, navigera i och förstå tabellen.

Om tabellen har en rubrik (heading) i nära anslutning som också förklarar tabellens innebörd assoccierar du den med `aria-labelledby`:

// plats för kodexempel

Använd caption om tabellen inte har en naturlig rubrik:

// plats för kodexempel

I undantagsfall kan du också använda en dold skärmläsartext i caption, men tänk på att tabellens innehåll måste vara begripligt för alla:

// plats för kodexempel

## Felhantering

Om ett fel uppstår vid hämtning av tabellens data kan du se till att ett felmeddelande visas med hjälp av `#empty`-sloten och en meddelanderuta (länk).

// plats för kodexempel

// plats för kodexempel

## Textnycklar

Läs mer om att (länk till translate-text, anpassa och översätta text).

:::api
translation:FTable
:::

## API

:::api
vue:FTable
:::

## Relaterat

{@link FTable Tabell}
