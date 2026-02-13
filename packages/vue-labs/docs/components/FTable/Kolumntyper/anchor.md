---
title: Länk
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
: Om länken ska visas.
Default `true`.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik som visas i thead.

**`key:`** `K` {@optional}
: Kopplar cellens värde till värde i `T`.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas. `"grow"` ger största möjliga bredd och `"shrink"` minsta möjliga bredd.
Default: `grow`.

**`type:`** `InputTypeText`
: Kolumnens typ, sätts till `anchor`.
