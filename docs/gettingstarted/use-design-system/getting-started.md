---
title: Kom igång
name: getting-started
layout: pattern
sortorder: 1
---

:::alt getting-started-alt.md

## Designer

Designsystemet innehåller {@link components komponenter} och mönster som ska användas oavsett vad du ska designa för.
De ska alltså användas i till exempel e-tjänster, på Mina sidor, i tandvårdsportalen eller i ett internt handläggningsstöd.

På komponentsidorna kan du testa komponenterna och hur du kan anpassa dem för att få önskat beteende. Komponenterna har riktlinjer som hjälper dig med när och hur de kan användas. Om du har ett designproblem som kräver en unik lösning som inte behövs i andra situationer kan du skapa en egen komponent.
Egna komponenter ska helst undvikas.
Försök att hitta ett sätt att kombinera designsystemets komponenter för att lösa problemet.

### Visuellt

Designsystemet har en färgpalett som utgår från Försäkringskassans grafiska profil. Grid-systemet används för att designa responsiva användargränssnitt. Läs mer om {@link theme visuellt}.

### Personuppgifter i skisser och prototyper

Vi använder aldrig våra egna eller andras personuppgifter eller ens egna påhittade personuppgifter när vi designar. Istället använder vi testdata från Skatteverket.

## Utvecklare

Vi rekommenderar att du har följande utvecklingsverktyg

- Git Bash
- NodeJS
- Visual Studio Code.

Installera FKUI-paket. Vanlig uppsättning av paket är:

- `@fkui/date` (datum)
- `@fkui/design` (styling)
- `@fkui/logic` (funktioner)
- `@fkui/theme-default` (standardtema)
- `@fkui/vue` (ramverkspecifika komponenter, plugins)

```bash
npm install @fkui/theme-default @fkui/design @fkui/date @fkui/logic @fkui/vue
```

## Hjälp och support

Behöver du hjälp eller support?
Eller vill du rapportera en bugg?
Har du behov av en ny komponent eller vill du ge ett förbättringsförslag?
Vill du bidra till designsystemet eller FKUI?

{@link help-and-support Läs mer här om hjälp och support}
:::
