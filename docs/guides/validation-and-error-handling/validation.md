---
title: Validering och felhantering
layout: pattern
sortorder: 1
---

Vi hjälper användarna att fylla i uppgifter i ett formulär på rätt sätt genom att vi validerar uppgifterna och visar tydliga felmeddelanden vid rätt tillfälle.

Innehållet i ett {@link FTextField inmatningsfält} valideras när användaren lämnar fältet, till exempel genom att tabba vidare till nästa.
Om ett fel upptäcks markeras fältet som felaktigt och användaren informeras om felet med {@link FLabel etikettens} felmeddelanden.
I {@link FLabel#feltexter_i_etiketten Feltexter i etiketten} kan du se hur vi skriver feltexter.

Exempel på när fel ska visas:

-   Användaren har fyllt i ett felaktigt tecken.
-   Ett inmatat postnummer matchar inte med någon ort.

Vi visar fel först när användaren lämnar fältet eftersom vi inte vill avbryta användaren med ett felmeddelande innan hen anser sig vara klar med att fylla i uppgifter i fältet.

Fel om obligatoriska fält som lämnas utan att vara ifyllda visas först när användaren försöker skicka in formuläret.

Felaktiga tecken eller värden ligger alltid kvar efter valideringen.

```import
FValidationFormDefault.vue
```

## Obligatoriska fält

Vi visar inte användaren vilka fält som måste fyllas i.
Istället visar vi användaren vilka fält som är valfria.
Utgångspunkten är att vi bara frågar efter information som vi behöver.

Etikettrubriken till ett valfritt fält avslutas med till exempel "(Frivillig)" eller "(Valfritt)".

Ett obligatoriskt fält som inte är ifyllt visas som felaktigt först när användaren försöker skicka in formuläret.
Det här underlättar för skärmläsaranvändare som ofta har för vana att tabba igenom formulär för att skapa sig en överblick innan de fyller i några uppgifter.

En formulärskomponent markeras som obligatorisk med `v-validation.required`.

## Submit-knappen

Användaren ska alltid kunna trycka på ett formulärs submit-knapp, oavsett om ett formulär innehåller fel eller inte.
Submit-knappen ska aldrig vara inaktiv.
Formuläret valideras när användaren trycker på submit-knappen eller på ENTER.

Det finns två alternativ för hur fel i ett formulär kan visas när användaren ha tryckt på submit-knappen:

-   Fokus flyttas till den första formulärskomponenten med fel eller saknade uppgifter.
-   En {@link FErrorList fellista} med ankarlänkar till varje fält med fel visas ovanför formuläret. Fellistan får automatiskt fokus.

I formulär med några få komponenter rekommenderas det att fokus flyttas direkt till första formulärskomponenten.
För stora formulär bör du använda en fellista.

## Komponenten valideringsformulär

Som standard ska du använda komponenten {@link FValidationForm valideringsformulär} för alla typer av formulär.
Komponenten ger önskat beteende och funktioner för validering av formulär, till exempel:

-   Som standard används en {@link FErrorList fellista} men den kan stängas av.
-   Stöd för backend-validering.
-   Fokushantering när användaren försöker skicka in ett formulär med fel.

## Validatorer

En inmatningskomponent kan ha en eller flera validatorer.
Validering görs i den ordning som validatorerna ligger i, vilket innebär att felmeddelandet för den första validatorn som är ogiltig visas.
En kombination av två validatorer kan resultera i ett specifikt felmeddelande.

Designsystemet inkluderar inmatningsfält för vanliga format som mejladresser och personnummer.
Använd något av de {@link textfield-specialized specialiserade inmatningsfälten} eller skapa ett eget inmatningsfält med de {@link validators validatorer} och {@link formatter-parser regler för formattering och parsning} som finns i designsystemet.

Du kan skapa en {@link custom-validator egen validator} om din applikation kräver inmatning av uppgifter som följer ett format som designsystemet inte har någon validator för.

## Relaterat

{@link validators Validatorer}

{@link custom-validator Validator - anpassad}

{@link length-validation Längdvalidering}

{@link cross-validation Korsvalidering}

{@link ValidationPlugin ValidationPlugin}
