---
title: Formaterare och parsers
layout: component
---

Formatering används för att göra det lättare för användaren att läsa texten i ett inmatningsfält. Parsning används för att ändra på det som faktiskt hanteras och skickas in. Till exempel kan formatering lägga till ett mellanslag som tusenavdelare i ett inmatat belopp medan parsning ser till att beloppet hanteras som ett tal och inte som text med ett mellanslag. Både formatering och parsning görs när användaren lämnar inmatningsfältet och efter att innehållet är validerat och godkänt.

## Bankgiro (parser)

`parseBankgiro`

Parsern för bankgiro tolkar vy-värdet genom att ändra så att modell-värdet blir

-   NNN-NNNN om längden är sju tecken
-   NNNN-NNNN om längden är åtta tecken.

## Clearingnummer (formaterare)

`formatClearingNumberForBackend`

Formateraren för clearingnummer tar bort sista siffran om clearingnumret innehåller fem siffror.

## Clearingnummer (parser)

`parseClearingNumber`

Parsern för clearingnummer tolkar vy-värdet genom att ändra så att modell-värdet blir

-   NNNN om antalet siffror är fyra
-   NNNN-N om antalet siffror är fem.

## Datum (parser)

`parseDate`

Parsern för datum tolkar vy-värdet genom att ändra så att modell-värdet får formatet ÅÅÅÅ-MM-DD.

Exempel

-   20211220 -> 2021-12-20

## Kontonummer (parser)

`parseBankAccountNumber`

Parsern för kontonummer tar bort bindestreck, mellanslag, punkt och komma. Den behåller inledande nollor.

## Nummer (formaterare)

`formatNumber`

Formateraren för nummer formaterar inmatat värde genom att den

-   tar bort inledande nollor
-   sätter tusenavdelare
-   konverterar punkt till komma.

Exempel

-   1000 -> 1 000
-   001000 -> 1 000
-   002.20003 -> 2,2003

## Nummer (parser)

`parseNumber`

Parsern för nummer tolkar vy-värdet så att modell-värdet blir numerisk typ genom att den

-   gör om sträng till numeriskt värde
-   konverterar komma till punkt.

## Organisationsnummer (parser)

`parseOrganisationsnummer`

Parsern för organisationsnummer tolkar vy-värdet så att modell-värdet får formatet NNNNNN-NNNN.

Exempel

-   0123456789 -> 012345-6789

## Personnummer (formaterare)

`formatPersonnummer`

Visar personnummer med 10 siffror enligt [Skatteverkets regler](https://www.skatteverket.se/privat/folkbokforing/personnummer.4.3810a01c150939e893f18c29.html) genom att den

-   tar bort sekelsiffror
-   lägger till bindestreck respektive plustecken.

Exempel

-   19980101-0000 -> 980101-0000
-   18980101-0000 -> 980101+0000

## Personnummer (parser)

`parsePersonnummer`

Parsern för personnummer tolkar vy-värdet så att modell-värdet får formatet ååååmmdd-nnnn.

Exempel

-   199801010000 -> 19980101-0000
-   980101+0000 -> 18980101-0000
-   9801010000 -> 19980101-0000

## Plusgiro (parser)

`parsePlusgiro`

Parsern för plusgiro tolkar vy-värdet så att modell-värdet får

-   bindestreck mellan näst sista och sista siffran
-   grupper med två siffror till vänster om bindestreck.

Vid udda antal siffror till vänster kommer första gruppen innehålla en siffra. Vid jämnt antal siffror till vänster kommer alla grupper innehåll två siffror.

Exempel

-   N-N
-   NN-N
-   N NN-N
-   NN NN-N
-   N NN NN-N

## Postnummer (parser)

`parsePostalCode`

Formaterar inmatat värde till NNN NN.

Exempel

-   12345 -> 123 45

## Procent (formaterare)

`formatPercent`

Formateraren för procent baseras på nummer-formateraren, för beskrivning se [nummer-formaterare](#nummer_formaterare).

## Procent (parser)

`parserPercent`

Parsern för procent baseras på nummer-parsern, för beskrivning se [nummer-parser](#nummer_parser).

## Relaterat

{@link formatter-parser Formatering och parsning}

{@link custom-formatter-parser Formaterare och parser - anpassad}
