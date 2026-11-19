---
title: Datamängdredigerare
status: Produktionsklar
layout: component
sortorder: 3
component: FCrudDataset
search:
    terms:
        - redigera
        - redigering
        - ändra
        - ta bort
        - lägg till
---

Datamändgredigeraren används för att erbjuda användare funktionerna "lägg till", "ändra" och "ta bort" i en datamängd.
Komponenten ansvarar inte för hur datamängden och åtgärderna "lägg till", "ändra" och "ta bort" presenteras.
Vanligtvis används lista eller tabell för presentation men kan även vara egenutvecklad.

Komponenten öppnar inga modaler själv.
Istället anropas `onAdd`, `onEdit` och `onRemove` när användaren vill lägga till, ändra eller ta bort en rad.
Det är applikationens ansvar att exempelvis öppna en modal med {@link useModal `formModal()` eller `confirmModal()`} och sedan anropa callbacken `commit` när åtgärden ska genomföras.
Om `commit` inte anropas (till exempel om användaren avbryter) lämnas datamängden oförändrad.

- `onAdd(commit)`: anropa `commit(item)` med det nya objektet för att lägga till det.
- `onEdit(item, commit)`: anropa `commit(modified)` med det ändrade objektet.
- `onRemove(item, commit)`: anropa `commit()` för att ta bort objektet.

Knappen "Lägg till ny" visas endast när `onAdd` är satt.
Minst en av `onAdd`, `onEdit` och `onRemove` måste anges.

Om knappens visuella text för "ändra" och "ta bort" inte tydligt identifierar raden från andra rader,
behöver knappen kompletteras med en text för skärmläsare.
Beroende på sammanhang kan även knappen för "lägg till ny" behöva kompletteras med en skärmläsartext,
som tydligör vad som läggs till.

```html name=base hidden
<f-crud-dataset>
    <template #default> ... </template>
</f-crud-dataset>
```

## Tabell med redigering

```import
FCrudDatasetTableExample.vue
```

## Förpopulera objekt

Eftersom applikationen själv skapar objektet i `onAdd` kan det förpopuleras innan modalen öppnas, till exempel med ett id:

```ts static
import { useModal } from "@fkui/vue";
import { type FCrudDatasetCommitAdd } from "@fkui/vue";

interface MyItem {
    id: string;
    name: string;
}

const MyModal = { template: "<div></div>" };

const { formModal } = useModal();

/* --- cut above --- */

async function onAdd(commit: FCrudDatasetCommitAdd<MyItem>): Promise<void> {
    try {
        const item = await formModal<MyItem>(MyModal, {
            props: { item: { id: crypto.randomUUID(), name: "" } },
        });
        commit(item);
    } catch {
        /* användaren avbröt */
    }
}
```

## Knappordning

Knappordningen i modalerna styrs av modalerna som applikationen öppnar.
Se {@link FModal} och {@link config#referens buttonOrder} i konfigurationen.

## Knapposition

I standardutförande är knapparna positionerade under huvudinnehållet.
Med propen `buttonPosition` kan knapparna istället positioneras ovanför huvudinnehållet.

## Egna lägg till knappar

Använd slotten `#buttons` för att lägga till egna anpassade lägg-till knappar.
Du behöver själv hantera vad klick på knappen ska utföra för åtgärd.

```html compare=base
<f-crud-dataset :on-add>
    <template #default> ... </template>
    <template #buttons="{ buttonClasses }">
        <button type="button" :class="buttonClasses" @click="onClick">
            My button
        </button>
    </template>
</f-crud-dataset>
```

```import nomarkup
FCrudDatasetAdditionalButtons.vue
```

## Tabell med lägg till-knapp

```import
FCrudDatasetTableCreateExample.vue
```

## Tabell med redigera-knapp

```import
FCrudDatasetTableUpdateExample.vue
```

## Lista med redigering

```import
FCrudDatasetListExample.vue
```

## Sorterbar lista

```import
FCrudDatasetSortListExample.vue
```

## Anpassade texter

### Modaler

Rubriker, innehåll och knapptexter i modalerna styrs helt av applikationen.
Det finns inga standardtexter för modalernas knappar, ange alltid texter som beskriver åtgärden, till exempel "Lägg till" och "Spara" i formulärmodalen eller "Ja, ta bort" och "Nej, avbryt" i bekräftelsemodalen.

### Knappar

Knapptexten för "Lägg till ny" kan anpassas med textnyckel `fkui.crud-dataset.button.add` eller slotten `add-button`.

Knappar för "ändra" och "ta bort" anges av applikationen själv.
Om den synliga texten inte räcker kompletteras den med en text för skärmläsare.
På samma sätt kan "Lägg till ny" behöva kompletteras med vad som läggs till, till exempel "Lägg till ny frukt".

Använd klassen `sr-only` för text som endast ska läsas upp av skärmläsare:

```html static
<f-crud-dataset :on-add :on-edit>
    <template #default="{ updateItem }">
        <f-button
            type="button"
            variant="tertiary"
            size="small"
            @click="updateItem(item)"
        >
            Ändra <span class="sr-only">{{ item.name }}</span>
        </f-button>
    </template>
    <template #add-button>
        Lägg till ny <span class="sr-only">frukt</span>
    </template>
</f-crud-dataset>
```

I en tabell anges skärmläsartexten med `screenreaderText` på kolumner av typen `button` eller `menu`, till exempel `` screenreaderText: (row) => `Ändra ${row.name}` ``.

### Uppläsning för skärmläsare

När `commit` anropas läses ett meddelande upp för skärmläsare.
Meddelandet kan ändras på två sätt:

- Generellt för alla datamängdredigerare med textnycklar, se {@link FCrudDataset#textnycklar textnycklar}.
- Specifikt för ett enskilt anrop med argumentet `alert` till `commit`.

Standardtexterna är generella, till exempel "Raden har tagits bort".
Skicka helst med ett meddelande som är specifikt för innehållet, så att användaren vet vilken rad som påverkades.

```import
FCrudDatasetCustomTextExample.vue
```

## Textnycklar

Läs mer om att {@link translate-text anpassa och översätta text}.

:::api
translation:FCrudDataset
:::

## API

:::api
vue:FCrudDataset
:::
