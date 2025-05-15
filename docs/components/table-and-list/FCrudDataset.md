---
title: Datamängdredigerare
status: Produktionsklar
layout: component
component:
    - FCrudDataset
    - FCrudButton
---

Datamändgredigeraren används för att erbjuda användare funktionerna "lägg till", "ändra" och "ta bort" i en datamängd.
Komponenten ansvarar inte för hur datamängden och åtgärderna "lägg till", "ändra" och "ta bort" presenteras.
Vanligtvis används lista eller tabell för presentation men kan även vara egenutvecklad.

Om knappens visuella text för "ändra" och "ta bort" inte tydligt identifierar raden från andra rader,
behöver knappen kompletteras med en text för skärmläsare.
Beroende på sammanhang kan även knappen för "lägg till ny" behöva kompletteras med en skärmläsartext,
som tydligör vad som läggs till.

```html name=base hidden
<f-crud-dataset>
    <template #default> ... </template>
</f-crud-dataset>
```

## Interaktiv tabell med redigering

```import
FCrudDatasetTableExample.vue
```

## Förpopulera objekt

Använd propen `beforeCreate` med en callback som returnerar ett objekt för att förpopulera data som ska läggas till.
Callback anropas innan modalen visas.

```html static
<f-crud-dataset :before-create="onBeforeCreate">
    <template #default> ... </template>
</f-crud-dataset>
```

```ts
/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
interface MyInterface {}

/* --- cut above --- */

function onBeforeCreate(): MyInterface {
    return {
        /* ... */
    };
}
```

## Knappordning

Standardinställningen för knappordningen i modalerna för "Lägg till" och "Ändra" är att primärknappen ligger först följt av sekundärknappen.
Standardinställningen för modalen "Ta bort" är att sekundärknappen ligger först följt av primärknappen.
Du kan ändra knappordningen för bekräftelsemodalen och därmed ändra knappordningen för modalen "Ta bort" genom inställning av {@link config#referens buttonOrder} i konfigurationen.

## Egna lägg till knappar

Använd slotten `#buttons` för att lägga till egna anpassade lägg-till knappar.
Du behöver själv hantera vad klick på knappen ska utföra för åtgärd.

```html compare=base
<f-crud-dataset>
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

## Datatabell med lägg till-knapp

```import
FCrudDatasetTableCreateExample.vue
```

## Interaktiv tabell med knapp

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

Rubriker i modaler kan anpassas antingen med textnycklar (standardtexter för alla datamängdredigerare) eller med propar (för en specifik datamängdredigerare):

- Lägg till: textnyckel `fkui.crud-dataset.modal.header.add` eller prop `addNewModalHeader`.
- Ändra: textnyckel `fkui.crud-dataset.modal.header.modify` eller prop `modifyModalHeader`.
- Ta bort: textnyckel `fkui.crud-dataset.modal.header.delete` eller prop `deleteModalHeader`.

Knapptexter i modaler kan anpassas med textnycklar.

- Lägg till: textnycklar `fkui.crud-dataset.modal.confirm.add` och `fkui.crud-dataset.modal.cancel.add`.
- Ändra: textnycklar `fkui.crud-dataset.modal.confirm.modify` och `fkui.crud-dataset.modal.cancel.modify`.
- Ta bort: textnycklar `fkui.crud-dataset.modal.confirm.delete` och `fkui.crud-dataset.modal.cancel.delete`.

Knappentexten för "Lägg till" kan anpassas med textnyckel `fkui.crud-dataset.button.add` eller slotten `add-button`.

Knapptexter för åtgärdsknappar kan anpassas med textnycklar eller med knappens default slot.

- Ändra: textnyckel `fkui.crud-button.modify` eller default slot.
- Ta bort: textnyckel `fkui.crud-button.delete` eller default slot.

```import
FCrudDatasetCustomTextExample.vue
```

## Textnycklar

Läs mer om att {@link translate-text anpassa och översätta text}.

:::api
translation:FCrudDataset
:::

:::api
translation:FCrudButton
:::

## API

### `FCrudDataset`

:::api
vue:FCrudDataset
:::

### `FCrudButton`

**Deprekerad:** För tabell använd {@link component:FTableButton FTableButton} istället annars vanlig {@link component:button knapp}.

För tabell:

```html name=table-button-original hidden
<!-- [html-validate-disable-block deprecated -- migration guide] -->
<f-crud-dataset>
    <template #default>
        <f-interactive-table :rows>
            <template #caption> Tabell </template>
            <template #default="{ row }">
                <f-table-column title="Åtgärder">
                    <f-crud-button action="modify" :item="row" icon>
                        Ändra {{ row.name }}
                    </f-crud-button>
                    <f-crud-button action="delete" :item="row" icon>
                        Ta bort {{ row.name }}
                    </f-crud-button>
                </f-table-column>
            </template>
        </f-interactive-table>
    </template>
</f-crud-dataset>
```

```html compare=table-button-original
<f-crud-dataset>
    <template #default="{ updateItem, deleteItem }">
        <f-interactive-table :rows>
            <template #caption> Tabell </template>
            <template #default="{ row }">
                <f-table-column title="Åtgärder">
                    <f-table-button icon="pen" @click="updateItem(item)">
                        Ändra {{ item.name }}
                    </f-table-button>
                    <f-table-button icon="trashcan" @click="deleteItem(item)">
                        Ta bort {{ item.name }}
                    </f-table-button>
                </f-table-column>
            </template>
        </f-interactive-table>
    </template>
</f-crud-dataset>
```

Övriga:

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
                <button
                    type="button"
                    class="button button--small button--tertiary"
                    @click="updateItem(item)"
                >
                    <f-icon name="pen">
                        <title>Ändra {{ item.name }}</title>
                    </f-icon>
                </button>
                <button
                    type="button"
                    class="button button--small button--tertiary"
                    @click="deleteItem(item)"
                >
                    <f-icon name="pen">
                        <title>Ta bort {{ item.name }}</title>
                    </f-icon>
                </button>
            </template>
        </f-list>
    </template>
</f-crud-dataset>
```

:::api
vue:FCrudButton
:::
