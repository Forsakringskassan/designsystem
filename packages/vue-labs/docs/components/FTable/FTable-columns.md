---
title: Kolumntyper - AI
status: Draft
layout: component
sortorder: 1
component:
    - FTable
    - TableColumn
search:
    terms:
        - radrubrik
        - kolumntyper
---

## FTable — Kolumntyper

Denna sida beskriver alla kolumntyper som FTable stödjer och deras egenskaper,
beteenden vid visning och redigering, samt exempel på hur de används.

## Översikt

FTable accepterar kolumnbeskrivningar via `defineTableColumns([...])`. Varje kolumn beskrivs med en union-typ som omfattar olika specialiseringar (text, checkbox, radio, mm). Fält som `key` används för värde-åtkomst och sortering; specialiserade text-typer använder interna parser/formatter/validation-konfigurationer.

## Gemensamma egenskaper (TableColumnBase)

Alla kolumntyper delar följande proppar:

- `header` (`string` | `Ref<string>`) — kolumnrubrik som visas i thead.
- `description?` (`string` | `Ref<string | null>`) — valfri beskrivning/formatbeskrivning.
- `size?` ("grow" | "shrink" | Ref<...>) — hur kolumnen skalas. Standard: "grow".

Basnormalisering (internt) ger varje kolumn:

- unikt `id` (Symbol), `header` som Ref, `description` som Ref och `size` som Ref.

## Kolumntyper — detaljer

Följande avsnitt förklarar var och en av kolumntyperna, deras viktiga proppar och rekommendationer.

### text (allmänt)

- `type`: `"text"` eller specialvarianter `text:...`.
- Används för fri text och för redigerbara fält.
- Vanliga proppar:
    - `key?: K` — property i row som används för värde och sortering.
    - `label?(row): string` — label för redigerbart fält.
    - `value?(row): string` — egen value-funktion (annars används key).
    - `update?(row, newValue, oldValue)` — callback vid ändring.
    - `editable?: boolean | (row => boolean)` — om cellen är redigerbar.
    - `tnum?: boolean` — tabular figures (sätts automatiskt för vissa typer).
    - `align?: "left" | "right"` — textjustering.

Observera: specialiserade `text:...`-typer (t.ex. `text:currency`, `text:personnummer`) har parser/formatter/validation kopplat via `input-fields-config`.

### Specialiserade text-typer (lista)

Följande `text:...`-typer finns implementerade:

- text:personnummer
- text:bankAccountNumber
- text:bankgiro
- text:clearingNumber
- text:currency
- text:date
- text:email
- text:organisationsnummer
- text:number
- text:percent
- text:phoneNumber
- text:plusgiro
- text:postalCode

Nedan följer per-typ sammanfattning av beteende och rekommendationer.

#### text:personnummer

- Formatter/parser: normaliserar och formatterar personnummer (via @fkui/logic).
- Validering: personnummerformat + Luhn + maxLength.
- Input-attribut: inputmode=numeric, maxlength=23.
- Modell: rekommenderas string (parser normaliserar format).

```ts
interface TableRow {
    id: string;
    pnr: string;
}

const columns = defineTableColumns<TableRow, keyof TableRow>([
    {
        type: "text:personnummer",
        header: "Personnummer",
        key: "pnr",
        editable: true,
        label: (row) => `Personnummer för rad ${row.id}`,
    },
]);
```

#### text:bankAccountNumber

- Parser/formatter: parseBankAccountNumber.
- Validering: bankAccountNumber.
- Attribut: inputmode=numeric, maxlength=40.
- Modell: string.

#### text:bankgiro

- Parser/formatter: parseBankgiro.
- Validering: bankgiro + maxLength.
- Attribut: inputmode=numeric, maxlength=40.
- Modell: string.

#### text:clearingNumber

- Parser/formatter: parseClearingNumber (trim).
- Validering: clearingNumber.
- Attribut: inputmode=numeric, maxlength=16.
- Modell: string.

#### text:currency

- Formatter: formatNumber (tusentalsavgränsare).
- Parser: parseNumber.
- Validering: currency, integer.
- Attribut: inputmode=numeric, maxlength=20.
- Modell: kan sparas som number vid lyckad parse; annars sträng.

#### text:number

- Formatter/parser: formatNumber/parseNumber, stöder `decimals`.
- Validering: number.
- Attribut: inputmode=numeric, maxlength=20.
- Modell: number vid lyckad parse.

#### text:percent

- Formatter/parser: formatNumber/parseNumber med decimals.
- Validering: percent, min/max (0–999).
- Attribut: inputmode=numeric, maxlength=20.
- Modell: number.

#### text:date

- Formatter/parser: parseDate (ex. YYYY-MM-DD).
- Validering: date.
- Attribut: input type text (fungerar med datumformat-kontroller).
- Modell: string i ISO-liknande format.

#### text:email

- Formatter/parser: ingen automatiserad formatering (returnerar value).
- Validering: email-format + maxLength.
- Attribut: type=email, maxlength=80.
- Modell: string (sparas exakt som inmatat).

#### text:organisationsnummer

- Formatter/parser: parseOrganisationsnummer.
- Validering: organisationsnummer + maxLength.
- Attribut: inputmode=numeric, maxlength=20.
- Modell: string.

#### text:phoneNumber

- Formatter/parser: specialfunktion (från logikpaketet).
- Attribut: inputmode=numeric.
- Modell: string.

#### text:plusgiro

- Formatter/parser: parsePlusgiro.
- Validering: relevant plusgiro-format.
- Attribut: inputmode=numeric.
- Modell: string.

#### text:postalCode

- Formatter/parser: formatPostalCode / parse.
- Validering: postnummer-specifik.
- Attribut: inputmode=numeric.
- Modell: string.

### checkbox

- `type: "checkbox"`.
- Proppar:
    - `key?: K`
    - `label?(row): string`
    - `checked?(row): boolean`
    - `update?(row, newVal, oldVal)`
    - `editable?: boolean | (row => boolean)`
- Beteende: visas som en kryssruta; `checked` eller `key` används för status; `update` kallas vid ändring.

### radio

- `type: "radio"`.
- Proppar:
    - `key?: K`
    - `label?(row): string`
    - `checked?(row): boolean`
    - `update?(row, newVal, oldVal)`
    - `editable?: boolean | (row => boolean)`
- Används när en kolumn representerar en radiovalsstatus.

### rowheader (radrubrik)

- `type: "rowheader"`.
- Används för celler som ska vara rad-rubriker (t.ex. identifierare).
- Ger förbättrad tillgänglighet: cellen markeras som radrubrik (th scope=row).
- Proppar:
    - `text?(row)`
    - `key?`.
- Rekommendation: använd när en cell tydligt identifierar raden och du vill underlätta skärmläsarnavigering.

### anchor (länk)

- `type: "anchor"`.
- Proppar:
    - `text(row): string | null`
    - `href: string` — länkens url (kan vara statisk eller interpolerad).
    - `enabled?: boolean | (row => boolean)`
- Beteende: visas som länk; `enabled` kan styra om länken ska vara interaktiv.

### button

- `type: "button"`.
- Proppar:
    - `text(row): string | null`
    - `onClick?(row)` — callback vid knappklick.
    - `icon?: string`
    - `enabled?: boolean | (row => boolean)`

### select (dropplista)

- `type: "select"`.
- Proppar:
    - `options: string[]`
    - `selected?(row): string`
    - `update?(row, newVal, oldVal)`
    - `editable?: boolean | (row => boolean)`
    - `label?(row)`
- Presenteras som ett select-fält i redigeringsläge.

### menu (kontextmeny)

- `type: "menu"`.
- Proppar:
    - `text(row): string | null`
    - `enabled?: boolean | (row => boolean)`
    - `actions?: Array<{ label: string; icon?: string; onClick?(row): void }>`
- Beteende: visar en meny med actions; varje action får onClick-row callback.

### render (egendefinierad rendering)

- Ingen `type` — istället används `render(this, row)` i kolumn-objektet.
- Returnerar en VNode eller Component.
- Använd när full kontroll över cellens DOM/komponentinnehåll behövs.
- Normaliseras till typ `undefined` internt och blir normalt inte sortbar.

### simple (ingen type - read-only)

- Om `type` inte sätts i kolumnobjektet används en "simple" kolumn som normaliseras till en text-kolumn med default-värden: icke-redigerbar, ingen label, etc.
- Praktiskt för snabba read-only-kolumner.

## Sortering, storlek och synlighet

- Sortering:
    - En kolumn blir sorteringsbar om `sortable` sätts internt från `key` (d.v.s. om du anger `key` i kolumnen).
    - Tabell-komponenten kan hantera uppdatering av sort-order via interna funktioner (se `updateSortOrder` i koden).

- Storlek (size):
    - `size` kan vara `"grow"` (expanderar) eller `"shrink"` (krymper).
    - Du kan också använda `expand` / `shrink` props på komponentnivå (beroende på implementation) för att påverka kolumnens layout.

- Synlighet:
    - Intern logik tillåter att kolumner göms/visas (funktioner som `setVisibilityColumn` används av API).

## Redigering, parser/formatter och validering

- Specialiserade text-typer använder centrala parser/formatter/validation-konfig i `input-fields-config.ts` (se utdrag ovan).
- Vid redigering:
    - Inmatningsfält får attribut från `attributes()` (t.ex. `inputmode`, `maxlength`, `type`).
    - Parser används när användaren lämnar (blur) redigeringsläge för att omvandla visningsvärdet till modellvärde.
    - Formatter används för att visa modellvärdet i läsvy (span) i ett formaterat sätt (t.ex. tusentalsseparator).
    - Om parser lyckas returneras normalt en `number` för numeriska typer; vid parserfel kan modellen uppdateras med den råa strängen och cellen markeras med error-klass.
- ValidationConfig används för att utföra valideringar och visa felmarkeringar i cellen.

Testbeteenden (ur testkod):

- Valuta-kolumn (`text:currency`) formaterar visning med tusentalsavgränsare och uppdaterar modell med `number` när parser lyckas.
- Email-kolumn (`text:email`) gör ingen automatisk formatering; modellen sparas som inmatad text.

## Accessibility (tillgänglighet)

- Använd `rowheader` när en cell identifierar raden — detta hjälper skärmläsare att läsa ut rubriker per rad.
- `header` och `description` kan användas som Ref för dynamiska rubriker / beskrivningar.
- Menyer, knappar och länkar bör ha tydliga labels och aria-attribut vid behov (komponentimplementeringen tar hand om grundläggande markup).

## Snabbstart / Exempel

Exempel: definiera en uppsättning kolumner och rader:

```ts
import { defineTableColumns } from "@fkui/vue-labs";

interface TableRow {
    id: string;
    name: string;
    amount: string;
    active: string;
}
const columns = defineTableColumns<TableRow, keyof TableRow>([
    { type: "rowheader", header: "ID", key: "id" },
    {
        type: "text",
        header: "Namn",
        key: "name",
        editable: true,
        label: () => "Namn",
    },
    { type: "text:currency", header: "Belopp", key: "amount", editable: true },
    { type: "checkbox", header: "Aktiv", key: "active" },
    {
        type: "button",
        header: "Åtgärd",
        text: () => "Ta bort",
        onClick(row) {
            /* ... */
        },
    },
]);
```

Exempel på `text:number` med decimals:

```ts
const columns = defineTableColumns<TableRow, keyof TableRow>([
    {
        type: "text:number",
        header: "Vikt",
        key: "weight",
        decimals: 3,
        editable: true,
    },
]);
```

Exempel på `menu`-kolumn:

```ts
const columns = defineTableColumns<TableRow, keyof TableRow>([
    {
        type: "menu",
        header: "Åtgärder",
        text: (row) => `Åtgärder för ${row.id}`,
        actions: [
            {
                label: "Visa",
                icon: "search",
                onClick: (row) => console.log("visa", row),
            },
            {
                label: "Ta bort",
                icon: "trashcan",
                onClick: (row) => console.log("ta bort", row),
            },
        ],
    },
]);
```
