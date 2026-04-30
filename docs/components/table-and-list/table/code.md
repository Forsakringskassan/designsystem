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

// definiera data
interface Row {
    namn: string;
}

// definiera kolumner
const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Namn",
    },
]);

// definiera rader
const rows = useDatasetRef<Row>([
    {
        namn: "Banan",
    },
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
import { defineTableColumns } from "@fkui/vue";

interface Row {
    namn: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Namn",
        key: "namn",
    },
]);
```

I det här fallet kommer tabellen att presentera värdet från namn-fältet i ditt radobjekt.

Är du i behov av att ha mer kontroll över värde som presenteras eller skrivs kan du använda dig av funktionerna `value` och `update`.

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
        value(row) {
            return row.namn;
        },
        update(row, value: string) {
            row.namn = value;
        },
    },
]);
```

<!-- TODO: Formatering (vad är skillnaden mellan `format` och `value` - när använder jag vilken? Vem vinner om man specar både formatter och har egen `update`-metod?) -->

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
import { computed, ref } from "vue";
import { defineTableColumns } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
}

const index = ref(1);

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

```vue nomarkup
<script setup lang="ts">
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

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

## Kolumnbredder

Kolumnens storlek sätts med egenskapen `size`.

- `shrink` - kolumnen ta så lite plats den kan
- `grow` - kolumnen tar så mycket plats den kan.

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
        size: "grow",
    },
]);
```

```vue nomarkup
<script setup lang="ts">
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
}

const columns = defineTableColumns<Row>([
    {
        header: "Namn",
        key: "namn",
        size: "shrink",
    },
    {
        header: "Land",
        key: "land",
        size: "grow",
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
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
}

const columns = defineTableColumns<Row>([
    {
        header: "Namn",
        key: "namn",
        align: "left",
    },
    {
        header: "Land",
        key: "land",
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
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    value: number;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Med tnum",
        tnum: true,
        key: "value",
    },
    {
        type: "text",
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

Det finns en egen kolumntyp för radrubrik.

{@link column-type-rowheader Läs mer om kolumntyp radrubrik och hur den används.}

## Framhäva rader

För att få zebrarandig tabell använd propen `striped`.

```html static
<f-table :columns :rows striped></f-table>
```

```vue nomarkup
<script setup lang="ts">
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
}

const columns = defineTableColumns<Row>([
    {
        header: "Namn",
        key: "namn",
        align: "left",
    },
    {
        header: "Land",
        key: "land",
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
    <f-table :columns :rows striped></f-table>
</template>
```

Det går även att sätta egna css-klasser på rader med propen `rowClass`.
Funktionen tar emot raden och kan returnera `string`, `string[]` eller ett objekt med klassnamn.

```ts
import { defineTableColumns } from "@fkui/vue";

interface Row {
    id: string;
    namn: string;
}

/* --- cut above --- */

function bananaRowClass(row: Row): string | undefined {
    return row.namn === "Banan" ? "banana" : undefined;
}
```

```html static
<f-table :columns :rows :rowClass="bananaRowClass" key-attribute="id"></f-table>
```

<!-- TODO: Radid stycke som förklarar när det behövs. Prestanda, behålla valideringsstate. -->

## Tom tabell

Använd sloten `#empty` för att styra vad som visas när tabellen är tom.
Som standard visas textnyckeln `fkui.ftable.empty.text`, se [Textnycklar](#textnycklar).

```html static
<f-table :columns :rows>
    <template #empty> Eget innehåll </template>
</f-table>
```

## Tabellrubrik

En tabell ska alltid ha en rubrik, antingen med `caption`-elementet eller en associerad rubrik (heading).
Tabellrubriken ska hjälpa användaren att hitta till, navigera i och förstå tabellen.

Om tabellen har en rubrik (heading) i nära anslutning som också förklarar tabellens innebörd assoccierar du den med `aria-labelledby`.

```html static
<h2 id="rubrik">Rubrik</h2>
<f-table :columns :rows aria-labelledby="rubrik"></f-table>
```

Använd caption om tabellen inte har en naturlig rubrik.

```html static
<f-table :columns :rows>
    <template #caption> Rubrik </template>
</f-table>
```

I undantagsfall kan du också använda en dold skärmläsartext i caption, men tänk på att tabellens innehåll måste vara begripligt för alla.

```html static
<f-table :columns :rows>
    <template #caption
        ><span class="sr-only">Dold skärmläsartext</span>
    </template>
</f-table>
```

## Felhantering

Om ett fel uppstår vid hämtning av tabellens data kan du se till att ett felmeddelande visas med hjälp av `#empty`-sloten.

```html static
<f-table :columns :rows>
    <template #empty> Felmeddelande </template>
</f-table>
```

## Textnycklar

:::api
translation:FTable
:::

{@link translate-text Läs mer om textnycklar.}

## API

:::api
vue:FTable
:::

## Relaterat

{@link FTable Tabell}
