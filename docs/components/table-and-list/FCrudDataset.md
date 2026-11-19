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

Datamängdredigeraren används för att erbjuda användare funktionerna "lägg till", "ändra" och "ta bort" i en datamängd.
Komponenten ansvarar inte för hur datamängden och åtgärderna presenteras.
Vanligtvis används lista eller tabell för presentation men kan även vara egenutvecklad.

Komponenten öppnar inga modaler själv.
Istället anropas `onCreate`, `onUpdate` och `onDelete` och applikationen anropar `commit` när åtgärden ska genomföras, läs mer under {@link FCrudDataset#callbacks callbacks}.

```html name=base hidden
<f-crud-dataset> ... </f-crud-dataset>
```

## Tabell med redigering

```import
FCrudDatasetTableExample.vue
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
<f-crud-dataset :on-create>
    ...
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

## Callbacks

Det är applikationens ansvar att exempelvis öppna en modal med {@link useModal `formModal()` eller `confirmModal()`} och sedan anropa callbacken `commit` när åtgärden ska genomföras.
Om `commit` inte anropas (till exempel om användaren avbryter) lämnas datamängden oförändrad.

- `onCreate(commit)`: anropa `commit(item)` med det nya objektet för att lägga till det.
- `onUpdate(item, commit)`: `item` är en kopia av raden som kan ändras fritt, originalet påverkas inte förrän `commit(modified)` anropas med det ändrade objektet.
- `onDelete(item, commit)`: anropa `commit()` för att ta bort objektet.

Knappen "Lägg till ny" visas endast när `onCreate` är satt.
Minst en av `onCreate`, `onUpdate` och `onDelete` måste anges.

### Starta ändra och ta bort

Knappen "Lägg till ny" ingår i komponenten och anropar `onCreate`.
Knappar för "ändra" och "ta bort" lägger du själv i standardslotten.
Slotten ger två funktioner som du anropar med raden som ska påverkas:

- `updateItem(item)` anropar `onUpdate` för raden.
- `deleteItem(item)` anropar `onDelete` för raden.

```html static
<f-crud-dataset v-model="items" :on-update :on-delete>
    <template #default="{ updateItem, deleteItem }">
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.name }}
                <button type="button" @click="updateItem(item)">Ändra</button>
                <button type="button" @click="deleteItem(item)">Ta bort</button>
            </li>
        </ul>
    </template>
</f-crud-dataset>
```

Samma åtgärder kan också startas utifrån via en template ref till komponenten, med metoderna `createItem()`, `updateItem(item)` och `deleteItem(item)`.
Det kan till exempel användas när en åtgärd ska startas från en knapp utanför komponenten.

### Förpopulera objekt

Eftersom applikationen själv skapar objektet i `onCreate` kan det förpopuleras innan modalen öppnas:

```ts static
import { type FCrudDatasetCommitCreate, useModal } from "@fkui/vue";

interface MyItem {
    id: string;
    name: string;
}

const MyModal = { template: "<div></div>" };

const { formModal } = useModal();

/* --- cut above --- */

async function onCreate(
    commit: FCrudDatasetCommitCreate<MyItem>,
): Promise<void> {
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

### Ändringar i befintliga objekt

När `commit(modified)` anropas i `onUpdate` skapas inget nytt objekt för raden.
Istället kopieras ändringarna in i det ursprungliga objektet, så att raden fortfarande är samma objekt som innan.
Därefter emittas `update:modelValue` med en ny array som innehåller samma objekt som tidigare.

Med `v-model` behöver du inte tänka på detta, ändringen syns direkt.
Om du själv bevakar datamängden med `watch` gäller följande:

- En `watch` på hela arrayen märker ändringen, eftersom arrayen är ny.
- En `watch` på en enskild rad märker inte ändringen utan `deep: true`, eftersom raden är samma objekt.

### Asynkrona callbacks och felhantering

Callbackarna kan vara asynkrona, till exempel när de öppnar en modal eller sparar till en server.
Fel som inte fångas i callbacken rapporteras till Vues felhantering (`app.config.errorHandler`).
För att det ska fungera bra:

- Använd `await` i callbacken så att fel följer med det promise som callbacken returnerar.
- Fånga det som inte är ett fel med `try`/`catch`. `formModal()` avvisar sitt promise när användaren avbryter, så omslut anropet med `try`/`catch` för att avbrott inte ska rapporteras som fel (se exemplet under {@link FCrudDataset#forpopulera_objekt förpopulera objekt}).
- Anropa `updateItem` och `deleteItem` från slotten direkt i eventbindningen, till exempel `@click="updateItem(item)"`.
  Om du anropar dem inuti en funktion måste du returnera resultatet, till exempel `@click="() => updateItem(item)"`, annars når felet inte Vues felhantering.
- Om du startar åtgärder via en template ref returnerar metoderna callbackens promise, så du kan hantera fel själv med `await` eller `.catch()`.
  Se {@link FCrudDataset#starta_andra_och_ta_bort starta ändra och ta bort}.

Du behöver inte kontrollera om komponenten fortfarande finns kvar innan du anropar `commit`.
Om komponenten har avmonterats ignoreras anropet och datamängden lämnas oförändrad.

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
<f-crud-dataset :on-create :on-update>
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
