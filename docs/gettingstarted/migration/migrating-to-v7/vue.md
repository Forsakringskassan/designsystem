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

I **FKUI v7** har egenskapen `text` bytt namn till `screenreaderText` för tabellkolumner av typen `"button"` och `"menu"` i `FTable`. Ändringen förtydligar att strängen som returneras endast används som tillgänglighetstext för skärmläsare och inte visas visuellt i cellen.

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

### Fokushantering för steg för steg-guide (`FWizard`)

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

### Fellista för steg för steg-guide (`FWizardStep`)

I version 7 visas fellistan inte längre som standard i ett guidesteg.

Om du vill visa fellistan, lägg till `use-error-list` på `f-wizard-step`:

```diff
-<f-wizard-step key="step1" title="Steg 1">
+<f-wizard-step key="step1" title="Steg 1" use-error-list>
    <!-- innehåll -->
</f-wizard-step>
```

Om du redan använder `:use-error-list="false"` kan du ta bort propen eftersom det nu är standardbeteendet.
