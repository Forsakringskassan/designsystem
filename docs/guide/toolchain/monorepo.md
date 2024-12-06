---
title: Monorepo
layout: content-with-menu
sortorder: 2
---

Källkoden för FKUI är strukturerad i ett monorepo.
Det innebär att vi från ett och samma repo levererar flera leverabler (paket), dess versionsnummer är i synk med varandra samt att vi snabbt kan testa ändringar som slår över flera paket.

Så här jobbar vi i monorepo

## Versioner

I FKUI så är använder vi [semantisk versionshantering][semver] och versioner som är i synk med varandra.
Det innebär att konsumenten vet att om man har version X.Y (exempelvis v5.1) av samtliga FKUI-paket så är de testade tillsammans och fungerar de alltid ihop.

- Major versioner innehåller alltid brytande ändringar, oftast innebär detta att kodförändringar krävs men även förändrat SLA (exempelvis att IE11 stöd togs bort) innebär en brytande ändring.
- Minor versioner innehåller nya features men inget som kräver förändringar hos konsumenten, alla ändringar är bakåtkompertibla. Uppstår det trots allt förändringar som kräver ändringar ska detta ses som en bugg.
- Patch versioner innehåller enbart buggrättningar och här kan olika paket få olika patch-versioner, exempelvis 5.1.0 och 5.1.2 fungerar fortfarande ihop.

Versioner hanteras automatiskt vid release utifrån commitmeddelanden.

- Läs mer om [releasehantering](#release).
- Läs mer om [commitmeddelanden](#commits).

[semver]: https://semver.org/

## Katalogstruktur

I FKUI så använder vi följande katalogstruktur:

```
(root)
├── cypress
├── docs
├── etc
├── internal
│   ├── pkg-a
│   └── pkg-b
├── packages
│   ├── pkg-c
│   └── pkg-d
└── scripts
```

där:

- `cypress` innehåller konfiguration och gemensamma E2E testfall. Läs mer om [testfall](#testfall).
- `docs` innehåller dokumentation och innehåll för denna siten. Läs mer om [dokumentation](#dokumentation).
- `etc` innehåller automatgenererade API deklarationer och manifest. Läs mer om [byggscript](#byggscript).
- `internal` innehåller interna paket, paket som inte publiceras extern men kan användas av andra paket.
- `packages` innehåller publika paket, paket som publiceras och kan användas av konsumenter.
- `scripts` innehåller gemensamma script för byggen och underhåll av repository.

Namnsättningen för paket i `internal` och `packages` är att katalogens namn ska motsvara namnet i `package.json` utan scope, dvs om paketet har namnet `@fkui/foo-bar` ska katalogen ha namnet `foo-bar`.
Varje paket innehåller en egen `package.json` där paketets metadata, script och beroenden definieras.

Det mesta av utvecklingsarbetet sker i `packages`.

## NPM script

TODO: ändra "kommando" till "script"

Vi kör primärt alla kommandon direkt från root, endast i undantagsfall anropar vi något från en djupare katalog.

Många kommandon kan köras för hela monorepot direkt:

- `npm install` / `npm ci`: installerar beroenden för samtliga paket.
- `npm test` kör enhetstester, statisk kodanalys och lintning.
- `npm run build` bygger samtliga paket.
- `npm exec cypress open` startar cypress.

### NPM Install

Vi kör alltid [`npm install`][npm-install] (eller det besläktade [`npm ci`][npm-ci]) från root i monorepot.
Det kan orsaka problem i din miljö om du försöker köra `npm install` från en underkatalog (framförallt så bryts symlänkar till andra paket i monorepot och man jobbar därför mot gamla kopior och inte mot den faktiska koden i monorepot).
Senare version av `npm install` känner av att det körs från en underkatalog och agerar som att du hade kört från root men vi rekommenderar att alltid ha som vana att köra alla kommandon från root speciellt kommandon så som `npm install` som kan orsaka problem.

I ett monorepo kan det finnas flera `node_modules` kataloger.
`npm install` kommer försöka att lägga alla beroenden i rootens `node_modules` (deduplication) men om det uppstår konflikter i versioner mellan två paket i monorepot kan den skapa upp djupare `node_modules` kataloger exempelvis `packages/vue/node_modules`.
Det kan exempelvis se ut så här:

```
(root)
├── node_modules
│   ├── dep-a
│   ├── dep-b                 # dep-b v1
│   └── dep-c
└── packages
    └── vue
        └── node_modules
            └── dep-b         # dep-b v2
```

När vi i koden använder `require` eller `import` så kommer både paketets egna `node_modules` och rootens `node_modules` katalog att användas.
(Rent tekniskt letar `require` och `import` rekursivt i filsystemet efter alla `node_modules` kataloger den kan nå.)

I rootens `node_modules` kommer också symlänkar mot monorepots paket skapas upp.

```
(root)
└── node_modules
    └── @fkui
        ├── logic -> packages/logic
        └── vue -> packages/vue
```

Detta möjliggör för `require` och `import` att hitta paketen trots att de egentligen inte är installerade och att de alltid pekar ut det som ligger i monorepot istället för föregående släppt version.

> Notera: symlänken pekar bara ut var i monorepot paketet finns. För att paketet ska kunna importeras med `require` eller `import` måste paketet också byggas (så leverabler i respektive `lib` katalog skapas). Läs mer om att {@link byggscript bygga paket}.

För utvecklingsmiljöer använder vi primärt [`npm install`][npm-install].
Den behåller de existerande `node_modules` katalogerna och installerar det som är nytt samt att den uppdaterar `package-lock.json` om den inte är i synk med `package.json`.

För CI-miljöer eller om man vill säkerställa att man har en ren miljö använder vi [`npm ci`][npm-ci] (clean install).
Skillnaden mot `install` är att `ci` tömmer existerande `node_modules` och undviker att beräkna om beroendeträdet genom att enbart läsa `package-lock.json`.

`npm install` används också för att installera nya beroenden.
Läs mer om att {@link pakethantering#beroenden installera beroenden}.

### Workspaces

Eftersom många kommandon tar relativt långt tid att köra är det ofta fördelaktigt att köra det för ett enskilt paket.
Med `npm run --workspace PAKET` (kort `-w`) kan vi anropa script för ett eller flera paket exempelvis:

```bash
npm run -w @fkui/vue build
```

> OBS! Vid byggen av individuella paket har vi ingen automatiskt detektering av att dess beroenden är byggda. De paketeten behöver byggas först eller så måste ett fullständigt bygge göras.

Det går också att köra script för alla paket med `--workspaces` (kort `-ws`, notera plural).
Detta kan med fördel kombineras med `--if-present` som enbart kör scriptet om det finns definierat i paketets `package.json`.

```bash
npm run -ws --if-present unit
```

Både `--workspace` och `workspaces` kan användas för de flesta NPM kommandon, bland annat:

- `npm install -w @fkui/logic foobar`: installerar beroendet `foobar` i `@fkui/logic`.
- `npm test -w @fkui/date`: kör testfall för `@fkui/date`.
- `npm start -w @fkui/vue`: startar utvecklingsmiljö för `@fkui/vue`.
- osv

Om än både `npm run test` och `npm run start` fungerar använder vi med fördel dess alias `npm test` samt `npm start`.

### Parametrar

Behöver man ange extra parametrar till något script måste man använda `--` före parametrar:

```bash
npm run unit -w @fkui/vue -- --no-coverage -u
```

Utan `--` kommer parametrarna att skickas till `npm run` istället för det kommando som anropas av scriptet.

### Exec

Vissa NPM paket (beroenden) kommer med egna körbara script.
Dessa kan köras med hjälp av [`npm exec`][npm-exec] eller [`npx`][npx].

```bash
npm exec cypress open
```

`cypress` är namnet på scriptet och resten av raden är CLI argumenten till scriptet.
Notera att precis som med parametrar till `npm run` måste parametrar med `--` föregås av ett extra `--`.

### Lerna

Vi använder [Lerna][lerna] för vissa operationer så som `npm run build` för att köra kommandon som kräver att paketen hanteras i topologisk ordning.

> Topologisk ordning: paketen bygger upp en riktad graf där noderna sorteras utifrån den ordning noderna måste besökas för alltid ha besökt dess beroenden innan sig själv.

[lerna]: https://lerna.js.org/

Exempelvis så är `npm run build` implementerat som:

```json
{
    "scripts": {
        "build": "lerna run build"
    }
}
```

För att köra motsvarande med CLI:

```bash
npm exec lerna run build
```

Båda motsvarar då `npm run --workspaces build` fast garanterar att `build` anropats i en ordning som garanterar att beroenden byggts först.

## Commits

I FKUI använder vi commits som grund till både Changelog och för att automatiskt bestämma vilken nästkommande version blir.

Läs mer om hur [Changelog genereras från commits](#changelog).

Commitmeddelanden använder en modifierad variant av [Conventional Commits][conventional-commits] där skillnaden är att vi kräver en Jira-referens i slutet:

[conventional-commits]: https://www.conventionalcommits.org/en/v1.0.0/

> ${type}: ${description} (${relation} ${jira})

där:

- `${type}` är vilken typ av commit, vanligtvis `fix` eller `feat`.
- `${description}` är en kort summering av commit.
- `${relation}` är hur commit relaterat till en Jira, `refs` eller `fixes`.
- `${jira}` är den Jira som commit relaterar till.

Scope sätter vi enbart i undantagsfall då det populeras automatiskt i Changelog.
Vanligt undantag är `chore(deps)` för beroenden, `chore(release)` för releaser samt `refactor(${verktyg})` och `style(${verktyg})`.

<details style="border: 2px solid #eee; padding: 1.5rem; margin-bottom: 1rem;">
<summary style="cursor: pointer;">Tillgängliga typer</summary>

De <code>${type}</code> vi använder är:

- `fix` för buggrättningar.
- `feat` för nya features.
- `build` för ändringar av byggscript.
- `chore(deps)` för beroenden.
- `chore(release)` för releaser (ej manuellt).
- `chore` bör undvikas men tillåts för commits som inte passar in under andra typer.
- `ci` för ändringar av CI/CD-script.
- `docs` för ändringar av dokumentation.
- `style` för kosmetiska ändringar som ej påverkar konsumenter (dvs ej visuellt utseende).
- `refactor` för refaktorisering av kod som ej påverkar konsumenter.
- `perf` för ändingar som förbättrar prestanda men ej annars påverkar konsumenter.
- `test` för ändringar eller tillägg av testfall.

</details>

Ett bra commitmeddelande ska:

- Beskriva vilken komponent eller funktion den berör. Skriv "add new prop `foo` on component `FBar`" istället för `"add new prop"` eller "add new prop `foo`" eftersom läsaren inte känner till sammanhanget.

<div class="row">
<div class="col col--md-6">

::: info Bra meddelande

- feat: add new prop `foo` on component `FBar`
- fix: fix styling issue when clicking on `FBaz`

:::

</div>
<div class="col col--md-6">

::: danger Undvik

- feat: add new prop
- fix: fix styling

:::

</div>
</div>

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

## Changelog

Changelog genereras automatiskt med [conventional-changelog][conventional-changelog] vid release.
Konfigurationen kommer från [@forsakringskassan/semantic-release-config][semantic-release-config-changelog].

Changelogen genereras utifrån en filtrerad lista med commits från föregående release.
De commits som tas hänsyn till är commits där commitmeddelande använder:

- Type `feat` (ny feature).
- Type `fix` (buggrättning).
- Type `perf (prestandaförbättring).
- Type `revert` (revert av tidigare commit).
- Commits som innehåller brytande ändringar. Läs mer om [brytande ändringar](#brytande-ändringar).

Övriga commits visas ej i changelog.

Den filtrerade listan grupperas därefter efter typ:

1. Brytande ändringar
2. Features
3. Buggrättningar

Exempelvis om vi har följande lista med commits sen föregående release:

```
fix: fix bug in component A (fixes XYZ-1234)
feat: new component B (refs XYZ-4321)
refactor: rewrite component C (refs XYZ-2345)
fix: fix another bug in component A (fixes XYZ-5432)
```

Efter filtrering kommer listan reduceras till:

```
fix: fix bug in component A (fixes XYZ-1234)
feat: new component B (refs XYZ-4321)
fix: fix another bug in component A (fixes XYZ-5432)
```

Scope, om det inte explicit är satt, fylls i automatiskt:

```
fix(@fkui/vue): fix bug in component A (fixes XYZ-1234)
feat(@fkui/design,@fkui/vue): new component B (refs XYZ-4321)
fix(@fkui/logic): fix another bug in component A (fixes XYZ-5432)
```

Efter gruppering kommer listan transformerats till:

```
feat:
  - feat(@fkui/design,@fkui/vue): new component B (refs XYZ-4321)

fix:
  - fix(@fkui/vue): fix bug in component A (fixes XYZ-1234)
  - fix(@fkui/logic): fix another bug in component A (fixes XYZ-5432)
```

och utifrån det genereras följande nya rader i Changelog:

```md
## v1.2.3 (1999-12-31)

### Features

- **@fkui/design**, **@fkui/vue**: new component B (refs XYZ-4321)

### Bug fixes

- **@fkui/vue**: fix bug in component A (fixes XYZ-1234)
- **@fkui/logic**: fix another bug in component A (fixes XYZ-5432)
```

Kom ihåg att om du använder squash merge för att merga din Pull Request så måste du skriva ett nytt commit-meddelande (i korrekt [format](#commits)), använd inte det commitmeddelande som föreslås som default.

[conventional-changelog]: https://github.com/conventional-changelog/conventional-changelog
[semantic-release-config-changelog]: https://github.com/Forsakringskassan/semantic-release-config/blob/main/packages/semantic-release-common/lib/changelog.js

## Release

Vi använder [Semantic Release][semantic-release] med [`semantic-release-lerna`][semantic-release-lerna] för att hantera releaser.

Semantic release tar hand om:

- Välja ut nästa versionsnummer utifrån de commits som skapats sen föregående release.
- Uppdatera `package.json` filer med nytt versionsnummer, inklusive beroenden mellan paket.
- Vid behov, bygga om leverabler (leverabler som är beroende av ett uppdaterat versionsnummer).
- Uppdatera Changelog.
- Skicka ut announcement till chatt "Ny release v1.2.3".
- Publicera NPM-paket som ändrats sen föregående release, inklusive dependee paket.
- Skapa tag i Git.

Semantic release är konfigurerat med `@forsakringskassan/semantic-release-monorepo-config`, vars konfiguration ger:

- Versioner är latched på minor-versioner, dvs alla paket kommer alltid ha samma major och minor men patch tillåts ändras.
- Nästkommande version använder `fix` för patch, `feat` för minor och breaking för major.
- Vilka commits som är relevanta att visa i changelog och vilket stycke.

Semantic release inspekterar taggar för att avgöra vilken den företående versionen är.

Vi går emot semantic release rekommendation och kör inte semantic-release vid varje commit på branchen utan vi triggar manuellt ett CI-jobb som kör semantic-release.
Motiveringen är att vårat arbetsflöde i git inte fungerar väl med att släppa löpande varje commit samt att det finns visst manuellt arbete som behöver utföras.

Läs mer om releaseprocess.

I FKUI använder vi `master` som primär branch och vanliga releaser utgår från den branchen.

[semantic-release]: https://semantic-release.gitbook.io/semantic-release
[semantic-release-lerna]: https://github.com/ext/semantic-release-lerna/

### Maintenance releaser

Semantic release är konfigurerat att utöver `master` tillåta releaser från brancher likt `release/N.x` (exempelvis `release/4.x`).
Det innebär att major versionen kommer vara v4.
Det är viktigt att behålla branchen efteråt om man vill släppa fler releaser, behåller man inte den är det viktigt att senaste git taggen används när man skapar om branchen annars får man konflikter i versioner.

## Git hooks

Vi använder `husky` för att hantera git hooks, i `.husky` katalogen hittar du uppsättningen hooks som används.

- `commit-msg` anropar `commitlint` för att validera formatet på commitmeddelande. Läs mer om commitlint.
- `pre-commit` anropar `lint-staged` för att automatiskt korrigera formatering med prettier samt korrigera eslint fel. Läs mer om statisk kodanalys.

## VSCode

Vi använder Volar (`vue.volar`).

Workspace kommer med en lista med rekommenderade extensions och är förinställd att fungera med dessa.

## CI/CD

:::alt toolchain-cicd

:::

## Underhåll

I `scripts` finns repon lämpliga för diverse underhåll.
Se dokumentation för respektive vad de gör och hur det används.

[npm-install]: https://docs.npmjs.com/cli/v10/commands/npm-install
[npm-ci]: https://docs.npmjs.com/cli/v10/commands/npm-ci
[npm-exec]: https://docs.npmjs.com/cli/v10/commands/npm-exec
[npx]: https://docs.npmjs.com/cli/v10/commands/npx
