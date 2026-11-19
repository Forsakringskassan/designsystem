---
title: "Version 7 migreringsguide: @fkui/vue"
short-title: "@fkui/vue"
name: migrating-to-v7-vue
layout: article
redirect_from:
    - gettingstarted/migration/migrating-crud-button.html
---

## FCrudButton

Komponenten `FCrudButton` är borttagen.

För enskilda knappar använder du {@link component:FButton FButton}.
När du placerar tabellen i `FCrudDataset` kopplar du menyåtgärdernas `onClick` till `updateItem(item)` och `deleteItem(item)`, som du når via en template ref på `FCrudDataset`.
Utanför tabeller får du samma funktioner som slot-props i defaultslotten.

Så ersätter du propsen:

- `action` ersätts med `updateItem(item)` eller `deleteItem(item)` i menyåtgärdens `onClick` eller knappens `@click`.
- `icon` anges på en action i `menu`-kolumnen eller med `icon-left` på `FButton`.
- `label` anges med actionens `label` eller som knappens text i `FButton`.

### Tabell

Se {@link FCrudDataset#tabell-med-redigering Tabell med redigering} för ett exempel med `menu`-kolumn.

### Lista och övrigt

```html name=list-button-original hidden
<!-- [html-validate-disable-block deprecated -- migration guide] -->
<f-crud-dataset>
    <template #default>
        <f-list :items>
            <template #default="{ item }">
                <f-crud-button action="modify" :item icon>
                    Ändra {{ item.name }}
                </f-crud-button>
                <f-crud-button action="delete" :item icon>
                    Ta bort {{ item.name }}
                </f-crud-button>
            </template>
        </f-list>
    </template>
</f-crud-dataset>
```

```html compare=list-button-original
<f-crud-dataset>
    <template #default="{ updateItem, deleteItem }">
        <f-list :items>
            <template #default="{ item }">
                <f-button
                    icon-left="pen"
                    size="small"
                    variant="tertiary"
                    @click="updateItem(item)"
                >
                    Ändra {{ item.name }}
                </f-button>
                <f-button
                    icon-left="trashcan"
                    size="small"
                    variant="tertiary"
                    @click="deleteItem(item)"
                >
                    Ta bort {{ item.name }}
                </f-button>
            </template>
        </f-list>
    </template>
</f-crud-dataset>
```

## FTable

I **FKUI v7** har egenskapen `text` bytt namn till `screenreaderText` för tabellkolumner av typen `"button"` och `"menu"` i `FTable`.
Ändringen förtydligar att strängen som returneras endast används som tillgänglighetstext för skärmläsare och inte visas visuellt i cellen.

### Sammanfattning av ändringar

### Migrering av kolumndefinitioner

Uppdatera samtliga kolumner med `type: "button"` eller `type: "menu"` i `defineTableColumns` genom att byta ut `text` mot `screenreaderText`:

```diff
 const columns = defineTableColumns<Row>([
     {
         type: "button",
         header: "Button",
         description: "Column 4",
         key: "button",
         icon: "trashcan",
-        text(row) {
+        screenreaderText(row) {
             return row.button;
         },
     },
     {
         type: "menu",
         header: "Actions",
-        text() {
+        screenreaderText() {
             return "Actions";
         },
         actions: [{ label: "foo" }, { label: "bar" }],
     },
 ]);
```

::: details 🤖 Prompt för AI Agenter

Search the codebase for `defineTableColumns` and column objects containing `type: "button"` or `type: "menu"`.
Rename `text` to `screenreaderText` on matching column objects.
Run TypeScript type-checking (`tsc`) to verify no remaining type errors exist.
:::

### Datamängder `useDatasetRef`

Det metadata-baserade datamängds-API:et är borttaget.
Det omfattar typen `Dataset<T>`, typerna `DatasetArrayMetadata` och `DatasetElementMetadata` samt funktionerna `useDatasetRef()`, `datasetIterator()` och `getDatasetMetadata()`.

Använd vanliga arrayer eller Vue-refar i stället för `useDatasetRef()`.

```diff
-const rows = useDatasetRef<Row>(initialRows);
+const rows = ref<Row[]>(initialRows);
```

För nästlade tabellrader anger du egenskapen med `expandable-attribute`:

```diff
-const rows = useDatasetRef<Row>(initialRows, "children");
+const rows = ref<Row[]>(initialRows);
```

```diff
-<f-table :rows :columns></f-table>
+<f-table :rows :columns expandable-attribute="children"></f-table>
```

Den relaterade funktionen `removeDatasetRows()` är också borttagen.
Ersätt den med {@link removeTableRows `removeTableRows()`}.
Ange `expandableAttribute` när rader ska kunna tas bort från nästlade arrayer:

```diff
-removeDatasetRows(rows, row);
+removeTableRows(rows, row, "children");
```

::: details 🤖 Prompt för AI Agenter

Sök igenom applikationen efter `Dataset<T>`, `DatasetArrayMetadata`, `DatasetElementMetadata`, `useDatasetRef()`, `datasetIterator()`, `getDatasetMetadata()` och `removeDatasetRows()`.

Migrera till vanliga arrayer eller Vue-refar.
Använd `ref<T[]>(...)` när raderna behöver vara reaktiva och en vanlig array när de inte ändras.
Ta bort beroenden av datasetmetadata och uppdatera importer och typannoteringar.
För nästlade rader i `FTable`, ange egenskapen med `expandable-attribute`.
Ersätt `removeDatasetRows()` med `removeTableRows()` och ange egenskapen för nästlade rader när det behövs.
Om befintlig funktionalitet använder metadata för att visa positioner, beräkna positionen utifrån applikationens data och bevara den avsedda presentationen.

:::

## `FValidationForm`

Propen `useErrorList` är inte längre aktiv som standard.

Om du vill behålla fellistan, lägg till propen explicit:

```diff
-<f-validation-form>
+<f-validation-form use-error-list>
```

Om du redan använder `:use-error-list="false"` kan du ta bort det:

```diff
-<f-validation-form :use-error-list="false">
+<f-validation-form>
```

Om du sätter värdet dynamiskt behöver du inte ändra något.

::: details 🤖 Prompt för AI Agenter

Sök igenom applikationens användningar av `FValidationForm` och `<f-validation-form>`, inklusive renderfunktioner och JSX.
För varje användning där `useErrorList`/`use-error-list` saknas, lägg till `use-error-list` för att behålla det tidigare standardbeteendet där fellistan visas.
Ta bort statiska `:use-error-list="false"` eftersom det nu är standardbeteendet.
Behåll dynamiska värden och ändra inte komponentimplementationen.

Verifiera resultatet genom att bygga projektet och köra relevanta tester.
Ignorera övriga fel, applikationen migreras till FKUI v7 och det kan finnas orelaterade kvarstående fel.

:::

## `FFormModal`

Propen `useErrorList` är inte längre aktiv som standard.

Om du vill behålla fellistan, lägg till propen explicit:

```diff
-<f-form-modal>
+<f-form-modal use-error-list>
```

Om du redan använder `:use-error-list="false"` kan du ta bort det:

```diff
-<f-form-modal :use-error-list="false">
+<f-form-modal>
```

Om du sätter värdet dynamiskt behöver du inte ändra något.

::: details 🤖 Prompt för AI Agenter

Sök igenom applikationen efter användningar av `FFormModal` och `<f-form-modal>`.
För varje användning där `useErrorList`/`use-error-list` saknas, lägg till `use-error-list` för att behålla det tidigare standardbeteendet där fellistan visas.
Ta bort statiska `:use-error-list="false"` eftersom det nu är standardbeteendet.
Behåll dynamiska värden.

Verifiera resultatet genom att bygga projektet och köra relevanta tester.
Ignorera övriga fel, applikationen migreras till FKUI v7 och det kan finnas orelaterade kvarstående fel.

## `FCrudDataset`

`FCrudDataset` öppnar inte längre några modaler själv.
Istället anropas `onCreate`, `onUpdate` och `onDelete` med en callback `commit` som applikationen anropar när åtgärden ska genomföras.
Applikationen ansvarar för att öppna modaler, till exempel med {@link useModal `formModal()` och `confirmModal()`}.

Följande har tagits bort:

- Slottarna `#add`, `#modify` och `#delete`.
- Propparna `beforeCreate`, `beforeSubmit`, `beforeValidation`, `onCancel`, `addNewModalHeader`, `modifyModalHeader`, `deleteModalHeader` och `formModalSize`.
  Motsvarande värden skickas istället direkt till modalerna.
- Eventen `created`, `updated` och `deleted`.
  Applikationen vet själv när den anropar `commit`.
- Enumen `Operation` (`ADD`, `DELETE`, `MODIFY`, `NONE`).
  Använd istället de åtgärdsspecifika callbackarna `onCreate`, `onUpdate` och `onDelete`, eftersom varje callback redan motsvarar en åtgärd.
- Textnycklarna för modalernas rubriker och knappar (`fkui.crud-dataset.modal.*`).
  Det finns inga standardtexter längre, så applikationen behöver själv ange knapptexterna.
  För samma beteende som tidigare: "Lägg till" och "Avbryt" när en rad läggs till, "Spara" och "Avbryt" när en rad ändras samt "Ja, ta bort" och "Nej, avbryt" när en rad tas bort.
- Metoderna `cancelButton()`, `confirmButton()` och egenskapen `form` från `FCrudDatasetPageObject` samt `cancelButton()` och `confirmButton()` från `FCrudDatasetSelectors`.
  Använd `FModalPageObject` eller `FModalSelectors` istället.
- `ActivateItemInjected()` och typerna `ActivateItemInterface` och `ActivateItemCallback`.
  En egen komponent som presenterar raderna använder istället `useCrudDatasetPresenter()` med `afterCreate`, `handleDelete` och `nestedKey`.
  `handleDelete(item, commit)` ersätter `registerCallbackBeforeItemDelete` och måste anropa `commit()` synkront.

Knappen "Lägg till ny" visas när `onCreate` är satt (tidigare när slotten `#add` fanns).

Innehållet kan läggas direkt i `FCrudDataset`, `<template #default>` behövs inte längre.

`onCreate`, `onUpdate` och `onDelete` kan vara asynkrona.
Om en callback returnerar ett promise som avvisas rapporteras felet till `app.config.errorHandler`.

```diff
-<f-crud-dataset v-model="rows" :before-create @created="save">
-    <template #default> ... </template>
-    <template #add="{ item }">
-        <f-text-field v-model="item.name"> Namn </f-text-field>
-    </template>
-    <template #delete="{ item }"> Vill du ta bort {{ item.name }}? </template>
-</f-crud-dataset>
+<f-crud-dataset v-model="rows" :on-create :on-delete>
+    ...
+</f-crud-dataset>
```

```ts static
import { useModal } from "@fkui/vue";
import {
    type FCrudDatasetCommitCreate,
    type FCrudDatasetCommitDelete,
} from "@fkui/vue";

interface Row {
    name: string;
}

const MyRowModal = { template: "<div></div>" };

const { formModal, confirmModal } = useModal();

/* --- cut above --- */
function save(row: Row): void {
    // save implementation
}

async function onCreate(commit: FCrudDatasetCommitCreate<Row>): Promise<void> {
    try {
        const row = await formModal<Row>(MyRowModal, {
            props: { row: { name: "" } },
        });
        save(row);
        commit(row);
    } catch {
        /* användaren avbröt */
    }
}

async function onDelete(
    row: Row,
    commit: FCrudDatasetCommitDelete,
): Promise<void> {
    const confirmed = await confirmModal({
        heading: "Är du säker på att du vill ta bort raden?",
        content: `Vill du ta bort ${row.name}?`,
        confirm: "Ja, ta bort",
        dismiss: "Nej, avbryt",
    });
    if (confirmed) {
        commit();
    }
}
```

Innehållet från slottarna `#add` och `#modify` flyttas till en egen modalkomponent baserad på `FFormModal` (se {@link migrating-to-v7-modal-api Modal API only}).
`onUpdate` får en kopia av objektet, så originalet lämnas orört om användaren avbryter.
Skicka det ändrade objektet till `commit()`.

::: details 🤖 Prompt för AI Agenter

För varje användning av `FCrudDataset`:

1. Flytta innehållet i slottarna `#add` och `#modify` till en ny komponent som använder `FFormModal` med propparna `isOpen`, `value` och vidarebefordrar `close`-eventet.
2. Lägg till `onCreate(commit)` som öppnar modalen med `formModal()` från `useModal()`, med objektet som tidigare returnerades av `beforeCreate`, och anropar `commit(item)` med resultatet.
   Fånga avbrott (`formModal()` avvisar promise när användaren avbryter).
3. Lägg till `onUpdate(item, commit)` på motsvarande sätt och anropa `commit(modified)`.
   `item` är redan en kopia, så den behöver inte klonas.
4. Ersätt slotten `#delete` med `onDelete(item, commit)` som öppnar `confirmModal()` och anropar `commit()` om användaren bekräftar.
   Använd tidigare `deleteModalHeader` som rubrik.
5. Flytta logik från eventen `created`, `updated` och `deleted` till respektive callback innan `commit` anropas.
6. Flytta `beforeSubmit`, `beforeValidation`, `formModalSize` och modalrubriker till modalkomponenten.
7. Ange knapptexter explicit i modalerna, de har inga standardtexter längre.
   Använd tidigare standardtexter: "Lägg till"/"Avbryt" för lägg till, "Spara"/"Avbryt" för ändra och "Ja, ta bort"/"Nej, avbryt" (`confirm`/`dismiss` i `confirmModal()`) för ta bort.
   Sök efter översättningar av textnycklarna `fkui.crud-dataset.modal.*` i projektet, använd de värdena istället och ta bort nycklarna.
8. Skicka med ett meddelande för skärmläsare som är specifikt för raden som argumentet `alert` till `commit`, till exempel ``commit(item, `${item.name} har lagts till`)``, ``commit(modified, `${modified.name} har ändrats`)`` och ``commit(`${item.name} har tagits bort`)``.
   Använd ett namn eller annan egenskap som identifierar raden för användaren.
9. Ersätt `FCrudDatasetPageObject.confirmButton()`/`cancelButton()` i tester med `new FModalPageObject(".modal").primaryButton()`/`secondaryButton()`.
10. Ta bort importer av `Operation` från `@fkui/vue`.
    Flytta kod som grenar på `Operation.ADD`, `Operation.MODIFY` eller `Operation.DELETE` till `onCreate`, `onUpdate` respektive `onDelete`.
    Ta bort kod som använder `Operation.NONE`.

Verifiera resultatet genom att bygga projektet och köra enhetstester.

:::

## `FModal`

Propen `size` stödjer inte längre aliaset `fullscreen` och är ersatt med `fullwidth`.

```diff
 const { openModal } = useModal();
 const modal = openModal(FModal, {
-    size: "fullscreen",
+    size: "fullwidth",
 });
```

::: details 🤖 Prompt för AI Agenter

För varje användning av egenskapen `size` till `openModal()`, `confirmModal()` eller `formModal()`, ersätt värdet `fullscreen` med `fullwidth`.
Värdet är identisk i funktion.

För varje användning av propen `size` av `FModal`, `FConfirmModal` och `FFormModal`, ersätt värdet `fullscreen`med `fullwidth`.
Värdet är identisk i funktion.

Verifiera resultatet genom att bygga projektet och köra enhetstester.
Ignorera övriga fel, applikationen migreras till FKUI v7 och det kan finnas orelaterade kvarstående fel.

Be användaren göra en okulär granskning av de modaler som påverkats för att säkerställa att rätt storlek används.

:::

## `FSortFilterDataset`

Propen `placeholderFilter` är borttagen och ersatt med `filterLabel`.

```diff
 <f-sort-filter-dataset
-    placeholder-filter="Lorem ipsum"
+    filter-label="Lorem ipsum"
 >
```

::: details 🤖 Prompt för AI Agenter

För varje användning av propen `placeholderFilter` på komponenten `FSortFilterDataset`, ersätt med propen med `filterLabel`.
Propen är identisk i funktion.

Verifiera resultatet genom att bygga projektet och köra enhetstester.
Ignorera övriga fel, applikationen migreras till FKUI v7 och det kan finnas orelaterade kvarstående fel.

:::

## `getLegacyInternalKey()`

Använd `findItemIdentifier()` om objektet kan sakna en identifierare, eller `getItemIdentifier()` om identifieraren är garanterad att finnas, istället för att hämta ut nyckeln.

```diff
-const key = getLegacyInternalKey();
-const id = myObj[key];
+const id = getItemIdentifier(myObj);
```

::: details 🤖 Prompt för AI Agenter

För varje användning av funktionen `getLegacyInternalKey()`, ersätt med `findItemIdentifier()` om objektet kan sakna en identifierare, annars `getItemIdentifier()`.
Funktionen `getLegacyInternalKey()` är borttagen och returnerade en unik nyckel för att slå upp en identifierare i ett objekt medans `findItemIdentifier()`/`getItemIdentifier()` returnerar identifieraren direkt.

Verifiera resultatet genom att bygga projektet och köra enhetstester.
Ignorera övriga fel, applikationen migreras till FKUI v7 och det kan finnas orelaterade kvarstående fel.

:::

## `TableScroll`

`FDataTable` och `FInteractiveTable` stödjer inte längre `TableScroll.VERTICAL` och `TableScroll.BOTH`.

```diff
 <f-interactive-table
   :rows
-  :scroll="TableScroll.VERTICAL"
 ></f-interactive-table>
```

Vi rekommenderar att undvika vertikal scroll, behöver du trots allt det så behöver det implementeras i applikationen.

::: warning

Tänk på att scrollbara ytor måste gå att tangentbordsnavigera för att vara tillgängliga.

:::

::: details 🤖 Prompt för AI Agenter

Summera för användaren vilka förekomster av `TableScroll.VERTICAL` och `TableScroll.BOTH` som förekommer i applikationen.
Per rekommendation från designsystemet föreslå att för `TableScroll.VERTICAL` ta bort användning och för `TableScroll.BOTH` ersätta med `TableScroll.HORIZONTAL`.
Gör inga ändringar förrän användaren bekräftat vilka åtgärder som ska göras.

Verifiera resultatet genom att bygga projektet och köra enhetstester.
Ignorera övriga fel, applikationen migreras till FKUI v7 och det kan finnas orelaterade kvarstående fel.

:::

## FWizard

I version 7 är initialt fokus på det första steget avstängt som standard.

Om du vill att det första steget ska få fokus när guiden öppnas, lägg till `focus-initial-step`:

```diff
-<f-wizard header-tag="h2">
+<f-wizard header-tag="h2" focus-initial-step>
    <!-- guidesteg -->
</f-wizard>
```

Om du inte vill att det första steget ska få fokus när guiden öppnas behöver du inte längre lägga till någon fokusprop.
Ta bort `disable-initial-focus` från befintlig kod om den används, den finns inte längre i version 7.

## `FWizardStep`

Propen `useErrorList` är inte längre aktiv som standard.

Om du vill behålla fellistan, lägg till propen explicit:

```diff
-<f-wizard-step key="step1" title="Steg 1">
+<f-wizard-step key="step1" title="Steg 1" use-error-list>
    <!-- innehåll -->
</f-wizard-step>
```

Om du redan använder `:use-error-list="false"` kan du ta bort det:

```diff
-<f-wizard-step key="step1" title="Steg 1" :use-error-list="false">
+<f-wizard-step key="step1" title="Steg 1">
    <!-- innehåll -->
</f-wizard-step>
```

Om du sätter värdet dynamiskt behöver du inte ändra något.

::: details 🤖 Prompt för AI Agenter

Sök igenom applikationen efter användningar av `FWizardStep` och `<f-wizard-step>`.
För varje användning där `useErrorList`/`use-error-list` saknas, lägg till `use-error-list` för att behålla det tidigare standardbeteendet där fellistan visas.
Ta bort statiska `:use-error-list="false"` eftersom det nu är standardbeteendet.
Behåll dynamiska värden.

Verifiera resultatet genom att bygga projektet och köra relevanta tester.
Ignorera övriga fel, applikationen migreras till FKUI v7 och det kan finnas orelaterade kvarstående fel.

:::
