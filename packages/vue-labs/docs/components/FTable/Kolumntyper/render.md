---
title: Anpassad
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

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik som visas i thead.

**`key:`** `K` {@optional}
: Kopplar cellens värde till värde i `T`.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas. `"grow"` ger största möjliga bredd och `"shrink"` minsta möjliga bredd.
Default: `grow`.

**`render:`** `(row: T): VNode | Component => {}`
: Funktion som retunerar den komponent som ska renderas i cellen.

**`type:`** `InputTypeText`
: Kolumnens typ, sätts till `render`.
