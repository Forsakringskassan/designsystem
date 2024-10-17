---
title: Inmatningsfält
sortorder: 1
status: Produktionsklar
layout: component
component: FTextField
---

Använd inmatningsfält för information som användaren behöver skriva in själv, exempelvis namn, mejladress eller arbetsgivare.

```import live-example
FTextFieldLiveExample.vue
```

Ett inmatningsfält har alltid en {@link FLabel etikett} som beskriver vad användaren ska fylla i. Etiketten kan också visa ett felmeddelande, en formatbeskrivning och en hjälptext.

Ett inmatningsfält kan användas för inmatning som inte kräver något särskilt format, till exempel ett personnamn, och för inmatning enligt specifika format som mejladresser och personnummer. Använd något av de {@link textfield-specialized specialiserade inmatningsfälten} eller skapa ett eget inmatningsfält med utvalda validatorer och regler.

Tänk på följande om du ska använda ett inmatningsfält utan något särskilt krav på formatet, till exempel ett fält för ett personnamn:

-   Ange en maxgräns för antal tecken, se {@link length-validation längdvalidering}.
-   Du behöver troligtvis hindra att användaren matar in otillåtna tecken genom att använda {@link validators validatorn för otillåtna tecken}.

Använd inte inaktiva komponenter, bland annat då de är svåra att uppfatta för användare med skärmläsare.

## Validering

Ett inmatningsfält kan visas med två statusar: neutral och fel. Innehållet i ett inmatningsfält valideras när användaren lämnar fältet. Information om felaktig inmatning visas med etikettens feltext. Ett inmatningsfält kan ha en eller flera validatorer.

{@link validation Läs mer om validering}

## Formatering och parsning

Formatering används för att göra det lättare för användaren att läsa texten i ett inmatningsfält. Parsning används för att ändra på det som faktiskt hanteras och skickas in. Till exempel kan formatering lägga till ett mellanslag som tusenavdelare i ett inmatat belopp medan parsning ser till att beloppet hanteras som ett tal och inte som text med ett mellanslag. Både formatering och parsning görs när användaren lämnar inmatningsfältet och efter att innehållet är validerat och godkänt.

{@link formatter-parser Läs mer om formatering och parsning}

## Typer av inmatningsfält

Utöver ett generellt inmatningsfält för text finns det flera färdigbyggda specialiserade inmatningsfält. Det är till exempel mejladress och personnummer. Ett sådant inmatningsfält har redan alla nödvändiga validatorer, ett tak för antal tecken, input mode för att rätt tangentbord ska visas på en mobil samt regler för formatering och parsning.

Om användaren ska ange ett datum där det måste finnas en möjlighet att välja en dag i en kalender ska du använda komponenten {@link FDatepickerField datumväljare}.

{@link textfield-specialized Läs mer om specialiserade inmatningsfält}

## Inline

Etiketten och inmatningsfältet ska bara placeras på samma rad (inline) om fältet inte har någon validering och om det inte behövs någon hjälptext, formatbeskrivning eller felmeddelande. Inline passar till exempel bra för sök och fritextfilter.

## Responsiva bredder

Etiketten och inmatningsfältet kan ha olika bredd. När etikettens text radbryts behöver alltså inte vara kopplat till hur brett inmatningsfältet i sig är.

Bredden för respektive del anges med antal kolumner vid olika skärmbredder (brytpunkter).

```import test-id=grid
FTextFieldGrid.vue
```

## API

:::api
vue:FTextField
:::

## Relaterat

{@link FLabel Etikett}

{@link formatter-parser Formatering och parsning}

{@link textfield-specialized Specialiserade inmatningsfält}

{@link validation Validering och felhantering}
