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
Informationen om antal tecken kvar uppdateras med `aria-live="polite"` så att skärmläsare kan läsa upp ändringen.

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

Du kan styra höjden på tre sätt:

- Fast höjd: fältet visar ett bestämt antal rader.
- Justerbar höjd: användaren kan själv ändra fältets höjd.
- Automatisk höjd: fältet anpassar antalet synliga rader efter innehållet.

Fast höjd är standard. Anpassa antalet rader utifrån fältets bredd och hur mycket text användaren kan tänkas skriva.
Det är sällan lämpligt att sätta antalet rader utifrån maximalt antal tillåtna tecken. Om inmatningsfältet visar många rader får användaren dålig överblick om inmatningsfältet är placerat i ett formulär eller tillsammans med annat innehåll.

Du anger antalet rader med attributet [`rows`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#rows).
Fyra rader visas som standard om du inte anger något annat.

```diff
 <f-textarea-field
+    rows="3"
 >
```

Använd `resizable` om användaren själv ska kunna ändra fältets höjd.
Funktionen bygger på webbläsarens eget stöd och fungerar olika i olika webbläsare.
På mobila enheter visas oftast inget reglage för att ändra höjden.

```diff
 <f-textarea-field
+    resizable
 >
```

### Automatisk höjd

Använd automatisk höjd när mängden text kan variera och fältet ska anpassa sig efter innehållet medan användaren skriver.
Fältet börjar med det antal rader du anger och visar fler rader när innehållet behöver mer plats.

När du använder automatisk höjd bör du begränsa fältet så att det inte kan växa utan kontroll.
Ange max antal rader med `max-rows` för att begränsa fältets höjd.
Använd `maxlength` när du också behöver begränsa mängden text.

Du aktiverar automatisk höjd med attributet `auto-resize`.

```diff
 <f-textarea-field
+    auto-resize
 >
```

Automatisk höjd bygger på webbläsarstöd för `field-sizing`.
I webbläsare utan stöd växer fältet inte automatiskt när användaren skriver.
Då visar komponenten minst fyra rader, så att fältet inte blir för litet.
Om du anger fler än fyra rader visar komponenten det antalet rader i stället.
Om du anger max antal rader kan det begränsa hur stort fältet visas i äldre webbläsare.
På desktop kan användaren ändra höjden manuellt när max antal rader inte används.
På mobila enheter kan fältet i stället upplevas som fast.

Med `auto-resize` visas fyra rader som standard, precis som vid fast höjd. Använd `rows` för att ange ett annat minsta antal rader.

```diff
 <f-textarea-field
+    auto-resize
+    rows="3"
 >
```

Använd `max-rows` för att ange max antal rader som fältet får visa.
När texten inte ryms inom max antal rader kan användaren skrolla i fältet.
Attributet `rows` anger alltid minsta antal rader. Om `max-rows` är lägre än `rows` visar komponenten ändå antalet rader från `rows`.

```diff
 <f-textarea-field
+    auto-resize
+    :max-rows="6"
 >
```

Kombinera inte `auto-resize` och `resizable`. Om du ändå anger båda använder komponenten automatisk höjd.

## API

:::api
vue:FTextareaField
:::
