---
title: "Version 7 migreringsguide: `text` till `screenreaderText`"
short-title: FTable
name: migrating-to-screenreaderText
layout: article
---

I **FKUI v7** har egenskapen `text` bytt namn till `screenreaderText` för tabellkolumner av typen `"button"` och `"menu"` i `FTable`. Ändringen förtydligar att strängen som returneras endast används som tillgänglighetstext för skärmläsare och inte visas visuellt i cellen.

## Sammanfattning av ändringar

| Typ / Funktion            | Ändring                                                  |
| :------------------------ | :------------------------------------------------------- |
| `TableColumnButton<T, K>` | Egenskapen `text` har bytt namn till `screenreaderText`. |
| `TableColumnMenu<T>`      | Egenskapen `text` har bytt namn till `screenreaderText`. |

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

### Ändrade publika egenskaper

- **`TableColumnButton<T, K>`** (`type: "button"`): Egenskapen `text?(this: void, row: T): string | null` har ersatts av den obligatoriska metoden `screenreaderText(this: void, row: T): string | null`.
- **`TableColumnMenu<T>`** (`type: "menu"`): Egenskapen `text(this: void, row: T): string | null` har ersatts av `screenreaderText(this: void, row: T): string | null`.

> **Obs!** Kolumner med andra typer (till exempel `type: "text"`) påverkas inte och ska fortsatt använda sina befintliga egenskaper.

### Checklista vid uppgradering till v7

- [ ] Sök upp alla förekomster av `defineTableColumns` i applikationen.
- [ ] Kontrollera samtliga kolumnobjekt som har `type: "button"` eller `type: "menu"`.
- [ ] Byt namn på egenskapen `text` till `screenreaderText` på dessa kolumner.
- [ ] Verifiera att TypeScript-kompileringen (`tsc`) går igenom utan typfel.
- [ ] Testa med skärmläsare eller inspektera DOM-trädet för att säkerställa att knappar och menyknappar i tabellen fortfarande har rätt tillgänglighetsnamn.

::: details 🤖 Prompt för AI Agenter

Search the codebase for `defineTableColumns` and column objects containing `type: "button"` or `type: "menu"`.
Rename `text` to `screenreaderText` on matching column objects.
Run TypeScript type-checking (`tsc`) to verify no remaining type errors exist.
:::
