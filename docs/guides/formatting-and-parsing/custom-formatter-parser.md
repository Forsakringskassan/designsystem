---
title: Formaterare och parser - anpassad
layout: pattern
sortorder: 2
---

För en djupare förståelse om hur data flödar från inmatningsfält till modell-värde till vy-värde presenterar vi flödesscheman.

## Utan parser och formaterare

```mermaid
graph LR
	FTextField["`**FTextField**
	    &quot;AbcD&quot;`"]
    validerar?{"`**Validerar?**
	    &quot;AbcD&quot;`"}
    trim["trim()"]
    modelValue[("`**modelValue**
	    &quot;AbcD&quot;`")]

    FTextField -. "Ändrar värde\n(blur)" .-> validerar?
    validerar? -- Ja --> trim
    validerar? -- Nej --> modelValue
    trim --> modelValue
```

## Formaterare utan parser

I detta exempel använder vi en fiktiv formaterare som ändrar skiftläge till gemener.

```ts
function myFormatter(value: string): string {
    return value.toLowerCase();
}
```

```mermaid
graph LR
	FTextField["`**FTextField**
	    &quot;AbcD&quot;`"]
    validerar?{"`**Validerar?**
	    &quot;AbcD&quot;`"}
    modelValue[("`**modelValue**
	    &quot;abcd&quot;`")]
    viewValue[("`**viewValue**
	    &quot;abcd&quot;`")]
    pformatter["formatter()"]
    ptrim["trim()"]
    stringify["String()"]

    FTextField -. "Ändrar värde\n(blur)" .-> validerar?
    validerar? -- Ja --> ptrim
    validerar? -- Nej --> modelValue
    ptrim --> pformatter
    pformatter --> modelValue
    modelValue -. watcher .-> stringify
    stringify -. Uppdaterar .-> viewValue
```

```import nomarkup
WithFormatterExample.vue
```

## Parser utan formaterare

I detta exempel använder vi en fiktiv parser som ändrar skiftläge till versaler.

```ts
function myParser(value: string): string {
    return value.toUpperCase();
}
```

```diff
 <f-text-field
+    :parser="myParser"
 ></f-text-field>
```

```mermaid
graph LR
	FTextField["`**FTextField**
	    &quot;AbcD&quot;`"]
    validerar?{"`**Validerar?**
	    &quot;AbcD&quot;`"}
    modelValue[("`**modelValue**
	    &quot;ABCD&quot;`")]
    pparser["parser()"]
    ptrim["trim()"]

    FTextField -. "Ändrar värde\n(blur)" .-> validerar?
    validerar? -- Ja --> ptrim
    ptrim --> pparser
    validerar? -- Nej --> modelValue
    pparser --> modelValue
```

Eftersom ingen formaterare finns uppdateras inte vy-värdet.

```import nomarkup
WithParserExample.vue
```

## Formaterare och parser

I detta exempel kombinerar vi formateraren och parsern från tidigare flöden.

```mermaid
graph LR
	FTextField["`**FTextField**
	    &quot;AbcD&quot;`"]
    modelValue[("`**modelValue**
	    &quot;ABCD&quot;`")]
    viewValue[("`**viewValue**
	    &quot;abcd&quot;`")]
    validerar?{"`**Validerar?**
	    &quot;AbcD&quot;`"}
    pparser["parser()"]
    ptrim["trim()"]
    wformatter["formatter()"]
    stringify["String()"]

    FTextField -. "Ändrar värde\n(blur)" .-> validerar?
    validerar? -- Ja --> ptrim
    ptrim --> pparser
    validerar? -- Nej --> modelValue
    pparser --> modelValue
    modelValue -. watcher .-> wformatter
    wformatter --> stringify
    stringify -. Uppdaterar .-> viewValue
```

```import nomarkup
WithParserFormatterExample.vue
```

## Programmatisk uppdatering av model-värde

Vid programmatisk uppdatering av model-värde uppdateras vy-värde automatiskt.
Vy-värdet formateras om en formaterare är angiven.
Om även en parser är angiven utöver formaterare så parsas värdet innan det formateras.
Misslyckas parsning eller formatering på vägen så sätts vy-värdet till model-värdet.

```mermaid
graph LR
    modelValue[("`**modelValue**
	    &quot;AbcD&quot;`")]
    viewValue[("`**viewValue**
	    &quot;abcd&quot;`")]
    stringify["String()"]
    wparser["parser()"]
    wformatter["formatter()"]

    modelValue -. watcher .-> wparser
    wparser --> wformatter
    wformatter --> stringify
    stringify -. Uppdaterar .-> viewValue
```

## Relaterat

{@link formatter-parser (Formatering och parsning)}
