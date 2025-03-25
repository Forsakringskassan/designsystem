---
title: På gång
name: release-plan
layout: pattern
---

## Nyligen släppt

I release [6.3.0](https://github.com/Forsakringskassan/designsystem/releases/tag/v6.3.0) infördes bland annat följande uppdateringar:

- nytt paket `@fkui/tsconfig` med rekommenderad konfiguration för TypeScript och FKUI. Läs mer om {@link tsconfig}.
- inmatningsfält (FTextField) hanterar `null` som modellvärde.
- uppdaterarar av {@link FPageLayout} och relaterade komponenter (fortfarande i beta).
- diverse buggrättningar.

I release [6.2.0](https://github.com/Forsakringskassan/designsystem/releases/tag/v6.2.0) infördes bland annat följande uppdateringar:

- {@link news#beta-version-ny-applikationslayout betaversion} av nya komponenter för applikationslayout.
  Observera att de inte går att använda förrän de ligger i status produktionsklar.
- diverse buggrättningar.

Vi har också nyligen släppt release [6.0.0](https://github.com/Forsakringskassan/designsystem/releases/tag/v6.0.0) med bland annat följande uppdateringar:

- Vi har tagit bort stöd för containermanéret då det inte uppfyller krav på tillgänglighet.
  De relaterade komponenterna formulär (FForm), formulärsteg (FFormStep) har tagits bort.
- Modal (FModal): Knappordningen är ändrad i modaler så att den sekundära knappen ligger före den primära knappen.
  Anledningen är att användare inte ska ändra något av misstag, till exempel ta bort något.
- Kryssruta och radioknapp: De gamla grupperingskomponenterna för kryssruta och radioknapp har tagits bort, använd istället {@link migrating-to-fieldset FFieldset}.
- Sidhuvud (FPageHeader): Komponenten innehåller inte längre länk eller logotyp som standard.
- Ett antal andra funktioner, typer och komponenter är också borttagna.
- Pageobject: Ett antal deprekerade metoder är borttagna (bland annat trimmedText()).
- Valideringsservice: Den deprekerade validatorn personnummer är borttagen, använd istället validatorerna personnummerFormat och personnummerLuhn.
- Tema och variabler: Designsystemet tillhandahåller nu endast ett tema.
  Som konsument finns det fortfarande möjlighet att själv tillhandahålla specifika tillämpningar.
- Formatbeskrivning etikett: Klassnamnet för formatbeskrivning på etikett är ändrat.

## Pågående arbete

- Fortsatt uppdatering av semantiska tokens för färger.
  Det är en förutsättning för att kunna ha dark mode, men underlättar framför allt för dig som vill sätta eget tema eller ändra på specifika variabler.
- Uppdatering av komponenter för applikationslayout.
  På sikt kommer dagens komponenter för applikationslayout ({@link application-layout applikationsmall}, {@link application-layout#hogeryta högeryta} och {@link application-layout#vansteryta vänsteryta}) ersättas med nya.
  De nya komponenterna kommer vara mer flexibla, till exempel kan du fylla en yta med valfritt innehåll oberoende var den ligger.
  Till att börja med kommer ett antal olika varianter av layouter släppas.
- Möjlighet för användare att snabbt kunna byta till annat år i kalender.
- Genomlysning av komponent tabell. Vi kommer rätta buggar, uppdatera dokumentation och lägga till mindre förbättringar för tabell.

## Planerat arbete

Kommande arbete som vi planerar:

- omskrivning av valideringsservice
- uppdatera och förbättra prioriterade komponenter.

## Framtid

Framtidssäkra designsystemet, till exempel genom att göra webbkomponenter.

## Sammanställning releaser

<div class="support-table">
    <table class="table" aria-labelledby="sammanstallning_releaser">
        <thead>
            <tr class="table__row">
                <th scope="col" class="table__column table__column--text ">
                    Version
                </th>
                <th scope="col" class="table__column table__column--text ">
                    Status
                </th>
                <th scope="col" class="table__column table__column--text ">
                    Releasedatum
                </th>
                <th scope="col" class="table__column table__column--text ">
                    Slutdatum
                </th>
                <th scope="col" class="table__column table__column--text ">
                    Innehåll
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="table__row active">
                <td class="table__column table__column--text">v6</td>
                <td class="table__column table__column--text">aktiv</td>
                <td class="table__column table__column--text">2025-02</td>
                <td class="table__column table__column--text"></td>
                <td class="table__column table__column--text">
                    Formulär (FForm) och formulärsteg (FFormStep) borttagna.
                </td>
            </tr>
            <tr class="table__row supported">
                <td class="table__column table__column--text ">v5</td>
                <td class="table__column table__column--text">underhåll</td>
                <td class="table__column table__column--text">2023-09</td>
                <td class="table__column table__column--text">2026-02</td>
                <td class="table__column table__column--text">
                    Uppgradering till Vue 3, datumväljare (FDatepicker)
                    borttagen.
                </td>
            </tr>
            <tr class="table__row obsolete">
                <td class="table__column table__column--text">v4</td>
                <td class="table__column table__column--text">utgått</td>
                <td class="table__column table__column--text">2022-09</td>
                <td class="table__column table__column--text">2024-09</td>
                <td class="table__column table__column--text">
                    Internet Explorer 11 stöds inte längre.
                </td>
            </tr>
            <tr class="table__row obsolete">
                <td class="table__column table__column--text">v3</td>
                <td class="table__column table__column--text">utgått</td>
                <td class="table__column table__column--text">2021-10</td>
                <td class="table__column table__column--text">2023-09</td>
                <td class="table__column table__column--text"></td>
            </tr>
        </tbody>
    </table>
</div>

Status
: **Aktiv**: Vi släpper ny funktionalitet och fixar buggar i releasen.
: **Underhåll**: Vi fixar endast kritiska buggar.
Vanligtvis fixar vi kritiska buggar upp till ett år efter att ny release är släppt.
: **Utgått**: Vi stödjer inte releasen längre och inga uppdateringar sker.

Deprekering
: Förvarning om att komponent eller funktion kommer tas bort. Det sker cirka ett år efter att en komponent eller funktion blivit deprekerad.

Borttagna komponenter
: När komponent tas bort kommer det finnas en rekommenderad ersättningskomponent tillsammans med en migreringsguide.

## Relaterat

{@link news Nyheter}

{@link migrating-to-fieldset Fieldset migreringsguide}

{@link migrating-to-v5 Version 5 migreringsguide}

{@link migrating-to-v6 Version 6 migreringsguide}
