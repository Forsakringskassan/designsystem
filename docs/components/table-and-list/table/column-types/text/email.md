---
title: Kolumntyp mejladress i tabell
short-title: Mejladress
name: column-type-email
layout: article
search:
    terms:
        - text:email
        - mejladress
---

Använd mejladress (`text:email`) för inmatning och visning av mejladress i en tabell.
Mejladress följer samma validering som det {@link textfield-specialized#mejladress specialiserade inmatningsfältet mejladress}.

```ts
import { defineTableColumns } from "@fkui/vue";

const columns = defineTableColumns<Record<string, string>>([
    {
        type: "text:email",
        header: "Mejladress",
        key: "email",
        editable: true,
    },
]);
```

## Domännamn med specialtecken

Domännamn med andra tecken än a-z, 0-9 och bindestreck, till exempel å, ä, ö eller é, konverteras ibland till [punycode](https://en.wikipedia.org/wiki/Punycode).
Då blir `a@å.example` till `a@xn--5ca.example`.
Det kan vara så i datat som du visar i tabellen, till exempel om mejladressen hämtas från en backend där den är sparad som punycode.
Det kan också komma från webbläsaren.
Vissa webbläsare, men inte alla, konverterar domänen när användaren skriver in mejladressen, om det behövs.

I tabellen visas domänen alltid med vanliga tecken.
Mejladressen `a@xn--5ca.example` visas alltså som `a@å.example`.
Värdet i raden ändras inte av hur det visas.

Valideringen sker på värdet i fältet, inte på hur det visas.
Den godkänner inte andra tecken än a-z, 0-9 och bindestreck i domänen, men däremot punycode.
Se {@link validators#mejladress valideringen för mejladress} för mer information.

## Parametrar

::: api properties
interface:TableColumnText
:::
