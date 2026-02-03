---
title: Kontextmeny
status: Draft
layout: api
sortorder: 1
component:
    - FTable
---

## Here be dragons

## Parametrar

**`actions:`** `Array<{ label: string, icon?: string, onClick(row: T):void }>` {@optional}
: Lista med menyval. `label` är menyvalets text, `icon` är menyvalets ikon (se FIcon) och `onClick()` anropas vid menyval.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning

**`enabled:`** `boolean | ((row: T): boolean => {})` {@optional}
: Om menyn ska visas.
Default `true`.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik som visas i thead.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas. `"grow"` ger största möjliga bredd och `"shrink"` minsta möjliga bredd.
Default: `grow`.

**`text:`** `(row: T): string | null => {}`
: Särmläsartext för menyns knapp.

**`type:`** `InputTypeText`
: Kolumnens typ, sätts till `menu`.
