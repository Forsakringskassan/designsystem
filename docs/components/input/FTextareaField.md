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
Skärmläsaranvändare får information om antal återstående uppläst för sig med `aria-live="polite"`.

När max antal tecken är uppnått går det inte att skriva in mer text.

Använd attributen `maxlength` som är den hårda gränsen och `soft-limit` som är tröskelvärdet för när varningen ska visas.

```diff
 <f-textarea-field
+    :maxlength="100"
+    :soft-limit="20"
 >
```

Du kan använda attributet `characters-left-warning` för att använda en annan text i varningen.
För att interpolera in antalet tecken kvar i texten behöver strängen innehålla teckenföljden `%charactersLeft%` som kommer att ersättas med värdet.

```diff
 <f-textarea-field
+     characters-left-warning="Endast %charactersLeft% tecken kvar."
 >
```

## Fältets höjd

Inmatningsfältets höjd påverkar användarens uppfattning om hur mycket text hen förväntas skriva.
Höjden kan vara fast, justerbar av användaren eller automatisk.

Fast höjd är standard. Anpassa antalet rader som visas i inmatningsfältet utifrån bredden på fältet och hur mycket text användaren kan tänkas skriva.
Det är sällan lämpligt att sätta antalet rader utifrån maximalt antal tillåtna tecken. Om inmatningsfältet visar många rader får användaren dålig överblick om inmatningsfältet är placerat i ett formulär eller tillsammans med annat innehåll.

Antalet rader sätts med attributet [`rows`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#rows).
Fyra rader visas som standard om inget anges.

```diff
 <f-textarea-field
+    rows="3"
 >
```

Använd `resizable` om användaren själv ska kunna ändra fältets höjd.

```diff
 <f-textarea-field
+    resizable
 >
```

### Automatisk höjd

Använd automatisk höjd när mängden text kan variera och fältet ska anpassa sig efter innehållet medan användaren skriver. Fältet utgår från antalet rader som visas från början och visar fler rader när innehållet behöver mer plats.

När automatisk höjd används bör fältet ha en rimlig begränsning så att det inte kan växa utan kontroll. Begränsa den synliga höjden med `max-rows` eller mängden text med `maxlength`.

Automatisk höjd aktiveras med attributet `auto-resize`.

```diff
 <f-textarea-field
+    auto-resize
 >
```

Automatisk höjd bygger på webbläsarstöd för `field-sizing`. I webbläsare utan stöd växer fältet inte automatiskt. Då visas fältet med minst fyra rader. `rows` kan ge en högre fallbackhöjd och `max-rows` kan begränsa den. På desktop kan användaren ändra höjden manuellt när `max-rows` inte används, men på mobila enheter kan fältet upplevas som fast.

Med `auto-resize` visas fyra rader som standard, precis som vid fast höjd. Använd `rows` för att ange ett annat minsta antal rader.

```diff
 <f-textarea-field
+    auto-resize
+    rows="3"
 >
```

Använd `max-rows` för att begränsa hur många rader fältet får visa. När innehållet inte längre får plats inom maxgränsen får fältet intern scroll.
`rows` anger alltid minsta antal rader, även om `max-rows` skulle vara lägre.

```diff
 <f-textarea-field
+    auto-resize
+    :max-rows="6"
 >
```

Kombinera inte `auto-resize` och `resizable`. Om båda anges används automatisk höjd.

## API

:::api
vue:FTextareaField
:::
