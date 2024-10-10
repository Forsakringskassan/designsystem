---
title: Commits och commitmeddelanden
layout: article
---

I FKUI använder vi commits som grund till både Changelog och för att automatiskt bestämma vilken nästkommande version blir.

Läs mer om hur [Changelog genereras från commits](#changelog).

Commitmeddelanden använder en modifierad variant av [Conventional Commits][conventional-commits] där skillnaden är att vi kräver en Jira-referens i slutet:

[conventional-commits]: https://www.conventionalcommits.org/en/v1.0.0/

> ${type}: ${description} (${relation} ${jira})

där:

-   `${type}` är vilken typ av commit, vanligtvis `fix` eller `feat`.
-   `${description}` är en kort summering av commit.
-   `${relation}` är hur commit relaterat till en Jira, `refs` eller `fixes`.
-   `${jira}` är den Jira som commit relaterar till.

Scope sätter vi enbart i undantagsfall då det populeras automatiskt i Changelog.
Vanligt undantag är `chore(deps)` för beroenden, `chore(release)` för releaser samt `refactor(${verktyg})` och `style(${verktyg})`.

<details style="border: 2px solid #eee; padding: 1.5rem; margin-bottom: 1rem;">
<summary style="cursor: pointer;">Tillgängliga typer</summary>

De <code>${type}</code> vi använder är:

-   `fix` för buggrättningar.
-   `feat` för nya features.
-   `build` för ändringar av byggscript.
-   `chore(deps)` för beroenden.
-   `chore(release)` för releaser (ej manuellt).
-   `chore` bör undvikas men tillåts för commits som inte passar in under andra typer.
-   `ci` för ändringar av CI/CD-script.
-   `docs` för ändringar av dokumentation.
-   `style` för kosmetiska ändringar som ej påverkar konsumenter (dvs ej visuellt utseende).
-   `refactor` för refaktorisering av kod som ej påverkar konsumenter.
-   `perf` för ändingar som förbättrar prestanda men ej annars påverkar konsumenter.
-   `test` för ändringar eller tillägg av testfall.

</details>

Ett bra commitmeddelande ska:

-   Beskriva vilken komponent eller funktion den berör. Skriv "add new prop `foo` on component `FBar`" istället för `"add new prop"` eller "add new prop `foo`" eftersom läsaren inte känner till sammanhanget.

::: info Bra meddelande

-   feat: add new prop `foo` on component `FBar`
-   fix: fix styling issue when clicking on `FBaz`

:::

</div>
<div class="col col--md-6">

::: danger Undvik

-   feat: add new prop
-   fix: fix styling

:::

Läs mer om [brytnade ändringar](#brytande-andringar).

Vi använder [Commitlint][commitlint] för att upprätthålla formatet på commitmeddelanden.
Commitlint anropas från git `commit-msg` hook (via `husky` från `.husky/commit-msg`) och är konfigurerat med att använda [`@forsakringskassan/commitlint-config`][commitlint-config].

Läs mer om [git hooks](#git-hooks).

[commitlint]: https://commitlint.js.org/
[commitlint-config]: https://github.com/Forsakringskassan/commitlint-config

Om det behövs kan man kringgå `commitlint` med `--no-verify`:

```bash
git commit --no-verify -m 'non-conforming message'
```

För feature-branches rekommenderar vi detta arbetsflödet för dina commits:

1. För varje distinkt feature eller buggrättning, skapa en specifik och fristående commit (tänk på det som att den skulle gå att lägga en egen PR och mergas separat från övriga commits i din branch). Denna commit ska använda `feat` eller `fix` som type.
2. Behöver du bygga vidare på en tidigare commit (i din branch) kan du antingen använda `git commit --fixup` eller skapar en ny commit med `refactor` som type.
3. Innan det är dags för merge gör du en sista rebase över master där du slår ihop lämpliga commits, framförallt fixups men även de commits som använder `refactor` (var syfte inte är att göra en refaktorisering av kod som inte skapats i denna branch).
