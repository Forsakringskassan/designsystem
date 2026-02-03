---
title: Knapp
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

**`enabled:`** `boolean | ((row: T): boolean => {})` {@optional}
: Om knappen ska visas.
Default `true`.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik som visas i thead.

**`icon`** `string` {@optional}
: Namn på den ikon som ska visas på knappen, se FIcon.

**`key:`** `K` {@optional}
: Kopplar cellens värde till värde i `T`.

**`onClick:`** `(row: T):void => {}` {@optional}
: Funktion som anropas vid klick på knapp.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas. `"grow"` ger största möjliga bredd och `"shrink"` minsta möjliga bredd.
Default: `grow`.

**`text:`** `(row: T): string | null => {}`
: Funktion som retunerar knappens text.

**`type:`** `InputTypeText`
: Kolumnens typ, sätts till `button`.
