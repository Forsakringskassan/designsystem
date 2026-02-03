---
title: Commits och commitmeddelanden
layout: article
---

I FKUI använder vi commits som grund till både Changelog och för att automatiskt bestämma vilken nästkommande version blir.
Du skriver commitmeddelandet på engelska och det får max innehålla 72 tecken.

Commitmeddelanden använder en modifierad variant av [Conventional Commits][conventional-commits] där skillnaden är att vi kräver en Jira-referens i slutet:

[conventional-commits]: https://www.conventionalcommits.org/en/v1.0.0/

    ${type}: ${description} (${relation} ${jira})

där:

- `${type}` är vilken typ av commit, vanligtvis `fix` eller `feat`.
- `${description}` är en kort summering av commit.
- `${relation}` är hur commit relaterat till en Jira, `refs` eller `fixes`.
- `${jira}` är den Jira som commit relaterar till.

Skriv till exempel:

``feat: new component `FFoobar` (fixes XYZ-123)``

Du sätter scope enbart i undantagsfall då det populeras automatiskt i Changelog.
Vanligt undantag är `chore(deps)` för beroenden, `chore(release)` för releaser samt `refactor(${verktyg})` och `style(${verktyg})`.

## Typ

Den viktigaste beståndsdelen är `type` som används för att avgöra om commitmeddelandet ska visas i changelog samt om det ska användas för att skapa en release.

De vanligaste två är `feat` (ny funktionallitet) och `fix` (rättning av existerande funktionallitet).
Andra vanliga är `docs` (ändring enbart av dokumentation) och `refactor` (interna förändringar som inte påverkar konsument).

::: details Tillgängliga typer

| Typ              | Release | Changelog | Beskrivning                                                                         |
| ---------------- | ------- | --------- | ----------------------------------------------------------------------------------- |
| `fix`            | Patch   | Ja        | Rättning av existerande funktionallitet eller komponent                             |
| `feat`           | Minor   | Ja        | Ny funktionallitet eller komponent.                                                 |
| `build`          | -       |           | Ändringar av byggscript.                                                            |
| `chore(deps)`    | -       |           | Ändringar av beroenden.                                                             |
| `chore(release)` | -       |           | Release (ej manuellt, används för automatiska releaser).                            |
| `chore`          | -       |           | Bör undvikas men tillåts för commits som inte passar in under andra typer.          |
| `ci`             | -       |           | Ändringar av CI/CD-script.                                                          |
| `docs`           | -       |           | Ändringar av dokumentation.                                                         |
| `style`          | -       |           | Kosmetiska ändringar av kod som ej påverkar konsumenter, exempelvis kodformatering. |
| `refactor`       | -       |           | Refaktorisering av kod som ej påverkar konsumenter.                                 |
| `perf`           | Patch   | Ja        | Ändringar som förbättrar prestanda men ej annars påverkar konsumenter.              |
| `test`           | -       |           | Ändringar eller tillägg av testfall.                                                |

:::

Läs mer om {@link release#brytande_andringar brytande ändringar}.

## Tumregler

Ett bra commitmeddelande ska:

- Beskriva vilken eller vilka komponenter eller funktioner som berörs.
  Skriv "add new prop `foo` on component `FBar`" istället för `"add new prop"` eller "add new prop `foo`" eftersom läsaren inte känner till sammanhanget.
- Undvika att benämna ramverkskomponenter ("i-komponenter") utan skriv istället de publika komponenter ("f-komponenter") som påverkas av ändringen.

Exempel på bra meddelande:

- feat: add new prop `foo` on component `FBar` (refs XYZ-123)
- fix: fix styling issue when clicking on `FBaz` (fixes XYZ-123)

Undvik:

- feat: add new prop (refs XYZ-123)
- fix: WIP (fix XYZ-123)

## Commitlint

Vi använder [Commitlint][commitlint] för att upprätthålla formatet på commitmeddelanden.
Commitlint anropas från git `commit-msg` hook (via `husky` från `.husky/commit-msg`) och är konfigurerat med att använda [`@forsakringskassan/commitlint-config`][commitlint-config].

[commitlint]: https://commitlint.js.org/
[commitlint-config]: https://github.com/Forsakringskassan/commitlint-config

Om det behövs kan du kringgå `commitlint` med `--no-verify`:

```bash
git commit --no-verify -m 'non-conforming message'
```

## Arbetsflöde

För feature-branches rekommenderar vi detta arbetsflödet för dina commits:

1. För varje distinkt feature eller buggrättning, skapa en specifik och fristående commit (tänk på det som att den skulle gå att lägga en egen PR och mergas separat från övriga commits i din branch).
   Denna commit ska använda `feat` eller `fix` som type.
2. Behöver du bygga vidare på en tidigare commit (i din branch) kan du antingen använda `git commit --fixup` eller skapa en ny commit med `refactor` som type.
3. Innan det är dags för merge gör du en sista rebase över master där du slår ihop lämpliga commits, framförallt fixups.
   Slå även ihop commits av typen `refactor` som avser refaktorisering av kod som tillkommit i din branch.
