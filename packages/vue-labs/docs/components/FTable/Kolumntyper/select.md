---
title: Dropplista
status: Draft
layout: api
sortorder: 1
component:
    - FTable
---

## Here be dragons

## Parametrar

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning

**`editable:`** `boolean | ((row: T) => boolean)  => {})` {@optional}
: Om dropplistan är aktiv.
Default `true`.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik som visas i thead.

**`key:`** `K` {@optional}
: Kopplar cellens värde till värde i `T`.

**`label:`** `(row: T): string  => {}` {@optional}
: Skärmläsartext för dropplistan.

**`options:`** `string[]`
: Lista med val.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas. `"grow"` ger största möjliga bredd och `"shrink"` minsta möjliga bredd.
Default: `grow`.

**`type:`** `InputTypeText`
: Kolumnens typ, sätts till `select`.

**`selected:`** `(rox: T): string => {}`
Funktion som retunerar värdet för aktivt val.

**`update:`** `(row: T, newValue: string, oldValue: string): void  => {}` {@optional}
: Anropas vid uppdaterat val.
