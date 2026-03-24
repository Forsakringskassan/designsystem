---
title: Om kolumntyper
layout: article
sortorder: 1
search:
    terms:
        - tabell
---

En kolumn i tabellen kan visa olika typer av innehåll.

Den här sidan ger en överblick av vilka kolumntyper som finns i `FTable` och vad de används till.

Tabellen stödjer följande kolumntyper:

- vanlig text (`text`), både enbart visning och redigerbar text
- specialiserade texttyper för formatering och validering av specifika värden
- radrubrik (`rowheader`)
- kryssruta (`checkbox`)
- länk (`anchor`)
- knapp (`button`)
- dropplista (`select`)
- åtgärdsmeny (`menu`)
- eget renderat innehåll (`render`)

```import
FTableColumnLiveExample.vue
```

Tabellen kan bara visa en typ av innehåll per kolumn.
Det går alltså inte att blanda olika kolumntyper i samma kolumn.

## Texttyper

Den vanligaste kolumntypen är vanlig text (`text`).
Den kan användas både för ren visning och för redigerbara celler.

Utöver vanlig text finns specialiserade texttyper för värden som behöver särskild formatering, validering eller inmatningsstöd:

- fritext (`text`)
- kontonummer (`text:bankAccountNumber`)
- bankgiro (`text:bankgiro`)
- clearingnummer (`text:clearingNumber`)
- datum (`text:date`)
- mejladress (`text:email`)
- organisationsnummer (`text:organisationsnummer`)
- personnummer (`text:personnummer`)
- telefonnummer (`text:phoneNumber`)
- plusgiro (`text:plusgiro`)
- postnummer (`text:postalCode`)
- valuta (`text:currency`)
- numeriskt värde (`text:number`)
- procent (`text:percent`)

De specialiserade texttyperna är lämpliga när du vill att tabellen ska hjälpa till med korrekt presentation och validering av användarens inmatning.

Läs mer:

- Textfält (huvudsida i avsnittet nedan)
- {@link bank-account-number Kontonummer}
- {@link bankgiro Bankgiro}
- {@link clearing-number Clearingnummer}
- {@link date Datum}
- {@link email Mejladress}
- {@link organisationsnummer Organisationsnummer}
- {@link personnummer Personnummer}
- {@link phone-number Telefonnummer}
- {@link plusgiro Plusgiro}
- {@link postal-code Postnummer}
- {@link currency Valuta}
- {@link number Numeriskt värde}
- {@link percent Procent}

## Övriga kolumntyper

- radrubrik (`rowheader`): används när en cell ska fungera som radrubrik.
- kryssruta (`checkbox`): visar en kryssruta i varje rad.
- länk (`anchor`): visar en länk.
- knapp (`button`): visar en knapp.
- dropplista (`select`): visar en dropplista.
- åtgärdsmeny (`menu`): visar en åtgärdsmeny för raden.
- eget renderat innehåll (`render`): används när du behöver rendera eget innehåll som inte täcks av de inbyggda typerna.

Läs mer:

- {@link rowheader Radrubrik}
- {@link checkbox Kryssruta}
- {@link anchor Länk}
- {@link button Knapp}
- {@link select Dropplista}
- {@link menu Åtgärdsmeny}
- {@link render Eget renderat innehåll}

## Bra att veta

Alla kolumntyper delar några gemensamma egenskaper:

- `header` för kolumnrubriken
- `description` för valfri formatbeskrivning
- `size` för att styra kolumnens bredd (`grow` eller `shrink`)
- `enabled` för att styra om kolumnens interaktiva innehåll ska vara aktivt

Vissa typer har dessutom stöd för till exempel `editable`, `label`, `key`, `value`, `update` eller annan typ-specifik konfiguration.
