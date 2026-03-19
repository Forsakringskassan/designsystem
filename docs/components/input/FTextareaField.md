---
title: Flerradigt inmatningsfält
status: Produktionsklar
layout: component
component: FTextareaField
---

Använd flerradigt inmatningsfält för information som användaren behöver skriva in själv, men som inte får plats i ett vanligt inmatningsfält.
Flerradigt inmatningsfält har alltid en etikett som beskriver vad användaren ska fylla i.

```import live-example
FTextareaFieldLiveExample.vue
```

## Begränsa antal tecken

Etikettens formatbeskrivning ska visa antalet tecken som användaren kan skriva i ett flerradigt inmatningsfält.

När antalet tecken begränsas ska det även sättas en gräns för när användaren ska få information om att max antal tecken snart är uppnått.
Informationen visas genom att texten "Antal tecken kvar: nn" visas som en del av etiketten.
Förslagsvis visas varningen när 80% av max antal tecken är uppnått.
Skärmläsaranvändare får information om antal återstående uppläst för sig ('aria-live="polite"').

När max antal tecken är uppnått går det inte att skriva in mer text.

Använd attributen _maxlength_ som är den hårda gränsen och _soft-limit_ som är tröskelvärdet för när varningen ska visas.

```diff
 <f-textarea-field
+    :maxlength="100"
+    :soft-limit="20"
 >
```

Du kan använda attributet _characters-left-warning_ för att använda en annan text i varningen.
För att interpolera in antalet tecken kvar i texten behöver strängen innehålla teckenföljden `%charactersLeft%` som kommer att ersättas med värdet.

```diff
 <f-textarea-field
+     characters-left-warning="Endast %charactersLeft% tecken kvar."
 >
```

## Fältets höjd

Tänk på att inmatningsfältets höjd, som anges i antal rader, påverkar användarens uppfattning om hur mycket text hen förväntas skriva.

Anpassa antalet rader som visas i inmatningsfältet utifrån bredden på fältet och antal tecken som användaren kan tänkas skriva.
Det är sällan lämpligt att sätta antalet rader utifrån maximalt antal tillåtna tecken. Om inmatningsfältet visar många rader
får användaren dålig överblick om inmatningsfältet är placerat i ett formulär eller tillsammans med annat innehåll.

Antalet rader sätts med attributet [`rows`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#rows).

```diff
 <f-textarea-field
+    rows="3"
 >
```

Fyra rader visas som standard om inget anges.

## API

:::api
vue:FTextareaField
:::
