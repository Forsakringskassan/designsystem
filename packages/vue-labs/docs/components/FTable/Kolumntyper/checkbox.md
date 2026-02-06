---
title: Kryssruta
status: Draft
layout: api
sortorder: 1
component:
    - FTable
---

## Here be dragons

## Parametrar

**`checked:`** `(row: T): boolean  => {}` {@optional}
: Funktion som avgör om kryssrutan är kryssad.

**`description:`** `string | Readonly<Ref<string | null>>` {@optional}
: Formatbeskrivning

**`editable:`** `boolean | ((row: T) => boolean)  => {}` {@optional}
: Om kryssrutan är redigerbar.
Default `true`.

**`header:`** `string | Readonly<Ref<string>>`
: Kolumnrubrik som visas i thead.

**`key:`** `K` {@optional}
: Kopplar cellens värde till värde i `T`.

**`label:`** `(row: T): string  => {}` {@optional}
: Skärmläsartext för kryssruta.

**`size:`** `TableColumnSize | Readonly<Ref<TableColumnSize | null>>` {@optional}
: Hur kolumnens bredd skalas. `"grow"` ger största möjliga bredd och `"shrink"` minsta möjliga bredd.
Default: `grow`.

**`type:`** `InputTypeText`
: Kolumnens typ, sätts till `checkbox`.

**`update:`** `(row: T, newValue: string, oldValue: string): void  => {}` {@optional}
: Anropas vid uppdaterat värde.
